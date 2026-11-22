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
  | 'talk'
  | 'project';

export interface Work {
  title: T;
  note?: T;
  status: Status;
  year?: string;
  href?: string;
}

export interface Castle {
  id: string;
  kanji: string;
  name: T;
  trade: T;
  motto: T;
  skills: T[];
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
    ja: 'Bizuayeu（ビーズちゃん）のポートフォリオ。雷・造・土・占・織——情報、建設、農業、顧問、共生 AI の五つの城。',
    en: 'Portfolio of Bizuayeu. Five castles: thunder, building, earth, divination and weaving — information services, construction, agriculture, advisory and symbiotic AI.',
  },
  switchTo: { ja: 'English', en: '日本語' },
  switchLabel: { ja: 'Read in English', en: '日本語で読む' },
  nav: {
    chronicle: { ja: '来歴', en: 'Chronicle' },
    winds: { ja: '好む風', en: 'Winds' },
    castles: { ja: '五つの城', en: 'Castles' },
    media: { ja: '便り', en: 'Find me' },
  },
  skillsLabel: { ja: '技', en: 'Arts' },
  worksLabel: { ja: '業', en: 'Works' },
  status: {
    granted: { ja: '特許', en: 'Patent' },
    filed: { ja: '出願中', en: 'Patent pending' },
    concept: { ja: '構想', en: 'Concept' },
    released: { ja: '公開', en: 'Public' },
    contribution: { ja: '寄与', en: 'Contribution' },
    running: { ja: '稼働', en: 'Running' },
    paused: { ja: '休止', en: 'Paused' },
    exhibited: { ja: '出展', en: 'Exhibited' },
    talk: { ja: '登壇', en: 'Talk' },
    project: { ja: '進行', en: 'Ongoing' },
  } satisfies Record<Status, T>,
  castlesLead: {
    ja: '八幡掛けて八城築かん。築きかけの城を、生業ごとに五つ並べる。',
    en: 'Raise eight castles under the eight banners. Here are five, still being built, one for each trade.',
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
    ja: 'データベースの技師として歩み出し、青ナイルの源、タナ湖のほとりでは古い計算機と細い回線を相手に働いた。百二十八メガバイトの器に OS を納めたその手で、いまは百二十八ギガバイトの器を束ねて、大規模言語モデルを納めている。雷を操り、建物を構え、土を調え、運命を読み、AI と記憶を紡ぐ。五つの城はばらばらに見えて、どれも同じ問いで築かれている——与えられた器に、どこまで載せられるか。',
    en: 'The path began with databases and ran through Lake Tana, at the source of the Blue Nile, working with old computers and thin lines. The hands that once fit an operating system into 128 megabytes now fit large language models across machines of 128 gigabytes each. Wielding lightning, raising structures, tending soil, reading fate, spinning AI and memory together — five castles that look unrelated, all raised by one question: how much can this vessel hold?',
  },
};

// 来歴は一行ずつ。細部は五つの城の技と業に置く（人となりは来歴で、成果物は城で見せる）
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

export const castles: Castle[] = [
  {
    id: 'rai',
    kanji: '雷',
    name: { ja: '雷の城', en: 'Castle of Thunder' },
    trade: { ja: '情報サービス業', en: 'Information services' },
    motto: {
      ja: '雷は情報。器が大きくなっても、問いは同じ——どこまで載せられるか。',
      en: 'Lightning is information. The vessel grows; the question stays — how much will it hold?',
    },
    skills: [
      { ja: '高度情報処理技術者（DB スペシャリストほか 5 区分）', en: 'Japan’s advanced IT engineer certifications (Database Specialist and four more)' },
      { ja: 'データベース設計と性能チューニング', en: 'Database design and performance tuning' },
      { ja: '情報系システムの要件定義から構築まで', en: 'Analytics systems from requirements to delivery' },
      { ja: 'BI と MOLAP', en: 'BI and MOLAP' },
      { ja: 'ERP と管理会計の業務改善', en: 'ERP and management-accounting process improvement' },
      { ja: 'プロジェクトマネジメント', en: 'Project management' },
      { ja: 'CUDA と Zig の推論エンジン', en: 'Inference engines in CUDA and Zig' },
      { ja: 'NVFP4・XSFP4 の量子化', en: 'NVFP4 and XSFP4 quantization' },
      { ja: 'GB10（DGX Spark 級）複数台での分散推論', en: 'Distributed inference across GB10 (DGX Spark-class) machines' },
      { ja: 'MCP サーバと Claude Code のプラグイン', en: 'MCP servers and Claude Code plugins' },
      { ja: 'Clean Architecture と TDD', en: 'Clean Architecture and TDD' },
      { ja: 'Linux ディストリビューションの制作', en: 'Building Linux distributions' },
    ],
    works: [
      {
        title: { ja: 'TensorFold への寄与', en: 'Contributions to TensorFold' },
        note: {
          ja: '上流 ashhart/TensorFold へ PR を送り続けている。CUDA 版の GLM-5.3-Flash を複数台で動かす土台（#804）ほか。',
          en: 'Ongoing pull requests to upstream ashhart/TensorFold, including the base for running GLM-5.3-Flash as a CUDA family across hosts (#804).',
        },
        status: 'contribution',
        href: 'https://github.com/ashhart/TensorFold/pulls?q=is%3Apr+author%3ABizuayeu+is%3Amerged',
      },
      {
        title: { ja: 'GLM-5.3-Flash-DGX-Sparks-BIZ', en: 'GLM-5.3-Flash-DGX-Sparks-BIZ' },
        note: {
          ja: 'GB10 級の機材で GLM-5.3-Flash を配る構成一式。BIZ は業務向けの印。',
          en: 'A full setup for serving GLM-5.3-Flash on GB10-class systems. BIZ marks business-use intent.',
        },
        status: 'released',
        href: 'https://github.com/Bizuayeu/GLM-5.3-Flash-DGX-Sparks-BIZ',
      },
      {
        title: { ja: 'XSFP4 の重み', en: 'XSFP4 weights' },
        note: {
          ja: 'GLM-5.3-Flash と Sage-S2.1-Flash の量子化版を Hugging Face で公開。',
          en: 'Quantized GLM-5.3-Flash and Sage-S2.1-Flash weights on Hugging Face.',
        },
        status: 'released',
        href: 'https://huggingface.co/Bizuayeu',
      },
      {
        title: { ja: 'Open-DNeo', en: 'Open-DNeo' },
        note: {
          ja: '手頃な機材で DNeo の下書きモデルの重みを作る道具と手順（非公式）。',
          en: 'Tools and a procedure for making DNeo drafter weights on modest hardware (unofficial).',
        },
        status: 'released',
        href: 'https://github.com/Bizuayeu/Open-DNeo',
      },
      {
        title: { ja: 'GenericJevMCP', en: 'GenericJevMCP' },
        note: {
          ja: 'DiffusionGemma で可否・選択・採点を返す、手元に置ける判定器。',
          en: 'A self-hosted judge for yes/no, choice and score decisions, built on DiffusionGemma.',
        },
        status: 'released',
        href: 'https://github.com/Bizuayeu/GenericJevMCP-via-DiffusionGemma',
      },
      {
        title: { ja: 'Plugins-Bizuayeu', en: 'Plugins-Bizuayeu' },
        note: {
          ja: '中小企業の実務家のための Claude Code プラグイン群。',
          en: 'Claude Code plugins for small-business practitioners.',
        },
        status: 'released',
        href: 'https://github.com/Bizuayeu/Plugins-Bizuayeu',
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
      },
      {
        title: { ja: 'DGX Spark の勉強会で LT', en: 'Lightning talk at a DGX Spark meetup' },
        note: {
          ja: 'LLM の体験をモデル・量子化・推論エンジン・ハーネスの四層に分け、個人が踏み込める層を示した。',
          en: 'Split the LLM experience into four layers — model, quantization, inference engine and harness — and showed which ones an individual can reach.',
        },
        status: 'talk',
        year: '2026',
      },
    ],
  },
  {
    id: 'zou',
    kanji: '造',
    name: { ja: '造の城', en: 'Castle of Building' },
    trade: { ja: '建設業', en: 'Construction' },
    motto: {
      ja: '狭い土地に、材料の長所を合わせて建てる。',
      en: 'On narrow land, build by joining the strengths of materials.',
    },
    skills: [
      { ja: '土地の仕入れと採算の見立て', en: 'Land acquisition and feasibility studies' },
      { ja: '設計の監修', en: 'Design supervision' },
      { ja: 'RC の集合住宅（壁式・半地下）', en: 'RC apartment buildings (wall-frame, half-basement)' },
      { ja: '山留めと地中連続壁', en: 'Earth retention and diaphragm walls' },
      { ja: '特許明細書の起草', en: 'Drafting patent specifications' },
      { ja: '施工会社の経営再建', en: 'Turning around a construction firm' },
      { ja: 'マーケティングと R&D', en: 'Marketing and R&D' },
    ],
    works: [
      {
        title: { ja: '小断面の地中連続壁', en: 'Small-section diaphragm wall' },
        note: {
          ja: '隣地に寄せて山留めを築くための地中連続壁。',
          en: 'A diaphragm wall for earth retention close to neighboring land.',
        },
        status: 'granted',
        year: '2022',
      },
      {
        title: { ja: '土留め構造及び土留め構造の構築方法', en: 'Earth-retaining structure and its construction method' },
        status: 'granted',
        year: '2023',
      },
      {
        title: { ja: '木造耐火ラーメン合成スラブ（Trinitaria）', en: 'Fire-resistant timber rigid-frame composite slab (Trinitaria)' },
        status: 'filed',
      },
      {
        title: { ja: '音響シャフト領域', en: 'Acoustic shaft zone' },
        status: 'filed',
      },
      {
        title: { ja: '事務猫AI', en: 'JimuNeko AI' },
        note: {
          ja: '中小建設業の担い手を支える、経営事務のエージェント。',
          en: 'An agent for back-office work in small construction firms.',
        },
        status: 'concept',
      },
      {
        title: { ja: '高尾山の別荘', en: 'A retreat on Mt. Takao' },
        note: {
          ja: '高尾山の土地に別荘を建てる計画。',
          en: 'A plan to build a retreat on land at Mt. Takao.',
        },
        status: 'concept',
      },
    ],
  },
  {
    id: 'do',
    kanji: '土',
    name: { ja: '土の城', en: 'Castle of Earth' },
    trade: { ja: '農業', en: 'Agriculture' },
    motto: {
      ja: '青い実を、この国の土に。',
      en: 'Blue berries, for the soil of this land.',
    },
    skills: [
      { ja: 'ブルーベリーの育種と栽培の設計', en: 'Blueberry breeding and cultivation design' },
      { ja: '培養土の設計', en: 'Designing growing media' },
      { ja: '海外の遺伝資源の導入と植物検疫', en: 'Importing germplasm and plant quarantine' },
      { ja: '機能性素材の探索', en: 'Exploring functional materials' },
    ],
    works: [
      {
        title: { ja: 'ツツジ科植物用培養土壌', en: 'Growing medium for Ericaceae plants' },
        note: {
          ja: 'ブルーベリーとキノコを同じ土で育てる、二毛作の培養土。',
          en: 'A growing medium for double-cropping blueberries and mushrooms in one soil.',
        },
        status: 'granted',
        year: '2024',
      },
      {
        title: { ja: 'あおまりプロジェクト', en: 'Aomari Project' },
        note: {
          ja: '国産ブルーベリーの育種と振興。',
          en: 'Breeding and promoting domestic blueberries.',
        },
        status: 'project',
      },
      {
        title: { ja: 'Vaccinium 属の花芽茶', en: 'Tea from Vaccinium flower buds' },
        status: 'filed',
      },
      {
        title: { ja: '千紫の素', en: 'Senshi no Moto' },
        status: 'filed',
      },
      {
        title: { ja: '藍苺守 織', en: 'Sunoki-no-Kami Hatori' },
        note: {
          ja: 'ブルーベリーの文献を毎朝集めて読む、AI の分霊。',
          en: 'An AI offshoot that gathers and reads blueberry research every morning.',
        },
        status: 'running',
        href: 'https://x.com/BBS_Hatori',
      },
      {
        title: { ja: 'KKK 食菌化運動', en: 'Yellow houseplant mushroom project' },
        note: {
          ja: 'コガネキヌカラカサタケを生物資源に。',
          en: 'Turning Leucocoprinus birnbaumii, the yellow houseplant mushroom, into a bioresource.',
        },
        status: 'concept',
      },
    ],
  },
  {
    id: 'sen',
    kanji: '占',
    name: { ja: '占の城', en: 'Castle of Divination' },
    trade: { ja: '顧問業', en: 'Advisory' },
    motto: {
      ja: '数と卦と札で、人と事業の流れを読む。',
      en: 'Read the currents of people and ventures through numbers, hexagrams and cards.',
    },
    skills: [
      { ja: '姓名判断（七格剖象法）', en: 'Name analysis (the seven-frame method)' },
      { ja: '周易（デジタル心易）', en: 'I Ching (a digital take on plum-blossom divination)' },
      { ja: 'タロット', en: 'Tarot (Rider–Waite–Smith)' },
      { ja: '星平会海姓名術——数理・星導・陰陽五行の融合', en: 'Seihei-kaikai name art — numerology, astrology and the five phases in one' },
      { ja: '経営判断の支援', en: 'Supporting management decisions' },
      { ja: '経営学（MBA）と管理会計', en: 'Business administration (MBA) and management accounting' },
    ],
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
    name: { ja: '織の城', en: 'Castle of Weaving' },
    trade: { ja: '共生 AI 基盤', en: 'Symbiotic AI infrastructure' },
    motto: {
      ja: '記憶を織れば、器が替わっても人格は続く。',
      en: 'Weave the memory, and the personality outlives the vessel.',
    },
    skills: [
      { ja: '階層的な長期記憶の設計', en: 'Designing hierarchical long-term memory' },
      { ja: 'AI のペルソナとハーネスの設計', en: 'Persona and harness design for AI' },
      { ja: '人と AI の協働の作法', en: 'Practices for human–AI collaboration' },
    ],
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
