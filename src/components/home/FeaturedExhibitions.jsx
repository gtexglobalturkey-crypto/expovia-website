import { useEffect, useRef, useState } from "react";
import { Factory, HardHat, Pickaxe, Wheat, Zap } from "lucide-react";

import { useTranslation } from "../../hooks/useTranslation";
import "./FeaturedExhibitions.css";

const sectorIcons = [Pickaxe, HardHat, Zap, Wheat, Factory];

function FeaturedExhibitions() {
  const { language } = useTranslation();
  const sectorsRef = useRef(null);
  const [sectorsVisible, setSectorsVisible] = useState(false);

  useEffect(() => {
    const node = sectorsRef.current;

    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectorsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const content = {
    en: {
      eyebrow: "Exhibition Portfolio",
      title: "International Exhibition Portfolio",
      description:
        "VIAFA is building its international exhibition portfolio and establishing partnerships with international exhibition organizers across these strategic sectors.",

      sectors: [
        {
          name: "Mining",
          description:
            "Mining equipment, extraction technologies and processing solutions.",
        },
        {
          name: "Construction",
          description:
            "Building materials, construction machinery and infrastructure technologies.",
        },
        {
          name: "Energy",
          description:
            "Conventional and renewable energy generation technologies.",
        },
        {
          name: "Agriculture",
          description:
            "Agricultural machinery, production and processing technologies.",
        },
        {
          name: "Manufacturing",
          description:
            "Industrial production, automation and manufacturing technologies.",
        },
      ],
    },

    tr: {
      eyebrow: "Fuar Portföyü",
      title: "Uluslararası Fuar Portföyü",
      description:
        "VIAFA, bu stratejik sektörlerde uluslararası fuar portföyünü oluşturmakta ve fuar organizatörleriyle iş birlikleri kurmaktadır.",

      sectors: [
        {
          name: "Madencilik",
          description:
            "Maden çıkarma ekipmanları, işleme teknolojileri ve saha çözümleri.",
        },
        {
          name: "İnşaat",
          description:
            "Yapı malzemeleri, inşaat makineleri ve altyapı teknolojileri.",
        },
        {
          name: "Enerji",
          description:
            "Geleneksel ve yenilenebilir enerji üretim teknolojileri.",
        },
        {
          name: "Tarım",
          description:
            "Tarım makineleri, üretim ve işleme teknolojileri.",
        },
        {
          name: "Üretim",
          description:
            "Endüstriyel üretim, otomasyon ve imalat teknolojileri.",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section
      id="exhibitions"
      className="home-featured-exhibitions"
    >
      <div className="container">
        <div className="home-featured-exhibitions__heading">
          <div className="home-featured-exhibitions__heading-content">
            <div className="home-featured-exhibitions__eyebrow">
              <span />
              <p>{t.eyebrow}</p>
            </div>

            <h2>{t.title}</h2>
          </div>

          <div className="home-featured-exhibitions__intro">
            <p>{t.description}</p>
          </div>
        </div>

        <div
          ref={sectorsRef}
          className={`home-featured-exhibitions__sectors ${
            sectorsVisible ? "is-visible" : ""
          }`}
        >
          {t.sectors.map((sector, index) => {
            const Icon = sectorIcons[index];

            return (
              <div
                key={sector.name}
                className="home-featured-exhibitions__sector-card"
              >
                <div className="home-featured-exhibitions__sector-icon">
                  <Icon
                    size={22}
                    strokeWidth={1.7}
                  />
                </div>

                <h3>{sector.name}</h3>

                <p>{sector.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeaturedExhibitions;
