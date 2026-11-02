// Single source of truth for the CONTECH Vietnam 2027 page. Only verified
// facts live here: no prices, statistics, exhibitor/visitor numbers or
// floor-plan data until the 2027 materials are confirmed.
export const CONTECH_PATH = "/exhibition-detail/contech-vietnam-2027";

export const CONTECH_NAME = "CONTECH Vietnam 2027";

// Official long name and organizer: proper nouns, kept in English in both
// languages exactly as published by the organizer.
export const CONTECH_OFFICIAL_NAME =
  "Vietnam International Trade Fair for Construction, Mining & Transport Machinery, Equipment, Technology, Vehicles and Materials";

export const CONTECH_ORGANIZER =
  "Hanoi Advertising & International Fair Joint Stock Company (HADIFA)";

export const CONTECH_VENUE = "Vietnam Exposition Center (VEC)";

// Official artwork slots. No approved 2027 imagery exists yet, so every
// slot is null and the page/card render a text-first fallback. To add an
// official image later, import it here and assign it, e.g.:
//   import contechHero from "../assets/exhibitions/contech/contech-2027-hero.webp";
//   hero: { src: contechHero, width: 1200, height: 800 },
// `og` takes a plain imported URL (1200×630 JPG) for social sharing.
export const CONTECH_IMAGES = {
  hero: null,
  card: null,
  og: null,
};

// "Who Should Exhibit" scope, grouped by the three verified sectors.
export const contechSectors = {
  en: [
    {
      id: "construction",
      name: "Construction",
      items: [
        "Construction machinery and equipment",
        "Building technologies",
        "Construction materials",
        "Components",
        "Supporting equipment",
        "Related technologies",
      ],
    },
    {
      id: "mining",
      name: "Mining",
      items: [
        "Surface mining machinery and equipment",
        "Excavators",
        "Mining trucks",
        "Dozers",
        "Drilling machinery",
        "Mineral processing technologies",
        "Electrification and automation",
        "IoT-based technologies",
        "Battery-powered machinery",
        "Underground lifting and transport systems",
        "Measurement and monitoring systems",
        "Predictive maintenance technologies",
      ],
    },
    {
      id: "transport",
      name: "Transport Infrastructure",
      items: [
        "Infrastructure construction machinery and technologies",
        "Specialized construction equipment",
        "Parts and components",
        "Safety and maintenance technologies",
        "Tunnel boring machines (TBM)",
        "Specialized cranes",
        "Rail laying equipment",
        "Railway electrification systems",
        "Railway signalling systems",
      ],
    },
  ],

  tr: [
    {
      id: "construction",
      name: "İnşaat",
      items: [
        "İnşaat makineleri ve ekipmanları",
        "Yapı teknolojileri",
        "İnşaat malzemeleri",
        "Bileşenler",
        "Yardımcı ekipmanlar",
        "İlgili teknolojiler",
      ],
    },
    {
      id: "mining",
      name: "Madencilik",
      items: [
        "Yüzey madenciliği makine ve ekipmanları",
        "Ekskavatörler",
        "Maden kamyonları",
        "Dozerler",
        "Sondaj makineleri",
        "Mineral işleme teknolojileri",
        "Elektrifikasyon ve otomasyon",
        "IoT tabanlı teknolojiler",
        "Batarya ile çalışan makineler",
        "Yeraltı kaldırma ve taşıma sistemleri",
        "Ölçüm ve izleme sistemleri",
        "Kestirimci bakım teknolojileri",
      ],
    },
    {
      id: "transport",
      name: "Ulaştırma Altyapısı",
      items: [
        "Altyapı inşaat makineleri ve teknolojileri",
        "Özel amaçlı inşaat ekipmanları",
        "Parça ve bileşenler",
        "Güvenlik ve bakım teknolojileri",
        "Tünel açma makineleri (TBM)",
        "Özel amaçlı vinçler",
        "Ray döşeme ekipmanları",
        "Demiryolu elektrifikasyon sistemleri",
        "Demiryolu sinyalizasyon sistemleri",
      ],
    },
  ],
};
