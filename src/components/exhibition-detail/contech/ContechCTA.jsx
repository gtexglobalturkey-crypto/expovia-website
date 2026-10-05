import { Link } from "react-router-dom";

import { useTranslation } from "../../../hooks/useTranslation";

// Same structure and contact mechanism (/contact) as SecurexCTA. VIAFA is
// the Türkiye Sales Agent for CONTECH Vietnam 2027 — never describe the
// role as exclusive.
function ContechCTA() {
  const { language } = useTranslation();

  const content = {
    en: {
      label: "Türkiye Sales Agent",
      title: "Interested in CONTECH Vietnam 2027?",
      description:
        "VIAFA is the Türkiye Sales Agent for CONTECH Vietnam 2027. Companies from Türkiye can contact VIAFA for participation information, standard booth details and the application process.",
      benefits: [
        "Participation Information",
        "Standard Booth Details",
        "Application Guidance",
      ],
      primary: "Request Participation Information",
    },

    tr: {
      label: "Türkiye Satış Temsilcisi",
      title: "CONTECH Vietnam 2027 ile İlgileniyor musunuz?",
      description:
        "VIAFA, CONTECH Vietnam 2027'nin Türkiye Satış Temsilcisidir. Türkiye'deki firmalar katılım bilgisi, standart stant detayları ve başvuru süreci için VIAFA ile iletişime geçebilir.",
      benefits: [
        "Katılım Bilgisi",
        "Standart Stant Detayları",
        "Başvuru Yönlendirmesi",
      ],
      primary: "Katılım Bilgisi Al",
    },
  };

  const t = content[language];

  return (
    <section className="exhibition-detail-cta section-spacing">
      <div className="container">
        <div className="cta-card">
          <p className="section-label">
            {t.label}
          </p>

          <h2>{t.title}</h2>

          <p className="cta-description">
            {t.description}
          </p>

          <div className="cta-benefits">
            {t.benefits.map((benefit) => (
              <span key={benefit}>
                ✓ {benefit}
              </span>
            ))}
          </div>

          <div className="cta-actions">
            <Link
              to="/contact"
              className="btn btn-primary"
            >
              {t.primary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContechCTA;
