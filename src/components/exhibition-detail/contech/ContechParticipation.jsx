import { useTranslation } from "../../../hooks/useTranslation";

// VIAFA offers only the standard booth for this exhibition — no raw space.
// Deliberately no prices or pricing section on the page.
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
      </div>
    </section>
  );
}

export default ContechParticipation;
