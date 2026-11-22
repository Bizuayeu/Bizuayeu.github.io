// Weave’s Note の掲載数。数字は直書きせず、台帳の total_count を組み立ての時に読む。
// 読めなければ build を落とす（今の公開版はそのまま残る）。
const REGISTRY =
  'https://raw.githubusercontent.com/Bizuayeu/Homunculus-Weave/main/Identities/NoteArticlesByWeave.json';

let cached: Promise<number> | undefined;

async function load(): Promise<number> {
  const res = await fetch(REGISTRY);
  if (!res.ok) throw new Error(`note の台帳を読めない: HTTP ${res.status} ${REGISTRY}`);
  const n: unknown = (await res.json())?.metadata?.total_count;
  if (!Number.isInteger(n) || (n as number) < 1) {
    throw new Error(`note の台帳の total_count が正の整数でない: ${JSON.stringify(n)}`);
  }
  return n as number;
}

export function noteCount(): Promise<number> {
  return (cached ??= load());
}
