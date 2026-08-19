import { useTranslation } from "../../hooks/useTranslation";

function ExhibitionsHero() {
  const { language } = useTranslation();

  const content = {
    en: {
      label: "International Exhibitions",
      title: "Our Exhibition Portfolio Is Being Prepared",
      description:
        "VIAFA is currently developing its international exhibition portfolio and establishing partnerships with leading international exhibition organizers. Confirmed exhibitions and participation opportunities will be published here as agreements are finalized.",
    },

    tr: {
      label: "Uluslararası Fuarlar",
      title: "Fuar Portföyümüz Hazırlanıyor",
      description:
        "VIAFA, uluslararası fuar portföyünü oluşturmakta ve önde gelen uluslararası fuar organizatörleriyle iş birlikleri kurmaktadır. Anlaşmalar tamamlandıkça onaylanmış fuarlar ve katılım fırsatları bu sayfada yayımlanacaktır.",
    },
  };

  const t = content[language];

  return (
    <section className="exhibitions-hero section-spacing">
      <div className="container exhibitions-hero-container">
        <p className="section-label">
          {t.label}
        </p>

        <h1>{t.title}</h1>

        <p className="hero-description">
          {t.description}
        </p>
      </div>
    </section>
  );
}

export default ExhibitionsHero;