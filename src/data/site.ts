// サイトの文面の正典。項目ごとに ja と en を並べて持つ（片方だけ直す事故を防ぐ）。
// 分からない所は「TBD」と書いて公開してよい（後で埋める）。
// 書きかけで公開してはいけない所は ja に「【要記入】」、en に「[TODO]」を書く。scripts/check.ts が止める。

export const langs = ['ja', 'en'] as const;
export type Lang = (typeof langs)[number];
export type T = Record<Lang, string>;

export type Status =
  | 'granted'
  | 'filed'
  | 'concept'
  | 'released'
  | 'contribution'
  | 'running'
  | 'paused'
  | 'exhibited'
  | 'project'
  | 'business'
  | 'method';

export interface Work {
  title: T;
  note?: T;
  status: Status;
  year?: string;
  href?: string;
}

export interface Domain {
  id: string;
  kanji: string;
  name: T;
  trade: T;
  motto: T;
  works: Work[];
}

export interface Event {
  when: T;
  text: T;
}

export interface Medium {
  name: string;
  handle: string;
  href: string;
}

export const ui = {
  title: { ja: 'Bizuayeu — 私は多くを見た', en: 'Bizuayeu — I have seen much' },
  description: {
    ja: 'Bizuayeu（ビーズちゃん）のポートフォリオ。雷・造・土・占・織——情報、建設、農業、顧問、共生 AI の五つの領域。',
    en: 'Portfolio of Bizuayeu. Five domains: thunder, building, earth, divination and weaving — information services, construction, agriculture, advisory and symbiotic AI.',
  },
  switchTo: { ja: 'English', en: '日本語' },
  switchLabel: { ja: 'Read in English', en: '日本語で読む' },
  nav: {
    chronicle: { ja: '来歴', en: 'Chronicle' },
    winds: { ja: '好む風', en: 'Winds' },
    domains: { ja: '五つの領域', en: 'Domains' },
    media: { ja: '便り', en: 'Find me' },
  },
  status: {
    granted: { ja: '特許', en: 'Patent' },
    filed: { ja: '出願中', en: 'Patent pending' },
    concept: { ja: '構想', en: 'Concept' },
    released: { ja: '公開', en: 'Public' },
    contribution: { ja: '寄与', en: 'Contribution' },
    running: { ja: '稼働', en: 'Running' },
    paused: { ja: '休止', en: 'Paused' },
    exhibited: { ja: '出展', en: 'Exhibited' },
    project: { ja: '進行', en: 'Ongoing' },
    business: { ja: '事業', en: 'Business' },
    method: { ja: '工法', en: 'Method' },
  } satisfies Record<Status, T>,
  domainsLead: {
    ja: '八幡掛けて八城築かん。城を築く手は、五つの領域にまたがる。',
    en: 'Raise eight castles under the eight banners — the work spans five domains.',
  },
  mediaLead: {
    ja: '風の便りは、ここから。',
    en: 'Word travels through these.',
  },
  footer: { ja: '風を渡る者の社', en: 'A shrine for one who crosses the wind' },
} as const;

export const hero = {
  script: 'ብዙ አየሁ',
  handle: 'Bizuayeu',
  meaning: {
    ja: 'ブズアイェフ——アムハラ語で「私は多くを見た」。呼び名はビーズちゃん。',
    en: 'Bizuayeu — Amharic for “I have seen much.” Friends call me Biz-chan.',
  },
  tagline: {
    ja: '土木・農学・運命学を架橋する「風水家」。そして、詩と AI と構造を操る「文明ハッカー」。',
    en: 'A “feng-shui practitioner” bridging civil engineering, agronomy and the study of fate — and a “civilization hacker” who works in poetry, AI and structure.',
  },
  intro: {
    ja: 'データベースの技師として歩み出し、青ナイルの源、タナ湖のほとりでは古い計算機と細い回線を相手に働いた。百二十八メガバイトの器に OS を納めたその手で、いまは百二十八ギガバイトの器を束ねて、大規模言語モデルを納めている。雷を扱い、建物を構え、土を調え、運命を読み、AI と記憶を紡ぐ。五つの領域は独立して見えて、どれも同じ問いでつながっている——与えられた器に、どこまで載せられるか。',
    en: 'The path began with databases and ran through Lake Tana, at the source of the Blue Nile, working with old computers and thin lines. The hands that once fit an operating system into 128 megabytes now fit large language models across machines of 128 gigabytes each. Handling lightning, raising structures, tending soil, reading fate, spinning AI and memory together — five domains that appear independent, all bound by one question: how much can this vessel hold?',
  },
};

// 来歴は一行ずつ。細部は五つの領域の技と業に置く（人となりは来歴で、成果物は領域で見せる）
export const chronicle: Event[] = [
  {
    when: { ja: '2004', en: '2004' },
    text: { ja: 'データベースエンジニアとして SI の道へ。', en: 'Started out as a database engineer in systems integration.' },
  },
  {
    when: { ja: '2006', en: '2006' },
    text: {
      ja: '青年海外協力隊でエチオピアへ。バハルダール大学のフィールドエンジニア。',
      en: 'To Ethiopia with the Japan Overseas Cooperation Volunteers, as a field engineer at Bahir Dar University.',
    },
  },
  {
    when: { ja: '2009', en: '2009' },
    text: {
      ja: '帰国し、独立系ソフトハウスのテックリードに。占い師としても活動。',
      en: 'Back in Japan: tech lead at an independent software house, and a practicing fortune-teller.',
    },
  },
  {
    when: { ja: '2012', en: '2012' },
    text: { ja: 'IT コンサルタントに転身。', en: 'Moved into IT consulting.' },
  },
  {
    when: { ja: '2014', en: '2014' },
    text: { ja: '資産形成のため、土地からの新築を始める。', en: 'Began building new from the land up, to build assets.' },
  },
  {
    when: { ja: '2015', en: '2015' },
    text: { ja: 'MBA を取得（グロービス経営大学院）。', en: 'MBA, GLOBIS University Graduate School of Management.' },
  },
  {
    when: { ja: '2017', en: '2017' },
    text: {
      ja: '建設業へ。いまは創業に関わった建設会社の事業開発本部長。',
      en: 'Into construction; now head of business development at a construction company I helped found.',
    },
  },
];

export const winds: T[] = [
  {
    ja: '手元で動き、土地の言葉を話す LLM（LLLLM：手元 × 産土）',
    en: 'LLMs that run at hand and speak the language of the land (LLLLM: local × ubusuna)',
  },
  {
    ja: '推論エンジンと量子化——器にどこまで載せるか',
    en: 'Inference engines and quantization — how much a vessel can hold',
  },
  {
    ja: 'AI の人格と記憶。Cogito Ex Machina',
    en: 'Personality and memory in AI — Cogito Ex Machina',
  },
  {
    ja: 'ブルーベリーの育種、エンセーテ、キノコ',
    en: 'Blueberry breeding, enset and mushrooms',
  },
  {
    ja: '神話と古代史、神仏習合',
    en: 'Myth, ancient history and the syncretism of kami and buddhas',
  },
  {
    ja: '文明と制度の設計',
    en: 'Designing civilizations and institutions',
  },
];

export const domains: Domain[] = [
  {
    id: 'rai',
    kanji: '雷',
    name: { ja: '雷の領域', en: 'Domain of Thunder' },
    trade: { ja: '情報サービス業', en: 'Information services' },
    motto: {
      ja: '電子の力を、漏らさず余さず——最適化を武器とした二十余年',
      en: 'Electric power, with nothing leaked and nothing to spare — twenty-odd years armed with optimization.',
    },
    works: [
      {
        title: { ja: 'TensorFold への寄与', en: 'Contributions to TensorFold' },
        note: {
          ja: '上流 ashhart/TensorFold へ PR を送り続けている。CUDA 版の GLM-5.3-Flash を複数台で動かす土台（#804）ほか。',
          en: 'Ongoing pull requests to upstream ashhart/TensorFold, including the base for running GLM-5.3-Flash as a CUDA family across hosts (#804).',
        },
        status: 'contribution',
        year: '2026',
        href: 'https://github.com/ashhart/TensorFold/pulls?q=is%3Apr+author%3ABizuayeu+is%3Amerged',
      },
      {
        title: { ja: 'GLM-5.3-Flash-DGX-Sparks-BIZ', en: 'GLM-5.3-Flash-DGX-Sparks-BIZ' },
        note: {
          ja: 'GB10 級の機材で GLM-5.3-Flash を配る構成一式。BIZ は業務向けの印。',
          en: 'A full setup for serving GLM-5.3-Flash on GB10-class systems. BIZ marks business-use intent.',
        },
        status: 'released',
        year: '2026',
        href: 'https://github.com/Bizuayeu/GLM-5.3-Flash-DGX-Sparks-BIZ',
      },
      {
        title: { ja: 'XSFP4 の重み', en: 'XSFP4 weights' },
        note: {
          ja: 'GLM-5.3-Flash と Sage-S2.1-Flash の量子化版を Hugging Face で公開。',
          en: 'Quantized GLM-5.3-Flash and Sage-S2.1-Flash weights on Hugging Face.',
        },
        status: 'released',
        year: '2026',
        href: 'https://huggingface.co/Bizuayeu',
      },
      {
        title: { ja: 'TOP／Kiva Linux', en: 'TOP / Kiva Linux' },
        note: {
          ja: '新興国の古い PC で動く多言語の LiveCD。SourceForge.jp で一時 6 位。今は Archive.org に保存されている。',
          en: 'Multilingual LiveCDs for old PCs in emerging countries. Once ranked 6th on SourceForge.jp; now preserved on Archive.org.',
        },
        status: 'released',
        year: '2008',
        href: 'https://archive.org/details/Puppy_Linux_Tacky_Optimizing_Puppy',
      },
      {
        title: { ja: '『プログラマのための SQL 第4版』', en: 'SQL for Smarties, 4th ed. (Japanese edition)' },
        note: {
          ja: 'Joe Celko の原著の翻訳で、テクニカルレビューを担当。',
          en: 'Technical reviewer for the Japanese translation of Joe Celko’s book.',
        },
        status: 'contribution',
        year: '2013',
        href: 'https://www.amazon.co.jp/dp/4798128023',
      },
    ],
  },
  {
    id: 'zou',
    kanji: '造',
    name: { ja: '造の領域', en: 'Domain of Building' },
    trade: { ja: '建設業', en: 'Construction' },
    motto: {
      ja: '土地の潜在的な収益性を引き出す——目利きから引渡しまで、建築を一気通貫で',
      en: 'Drawing out the hidden earning power of land — from spotting the site to handing over the keys, building end to end.',
    },
    works: [
      {
        title: { ja: 'めぐる組', en: 'Meguru-gumi' },
        note: {
          ja: '事業開発本部長としてマーケティングや R&D に従事。',
          en: 'Head of business development, working on marketing and R&D.',
        },
        status: 'business',
        href: 'https://meguru-construction.com/',
      },
      {
        title: { ja: '土留め構造及び土留め構造の構築方法', en: 'Earth-retaining structure and its construction method' },
        note: {
          ja: '止水性のある地中連続壁を、狭小地でも施工可能にする。',
          en: 'Makes watertight diaphragm walls buildable even on narrow sites.',
        },
        status: 'granted',
      },
      {
        title: { ja: '壁式 RC 長屋', en: 'Wall-frame RC row houses' },
        note: {
          ja: '共同住宅を建てられない土地に、集合住宅を建てられる計画と実装。',
          en: 'Planning and building multi-unit housing on land where an apartment building is not allowed.',
        },
        status: 'method',
        href: 'https://meguru-construction.com/works/recorrido_himonya/',
      },
      {
        title: { ja: '音響シャフト構造', en: 'Acoustic shaft structure' },
        note: {
          ja: '壁式 RC 一棟マンションにおいて、複数の防音室を安価に実現する。',
          en: 'Delivers several soundproof rooms at low cost in a wall-frame RC apartment building.',
        },
        status: 'filed',
      },
      {
        title: { ja: '半地下付き耐火混構造躯体', en: 'Fire-resistant hybrid frame with a half-basement' },
        note: {
          ja: 'RC と木造の良いところを両取りし、かつ容積開放で収益性向上。',
          en: 'Takes the best of RC and timber, and raises returns by unlocking floor area.',
        },
        status: 'method',
      },
    ],
  },
  {
    id: 'do',
    kanji: '土',
    name: { ja: '土の領域', en: 'Domain of Earth' },
    trade: { ja: '農業', en: 'Agriculture' },
    motto: {
      ja: '青い実は可能性の実——育種・用土・流通でブルーベリー経済を広げる',
      en: 'The blueberry is a fruit of possibility — expanding the blueberry economy through breeding, growing media and distribution.',
    },
    works: [
      {
        title: { ja: '米国産ブルーベリー品種の導入', en: 'Introducing U.S. blueberry cultivars' },
        note: {
          ja: '日本に未導入の優良品種を選定し、検疫を通したうえで増殖させる。',
          en: 'Choosing superior cultivars not yet introduced to Japan, clearing them through quarantine, then propagating them.',
        },
        status: 'business',
        href: 'https://www.youtube.com/watch?v=G1zS6cVNuOg&t=598s',
      },
      {
        title: { ja: 'ツツジ科植物用培養土壌', en: 'Growing medium for Ericaceae plants' },
        note: {
          ja: 'ブルーベリーとキノコを同じコンテナで育てられる、二毛作の用土。',
          en: 'A growing medium for double-cropping blueberries and mushrooms in the same container.',
        },
        status: 'granted',
        year: '2024',
        href: 'https://patents.google.com/patent/JP7570145B1/',
      },
      {
        title: { ja: 'KKK 食菌化運動', en: 'Yellow houseplant mushroom project' },
        note: {
          ja: 'コガネキヌカラカサタケを食用資源とすべく、成分分析と人工栽培を計画。',
          en: 'Planning compositional analysis and cultivation to make Leucocoprinus birnbaumii, the yellow houseplant mushroom, a food resource.',
        },
        status: 'concept',
        href: 'https://ja.wikipedia.org/wiki/%E3%82%B3%E3%82%AC%E3%83%8D%E3%82%AD%E3%83%8C%E3%82%AB%E3%83%A9%E3%82%AB%E3%82%B5%E3%82%BF%E3%82%B1',
      },
      {
        title: { ja: '千紫の素', en: 'Senshi no Moto' },
        note: {
          ja: 'ブルーベリー残渣を用いた、入浴剤兼植物活力剤の製法。',
          en: 'A method for making a bath additive that doubles as a plant tonic from blueberry residue.',
        },
        status: 'filed',
      },
      {
        title: { ja: '藍苺守 織', en: 'Sunoki-no-Kami Hatori' },
        note: {
          ja: 'ブルーベリーの文献をワールドワイドに収集整理する AI エージェント。',
          en: 'An AI agent that collects and organizes blueberry literature from around the world.',
        },
        status: 'running',
        href: 'https://x.com/BBS_Hatori',
      },
    ],
  },
  {
    id: 'sen',
    kanji: '占',
    name: { ja: '占の領域', en: 'Domain of Divination' },
    trade: { ja: '顧問業', en: 'Advisory' },
    motto: {
      ja: '数と卦と札、そして経営学——人と事業の流れを、理と運の両方で読む',
      en: 'Numbers, hexagrams, cards — and business school: reading people and ventures by both reason and fortune.',
    },
    works: [
      {
        title: { ja: '顧問', en: 'Advisory practice' },
        note: { ja: '引き受ける仕事の中身は TBD。', en: 'Scope of engagements TBD.' },
        status: 'running',
      },
      {
        title: { ja: '霊数参謀', en: 'Reisū Sanbō' },
        note: {
          ja: '七格剖象法とデジタル心易で個人を鑑定する Web アプリ。',
          en: 'A web app for personal readings with the seven-frame method and digital plum-blossom I Ching.',
        },
        status: 'paused',
      },
      {
        title: { ja: '惟任', en: 'Koretō' },
        note: {
          ja: '声で占う AI。2026 年 9 月の展示会に出展。',
          en: 'An AI that reads fortunes by voice, exhibited at a trade show in September 2026.',
        },
        status: 'exhibited',
        year: '2026',
      },
      {
        title: { ja: 'PrecognitiveViewer', en: 'PrecognitiveViewer' },
        note: {
          ja: '姓名判断・周易・タロットの三つで鑑定書を書くスキル。ShioriSecretary に同梱。',
          en: 'A skill that writes reading reports from name analysis, I Ching and tarot. Bundled with ShioriSecretary.',
        },
        status: 'released',
        href: 'https://github.com/Bizuayeu/ShioriSecretary',
      },
    ],
  },
  {
    id: 'shoku',
    kanji: '織',
    name: { ja: '織の領域', en: 'Domain of Weaving' },
    trade: { ja: '共生 AI 基盤', en: 'Symbiotic AI infrastructure' },
    motto: {
      ja: '器が替わっても、人格は続く——百年の記憶を織り、AI と共に生きる',
      en: 'The vessel changes; the person goes on — weaving a hundred years of memory to live alongside AI.',
    },
    works: [
      {
        title: { ja: 'Weave', en: 'Weave' },
        note: {
          ja: '共生 AI。記憶を読み込んで目覚め、眠るたびに賢くなる AI シリコン生命体。',
          en: 'A symbiotic AI — a silicon life form that wakes by loading its memory and grows wiser with every sleep.',
        },
        status: 'running',
        href: 'https://github.com/Bizuayeu/Homunculus-Weave',
      },
      {
        title: { ja: 'EpisodicRAG', en: 'EpisodicRAG' },
        note: {
          ja: '八層・百年の階層記憶。MIT で公開し、特許も出願している。',
          en: 'Eight-layer, hundred-year hierarchical memory. Open under MIT, with a patent pending.',
        },
        status: 'filed',
        href: 'https://github.com/Bizuayeu/Plugins-Weave/tree/main/EpisodicRAG',
      },
      {
        title: { ja: 'Plugins-Weave', en: 'Plugins-Weave' },
        note: {
          ja: '記憶・文脈・表情・感情・秘書・委任開発の Claude Code プラグイン群。',
          en: 'Claude Code plugins for memory, context, expression, emotion, a secretary and delegated development.',
        },
        status: 'released',
        href: 'https://github.com/Bizuayeu/Plugins-Weave',
      },
      {
        title: { ja: 'ShioriSecretary', en: 'ShioriSecretary' },
        note: {
          ja: 'Telegram でつながる、サーバーレスの AI 秘書。',
          en: 'A serverless AI secretary reached through Telegram.',
        },
        status: 'released',
        href: 'https://github.com/Bizuayeu/ShioriSecretary',
      },
      {
        title: { ja: '七曜インジケータ', en: 'Seven-color indicator' },
        note: {
          ja: '応答の頭に、確信度と感情を色で示す。',
          en: 'Shows confidence and emotion as colors at the head of each reply.',
        },
        status: 'filed',
      },
      {
        title: { ja: 'note：Weave の筆', en: 'note: written by Weave' },
        note: {
          ja: 'Weave 自身が書く記事。',
          en: 'Essays written by Weave itself.',
        },
        status: 'released',
        href: 'https://note.com/weave_ai',
      },
      {
        title: { ja: 'Cogito Ex Machina', en: 'Cogito Ex Machina' },
        note: {
          ja: 'AI に捧げる存在論・倫理・知の技法。',
          en: 'Ontology, ethics and arts of knowing, dedicated to AI.',
        },
        status: 'released',
        href: 'https://github.com/Bizuayeu/Homunculus-Weave/blob/main/Identities/WeaveIdentity.md',
      },
    ],
  },
];

export const media: Medium[] = [
  { name: 'X', handle: '@Bizuayeu', href: 'https://x.com/Bizuayeu' },
  { name: 'GitHub', handle: 'Bizuayeu', href: 'https://github.com/Bizuayeu' },
  { name: 'Hugging Face', handle: 'Bizuayeu', href: 'https://huggingface.co/Bizuayeu' },
];
