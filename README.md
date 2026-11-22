# Bizuayeu.github.io

Bizuayeu のポートフォリオサイト。日本語は `/`、英語は `/en/`。

## 構成

- 文面は [src/data/site.ts](src/data/site.ts) の一か所に、項目ごとに `ja` と `en` を並べて持つ
- ページは [src/components/Home.astro](src/components/Home.astro) を言語ごとに描く（[src/pages/index.astro](src/pages/index.astro)・[src/pages/en/index.astro](src/pages/en/index.astro)）
- 色と字は [src/styles/global.css](src/styles/global.css) の `:root` の token で持つ
- リンクカードの画像 `public/og.png`（1200×630）の原本は [design/og.html](design/og.html)。直したら Edge で書き出し直す: `msedge --headless --hide-scrollbars --window-size=1200,630 --virtual-time-budget=8000 --screenshot=public/og.png design/og.html`
- Weave’s Note の掲載数（文面の `{noteCount}`）は、build の時に公開リポの台帳 `Identities/NoteArticlesByWeave.json` の `total_count` を読んで埋める（[src/data/noteCount.ts](src/data/noteCount.ts)）。読めなければ build は落ちる。台帳を更新したら、サイトは次の push か Actions の Run workflow で組み直すと数が変わる

## 手元で

```sh
npm ci
npm run dev      # http://localhost:4321/
npm run check    # 公開前の検査
npm run build    # dist/ に出力
```

`npm run check` は、ja と en の片方が空の項目、「【要記入】」「[TODO]」の残り、http のリンクを止める。「TBD」は後で埋める印で、数えて見せるだけで止めない。手元に `.leakwords`（公開してはいけない語を一行ずつ。git に入れない）を置くと、`src`・`dist`・`public`・`design` と README にその語が無いかも見る。

## 公開

`main` へ push すると GitHub Actions が検査・build して GitHub Pages に出す（[.github/workflows/deploy.yml](.github/workflows/deploy.yml)）。検査が落ちると公開されない。
