// Full welcome sequence played once per browser session on the Home hero.
// Timeline mirrors the "Ana Sayfa Sinematik Karşılama Akışı" spec: each
// entry is a phase name + how long it holds before the next one starts.
export const TIMELINE = [
  { phase: "idle", duration: 1000 },
  { phase: "particles", duration: 1000 },
  { phase: "enter", duration: 2500 },
  { phase: "land", duration: 2000 },
  { phase: "talkIntro", duration: 6000 },
  { phase: "point", duration: 2000 },
  { phase: "showExpomate", duration: 6000 },
  { phase: "farewell", duration: 1500 },
  { phase: "signatureWait", duration: 700 },
  { phase: "signature", duration: 2000 },
  { phase: "signatureFade", duration: 400 },
];

export const fairyCinematicContent = {
  en: {
    talkIntro:
      "Hi there! I'm Fairy — VIAFA's digital assistant. Let's find the perfect exhibition for you, together.",
    showExpomate:
      "Before you head to the exhibition, install EXPO MATE on your phone. Never miss a business card, a note, or an expense again.",
    expomateTag: "EXPO MATE",
    expomateNote: "Coming soon",
    signature: "See you soon...",
  },

  tr: {
    talkIntro:
      "Merhaba! Ben Fairy. VIAFA'nın dijital asistanıyım. Hadi, senin için en uygun fuarı birlikte bulalım.",
    showExpomate:
      "Fuara giderken telefonuna EXPO MATE'i yüklemeyi unutma. Hiçbir kartviziti, hiçbir notu, hiçbir harcamayı gözden kaçırma.",
    expomateTag: "EXPO MATE",
    expomateNote: "Çok yakında",
    signature: "Görüşmek üzere...",
  },
};
