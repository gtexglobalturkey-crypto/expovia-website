// Single source of truth for the CONTECH Vietnam 2027 page. Only verified
// facts live here: no prices, statistics or floor-plan data, and the
// brochure's estimated area, exhibitor and visitor figures are not shown.
import contechHero from "../assets/exhibitions/contech/contech-2027-hero.webp";
import contechConstruction from "../assets/exhibitions/contech/contech-construction.webp";
import contechMaterials from "../assets/exhibitions/contech/contech-materials.webp";
import contechMining from "../assets/exhibitions/contech/contech-mining.webp";
import contechTransport from "../assets/exhibitions/contech/contech-transport.webp";
import contechVisitors from "../assets/exhibitions/contech/contech-trade-visitors.webp";

export const CONTECH_PATH = "/exhibition-detail/contech-vietnam-2027";

export const CONTECH_NAME = "CONTECH Vietnam 2027";

// Official long name and organizer: proper nouns, kept in English in both
// languages exactly as published by the organizer.
export const CONTECH_OFFICIAL_NAME =
  "Vietnam International Trade Fair for Construction, Mining & Transport Machinery, Equipment, Technology, Vehicles and Materials";

export const CONTECH_ORGANIZER =
  "Hanoi Advertising & International Fair Joint Stock Company (HADIFA)";

export const CONTECH_VENUE = "Vietnam Exposition Center (VEC), Dong Anh, Hanoi";

// HADIFA MEDIA's YouTube video "CONTECH VIETNAM 2025 - DAY 1".
export const CONTECH_VIDEO_ID = "deFeYEq1PhM";

// Organizer brochure imagery. `sectors` is shown in order in ContechSectors;
// `visitors` comes from CONTECH Vietnam 2026, so it always needs its caption
// next to the 2027 dates. `og` takes a plain imported URL (1200×630 JPG) for
// social sharing.
export const CONTECH_IMAGES = {
  hero: { src: contechHero, width: 1100, height: 1554 },
  card: contechHero,
  og: null,
  sectors: [
    { id: "construction", src: contechConstruction, width: 674, height: 162 },
    { id: "materials", src: contechMaterials, width: 674, height: 162 },
    { id: "mining", src: contechMining, width: 674, height: 191 },
    { id: "transport", src: contechTransport, width: 674, height: 191 },
  ],
  visitors: { src: contechVisitors, width: 895, height: 660 },
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
