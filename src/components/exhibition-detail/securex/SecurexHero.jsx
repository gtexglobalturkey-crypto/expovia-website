import { useTranslation } from "../../../hooks/useTranslation";

import {
  SECUREX_CONCEPT,
  SECUREX_TAGLINE,
  securexShows,
} from "../../../data/securexSouthAfrica2027";

import heroImage from "../../../assets/exhibitions/securex/securex-2027-hero.webp";

// Official organizer artwork (2027 brochure, page 1). Every fact that
// matters — event name, date, venue, organizer, tagline, concept — is also
// rendered as HTML so nothing depends on text embedded in the image.
function SecurexHero() {
  const { language } = useTranslation();

  const content = {
    en: {
      label: "Security, Safety, Facilities & Fire Exhibition",
      title: "Securex South Africa 2027",
      dateLabel: "Date",
      date: "1–3 June 2027",
      locationLabel: "Location",
      location: "Gallagher Convention Centre, Johannesburg, South Africa",
      organizerLabel: "Organizer",
      organizer: "Montgomery Group Africa",
      industryLabel: "Industry",
      industry: "Security, Safety, Facilities & Fire",
      imageAlt:
        "Securex South Africa 2027 integrated exhibition platform in Johannesburg: Securex South Africa, A-OSH Expo, Facilities Management Expo and Firexpo",
    },

    tr: {
      label: "Güvenlik, İş Sağlığı, Tesis ve Yangın Fuarı",
      title: "Securex South Africa 2027",
      dateLabel: "Tarih",
      date: "1–3 Haziran 2027",
      locationLabel: "Konum",
      location: "Gallagher Convention Centre, Johannesburg, Güney Afrika",
      organizerLabel: "Organizatör",
      organizer: "Montgomery Group Africa",
      industryLabel: "Sektör",
      industry: "Güvenlik, İSG, Tesis Yönetimi ve Yangın",
      imageAlt:
        "Johannesburg'da düzenlenen Securex South Africa 2027 entegre fuar platformu: Securex South Africa, A-OSH Expo, Facilities Management Expo ve Firexpo",
    },
  };

  const t = content[language];
  const shows = securexShows[language];

  return (
    <section className="exhibition-detail-hero">
      <div className="container">
        <div className="detail-hero-grid">
          <div className="detail-hero-content">
            <p className="section-label">
              {t.label}
            </p>

            {/* Kept for the document outline / SEO, hidden visually: the
                four shows below (and the artwork) carry the event identity. */}
            <h1 className="securex-visually-hidden">
              {t.title}
            </h1>

            <ul className="securex-hero-shows">
              {shows.map((show) => (
                <li key={show.id}>
                  <span
                    className="securex-hero-show-name"
                    lang="en"
                  >
                    {show.name}
                  </span>

                  <strong>{show.sector}</strong>
                </li>
              ))}
            </ul>

            <div className="detail-meta">
              <div>
                <strong>{t.dateLabel}</strong>
                <span>{t.date}</span>
              </div>

              <div>
                <strong>{t.locationLabel}</strong>
                <span>{t.location}</span>
              </div>

              <div>
                <strong>{t.organizerLabel}</strong>
                <span>{t.organizer}</span>
              </div>

              <div>
                <strong>{t.industryLabel}</strong>
                <span>{t.industry}</span>
              </div>
            </div>
          </div>

          <figure className="securex-hero-visual">
            <img
              src={heroImage}
              alt={t.imageAlt}
              width="1311"
              height="528"
              fetchPriority="high"
            />

            <figcaption className="securex-hero-caption">
              <span
                className="securex-hero-tagline"
                lang="en"
              >
                {SECUREX_TAGLINE}
              </span>

              <strong
                className="securex-hero-concept"
                lang="en"
              >
                {SECUREX_CONCEPT}
              </strong>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

export default SecurexHero;
