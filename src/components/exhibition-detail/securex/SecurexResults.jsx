import { useTranslation } from "../../../hooks/useTranslation";

// Historical results only. Figures come from the organizer's 2026 Post Show
// Report and must stay clearly labelled as 2026 — never as 2027 forecasts.
// The 2025 figures on the brochure are intentionally not used.
function SecurexResults() {
  const { language } = useTranslation();

  const content = {
    en: {
      label: "Historical Results",
      title: "2026 Event Results",
      description:
        "Organizer-reported results from the 2026 co-located event platform. These are historical figures, not forecasts or confirmed 2027 numbers.",
      source: "Source: organizer's 2026 Post Show Report.",
      metrics: [
        { value: "9,000+", label: "Qualified Industry Visitors" },
        { value: "270+", label: "Exhibitors" },
        { value: "30+", label: "Countries Represented" },
        {
          value: "82.5%",
          label: "Influence or Make Purchasing Decisions",
        },
        { value: "134", label: "Average Leads per Exhibitor" },
      ],
    },

    tr: {
      label: "Geçmiş Sonuçlar",
      title: "2026 Fuar Sonuçları",
      description:
        "Organizatörün 2026 yılında birlikte düzenlenen fuar platformu için bildirdiği sonuçlar. Bunlar geçmiş verilerdir; 2027 için tahmin veya onaylanmış rakam değildir.",
      source: "Kaynak: organizatörün 2026 Fuar Sonrası Raporu.",
      metrics: [
        { value: "9.000+", label: "Nitelikli Sektör Ziyaretçisi" },
        { value: "270+", label: "Katılımcı" },
        { value: "30+", label: "Temsil Edilen Ülke" },
        {
          value: "%82,5",
          label: "Satın Alma Kararlarını Etkileyen veya Veren",
        },
        {
          value: "134",
          label: "Katılımcı Başına Ortalama Potansiyel Müşteri",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section className="exhibition-profiles securex-results">
      <div className="container">
        <div className="section-header">
          <p className="section-label">
            {t.label}
          </p>

          <h2>{t.title}</h2>

          <p>{t.description}</p>
        </div>

        <div className="statistics-grid">
          {t.metrics.map((item) => (
            <article
              key={item.label}
              className="statistic-card"
            >
              <strong>{item.value}</strong>

              <span>{item.label}</span>
            </article>
          ))}
        </div>

        <p className="securex-results-note">
          {t.source}
        </p>
      </div>
    </section>
  );
}

export default SecurexResults;
