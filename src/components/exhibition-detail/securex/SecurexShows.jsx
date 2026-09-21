import { useTranslation } from "../../../hooks/useTranslation";

import { securexShows } from "../../../data/securexSouthAfrica2027";

import securexLogo from "../../../assets/exhibitions/securex/logos/securex.png";
import aOshLogo from "../../../assets/exhibitions/securex/logos/a-osh-expo.png";
import fmExpoLogo from "../../../assets/exhibitions/securex/logos/facilities-management-expo.png";
import firexpoLogo from "../../../assets/exhibitions/securex/logos/firexpo.png";

// Official organizer logos, keyed by the show ids in securexSouthAfrica2027.js.
// Width/height are the files' intrinsic size (margins trimmed, logos unaltered).
const showLogos = {
  securex: { src: securexLogo, width: 174, height: 58 },
  "a-osh": { src: aOshLogo, width: 188, height: 49 },
  "fm-expo": { src: fmExpoLogo, width: 156, height: 85 },
  firexpo: { src: firexpoLogo, width: 178, height: 63 },
};

function SecurexShows() {
  const { language } = useTranslation();

  const content = {
    en: {
      label: "The Four-Show Ecosystem",
      title: "Four Shows, Four Product Scopes",
      description:
        "Securex South Africa, A-OSH Expo, Facilities Management Expo and Firexpo are co-located at the same venue. Explore the sectors and product groups each show covers.",
    },

    tr: {
      label: "Dört Fuarlık Ekosistem",
      title: "Dört Fuar, Dört Ürün Kapsamı",
      description:
        "Securex South Africa, A-OSH Expo, Facilities Management Expo ve Firexpo aynı mekânda düzenlenir. Her fuarın kapsadığı sektörleri ve ürün gruplarını keşfedin.",
    },
  };

  const t = content[language];
  const shows = securexShows[language];
  const logoSuffix = language === "tr" ? "logosu" : "logo";

  return (
    <section className="exhibition-products securex-shows section-spacing">
      <div className="container">
        <div className="section-header">
          <p className="section-label">
            {t.label}
          </p>

          <h2>{t.title}</h2>

          <p>{t.description}</p>
        </div>

        <div className="products-grid">
          {shows.map((show) => (
            <article
              key={show.id}
              className="product-card"
            >
              <div className="product-body">
                <div className="securex-show-logo">
                  <img
                    src={showLogos[show.id].src}
                    alt={`${show.name} ${logoSuffix}`}
                    width={showLogos[show.id].width}
                    height={showLogos[show.id].height}
                    loading="lazy"
                  />
                </div>

                <h3>{show.name}</h3>

                <p className="securex-show-sector">
                  {show.sector}
                </p>

                <p>{show.description}</p>

                <ul className="securex-show-groups">
                  {show.groups.map((group) => (
                    <li key={group}>
                      <span>✓</span>
                      {group}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SecurexShows;
