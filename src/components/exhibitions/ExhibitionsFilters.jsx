import { useTranslation } from "../../hooks/useTranslation";

function ExhibitionsFilters() {
  const { language } = useTranslation();

  const content = {
    en: {
      label: "Filter Exhibitions",
      title: "Refine Your Search",
      clear: "Clear Filters",
      industry: "Industry",
      country: "Country",
      date: "Date",
      organizer: "Organizer",

      industries: [
        "Mining",
        "Construction",
        "Energy",
        "Agriculture",
        "Food & Beverage",
        "Healthcare",
        "Automotive",
      ],

      countries: [
        "Germany",
        "Italy",
        "United Arab Emirates",
        "Saudi Arabia",
        "United States",
        "France",
        "Türkiye",
      ],

      dates: [
        "Upcoming",
        "This Month",
        "Next 3 Months",
        "This Year",
      ],

      organizers: [
        "Messe München",
        "RX Global",
        "Informa Markets",
        "Koelnmesse",
        "Fiera Milano",
        "Dubai World Trade Centre",
      ],
    },

    tr: {
      label: "Fuarları Filtrele",
      title: "Aramanızı Daraltın",
      clear: "Filtreleri Temizle",
      industry: "Sektör",
      country: "Ülke",
      date: "Tarih",
      organizer: "Organizatör",

      industries: [
        "Madencilik",
        "İnşaat",
        "Enerji",
        "Tarım",
        "Gıda ve İçecek",
        "Sağlık",
        "Otomotiv",
      ],

      countries: [
        "Almanya",
        "İtalya",
        "Birleşik Arap Emirlikleri",
        "Suudi Arabistan",
        "Amerika Birleşik Devletleri",
        "Fransa",
        "Türkiye",
      ],

      dates: [
        "Yaklaşan",
        "Bu Ay",
        "Önümüzdeki 3 Ay",
        "Bu Yıl",
      ],

      organizers: [
        "Messe München",
        "RX Global",
        "Informa Markets",
        "Koelnmesse",
        "Fiera Milano",
        "Dubai World Trade Centre",
      ],
    },
  };

  const t = content[language];

  const handleClearFilters = () => {
    document
      .querySelectorAll(".filters-grid select")
      .forEach((select) => {
        select.value = "";
      });
  };

  return (
    <section className="exhibitions-filters">
      <div className="container">
        <div className="filters-header">
          <div>
            <p className="section-label">
              {t.label}
            </p>

            <h2>{t.title}</h2>
          </div>

          <button
            type="button"
            className="filters-reset"
            onClick={handleClearFilters}
          >
            {t.clear}
          </button>
        </div>

        <div className="filters-grid">
          <select defaultValue="">
            <option value="" disabled>
              {t.industry}
            </option>

            {t.industries.map((industry) => (
              <option
                key={industry}
                value={industry}
              >
                {industry}
              </option>
            ))}
          </select>

          <select defaultValue="">
            <option value="" disabled>
              {t.country}
            </option>

            {t.countries.map((country) => (
              <option
                key={country}
                value={country}
              >
                {country}
              </option>
            ))}
          </select>

          <select defaultValue="">
            <option value="" disabled>
              {t.date}
            </option>

            {t.dates.map((date) => (
              <option
                key={date}
                value={date}
              >
                {date}
              </option>
            ))}
          </select>

          <select defaultValue="">
            <option value="" disabled>
              {t.organizer}
            </option>

            {t.organizers.map((organizer) => (
              <option
                key={organizer}
                value={organizer}
              >
                {organizer}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
}

export default ExhibitionsFilters;