import { useTranslation } from "../../hooks/useTranslation";

function IndustriesHero() {
  const { language } = useTranslation();

  const content = {
    en: {
      label: "Industries",
      title: "Sector-Focused Exhibition Opportunities",
      description:
        "VIAFA helps Turkish manufacturers and exporters identify international exhibitions aligned with their products, commercial goals and target markets.",
    },

    tr: {
      label: "Sektörler",
      title: "Hizmet Verdiğimiz Sektörler",
      description:
        "VIAFA, Türk üretici ve ihracatçıların ürünlerine, ticari hedeflerine ve hedef pazarlarına uygun uluslararası fuarları belirlemelerine yardımcı olur.",
    },
  };

  const t = content[language];

  return (
    <section className="industries-hero">
      <div className="container industries-hero-layout">
        <div className="industries-hero-heading">
          <p className="section-label">
            {t.label}
          </p>

          <h1>{t.title}</h1>
        </div>

        <div className="industries-hero-intro">
          <p>{t.description}</p>
        </div>
      </div>
    </section>
  );
}

export default IndustriesHero;