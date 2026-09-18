import { useTranslation } from "../../hooks/useTranslation";

function ExhibitionHighlights() {
  const { language } = useTranslation();

  const content = {
    en: {
      label: "Why Participate",
      title: "Four Reasons to Exhibit at WAMPEX West Africa",
      description:
        "Successful exhibition participation is more than displaying products. It is about creating business opportunities, building strategic partnerships and accelerating international growth.",

      highlights: [
        {
          number: "01",
          title: "Meet Qualified Buyers",
          subtitle: "Expand Your Customer Network",
          description:
            "Connect directly with purchasing managers, distributors, project owners and decision makers actively looking for innovative mining products and solutions.",
        },
        {
          number: "02",
          title: "Strengthen Your Brand",
          subtitle: "Increase International Visibility",
          description:
            "Position your company alongside leading global manufacturers and reinforce your brand presence in one of the region's most influential mining exhibitions.",
        },
        {
          number: "03",
          title: "Discover New Opportunities",
          subtitle: "Generate Valuable Business Leads",
          description:
            "Identify new export markets, establish strategic partnerships and develop long-term commercial relationships with international stakeholders.",
        },
        {
          number: "04",
          title: "Showcase Innovation",
          subtitle: "Demonstrate Your Technology",
          description:
            "Present your latest machinery, equipment and technologies to an audience specifically interested in mining innovation and industrial development.",
        },
      ],
    },

    tr: {
      label: "Neden Katılmalısınız?",
      title: "WAMPEX West Africa'da Katılımcı Olmak İçin Dört Neden",
      description:
        "Başarılı bir fuar katılımı yalnızca ürün sergilemekten ibaret değildir. Yeni iş fırsatları oluşturmak, stratejik ortaklıklar kurmak ve uluslararası büyümeyi hızlandırmak anlamına gelir.",

      highlights: [
        {
          number: "01",
          title: "Nitelikli Alıcılarla Tanışın",
          subtitle: "Müşteri Ağınızı Genişletin",
          description:
            "Yenilikçi madencilik ürünleri ve çözümleri arayan satın alma yöneticileri, distribütörler, proje sahipleri ve karar vericilerle doğrudan bağlantı kurun.",
        },
        {
          number: "02",
          title: "Markanızı Güçlendirin",
          subtitle: "Uluslararası Görünürlüğünüzü Artırın",
          description:
            "Şirketinizi önde gelen küresel üreticilerle birlikte konumlandırın ve bölgenin en etkili madencilik fuarlarından birinde marka varlığınızı güçlendirin.",
        },
        {
          number: "03",
          title: "Yeni Fırsatları Keşfedin",
          subtitle: "Değerli İş Bağlantıları Oluşturun",
          description:
            "Yeni ihracat pazarlarını belirleyin, stratejik ortaklıklar kurun ve uluslararası paydaşlarla uzun vadeli ticari ilişkiler geliştirin.",
        },
        {
          number: "04",
          title: "Yeniliklerinizi Sergileyin",
          subtitle: "Teknolojinizi Tanıtın",
          description:
            "En yeni makine, ekipman ve teknolojilerinizi madencilik inovasyonu ve endüstriyel gelişimle yakından ilgilenen profesyonel bir ziyaretçi kitlesine sunun.",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section className="exhibition-highlights section-spacing">
      <div className="container">
        <div className="section-header">
          <p className="section-label">
            {t.label}
          </p>

          <h2>{t.title}</h2>

          <p>{t.description}</p>
        </div>

        <div className="highlights-grid">
          {t.highlights.map((item) => (
            <article
              key={item.number}
              className="highlight-card"
            >
              <div className="highlight-top">
                <span className="highlight-number">
                  {item.number}
                </span>

                <span className="highlight-line"></span>
              </div>

              <span className="highlight-subtitle">
                {item.subtitle}
              </span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <div className="highlight-arrow">
                →
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExhibitionHighlights;