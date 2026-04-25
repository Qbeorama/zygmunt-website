// ============================================================
// DATA — edit questions and endings here
// ============================================================

const QUESTIONS = [
  {
    id: "de-profundis",
    text: "Do kogo Zygmunt napisał swój pierwszy list w De Profundis?",
    answers: [
      { text: "Do Liny.", tags: ["lina"] },
      { text: "Do Alistara.", tags: [] },
      { text: "Do Elżbiety.", tags: [] },
    ],
  },
  {
    id: "alistair-role",
    text: "Jaką rolę odegrał Alistair w życiu Zygmunta?",
    answers: [
      { text: "Pomógł Zygmuntowi odbić się od narkotykowego dna i zachować trzeźwość.", tags: ["alistair"] },
      { text: "Wstawił się wraz z prof. Białoszewskim przed Kapitułą o miejsce dla Zygmunta.", tags: [] },
      { text: "Podarował Zygmuntowi artefakt z I Wojny Światowej, który uchronił go przed śmiercią.", tags: [] },
    ],
  },
  {
    id: "durand-feelings",
    text: "Jakie były prawdziwe uczucia Zygmunta do Duranda?",
    answers: [
      { text: "Czysta pogarda, dodatkowo pogłębiona zazdrością o Agathę Devereux.", tags: ["durand-hatred-1"] },
      { text: "Nienawiść, silna na tyle, by przykryć dawny łączący ich podziw i szacunek.", tags: ["durand"] },
      { text: "Pogarda, wynikająca z bycia odtrąconym przez kogoś, kogo widział za ojca.", tags: ["durand-hatred-1"] },
    ],
  },
  {
    id: "kapitula",
    text: "Z jakiego powodu Zygmunt byłby gotów dołączyć do Kapituły Czarnej Ważki?",
    answers: [
      { text: "Aby upokorzyć Duranda i pokazać mu, że są równi.", tags: ["durand-hatred-2"] },
      { text: "Aby wykorzystać wpływ organizacji do tego, aby chronić swoich bliskich.", tags: ["remain-in-czarna-wazka"] },
      { text: "Aby wykorzystać zasoby Ważki, aby rozwiązać tajemnicę Kamieni z Tartessos.", tags: [] },
    ],
  },
  {
    id: "deepest-fear",
    text: "Jaki jest najgłębszy, najbardziej skryty lęk Zygmunta?",
    answers: [
      { text: "Że w gruncie rzeczy jest niegodny miłości innych.", tags: [] },
      { text: "Że w głębi serca wykorzystuje wszystkich ludzi na swojej drodze i ich porzuca.", tags: ["at-peace-with-himself"] },
      { text: "Że odejdzie z tego świata, nie rozwiązawszy finalnie swojej Tajemnicy.", tags: [] },
    ],
  },
    {
    id: "insanity",
    text: "Powiedz prawdę: czy Zygmunt był szalony?",
    answers: [
      { text: "Tak, zostawił poczytalność w Port Arthur.", tags: ["insane"] },
      { text: "Nie, pomimo wszystkich przejść pozostał sobą.", tags: ["sane"] },
    ],
  },
];

// Ordered by priority: most iconic first.
// Three endings are ALWAYS available (Hermit, Emperor, Chariot).
// Additional endings are unlocked when ALL their requiredTags match the player's tags.
// IDs of the three always-unlocked endings:
const ALWAYS_UNLOCKED = ['at-peace-with-himself', 'remain-in-czarna-wazka', 'pursue-lazarz-kiselew'];
const ENDINGS = [
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
    id: "pursue-lazarz-kiselew",
    title: "Pościg za Łazarzem",
    type: "non-canonic",
    requiredTags: ["sane", "durand-enemy"],
    tarotCard: "07-TheChariot",
    variant: "video",
    video: "videos/pursue-lazarz-kiselew-ending.mp4",
    textKey: "pursue-lazarz-kiselew",
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
    id: "goodbye-feast",
    title: "Pożegnalna Uczta",
    type: "non-canonic",
    requiredTags: ["durand-hatred-1", "durand-hatred-2", "insane"],
    tarotCard: "13-Death",
    variant: "image",
    image: "goodbye-feast.jpg",
    textKey: "goodbye-feast",
  },
  {
    id: "alistair-mckinnon",
    title: "Alistar McKinnon ending",
    type: "non-canonic",
    requiredTags: [],
    tarotCard: "19-TheSun",
    variant: "video",
    video: "videos/gus-superman-clip.mp4",
    textKey: "alistair-mckinnon",
  },
];
