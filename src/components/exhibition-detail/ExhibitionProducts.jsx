import { useTranslation } from "../../hooks/useTranslation";

import productFinance from "../../assets/exhibitions/wampex/products/product-finance.jpg";
import productMining from "../../assets/exhibitions/wampex/products/product-mining.jpg";
import productDigital from "../../assets/exhibitions/wampex/products/product-digital.jpg";
import productProcessing from "../../assets/exhibitions/wampex/products/product-processing.jpg";
import productEnergy from "../../assets/exhibitions/wampex/products/product-energy.jpg";
import productLogistics from "../../assets/exhibitions/wampex/products/product-logistics.jpg";

const productImages = [
  productFinance,
  productMining,
  productDigital,
  productProcessing,
  productEnergy,
  productLogistics,
];

function ExhibitionProducts() {
  const { language } = useTranslation();

  const content = {
    en: {
      label: "Product Scope",
      title: "Products & Technologies",
      description:
        "Explore the major product groups presented across the mining value chain at WAMPEX West Africa.",
      productGroups: [
        {
          number: "01",
          title: "Financial & Legal Services",
          description:
            "Investment, insurance and regulatory advisory services.",
        },
        {
          number: "02",
          title: "Mining Equipment",
          description:
            "Heavy machinery, field equipment and spare parts.",
        },
        {
          number: "03",
          title: "Digital Mining Technologies",
          description:
            "Automation, sensors and field software solutions.",
        },
        {
          number: "04",
          title: "Mineral Processing & Refining",
          description:
            "Ore beneficiation and refining solutions.",
        },
        {
          number: "05",
          title: "Energy & Power Supply",
          description:
            "On-site energy infrastructure and power solutions.",
        },
        {
          number: "06",
          title: "Logistics & Transportation",
          description:
            "On-site and international transportation services.",
        },
      ],
    },

    tr: {
      label: "Ürün Kapsamı",
      title: "Ürünler ve Teknolojiler",
      description:
        "WAMPEX West Africa'da madencilik değer zincirinin tamamında sergilenen başlıca ürün gruplarını keşfedin.",
      productGroups: [
        {
          number: "01",
          title: "Finansal & Hukuki Hizmetler",
          description:
            "Yatırım, sigorta ve mevzuat danışmanlığı.",
        },
        {
          number: "02",
          title: "Madencilik Ekipmanları",
          description:
            "Ağır makine, saha ekipmanı ve yedek parça.",
        },
        {
          number: "03",
          title: "Dijital Madencilik Teknolojileri",
          description:
            "Otomasyon, sensörler ve saha yazılımları.",
        },
        {
          number: "04",
          title: "Mineral İşleme & Arıtma",
          description:
            "Cevher zenginleştirme ve arıtma çözümleri.",
        },
        {
          number: "05",
          title: "Enerji & Güç Tedariki",
          description:
            "Saha enerji altyapısı ve güç çözümleri.",
        },
        {
          number: "06",
          title: "Lojistik & Ulaştırma",
          description:
            "Saha içi ve uluslararası taşımacılık.",
        },
      ],
    },
  };

  const t = content[language] ?? content.en;

  return (
    <section className="exhibition-products section-spacing">
      <div className="container">
        <div className="section-header">
          <p className="section-label">
            {t.label}
          </p>

          <h2>{t.title}</h2>

          <p>{t.description}</p>
        </div>

        <div className="products-grid">
          {t.productGroups.map((item, index) => (
            <article
              key={item.number}
              className="product-card"
            >
              <div className="product-image">
                <img
                  src={productImages[index % productImages.length]}
                  alt={item.title}
                />

                <span className="product-number">
                  {item.number}
                </span>
              </div>

              <div className="product-body">
                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExhibitionProducts;
