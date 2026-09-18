import { useTranslation } from "../../hooks/useTranslation";

function ExhibitionStatistics() {
  const { language } = useTranslation();

  const content = {
    en: [
      {
        value: "10,000+",
        label: "Professional Visitors",
      },
      {
        value: "350+",
        label: "Exhibiting Companies",
      },
      {
        value: "60+",
        label: "Countries Represented",
      },
      {
        value: "20th",
        label: "Anniversary Edition",
      },
    ],

    tr: [
      {
        value: "10.000+",
        label: "Profesyonel Ziyaretçi",
      },
      {
        value: "350+",
        label: "Katılımcı Firma",
      },
      {
        value: "60+",
        label: "Temsil Edilen Ülke",
      },
      {
        value: "20.",
        label: "Yıl Dönümü Edisyonu",
      },
    ],
  };

  const statistics = content[language] ?? content.en;

  return (
    <section className="exhibition-statistics">
      <div className="container">
        <div className="statistics-grid">
          {statistics.map((item) => (
            <article
              key={item.label}
              className="statistic-card"
            >
              <strong>{item.value}</strong>

              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExhibitionStatistics;
