import { useTranslation } from "../../../hooks/useTranslation";

import { securexShows } from "../../../data/securexSouthAfrica2027";

import pinnacle from "../../../assets/exhibitions/securex/sponsors/pinnacle.png";
import dahuaWisualarm from "../../../assets/exhibitions/securex/sponsors/dahua-wisualarm.png";
import instacom from "../../../assets/exhibitions/securex/sponsors/instacom.png";
import nosa from "../../../assets/exhibitions/securex/sponsors/nosa.png";
import saiosh from "../../../assets/exhibitions/securex/sponsors/saiosh.png";
import mami from "../../../assets/exhibitions/securex/sponsors/mami.png";
import unisa from "../../../assets/exhibitions/securex/sponsors/unisa.png";
import vumacam from "../../../assets/exhibitions/securex/sponsors/vumacam.png";
import fireInstrument from "../../../assets/exhibitions/securex/sponsors/fire-and-instrument-services.png";
import samsung from "../../../assets/exhibitions/securex/sponsors/samsung.png";

// Historical list only: the organizer's "2026 Sponsors" listing (tier and
// show as published there). Not a 2027 line-up. Ordered Platinum → Gold →
// Silver; showId matches the ids in securexSouthAfrica2027.js.
// Width/height are the logo files' intrinsic size.
const sponsors = [
  { name: "Pinnacle", logo: pinnacle, width: 158, height: 84, tier: "platinum", showId: "a-osh" },
  { name: "Dahua Technology · WisuAlarm", logo: dahuaWisualarm, width: 168, height: 37, tier: "platinum", showId: "firexpo" },
  { name: "Instacom", logo: instacom, width: 179, height: 57, tier: "gold", showId: "securex" },
  { name: "NOSA", logo: nosa, width: 155, height: 52, tier: "gold", showId: "a-osh" },
  { name: "SAIOSH", logo: saiosh, width: 129, height: 80, tier: "gold", showId: "a-osh" },
  { name: "MAMI", logo: mami, width: 174, height: 71, tier: "silver", showId: "securex" },
  { name: "UNISA", logo: unisa, width: 181, height: 47, tier: "silver", showId: "securex" },
  { name: "VumaCam", logo: vumacam, width: 173, height: 74, tier: "silver", showId: "securex" },
  { name: "Fire & Instrument Services", logo: fireInstrument, width: 203, height: 101, tier: "silver", showId: "firexpo" },
  { name: "Samsung", logo: samsung, width: 199, height: 62, tier: "silver", showId: "fm-expo" },
];

function SecurexSponsors() {
  const { language } = useTranslation();

  const content = {
    en: {
      label: "Historical Listing",
      title: "2026 Sponsors",
      description:
        "A selection of sponsors listed by the organizer for the 2026 edition. This is a historical list, not a confirmed 2027 sponsor line-up.",
      tiers: {
        platinum: "Platinum Sponsor",
        gold: "Gold Sponsor",
        silver: "Silver Sponsor",
      },
      source:
        "Source: organizer's 2026 Sponsors listing (securex.co.za). Logos belong to their respective owners.",
    },

    tr: {
      label: "Geçmiş Liste",
      title: "2026 Sponsorları",
      description:
        "Organizatörün 2026 edisyonu için listelediği sponsorlardan bir seçki. Bu geçmiş bir listedir; 2027 için onaylanmış bir sponsor kadrosu değildir.",
      tiers: {
        platinum: "Platin Sponsor",
        gold: "Altın Sponsor",
        silver: "Gümüş Sponsor",
      },
      source:
        "Kaynak: organizatörün 2026 Sponsors listesi (securex.co.za). Logolar ilgili sahiplerine aittir.",
    },
  };

  const t = content[language];
  const shows = securexShows[language];
  const showName = (id) => shows.find((show) => show.id === id).name;

  return (
    <section className="exhibition-participants securex-sponsors">
      <div className="container">
        <div className="section-header">
          <p className="section-label">
            {t.label}
          </p>

          <h2>{t.title}</h2>

          <p>{t.description}</p>
        </div>

        <div className="logo-grid">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="logo-tile securex-sponsor-tile"
            >
              <div className="securex-sponsor-logo">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={sponsor.width}
                  height={sponsor.height}
                  loading="lazy"
                />
              </div>

              <p className="securex-sponsor-caption">
                <strong>{t.tiers[sponsor.tier]}</strong>
                <span>{showName(sponsor.showId)}</span>
              </p>
            </div>
          ))}
        </div>

        <p className="securex-results-note">
          {t.source}
        </p>
      </div>
    </section>
  );
}

export default SecurexSponsors;
