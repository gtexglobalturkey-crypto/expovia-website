import { HardHat, Pickaxe, TrainTrack } from "lucide-react";

import { useTranslation } from "../../../hooks/useTranslation";

import {
  CONTECH_IMAGES,
  contechSectors,
} from "../../../data/contechVietnam2027";

const sectorIcons = {
  construction: HardHat,
  mining: Pickaxe,
  transport: TrainTrack,
};

// "Who Should Exhibit": a photo strip for the exhibition's fields, then the
// verified product scope per sector, presented like SecurexShows
// (.products-grid / .product-card).
function ContechSectors() {
  const { language } = useTranslation();

  const content = {
    en: {
      label: "Who Should Exhibit?",
      title: "Product Scope by Sector",
      description:
        "Manufacturers and suppliers whose products fall within the exhibition's construction, mining and transport infrastructure scope.",
      photos: {
        construction: {
          label: "Construction",
          alt: "Tower cranes above buildings under construction",
        },
        materials: {
          label: "Construction Materials",
          alt: "Concrete blocks, bricks, pipes and timber",
        },
        mining: {
          label: "Mining",
          alt: "Yellow mining truck at a surface mine",
        },
        transport: {
          label: "Transport Infrastructure",
          alt: "Cars and trucks on a multi-lane highway",
        },
      },
    },

    tr: {
      label: "Kimler Katılmalı?",
      title: "Sektörlere Göre Ürün Kapsamı",
      description:
        "Ürünleri fuarın inşaat, madencilik ve ulaştırma altyapısı kapsamına giren üretici ve tedarikçiler.",
      photos: {
        construction: {
          label: "İnşaat",
          alt: "İnşaat hâlindeki binaların üzerinde kule vinçler",
        },
        materials: {
          label: "İnşaat Malzemeleri",
          alt: "Beton bloklar, tuğlalar, borular ve kereste",
        },
        mining: {
          label: "Madencilik",
          alt: "Açık ocak madeninde sarı maden kamyonu",
        },
        transport: {
          label: "Ulaştırma Altyapısı",
          alt: "Çok şeritli otoyolda otomobiller ve kamyonlar",
        },
      },
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

        <div className="contech-sector-photos">
          {CONTECH_IMAGES.sectors.map((photo) => (
            <figure
              key={photo.id}
              className={`contech-sector-photo contech-sector-photo--${photo.id}`}
            >
              <img
                src={photo.src}
                alt={t.photos[photo.id].alt}
                width={photo.width}
                height={photo.height}
                loading="lazy"
              />

              <figcaption>{t.photos[photo.id].label}</figcaption>
            </figure>
          ))}
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
