// 公開前の検査。node scripts/check.ts で回す（Node 22.18+ は .ts をそのまま読む）。
// 1. ja と en の片方が空の項目を止める
// 2. 「【要記入】」「[TODO]」の残りを止める
// 3. http の外部リンクを止める（https だけ）
// 4. .leakwords（手元だけの語の一覧、git に入れない）があれば、src と dist にその語が無いかを見る
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import * as data from '../src/data/site.ts';

const errors: string[] = [];
const tbd: string[] = [];
const todoMarks = ['【要記入】', '[TODO]'];

function walk(v: unknown, path: string): void {
  if (typeof v === 'string') {
    if (todoMarks.some((m) => v.includes(m))) errors.push(`未記入: ${path}`);
    if (v.includes('TBD')) tbd.push(path);
    if (/^http:\/\//.test(v)) errors.push(`https でない: ${path}`);
    return;
  }
  if (Array.isArray(v)) {
    v.forEach((x, i) => walk(x, `${path}[${i}]`));
    return;
  }
  if (v && typeof v === 'object') {
    const o = v as Record<string, unknown>;
    if ('ja' in o || 'en' in o) {
      for (const l of data.langs) {
        const s = o[l];
        if (typeof s !== 'string' || !s.trim()) errors.push(`${l} が空: ${path}`);
      }
    }
    for (const [k, x] of Object.entries(o)) walk(x, path ? `${path}.${k}` : k);
  }
}

const { ui, hero, chronicle, winds, domains, media } = data;
walk({ ui, hero, chronicle, winds, domains, media }, '');

function files(dir: string): string[] {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? files(p) : [p];
  });
}

if (existsSync('.leakwords')) {
  const words = readFileSync('.leakwords', 'utf8')
    .split(/\r?\n/)
    .map((s) => s.trim())
    .filter((s) => s && !s.startsWith('#'));
  const targets = [...files('src'), ...files('dist'), ...files('public'), 'README.md'].filter(
    (p) => existsSync(p) && /\.(astro|ts|mjs|css|html|xml|txt|md|json|svg)$/.test(p),
  );
  for (const p of targets) {
    const text = readFileSync(p, 'utf8');
    for (const w of words) if (text.includes(w)) errors.push(`公開してはいけない語（${w}）: ${p}`);
  }
  console.log(`leakwords: ${words.length} 語 × ${targets.length} file を検査`);
} else {
  console.log('leakwords: .leakwords が無いので語の検査は飛ばした');
}

if (tbd.length) console.log(`TBD: ${tbd.length} 件（公開は止めない）\n` + tbd.map((p) => `- ${p}`).join('\n'));

if (errors.length) {
  console.error(`検査で ${errors.length} 件:\n` + errors.map((e) => `- ${e}`).join('\n'));
  process.exit(1);
}
console.log('検査: 問題なし');
