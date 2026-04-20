// ============================================================
// DATA — edit questions and endings here
// ============================================================

const QUESTIONS = [
  {
    id: "insanity",
    text: "Czy Zygmunt był szalony?",
    answers: [
      { text: "Tak, pozostawił poczytalność w Port Arthur.", tags: ["insane"] },
      { text: "Nie, pomimo wszystkich przygód pozostał sobą.", tags: ["sane"] },
    ],
  },
  {
    id: "durand",
    text: "Kim był Durand dla Zygmunta?",
    answers: [
      { text: "Śmiertelnym wrogiem, którego należało zniszczyć.", tags: ["durand-enemy"] },
      { text: "Lustrzanym odbiciem — bratem w duchu, nie z krwi.", tags: ["durand-mirror"] },
      { text: "Nikim. Przypadkową postacią na marginesie historii.", tags: ["durand-nobody"] },
      { text: "Dawnym mentorem i przyjacielem, który zagubił się w pysze.", tags: ["durand-mentor"] },
    ],
  },
  {
    id: "henoch",
    text: "Czym były dla Zygmunta Klucze Henocha?",
    answers: [
      { text: "Niebezpieczną obsesją, którą należało zniszczyć.", tags: ["anti-esoteric"] },
      { text: "Tajemnicą, którą należało zgłębić — cokolwiek by to kosztowało.", tags: ["klucze-henocha"] },
      { text: "Kolejnym tropem w długim i żmudnym śledztwie.", tags: ["procedural"] },
    ],
  },
];

// Ordered by priority: most iconic first.
// The algorithm picks the first 3 whose requiredTags are ALL present in the player's tags.
const ENDINGS = [
  {
    id: "cannibal",
    title: "Uczta Zygmunta",
    type: "non-canonic",
    requiredTags: ["insane", "durand-enemy"],
    tarotCard: "13-Death",
    variant: "image",
    image: "Ending-Image-placeholder.png",
    text: "W mroku opuszczonej jadalni Zygmunt zastawił ostatnią wieczerzę. Durand nie wiedział, że jest zaproszony — jako danie główne. Szaleństwo ma swój smak, a Zygmunt odkrył go tej nocy.",
  },
  {
    id: "mirror",
    title: "Lustro i Cień",
    type: "canonic",
    requiredTags: ["sane", "durand-mirror"],
    tarotCard: "18-TheMoon",
    variant: "video",
    video: "videos/peaceful-remain-in-paris-ending.mp4",
    text: "Zygmunt odnalazł w Durandzie siebie samego. Dwa cienie, które przez lata tańczyły wokół jednego płomienia, w końcu zlały się w jedno. Nie było zwycięzcy. Nie było przegranego. Był tylko spokój.",
  },
  {
    id: "wanderer",
    title: "Wieczny Wędrowiec",
    type: "canonic",
    requiredTags: ["sane"],
    tarotCard: "00-TheFool",
    variant: "image",
    image: "Ending-Image-placeholder.png",
    text: "Zygmunt odłożył pióro. Ostatni list został wysłany. Europa rozciągała się przed nim jak niezapisana kartka — i ruszył przed siebie, zostawiając wszystko za sobą.",
  },
  {
    id: "madman-king",
    title: "Król Szaleńców",
    type: "non-canonic",
    requiredTags: ["insane"],
    tarotCard: "04-TheEmperor",
    variant: "image",
    image: "Ending-Image-placeholder.png",
    text: "Zygmunt zasiadł na tronie z listów — tysiące kartek ułożonych w monstrualny fotel. Ogłosił się władcą korespondencji. Jego poddani? Wszyscy, którzy kiedykolwiek napisali do niego choćby słowo.",
  },
  {
    id: "ninth-gate",
    title: "Dziewiąta Brama",
    type: "non-canonic",
    requiredTags: ["durand-mentor", "klucze-henocha"],
    tarotCard: "15-TheDevil",
    variant: "video",
    video: "videos/ninth-gate-ending.mp4",
    textKey: "ninth-gate",
  },
  {
    id: "czarna-wazka",
    title: "Czarna Ważka",
    type: "canonic",
    requiredTags: ["insane", "durand-mirror"],
    tarotCard: "15-TheDevil",
    variant: "video",
    video: "videos/czarna-wazka-kapitula-ending.mp4",
    text: "Zygmunt zrozumiał wreszcie, że szaleństwo nie było jego przekleństwem — było darem. On i Durand, dwa skrzydła tej samej ważki, krążyli nad czarną wodą jeziora, którego nikt inny nie widział. Kapituła zebrała się po raz ostatni. Protokół spisano atramentem, który znikał o świcie.",
  },
  {
    id: "lazarz",
    title: "Pościg za Łazarzem",
    type: "non-canonic",
    requiredTags: ["sane", "durand-enemy"],
    tarotCard: "07-TheChariot",
    variant: "video",
    video: "videos/pursue-lazarz-kiselew-ending.mp4",
    textKey: "lazarz",
  },
  {
    id: "oblivion",
    title: "Zapomnienie",
    type: "non-canonic",
    requiredTags: ["durand-nobody"],
    tarotCard: "16-TheTower",
    variant: "video",
    video: "videos/peaceful-remain-in-paris-ending.mp4",
    text: "Nikt nie pamiętał Zygmunta. Listy spłonęły w kominku jakiejś wiedeńskiej kamienicy. Durand — jeśli w ogóle istniał — zniknął bez śladu. Historia nie znosi próżni, ale czasem robi wyjątek.",
  },
  {
    id: "alistair-mckinnon",
    title: "Alistar McKinnon ending",
    type: "canonic",
    requiredTags: [],
    tarotCard: "19-TheSun",
    variant: "video",
    video: "videos/gus-superman-clip.mp4",
    textKey: "alistair-mckinnon",
  },
  {
    id: "reunion",
    title: "Ostatnie Spotkanie",
    type: "canonic",
    requiredTags: [],
    tarotCard: "21-TheWorld",
    variant: "image",
    image: "Ending-Image-placeholder.png",
    text: "W 1932 roku Zygmunt pojawił się na progu Duranda. Nie powiedział ani słowa. Postawił na stole butelkę wina, dwa kieliszki, i stos nieprzeczytanych listów. Siedzieli w ciszy aż do świtu.",
  },
];
