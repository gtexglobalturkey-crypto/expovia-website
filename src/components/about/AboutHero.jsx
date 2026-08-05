import { useTranslation } from "../../hooks/useTranslation";

function AboutHero() {
  const { language } = useTranslation();

  const content = {
    en: {
      label: "About EXPOVIA",
      titleFirst: "15 Years of Exhibition Experience.",
      titleSecond:
        "A New Generation of International Exhibition Services.",
      description:
        "EXPOVIA was founded on more than 15 years of international exhibition experience. After years of working with organizers, manufacturers and exporters, we established EXPOVIA to provide a more professional, transparent and reliable exhibition representation service for Turkish companies expanding into global markets.",
      highlights: [
        {
          title: "15+ Years",
          description: "International exhibition experience",
        },
        {
          title: "Founder-Led",
          description: "Built on industry expertise",
        },
        {
          title: "Global Network",
          description: "Strong organizer relationships",
        },
        {
          title: "Turkish Market",
          description: "Focused on international exhibition development",
        },
      ],
    },

    tr: {
      label: "EXPOVIA Hakkında",
      titleFirst: "15 Yıllık Fuar Deneyimi.",
      titleSecond:
        "Yeni Nesil Uluslararası Fuar Hizmetleri.",
      description:
        "EXPOVIA, 15 yılı aşkın uluslararası fuar deneyimi üzerine kurulmuştur. Organizatörler, üreticiler ve ihracatçılarla yıllar boyunca edinilen deneyimin ardından, küresel pazarlara açılan Türk şirketlerine daha profesyonel, şeffaf ve güvenilir bir fuar temsilcilik hizmeti sunmak amacıyla EXPOVIA’yu kurduk.",
      highlights: [
        {
          title: "15+ Yıl",
          description: "Uluslararası fuar deneyimi",
        },
        {
          title: "Kurucu Liderliğinde",
          description: "Sektör uzmanlığı üzerine kurulu",
        },
        {
          title: "Küresel Ağ",
          description: "Güçlü organizatör ilişkileri",
        },
        {
          title: "Türkiye Pazarı",
          description: "Uluslararası fuar gelişimine odaklı",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section className="about-hero section-spacing">
      <div className="container">
        <div className="about-hero-content">
          <p className="section-label">
            {t.label}
          </p>

          <h1>
            {t.titleFirst}
            <br />
            {t.titleSecond}
          </h1>

          <p>{t.description}</p>
        </div>

        <div className="about-hero-highlights">
          {t.highlights.map((item) => (
            <article
              key={item.title}
              className="about-hero-highlight"
            >
              <strong>{item.title}</strong>

              <span>{item.description}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutHero;