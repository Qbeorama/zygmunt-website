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
  {
    id: "de-profundis",
    text: "Do kogo Zygmunt napisał swój pierwszy list w De Profundis?",
    answers: [
      { text: "Do Liny.", tags: ["lina"] },
      { text: "Do Alistara.", tags: ["alistair"] },
      { text: "Do Elżbiety.", tags: ["elzbieta"] },
    ],
  },
];

// Ordered by priority: most iconic first.
// The algorithm picks the first 3 whose requiredTags are ALL present in the player's tags.
const ENDINGS = [
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
    id: "lina-keller",
    title: "Lina Keller",
    type: "canonic",
    requiredTags: ["lina"],
    tarotCard: "18-TheMoon",
    variant: "video",
    video: "videos/lina-keller-ending.mp4",
    textKey: "lina-keller",
  },
  {
    id: "remain-in-czarna-wazka",
    title: "Kapituła ending",
    type: "canonic",
    requiredTags: ["sane"],
    tarotCard: "04-TheEmperor",
    variant: "video",
    video: "videos/czarna-wazka-kapitula-ending.mp4",
    textKey: "remain-in-czarna-wazka",
  },
  {
    id: "at-peace-with-himself",
    title: "Pogodzony z samym sobą",
    type: "canonic",
    requiredTags: ["sane"],
    tarotCard: "09-TheHermit",
    variant: "video",
    video: "videos/peaceful-remain-in-paris-ending.mp4",
    textKey: "at-peace-with-himself",
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
];
