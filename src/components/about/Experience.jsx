import "../../styles/About/experience.css";

import { useTranslation } from "../../hooks/useTranslation";

function Experience() {
  const { language } = useTranslation();

  const content = {
    en: {
      label: "Experience",
      titleFirst: "More Than 15 Years of",
      titleSecond: "International Exhibition Experience",
      firstParagraph:
        "For more than fifteen years, we have worked closely with international exhibition organizers, manufacturers, exporters and industry professionals. During this journey, we gained practical experience in exhibition planning, organizer coordination, exhibitor support and international business development.",
      secondParagraph:
        "EXPOVIA brings together this experience with a modern and transparent approach, helping Turkish companies participate in international exhibitions with confidence while building sustainable business relationships across global markets.",
      photoLabel: "PHOTO PLACEHOLDER",
      photoText: "International Exhibition Experience",

      stats: [
        {
          value: "15+",
          label: "Years of Exhibition Experience",
        },
        {
          value: "100+",
          label: "International Exhibitions",
        },
        {
          value: "1000+",
          label: "Business Meetings",
        },
        {
          value: "Global",
          label: "Organizer Network",
        },
      ],
    },

    tr: {
      label: "Deneyim",
      titleFirst: "15 Yılı Aşkın",
      titleSecond: "Uluslararası Fuar Deneyimi",
      firstParagraph:
        "On beş yılı aşkın süredir uluslararası fuar organizatörleri, üreticiler, ihracatçılar ve sektör profesyonelleriyle yakın çalışıyoruz. Bu süreç boyunca fuar planlaması, organizatör koordinasyonu, katılımcı desteği ve uluslararası iş geliştirme alanlarında güçlü bir uygulama deneyimi kazandık.",
      secondParagraph:
        "EXPOVIA, bu deneyimi modern ve şeffaf bir yaklaşımla bir araya getirerek Türk şirketlerinin uluslararası fuarlara güvenle katılmasına ve küresel pazarlarda sürdürülebilir iş ilişkileri kurmasına yardımcı olur.",
      photoLabel: "FOTOĞRAF ALANI",
      photoText: "Uluslararası Fuar Deneyimi",

      stats: [
        {
          value: "15+",
          label: "Yıllık Fuar Deneyimi",
        },
        {
          value: "100+",
          label: "Uluslararası Fuar",
        },
        {
          value: "1000+",
          label: "İş Görüşmesi",
        },
        {
          value: "Küresel",
          label: "Organizatör Ağı",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section className="experience-section">
      <div className="container">
        <div className="experience-layout">
          <div className="experience-content">
            <p className="section-label">
              {t.label}
            </p>

            <h2>
              {t.titleFirst}
              <br />
              {t.titleSecond}
            </h2>

            <p>{t.firstParagraph}</p>

            <p>{t.secondParagraph}</p>
          </div>

          <div className="experience-stats">
            {t.stats.map((item) => (
              <article
                key={item.label}
                className="experience-card"
              >
                <strong>{item.value}</strong>

                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="experience-gallery-placeholder">
          <div className="experience-photo">
            <span>{t.photoLabel}</span>

            <p>{t.photoText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;