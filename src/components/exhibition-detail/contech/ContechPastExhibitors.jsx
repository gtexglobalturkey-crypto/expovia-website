import { useTranslation } from "../../../hooks/useTranslation";

import {
  contechPastBrands,
  contechPastExhibitors,
} from "../../../data/contechPastExhibitors";

// Headings and logos only. Years, sources and entries without a logo stay in
// the data file; the alt text keeps the year for screen readers.
function ContechPastExhibitors() {
  const { language } = useTranslation();

  const content = {
    en: {
      exhibitorsTitle: "Previous Exhibitors",
      brandsTitle: "Brands Showcased at Previous Editions",
      alt: (entry) =>
        `${entry.name} logo, CONTECH Vietnam ${entry.years}`,
    },

    tr: {
      exhibitorsTitle: "Geçmiş Fuar Katılımcıları",
      brandsTitle: "Geçmiş Fuarlarda Sergilenen Markalar",
      alt: (entry) =>
        `${entry.name} logosu, CONTECH Vietnam ${entry.years}`,
    },
  };

  const t = content[language];

  const renderGroup = (entries, title, modifier = "") => (
    <div className="contech-past-group">
      <div className="section-header">
        <h2>{title}</h2>
      </div>

      <ul className={`contech-past-logos${modifier}`}>
        {entries
          .filter((entry) => entry.logo)
          .map((entry) => (
            <li key={`${entry.name}-${entry.years}`}>
              <img
                src={entry.logo}
                alt={t.alt(entry)}
                loading="lazy"
              />
            </li>
          ))}
      </ul>
    </div>
  );

  return (
    <section className="exhibition-products contech-past section-spacing">
      <div className="container">
        {renderGroup(contechPastExhibitors, t.exhibitorsTitle)}

        {renderGroup(
          contechPastBrands,
          t.brandsTitle,
          " contech-past-logos--six",
        )}
      </div>
    </section>
  );
}

export default ContechPastExhibitors;
