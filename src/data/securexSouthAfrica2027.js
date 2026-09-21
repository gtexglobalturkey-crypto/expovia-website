// Single source of truth for the four co-located shows presented on the
// Securex South Africa 2027 page. Show names are proper nouns and stay
// identical in TR and EN.
export const SECUREX_PATH = "/exhibition-detail/securex-south-africa-2027";

// Official positioning and organizer campaign concept: kept in English in
// both languages, exactly as published by the organizer.
export const SECUREX_TAGLINE = "Africa’s Integrated Protection Marketplace";

export const SECUREX_CONCEPT = "4 Shows. 1 Destination.";

export const securexShows = {
  en: [
    {
      id: "securex",
      name: "Securex South Africa",
      sector: "Security & Technology",
      description:
        "The security technology platform of the event, covering electronic security, surveillance, access control and integrated security solutions.",
      groups: [
        "CCTV & video surveillance",
        "Access control",
        "Alarm systems",
        "Perimeter security",
        "Barriers, bollards & turnstiles",
        "Cybersecurity & integrated security technologies",
      ],
    },
    {
      id: "a-osh",
      name: "A-OSH Expo",
      sector: "Occupational Health & Safety",
      description:
        "The occupational health and safety show, presenting protective equipment and workplace safety solutions.",
      groups: [
        "Personal protective equipment (PPE)",
        "Occupational safety equipment",
        "Workplace health & safety solutions",
      ],
    },
    {
      id: "fm-expo",
      name: "Facilities Management Expo",
      sector: "Facilities & Smart Buildings",
      description:
        "The facilities and smart building show, focused on technologies for managing and operating modern buildings.",
      groups: [
        "Facilities management technologies",
        "Smart building systems",
        "Building automation",
        "Monitoring & control systems",
      ],
    },
    {
      id: "firexpo",
      name: "Firexpo",
      sector: "Fire Protection & Emergency Response",
      description:
        "The fire protection show, covering fire detection, suppression and emergency response technologies.",
      groups: [
        "Fire detection & suppression",
        "Emergency response technologies",
      ],
    },
  ],

  tr: [
    {
      id: "securex",
      name: "Securex South Africa",
      sector: "Güvenlik Teknolojileri",
      description:
        "Etkinliğin güvenlik teknolojileri platformu; elektronik güvenlik, gözetim, geçiş kontrol ve entegre güvenlik çözümlerini kapsar.",
      groups: [
        "CCTV ve video gözetim",
        "Geçiş kontrol sistemleri",
        "Alarm sistemleri",
        "Çevre (perimetre) güvenlik sistemleri",
        "Bariyer, bolard ve turnike sistemleri",
        "Siber güvenlik ve entegre güvenlik teknolojileri",
      ],
    },
    {
      id: "a-osh",
      name: "A-OSH Expo",
      sector: "İş Sağlığı ve Güvenliği",
      description:
        "İş sağlığı ve güvenliği fuarı; koruyucu ekipmanları ve işyeri güvenliği çözümlerini bir araya getirir.",
      groups: [
        "Kişisel koruyucu donanım (KKD)",
        "İş güvenliği ekipmanları",
        "İşyeri sağlık ve güvenlik çözümleri",
      ],
    },
    {
      id: "fm-expo",
      name: "Facilities Management Expo",
      sector: "Tesis Yönetimi ve Akıllı Binalar",
      description:
        "Tesis yönetimi ve akıllı bina fuarı; modern binaların yönetimi ve işletilmesine yönelik teknolojilere odaklanır.",
      groups: [
        "Tesis yönetimi teknolojileri",
        "Akıllı bina sistemleri",
        "Bina otomasyonu",
        "İzleme ve kontrol sistemleri",
      ],
    },
    {
      id: "firexpo",
      name: "Firexpo",
      sector: "Yangın Güvenliği ve Acil Durum Çözümleri",
      description:
        "Yangın güvenliği fuarı; yangın algılama, söndürme ve acil durum müdahale teknolojilerini kapsar.",
      groups: [
        "Yangın algılama ve söndürme",
        "Acil durum müdahale teknolojileri",
      ],
    },
  ],
};
