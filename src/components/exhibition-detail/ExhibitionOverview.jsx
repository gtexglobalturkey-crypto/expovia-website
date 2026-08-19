import { Link } from "react-router-dom";

import { useTranslation } from "../../hooks/useTranslation";

function ExhibitionOverview() {
  const { language } = useTranslation();

  const content = {
    en: {
      label: "About the Exhibition",
      title: "A Strategic Business Platform for the Mining Industry",
      lead:
        "Mining Türkiye brings together mining companies, machinery manufacturers, technology providers, engineering firms and qualified international buyers in one of the region's most important industrial meeting points.",
      secondary:
        "The exhibition creates a focused environment for companies to present new products, develop distributor relationships, explore export opportunities and connect directly with industry decision makers.",
      button: "Request Participation Information",
      factsLabel: "Key Facts",
      factsTitle: "Exhibition Information",

      opportunities: [
        {
          number: "01",
          title: "Enter New Export Markets",
          description:
            "Present your products to international buyers, distributors and industry professionals looking for new suppliers and technologies.",
        },
        {
          number: "02",
          title: "Build Strategic Partnerships",
          description:
            "Meet manufacturers, contractors, engineering companies and decision makers who can support your long-term international growth.",
        },
        {
          number: "03",
          title: "Strengthen Brand Visibility",
          description:
            "Position your company alongside leading mining brands and increase your visibility in one of the region's most active industrial markets.",
        },
      ],

      keyFacts: [
        {
          label: "Date",
          value: "12–15 May 2027",
        },
        {
          label: "Venue",
          value: "Istanbul Expo Center",
        },
        {
          label: "Organizer",
          value: "HKF Trade Fairs",
        },
        {
          label: "Frequency",
          value: "Biennial",
        },
        {
          label: "Visitor Profile",
          value: "Mining Professionals",
        },
        {
          label: "Exhibition Area",
          value: "78,000 m²",
        },
      ],
    },

    tr: {
      label: "Fuar Hakkında",
      title: "Madencilik Sektörü İçin Stratejik Bir İş Platformu",
      lead:
        "Mining Türkiye; madencilik şirketlerini, makine üreticilerini, teknoloji sağlayıcılarını, mühendislik firmalarını ve nitelikli uluslararası alıcıları bölgenin en önemli endüstriyel buluşma noktalarından birinde bir araya getirir.",
      secondary:
        "Fuar, şirketlerin yeni ürünlerini tanıtabileceği, distribütör ilişkileri geliştirebileceği, ihracat fırsatlarını değerlendirebileceği ve sektörün karar vericileriyle doğrudan bağlantı kurabileceği odaklı bir ortam sunar.",
      button: "Katılım Bilgisi Talep Edin",
      factsLabel: "Temel Bilgiler",
      factsTitle: "Fuar Bilgileri",

      opportunities: [
        {
          number: "01",
          title: "Yeni İhracat Pazarlarına Girin",
          description:
            "Ürünlerinizi yeni tedarikçiler ve teknolojiler arayan uluslararası alıcılara, distribütörlere ve sektör profesyonellerine sunun.",
        },
        {
          number: "02",
          title: "Stratejik İş Birlikleri Kurun",
          description:
            "Uzun vadeli uluslararası büyümenizi destekleyebilecek üreticiler, yükleniciler, mühendislik firmaları ve karar vericilerle tanışın.",
        },
        {
          number: "03",
          title: "Marka Görünürlüğünüzü Güçlendirin",
          description:
            "Şirketinizi önde gelen madencilik markalarıyla birlikte konumlandırın ve bölgenin en aktif endüstriyel pazarlarından birinde görünürlüğünüzü artırın.",
        },
      ],

      keyFacts: [
        {
          label: "Tarih",
          value: "12–15 Mayıs 2027",
        },
        {
          label: "Fuar Alanı",
          value: "İstanbul Fuar Merkezi",
        },
        {
          label: "Organizatör",
          value: "HKF Trade Fairs",
        },
        {
          label: "Düzenlenme Sıklığı",
          value: "İki Yılda Bir",
        },
        {
          label: "Ziyaretçi Profili",
          value: "Madencilik Profesyonelleri",
        },
        {
          label: "Net Fuar Alanı",
          value: "78.000 m²",
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

            <Link
              to="/contact"
              className="btn btn-primary"
            >
              {t.button}
            </Link>
          </div>

          <div className="overview-content-column">
            <div className="overview-story">
              {t.opportunities.map((item) => (
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

            <div className="overview-facts-panel">
              <div className="overview-facts-header">
                <p className="section-label">
                  {t.factsLabel}
                </p>

                <h3>{t.factsTitle}</h3>
              </div>

              <div className="overview-facts-grid">
                {t.keyFacts.map((item) => (
                  <article
                    key={item.label}
                    className="overview-fact-card"
                  >
                    <span>{item.label}</span>

                    <strong>{item.value}</strong>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExhibitionOverview;