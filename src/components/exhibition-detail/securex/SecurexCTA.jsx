import { Link } from "react-router-dom";

import { useTranslation } from "../../../hooks/useTranslation";

// Same structure and contact mechanism (/contact) as ExhibitionDetailCTA.
// VIAFA's representation of Securex is not finalized, so this CTA must not
// state or imply official, appointed or exclusive representation.
function SecurexCTA() {
  const { language } = useTranslation();

  const content = {
    en: {
      label: "Participation Inquiries",
      title: "Interested in Securex South Africa 2027?",
      description:
        "Companies from Türkiye interested in exhibiting at Securex South Africa 2027 are welcome to contact VIAFA to discuss their products, target market and interest across the four co-located shows.",
      benefits: [
        "Participation Guidance",
        "Sector Fit Assessment",
        "Pre-Exhibition Guidance",
      ],
      secondary: "Contact VIAFA",
    },

    tr: {
      label: "Katılım Talepleri",
      title: "Securex South Africa 2027 ile İlgileniyor musunuz?",
      description:
        "Securex South Africa 2027'ye katılmayı düşünen Türkiye'deki firmalar; ürünlerini, hedef pazarlarını ve dört fuardaki ilgi alanlarını görüşmek üzere VIAFA ile iletişime geçebilir.",
      benefits: [
        "Katılım Danışmanlığı",
        "Sektörel Uygunluk Değerlendirmesi",
        "Fuar Öncesi Yönlendirme",
      ],
      secondary: "VIAFA ile İletişime Geçin",
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
              {t.secondary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecurexCTA;
