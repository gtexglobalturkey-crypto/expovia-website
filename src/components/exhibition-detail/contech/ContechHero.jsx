import { Link } from "react-router-dom";
import { HardHat, Pickaxe, TrainTrack } from "lucide-react";

import { useTranslation } from "../../../hooks/useTranslation";

import {
  CONTECH_IMAGES,
  CONTECH_NAME,
  CONTECH_VENUE,
  contechSectors,
} from "../../../data/contechVietnam2027";

const sectorIcons = {
  construction: HardHat,
  mining: Pickaxe,
  transport: TrainTrack,
};

// No approved 2027 artwork exists yet, so the visual is a text-first panel
// (date, city, venue, the three sectors). Once CONTECH_IMAGES.hero is set in
// the data file, the official image replaces the panel.
function ContechHero() {
  const { language } = useTranslation();

  const content = {
    en: {
      label: "Construction, Mining & Transport Exhibition",
      description:
        "International trade fair in Hanoi for construction, mining and transport machinery, equipment, technology, vehicles and materials.",
      dateLabel: "Date",
      date: "23–25 June 2027",
      venueLabel: "Venue",
      venue: "Vietnam Exposition Center (VEC), Hanoi, Vietnam",
      organizerLabel: "Organizer",
      organizer: "HADIFA",
      industryLabel: "Industry",
      industry: "Construction · Mining · Transport Infrastructure",
      cta: "Request Participation Information",
      agent: "VIAFA · Türkiye Sales Agent",
      panelKicker: "Hanoi, Vietnam · 23–25 June 2027",
      imageAlt:
        "CONTECH Vietnam 2027, construction, mining and transport exhibition in Hanoi",
    },

    tr: {
      label: "İnşaat, Madencilik ve Ulaştırma Fuarı",
      description:
        "Hanoi'de inşaat, madencilik ve ulaştırma sektörlerine yönelik makine, ekipman, teknoloji, araç ve malzemeleri bir araya getiren uluslararası ticaret fuarı.",
      dateLabel: "Tarih",
      date: "23–25 Haziran 2027",
      venueLabel: "Fuar Alanı",
      venue: "Vietnam Exposition Center (VEC), Hanoi, Vietnam",
      organizerLabel: "Organizatör",
      organizer: "HADIFA",
      industryLabel: "Sektör",
      industry: "İnşaat · Madencilik · Ulaştırma Altyapısı",
      cta: "Katılım Bilgisi Al",
      agent: "VIAFA · Türkiye Satış Temsilcisi",
      panelKicker: "Hanoi, Vietnam · 23–25 Haziran 2027",
      imageAlt:
        "Hanoi'de düzenlenen inşaat, madencilik ve ulaştırma fuarı CONTECH Vietnam 2027",
    },
  };

  const t = content[language];
  const sectors = contechSectors[language];
  const heroImage = CONTECH_IMAGES.hero;

  return (
    <section className="exhibition-detail-hero contech-hero">
      <div className="container">
        <div className="detail-hero-grid">
          <div className="detail-hero-content">
            <p className="section-label">
              {t.label}
            </p>

            <h1 lang="en">{CONTECH_NAME}</h1>

            <p className="detail-hero-description">
              {t.description}
            </p>

            <div className="detail-meta">
              <div>
                <strong>{t.dateLabel}</strong>
                <span>{t.date}</span>
              </div>

              <div>
                <strong>{t.venueLabel}</strong>
                <span>{t.venue}</span>
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

            <div className="contech-hero-actions">
              <Link
                to="/contact"
                className="contech-btn"
              >
                {t.cta}
              </Link>

              <span className="contech-agent-pill">
                {t.agent}
              </span>
            </div>
          </div>

          <figure className="contech-hero-visual">
            {heroImage ? (
              <img
                src={heroImage.src}
                alt={t.imageAlt}
                width={heroImage.width}
                height={heroImage.height}
                fetchPriority="high"
              />
            ) : (
              <div className="contech-hero-panel">
                <p className="contech-hero-kicker">
                  {t.panelKicker}
                </p>

                <p
                  className="contech-hero-venue"
                  lang="en"
                >
                  {CONTECH_VENUE}
                </p>

                <ul className="contech-hero-sectors">
                  {sectors.map((sector, index) => {
                    const Icon = sectorIcons[sector.id];

                    return (
                      <li key={sector.id}>
                        <span className="contech-hero-sector-icon">
                          <Icon
                            size={22}
                            strokeWidth={1.7}
                            aria-hidden="true"
                          />
                        </span>

                        <strong>{sector.name}</strong>

                        <span className="contech-hero-sector-number">
                          0{index + 1}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </figure>
        </div>
      </div>
    </section>
  );
}

export default ContechHero;
