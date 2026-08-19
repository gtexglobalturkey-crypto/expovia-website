import "./Industries.css";

import { useTranslation } from "../../hooks/useTranslation";

function Industries() {
  const { language } = useTranslation();

  const content = {
    en: {
      label: "Industries",
      title: "Sector-focused exhibition opportunities.",
      intro:
        "VIAFA helps Turkish manufacturers and exporters identify international exhibitions aligned with their products, commercial goals and target markets.",
      introLink: "Tell us your requirements",
      footerText:
        "Looking for an exhibition in a different industry or target country?",
      footerLink: "Discuss your market",
      ariaPrefix: "Request information about",

      industries: [
        {
          id: "01",
          title: "Mining & Natural Resources",
          description:
            "International exhibitions for mining companies, equipment manufacturers, suppliers and service providers.",
        },
        {
          id: "02",
          title: "Industrial Technologies",
          description:
            "Trade platforms focused on machinery, manufacturing technologies, automation and industrial solutions.",
        },
        {
          id: "03",
          title: "Energy",
          description:
            "Exhibition opportunities for conventional energy, renewable technologies and supporting industries.",
        },
        {
          id: "04",
          title: "Infrastructure",
          description:
            "International events serving construction, engineering, transport and large-scale infrastructure markets.",
        },
        {
          id: "05",
          title: "Agriculture",
          description:
            "Professional exhibitions for agricultural machinery, production technologies and food supply industries.",
        },
        {
          id: "06",
          title: "Automotive & Mobility",
          description:
            "Global platforms for automotive suppliers, mobility technologies, transport and aftermarket companies.",
        },
        {
          id: "07",
          title: "Building Technologies",
          description:
            "Selected exhibitions for construction materials, architectural systems and technical building solutions.",
        },
        {
          id: "08",
          title: "Specialized Industries",
          description:
            "Carefully selected international events designed for focused and high-value industrial markets.",
        },
      ],
    },

    tr: {
      label: "Sektörler",
      title: "Sektör odaklı uluslararası fuar fırsatları.",
      intro:
        "VIAFA, Türk üretici ve ihracatçıların ürünleri, ticari hedefleri ve hedef pazarlarıyla uyumlu uluslararası fuarları belirlemelerine yardımcı olur.",
      introLink: "İhtiyaçlarınızı paylaşın",
      footerText:
        "Farklı bir sektörde veya hedef ülkede fuar mı arıyorsunuz?",
      footerLink: "Hedef pazarınızı görüşelim",
      ariaPrefix: "Bilgi talep et",

      industries: [
        {
          id: "01",
          title: "Madencilik ve Doğal Kaynaklar",
          description:
            "Madencilik şirketleri, ekipman üreticileri, tedarikçiler ve hizmet sağlayıcılar için uluslararası fuarlar.",
        },
        {
          id: "02",
          title: "Endüstriyel Teknolojiler",
          description:
            "Makine, üretim teknolojileri, otomasyon ve endüstriyel çözümlere odaklanan ticaret platformları.",
        },
        {
          id: "03",
          title: "Enerji",
          description:
            "Geleneksel enerji, yenilenebilir teknolojiler ve destekleyici sektörler için fuar fırsatları.",
        },
        {
          id: "04",
          title: "Altyapı",
          description:
            "İnşaat, mühendislik, ulaşım ve büyük ölçekli altyapı pazarlarına hizmet veren uluslararası etkinlikler.",
        },
        {
          id: "05",
          title: "Tarım",
          description:
            "Tarım makineleri, üretim teknolojileri ve gıda tedarik sektörleri için profesyonel fuarlar.",
        },
        {
          id: "06",
          title: "Otomotiv ve Mobilite",
          description:
            "Otomotiv tedarikçileri, mobilite teknolojileri, ulaşım ve satış sonrası hizmet şirketleri için küresel platformlar.",
        },
        {
          id: "07",
          title: "Yapı Teknolojileri",
          description:
            "Yapı malzemeleri, mimari sistemler ve teknik bina çözümleri için seçilmiş uluslararası fuarlar.",
        },
        {
          id: "08",
          title: "Uzmanlaşmış Sektörler",
          description:
            "Odaklı ve yüksek değerli endüstriyel pazarlar için özenle seçilmiş uluslararası etkinlikler.",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section
      id="industries"
      className="industries-section section-spacing"
    >
      <div className="container">
        <div className="industries-section__heading">
          <div className="industries-section__heading-content">
            <div className="industries-section__eyebrow">
              <span />

              <p>{t.label}</p>
            </div>

            <h2>{t.title}</h2>
          </div>

          <div className="industries-section__intro">
            <p>{t.intro}</p>

            <a href="#contact">
              {t.introLink}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="industries-section__grid">
          {t.industries.map((industry) => (
            <a
              key={industry.id}
              className="industries-section__card"
              href="#contact"
              aria-label={`${t.ariaPrefix} ${industry.title}`}
            >
              <div className="industries-section__card-top">
                <span className="industries-section__number">
                  {industry.id}
                </span>

                <span
                  className="industries-section__arrow"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </div>

              <div className="industries-section__card-content">
                <h3>{industry.title}</h3>

                <p>{industry.description}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="industries-section__footer">
          <span className="industries-section__footer-line" />

          <p>{t.footerText}</p>

          <a href="#contact">
            {t.footerLink}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Industries;