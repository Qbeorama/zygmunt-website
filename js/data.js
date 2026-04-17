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
    video: "ending-video-placeholder.mp4",
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
    id: "oblivion",
    title: "Zapomnienie",
    type: "non-canonic",
    requiredTags: ["durand-nobody"],
    tarotCard: "16-TheTower",
    variant: "video",
    video: "ending-video-placeholder.mp4",
    text: "Nikt nie pamiętał Zygmunta. Listy spłonęły w kominku jakiejś wiedeńskiej kamienicy. Durand — jeśli w ogóle istniał — zniknął bez śladu. Historia nie znosi próżni, ale czasem robi wyjątek.",
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
