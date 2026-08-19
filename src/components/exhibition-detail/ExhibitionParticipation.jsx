import { Link } from "react-router-dom";

import { useTranslation } from "../../hooks/useTranslation";

function ExhibitionParticipation() {
  const { language } = useTranslation();

  const content = {
    en: {
      label: "Participation",
      title: "Choose Your Participation Strategy",
      description:
        "Whether you require complete design flexibility, a turnkey stand package or professional participation consultancy, VIAFA helps you achieve the best exhibition experience.",
      popularLabel: "Most Popular",

      options: [
        {
          number: "01",
          title: "Space Only Stand",
          subtitle: "Maximum Design Freedom",
          description:
            "Create a fully customized exhibition stand that reflects your corporate identity and marketing strategy.",
          features: [
            "Custom stand architecture",
            "Flexible stand size",
            "Premium brand visibility",
            "Unlimited design possibilities",
          ],
          button: "Request Space Only",
        },
        {
          number: "02",
          title: "Shell Scheme Stand",
          subtitle: "Ready-to-Exhibit Package",
          description:
            "A complete turnkey participation package for companies seeking a practical and professional exhibition solution.",
          features: [
            "Ready-built stand",
            "Furniture package",
            "Company fascia",
            "Fast installation",
          ],
          button: "Request Shell Scheme",
          featured: true,
        },
        {
          number: "03",
          title: "VIAFA Support",
          subtitle: "Professional Consultancy",
          description:
            "From stand reservation to organizer communication, VIAFA manages every important step of your participation process.",
          features: [
            "Stand reservation",
            "Application management",
            "Organizer coordination",
            "Pre-exhibition guidance",
          ],
          button: "Contact VIAFA",
        },
      ],
    },

    tr: {
      label: "Katılım Seçenekleri",
      title: "Katılım Stratejinizi Seçin",
      description:
        "İster tamamen özgün bir stant tasarımı, ister anahtar teslim bir paket ya da profesyonel katılım danışmanlığı tercih edin, VIAFA en iyi fuar deneyimine ulaşmanıza yardımcı olur.",
      popularLabel: "En Çok Tercih Edilen",

      options: [
        {
          number: "01",
          title: "Boş Alan Standı",
          subtitle: "Maksimum Tasarım Özgürlüğü",
          description:
            "Kurumsal kimliğinizi ve pazarlama stratejinizi yansıtan tamamen özgün bir fuar standı oluşturun.",
          features: [
            "Özel stant mimarisi",
            "Esnek stant büyüklüğü",
            "Güçlü marka görünürlüğü",
            "Sınırsız tasarım imkânı",
          ],
          button: "Boş Alan Talep Edin",
        },
        {
          number: "02",
          title: "Standart Paket Stand",
          subtitle: "Katılıma Hazır Paket",
          description:
            "Pratik ve profesyonel bir fuar çözümü arayan şirketler için eksiksiz, anahtar teslim katılım paketi.",
          features: [
            "Hazır kurulu stant",
            "Mobilya paketi",
            "Firma alınlık yazısı",
            "Hızlı kurulum",
          ],
          button: "Standart Paket Talep Edin",
          featured: true,
        },
        {
          number: "03",
          title: "VIAFA Desteği",
          subtitle: "Profesyonel Danışmanlık",
          description:
            "Stant rezervasyonundan organizatör iletişimine kadar VIAFA, katılım sürecinizin tüm önemli adımlarını yönetir.",
          features: [
            "Stant rezervasyonu",
            "Başvuru yönetimi",
            "Organizatör koordinasyonu",
            "Fuar öncesi yönlendirme",
          ],
          button: "VIAFA ile İletişime Geçin",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section className="exhibition-participation section-spacing">
      <div className="container">
        <div className="section-header">
          <p className="section-label">
            {t.label}
          </p>

          <h2>{t.title}</h2>

          <p>{t.description}</p>
        </div>

        <div className="participation-grid">
          {t.options.map((item) => (
            <article
              key={item.number}
              className={`participation-card ${
                item.featured ? "featured" : ""
              }`}
            >
              <div className="participation-top">
                <span className="participation-number">
                  {item.number}
                </span>

                {item.featured && (
                  <span className="participation-best">
                    {t.popularLabel}
                  </span>
                )}
              </div>

              <span className="participation-badge">
                {item.subtitle}
              </span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <ul className="participation-features">
                {item.features.map((feature) => (
                  <li key={feature}>
                    ✓ {feature}
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className="btn btn-primary"
              >
                {item.button}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExhibitionParticipation;