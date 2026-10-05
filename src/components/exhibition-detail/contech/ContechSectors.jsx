import { HardHat, Pickaxe, TrainTrack } from "lucide-react";

import { useTranslation } from "../../../hooks/useTranslation";

import { contechSectors } from "../../../data/contechVietnam2027";

const sectorIcons = {
  construction: HardHat,
  mining: Pickaxe,
  transport: TrainTrack,
};

// "Who Should Exhibit": the verified product scope per sector, presented
// like SecurexShows (.products-grid / .product-card, no image).
function ContechSectors() {
  const { language } = useTranslation();

  const content = {
    en: {
      label: "Who Should Exhibit?",
      title: "Product Scope by Sector",
      description:
        "Manufacturers and suppliers whose products fall within the exhibition's construction, mining and transport infrastructure scope.",
    },

    tr: {
      label: "Kimler Katılmalı?",
      title: "Sektörlere Göre Ürün Kapsamı",
      description:
        "Ürünleri fuarın inşaat, madencilik ve ulaştırma altyapısı kapsamına giren üretici ve tedarikçiler.",
    },
  };

  const t = content[language];
  const sectors = contechSectors[language];

  return (
    <section className="exhibition-products contech-sectors section-spacing">
      <div className="container">
        <div className="section-header">
          <p className="section-label">
            {t.label}
          </p>

          <h2>{t.title}</h2>

          <p>{t.description}</p>
        </div>

        <div className="products-grid">
          {sectors.map((sector, index) => {
            const Icon = sectorIcons[sector.id];

            return (
              <article
                key={sector.id}
                className="product-card"
              >
                <div className="product-body">
                  <div className="contech-sector-head">
                    <span className="contech-sector-icon">
                      <Icon
                        size={22}
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />
                    </span>

                    <span className="contech-sector-number">
                      0{index + 1}
                    </span>
                  </div>

                  <h3>{sector.name}</h3>

                  <ul className="contech-scope-list">
                    {sector.items.map((item) => (
                      <li key={item}>
                        <span aria-hidden="true">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ContechSectors;
