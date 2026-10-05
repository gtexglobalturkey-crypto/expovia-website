import { useTranslation } from "../../../hooks/useTranslation";

// Programme elements announced by the organizer. Described neutrally:
// no promised meetings, leads or sales.
function ContechOpportunities() {
  const { language } = useTranslation();

  const content = {
    en: {
      label: "Business Opportunities",
      title: "More Than a Stand",
      description:
        "Alongside the exhibition floor, the organizer's program includes the following activities.",
      note: "Program details and schedules are announced by the organizer.",

      items: [
        {
          number: "01",
          subtitle: "Partner Connection",
          title: "Business Matching",
          description:
            "A program designed to connect exhibitors and visitors with potential business partners before, during and after the exhibition.",
        },
        {
          number: "02",
          subtitle: "Technical Sessions",
          title: "Technical Presentations",
          description:
            "Technical presentation sessions included in the organizer's program alongside the exhibition.",
        },
        {
          number: "03",
          subtitle: "Industry Knowledge",
          title: "Conferences & Seminars",
          description:
            "Industry conferences and seminars held as part of the exhibition program.",
        },
      ],
    },

    tr: {
      label: "İş Fırsatları",
      title: "Stanttan Fazlası",
      description:
        "Organizatörün programı, fuar alanının yanı sıra aşağıdaki etkinlikleri de kapsar.",
      note: "Program detayları ve takvimi organizatör tarafından duyurulur.",

      items: [
        {
          number: "01",
          subtitle: "İş Ortaklığı Bağlantısı",
          title: "İkili İş Görüşmeleri (Business Matching)",
          description:
            "Katılımcıları ve ziyaretçileri fuar öncesinde, sırasında ve sonrasında potansiyel iş ortaklarıyla buluşturmak için tasarlanmış bir program.",
        },
        {
          number: "02",
          subtitle: "Teknik Oturumlar",
          title: "Teknik Sunumlar",
          description:
            "Organizatörün fuar programında yer alan teknik sunum oturumları.",
        },
        {
          number: "03",
          subtitle: "Sektörel Bilgi",
          title: "Konferans ve Seminerler",
          description:
            "Fuar programı kapsamında düzenlenen sektörel konferans ve seminerler.",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section className="exhibition-highlights contech-opportunities section-spacing">
      <div className="container">
        <div className="section-header">
          <p className="section-label">
            {t.label}
          </p>

          <h2>{t.title}</h2>

          <p>{t.description}</p>
        </div>

        <div className="highlights-grid">
          {t.items.map((item) => (
            <article
              key={item.number}
              className="highlight-card"
            >
              <div className="highlight-top">
                <span className="highlight-number">
                  {item.number}
                </span>

                <span className="highlight-line"></span>
              </div>

              <span className="highlight-subtitle">
                {item.subtitle}
              </span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <p className="contech-note">
          {t.note}
        </p>
      </div>
    </section>
  );
}

export default ContechOpportunities;
