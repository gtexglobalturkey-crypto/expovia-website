import { Link } from "react-router-dom";

import { useTranslation } from "../../../hooks/useTranslation";

// VIAFA offers only the standard booth for this exhibition — no raw space.
// Deliberately no prices: 2027 pricing is shared through the contact flow
// until verified commercial terms are final.
function ContechParticipation() {
  const { language } = useTranslation();

  const content = {
    en: {
      label: "Participation",
      title: "Standard Booth",
      description:
        "VIAFA offers participation at CONTECH Vietnam 2027 with a ready-built standard booth.",
      badge: "Ready-Built Package",
      boothTitle: "Standard Booth — 9 m²",
      boothDescription:
        "A ready-built booth for companies looking for a practical way to exhibit.",
      equipmentLabel: "Booth equipment",
      equipment: [
        "Partition walls",
        "Carpet",
        "Company fascia / name board",
        "1 table",
        "2 chairs",
        "1 × 13A / 220V electrical socket",
        "2 lights",
        "Waste bin",
      ],
      pricingLabel: "Pricing",
      pricingTitle: "2027 participation terms on request",
      pricingText:
        "Prices are not published on this page. Contact VIAFA, the Türkiye Sales Agent for CONTECH Vietnam 2027, for current participation terms and booth availability.",
      cta: "Request Participation Information",
    },

    tr: {
      label: "Katılım",
      title: "Standart Stant",
      description:
        "VIAFA, CONTECH Vietnam 2027'ye hazır kurulu standart stant ile katılım imkânı sunar.",
      badge: "Hazır Stant Paketi",
      boothTitle: "Standart Stant — 9 m²",
      boothDescription:
        "Pratik bir katılım çözümü arayan firmalar için hazır kurulu stant.",
      equipmentLabel: "Stant donanımı",
      equipment: [
        "Bölme duvarları",
        "Halı",
        "Firma alınlık yazısı / isim panosu",
        "1 adet masa",
        "2 adet sandalye",
        "1 adet 13A / 220V elektrik prizi",
        "2 adet aydınlatma",
        "Çöp kutusu",
      ],
      pricingLabel: "Fiyatlandırma",
      pricingTitle: "2027 katılım koşulları talep üzerine",
      pricingText:
        "Fiyatlar bu sayfada yayımlanmamaktadır. Güncel katılım koşulları ve stant müsaitliği için CONTECH Vietnam 2027'nin Türkiye Satış Temsilcisi VIAFA ile iletişime geçebilirsiniz.",
      cta: "Katılım Bilgisi Al",
    },
  };

  const t = content[language];

  return (
    <section className="exhibition-participation contech-participation section-spacing">
      <div className="container">
        <div className="section-header">
          <p className="section-label">
            {t.label}
          </p>

          <h2>{t.title}</h2>

          <p>{t.description}</p>
        </div>

        <div className="contech-participation-layout">
          <article className="participation-card featured">
            <div className="participation-top">
              <span className="participation-number">
                9 m²
              </span>
            </div>

            <span className="participation-badge">
              {t.badge}
            </span>

            <h3>{t.boothTitle}</h3>

            <p>{t.boothDescription}</p>

            <p className="contech-equipment-label">
              {t.equipmentLabel}
            </p>

            <ul className="participation-features">
              {t.equipment.map((item) => (
                <li key={item}>
                  ✓ {item}
                </li>
              ))}
            </ul>
          </article>

          <aside className="contech-pricing-panel">
            <p className="section-label">
              {t.pricingLabel}
            </p>

            <h3>{t.pricingTitle}</h3>

            <p>{t.pricingText}</p>

            <Link
              to="/contact"
              className="contech-btn"
            >
              {t.cta}
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default ContechParticipation;
