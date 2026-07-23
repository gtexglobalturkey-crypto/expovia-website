import { useTranslation } from "../../hooks/useTranslation";

function ExhibitionProducts() {
  const { language } = useTranslation();

  const content = {
    en: {
      label: "Product Scope",
      title: "Products & Technologies",
      description:
        "Explore the major product groups and innovative technologies presented throughout the exhibition.",
      productGroups: [
        {
          number: "01",
          title: "Mining Machinery",
          description:
            "Heavy-duty equipment and complete mining systems.",
        },
        {
          number: "02",
          title: "Drilling Technologies",
          description:
            "Exploration, drilling and rock excavation solutions.",
        },
        {
          number: "03",
          title: "Crushing & Screening",
          description:
            "Modern crushing, screening and material handling systems.",
        },
        {
          number: "04",
          title: "Conveyor Solutions",
          description:
            "Bulk material transportation and conveying technologies.",
        },
        {
          number: "05",
          title: "Mineral Processing",
          description:
            "Processing equipment and mineral recovery technologies.",
        },
        {
          number: "06",
          title: "Automation Systems",
          description:
            "Digital mining, automation and smart production solutions.",
        },
        {
          number: "07",
          title: "Safety Equipment",
          description:
            "Occupational safety, monitoring and protection systems.",
        },
        {
          number: "08",
          title: "Engineering Services",
          description:
            "Consultancy, project management and technical services.",
        },
      ],
    },

    tr: {
      label: "Ürün Kapsamı",
      title: "Ürünler ve Teknolojiler",
      description:
        "Fuar boyunca sergilenen başlıca ürün gruplarını ve yenilikçi teknolojileri keşfedin.",
      productGroups: [
        {
          number: "01",
          title: "Maden Makineleri",
          description:
            "Ağır hizmet ekipmanları ve kapsamlı madencilik sistemleri.",
        },
        {
          number: "02",
          title: "Sondaj Teknolojileri",
          description:
            "Arama, sondaj ve kaya kazı çözümleri.",
        },
        {
          number: "03",
          title: "Kırma ve Eleme",
          description:
            "Modern kırma, eleme ve malzeme taşıma sistemleri.",
        },
        {
          number: "04",
          title: "Konveyör Çözümleri",
          description:
            "Dökme malzeme taşıma ve konveyör teknolojileri.",
        },
        {
          number: "05",
          title: "Cevher Hazırlama",
          description:
            "İşleme ekipmanları ve mineral geri kazanım teknolojileri.",
        },
        {
          number: "06",
          title: "Otomasyon Sistemleri",
          description:
            "Dijital madencilik, otomasyon ve akıllı üretim çözümleri.",
        },
        {
          number: "07",
          title: "İş Güvenliği Ekipmanları",
          description:
            "İş güvenliği, izleme ve koruma sistemleri.",
        },
        {
          number: "08",
          title: "Mühendislik Hizmetleri",
          description:
            "Danışmanlık, proje yönetimi ve teknik hizmetler.",
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
          {t.productGroups.map((item) => (
            <article
              key={item.number}
              className="product-card"
            >
              <div className="product-top">
                <span className="product-number">
                  {item.number}
                </span>

                <div className="product-icon">
                  ⚙
                </div>
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExhibitionProducts;