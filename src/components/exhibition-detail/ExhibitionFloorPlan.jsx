import { Link } from "react-router-dom";

import { useTranslation } from "../../hooks/useTranslation";

function ExhibitionFloorPlan() {
  const { language } = useTranslation();

  const content = {
    en: {
      label: "Floor Plan",
      title: "Find the Best Stand Location",
      lead:
        "Stand location is one of the most important factors affecting exhibition performance. EREXPO helps you evaluate the available locations and select the most suitable position according to your products, visitor flow and marketing objectives.",
      advantages: [
        "Official exhibition floor plan",
        "Available stand locations",
        "Visitor traffic evaluation",
        "Stand size recommendations",
      ],
      primary: "Request Floor Plan",
      secondary: "Contact EREXPO",
      hallA: "Hall A",
      hallB: "Hall B",
      hallC: "Hall C",
      hallD: "Hall D",
      recommended: "Recommended Stand",
      noteTitle: "Interactive Floor Plan",
      note:
        "The official exhibition floor plan and available stand locations will be displayed here after publication by the organizer.",
    },

    tr: {
      label: "Fuar Yerleşim Planı",
      title: "En Uygun Stand Konumunu Bulun",
      lead:
        "Stand konumu, fuar performansını etkileyen en önemli unsurlardan biridir. EREXPO; mevcut alanları değerlendirmenize, ziyaretçi akışını analiz etmenize ve ürünleriniz ile pazarlama hedeflerinize en uygun konumu seçmenize yardımcı olur.",
      advantages: [
        "Resmî fuar yerleşim planı",
        "Müsait stand alanları",
        "Ziyaretçi trafiği değerlendirmesi",
        "Stand ölçüsü önerileri",
      ],
      primary: "Yerleşim Planını Talep Et",
      secondary: "EREXPO ile İletişime Geç",
      hallA: "Salon A",
      hallB: "Salon B",
      hallC: "Salon C",
      hallD: "Salon D",
      recommended: "Önerilen Stand",
      noteTitle: "Etkileşimli Yerleşim Planı",
      note:
        "Resmî fuar yerleşim planı ve müsait stand alanları, organizatör tarafından yayımlandıktan sonra burada gösterilecektir.",
    },
  };

  const t = content[language] ?? content.en;

  return (
    <section className="exhibition-floor-plan section-spacing">
      <div className="container">
        <div className="floor-plan-layout">
          <div className="floor-plan-content">
            <p className="section-label">
              {t.label}
            </p>

            <h2>{t.title}</h2>

            <p className="floor-plan-lead">
              {t.lead}
            </p>

            <ul className="floor-plan-features">
              {t.advantages.map((item) => (
                <li key={item}>
                  ✓ {item}
                </li>
              ))}
            </ul>

            <div className="floor-plan-actions">
              <Link
                to="/contact"
                className="btn btn-primary"
              >
                {t.primary}
              </Link>

              <Link
                to="/contact"
                className="btn btn-secondary"
              >
                {t.secondary}
              </Link>
            </div>
          </div>

          <div className="floor-plan-preview">
            <div className="floor-plan-map">
              <div className="hall hall-a">
                {t.hallA}
              </div>

              <div className="hall hall-b">
                {t.hallB}
              </div>

              <div className="hall hall-c">
                {t.hallC}
              </div>

              <div className="hall hall-d">
                {t.hallD}
              </div>

              <div className="stand-marker">
                {t.recommended}
              </div>
            </div>

            <div className="floor-plan-note">
              <strong>{t.noteTitle}</strong>

              <p>{t.note}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExhibitionFloorPlan;