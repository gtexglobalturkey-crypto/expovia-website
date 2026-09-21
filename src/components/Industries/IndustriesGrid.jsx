import { Link } from "react-router-dom";

import { useTranslation } from "../../hooks/useTranslation";

function IndustriesGrid() {
  const { language } = useTranslation();

  const content = {
    en: {
      industries: [
        {
          number: "01",
          title: "Mining",
          description:
            "Mining technologies, mineral processing, machinery and equipment.",
        },
        {
          number: "02",
          title: "Construction",
          description:
            "Building materials, infrastructure, engineering and construction technologies.",
        },
        {
          number: "03",
          title: "Energy",
          description:
            "Conventional energy, renewable technologies and power systems.",
        },
        {
          number: "04",
          title: "Food & Agriculture",
          description:
            "Food production, processing, packaging and agricultural technologies.",
        },
        {
          number: "05",
          title: "Manufacturing",
          description:
            "Production technologies, automation and advanced manufacturing.",
        },
        {
          number: "06",
          title: "Logistics",
          description:
            "Transportation, supply chain, warehousing and logistics technologies.",
        },
        {
          number: "07",
          title: "Technology & Security",
          description:
            "Digital transformation, industrial software, security and innovation.",
        },
        {
          number: "08",
          title: "Business Services",
          description:
            "International trade, investment, partnerships and business development.",
        },
      ],
    },

    tr: {
      industries: [
        {
          number: "01",
          title: "Madencilik",
          description:
            "Madencilik teknolojileri, mineral işleme, makine ve ekipman çözümleri.",
        },
        {
          number: "02",
          title: "İnşaat",
          description:
            "Yapı malzemeleri, altyapı, mühendislik ve inşaat teknolojileri.",
        },
        {
          number: "03",
          title: "Enerji",
          description:
            "Geleneksel enerji, yenilenebilir enerji teknolojileri ve güç sistemleri.",
        },
        {
          number: "04",
          title: "Gıda ve Tarım",
          description:
            "Gıda üretimi, işleme, paketleme ve tarım teknolojileri.",
        },
        {
          number: "05",
          title: "Üretim",
          description:
            "Üretim teknolojileri, otomasyon ve ileri üretim çözümleri.",
        },
        {
          number: "06",
          title: "Lojistik",
          description:
            "Taşımacılık, tedarik zinciri, depolama ve lojistik teknolojileri.",
        },
        {
          number: "07",
          title: "Teknoloji ve Güvenlik",
          description:
            "Dijital dönüşüm, endüstriyel yazılımlar, güvenlik sistemleri ve yenilikçi teknolojiler.",
        },
        {
          number: "08",
          title: "İş Hizmetleri",
          description:
            "Uluslararası ticaret, yatırım, iş ortaklıkları ve iş geliştirme.",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section
      id="industries-grid"
      className="industries-grid-section"
    >
      <div className="container">
        <div className="industries-grid">
          {t.industries.map((industry) => (
            <Link
              to="/exhibitions"
              className="industry-card"
              key={industry.number}
            >
              <div className="industry-card-top">
                <span className="industry-card-number">
                  {industry.number}
                </span>

                <span
                  className="industry-card-arrow"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </div>

              <div className="industry-card-content">
                <h3>{industry.title}</h3>

                <p>{industry.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IndustriesGrid;