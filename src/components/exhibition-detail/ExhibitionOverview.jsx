import { useTranslation } from "../../hooks/useTranslation";

function ExhibitionOverview() {
  const { language } = useTranslation();

  const content = {
    en: {
      label: "About the Exhibition",
      title: "A Strategic Business Platform for the Mining & Power Industry",
      lead:
        "WAMPEX West Africa brings together mining companies, machinery manufacturers, technology providers, engineering firms and qualified international buyers in one of West Africa's most important industrial meeting points.",
      secondary:
        "The exhibition creates a focused environment for companies to present new products, develop distributor relationships, explore export opportunities and connect directly with industry decision makers across the region's fast-growing mining and power market.",
      whyLabel: "Why Participate",
      whyTitle: "Four Reasons to Exhibit at WAMPEX West Africa",

      whyParticipate: [
        {
          number: "01",
          title: "Meet Qualified Buyers",
          description:
            "Connect directly with purchasing managers, distributors, project owners and decision makers actively looking for innovative mining products and solutions.",
        },
        {
          number: "02",
          title: "Strengthen Your Brand",
          description:
            "Position your company alongside leading global manufacturers and reinforce your brand presence in one of the region's most influential mining exhibitions.",
        },
        {
          number: "03",
          title: "Discover New Opportunities",
          description:
            "Identify new export markets, establish strategic partnerships and develop long-term commercial relationships with international stakeholders.",
        },
        {
          number: "04",
          title: "Showcase Innovation",
          description:
            "Present your latest machinery, equipment and technologies to an audience specifically interested in mining innovation and industrial development.",
        },
      ],
    },

    tr: {
      label: "Fuar Hakkında",
      title: "Madencilik ve Enerji Sektörü İçin Stratejik Bir İş Platformu",
      lead:
        "WAMPEX West Africa; madencilik şirketlerini, makine üreticilerini, teknoloji sağlayıcılarını, mühendislik firmalarını ve nitelikli uluslararası alıcıları Batı Afrika'nın en önemli endüstriyel buluşma noktalarından birinde bir araya getirir.",
      secondary:
        "Fuar, şirketlerin yeni ürünlerini tanıtabileceği, distribütör ilişkileri geliştirebileceği, ihracat fırsatlarını değerlendirebileceği ve bölgenin hızla büyüyen madencilik ve enerji pazarında sektörün karar vericileriyle doğrudan bağlantı kurabileceği odaklı bir ortam sunar.",
      whyLabel: "Neden Katılmalısınız?",
      whyTitle: "WAMPEX West Africa'da Katılımcı Olmak İçin Dört Neden",

      whyParticipate: [
        {
          number: "01",
          title: "Nitelikli Alıcılarla Tanışın",
          description:
            "Yenilikçi madencilik ürünleri ve çözümleri arayan satın alma yöneticileri, distribütörler, proje sahipleri ve karar vericilerle doğrudan bağlantı kurun.",
        },
        {
          number: "02",
          title: "Markanızı Güçlendirin",
          description:
            "Şirketinizi önde gelen küresel üreticilerle birlikte konumlandırın ve bölgenin en etkili madencilik fuarlarından birinde marka varlığınızı güçlendirin.",
        },
        {
          number: "03",
          title: "Yeni Fırsatları Keşfedin",
          description:
            "Yeni ihracat pazarlarını belirleyin, stratejik ortaklıklar kurun ve uluslararası paydaşlarla uzun vadeli ticari ilişkiler geliştirin.",
        },
        {
          number: "04",
          title: "Yeniliklerinizi Sergileyin",
          description:
            "En yeni makine, ekipman ve teknolojilerinizi madencilik inovasyonu ve endüstriyel gelişimle yakından ilgilenen profesyonel bir ziyaretçi kitlesine sunun.",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section
      id="overview"
      className="exhibition-overview section-spacing"
    >
      <div className="container">
        <div className="overview-layout">
          <div className="overview-intro">
            <p className="section-label">
              {t.label}
            </p>

            <h2>{t.title}</h2>

            <p className="overview-lead">
              {t.lead}
            </p>

            <p className="overview-secondary">
              {t.secondary}
            </p>
          </div>

          <div className="overview-content-column">
            <div className="overview-why-header">
              <p className="section-label">
                {t.whyLabel}
              </p>

              <h3>{t.whyTitle}</h3>
            </div>

            <div className="overview-story">
              {t.whyParticipate.map((item) => (
                <article
                  key={item.number}
                  className="overview-card"
                >
                  <span className="overview-card-number">
                    {item.number}
                  </span>

                  <div>
                    <h3>{item.title}</h3>

                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExhibitionOverview;
