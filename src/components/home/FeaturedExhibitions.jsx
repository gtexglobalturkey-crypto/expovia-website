import { useTranslation } from "../../hooks/useTranslation";
import "./FeaturedExhibitions.css";

function FeaturedExhibitions() {
  const { language } = useTranslation();

  const content = {
    en: {
      eyebrow: "Exhibition Portfolio",
      title: "International Exhibition Portfolio",
      description:
        "EREXPO is developing its international exhibition portfolio and establishing partnerships with international exhibition organizers. Confirmed exhibitions and participation opportunities will be announced here.",

      sectors: [
        {
          name: "Mining",
          description:
            "Mining equipment, technologies and mineral processing.",
        },
        {
          name: "Construction",
          description:
            "Building materials, machinery and infrastructure technologies.",
        },
        {
          name: "Energy",
          description:
            "Conventional and renewable energy technologies.",
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
        "EREXPO, uluslararası fuar portföyünü oluşturmakta ve uluslararası fuar organizatörleriyle iş birlikleri kurmaktadır. Onaylanan fuarlar ve katılım fırsatları burada duyurulacaktır.",

      sectors: [
        {
          name: "Madencilik",
          description:
            "Madencilik ekipmanları, teknolojileri ve maden işleme.",
        },
        {
          name: "İnşaat",
          description:
            "Yapı malzemeleri, makineler ve altyapı teknolojileri.",
        },
        {
          name: "Enerji",
          description:
            "Geleneksel ve yenilenebilir enerji teknolojileri.",
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
      className="featured-exhibitions"
    >
      <div className="container">
        <div className="featured-exhibitions__heading">
          <div className="featured-exhibitions__heading-content">
            <div className="featured-exhibitions__eyebrow">
              <span />
              <p>{t.eyebrow}</p>
            </div>

            <h2>{t.title}</h2>
          </div>

          <div className="featured-exhibitions__intro">
            <p>{t.description}</p>
          </div>
        </div>

        <div className="featured-exhibitions__sectors">
          {t.sectors.map((sector) => (
            <div
              key={sector.name}
              className="featured-exhibitions__sector-card"
            >
              <h3>{sector.name}</h3>

              <p>{sector.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedExhibitions;
