import { Link } from "react-router-dom";

import { useTranslation } from "../../hooks/useTranslation";

function IndustryCTA() {
  const { language } = useTranslation();

  const content = {
    en: {
      label: "Find the Right Exhibition",
      title:
        "Explore International Exhibition Opportunities for Your Industry",
      description:
        "Discover exhibitions aligned with your products, target markets and international growth goals. EXPOVIA supports your company throughout the participation process.",
      button: "View Exhibitions",
    },

    tr: {
      label: "Doğru Fuarı Bulun",
      title:
        "Sektörünüze Uygun Uluslararası Fuar Fırsatlarını Keşfedin",
      description:
        "Ürünlerinize, hedef pazarlarınıza ve uluslararası büyüme hedeflerinize uygun fuarları keşfedin. EXPOVIA, katılım sürecinin tamamında şirketinize destek olur.",
      button: "Fuarları İnceleyin",
    },
  };

  const t = content[language];

  return (
    <section className="industry-cta section-spacing">
      <div className="container">
        <div className="industry-cta-card">
          <div>
            <p className="section-label">
              {t.label}
            </p>

            <h2>{t.title}</h2>

            <p>{t.description}</p>
          </div>

          <Link
            to="/exhibitions"
            className="industry-cta-button"
          >
            {t.button}

            <span aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default IndustryCTA;