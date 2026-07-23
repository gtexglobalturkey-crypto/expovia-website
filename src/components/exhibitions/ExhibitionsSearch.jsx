import { useTranslation } from "../../hooks/useTranslation";

function ExhibitionsSearch() {
  const { language } = useTranslation();

  const content = {
    en: {
      placeholder:
        "Search exhibitions, industries, countries or organizers...",
      button: "Search",
      helper:
        "Search by exhibition name, industry, country or organizer.",
    },

    tr: {
      placeholder:
        "Fuar, sektör, ülke veya organizatör ara...",
      button: "Ara",
      helper:
        "Fuar adı, sektör, ülke veya organizatöre göre arama yapın.",
    },
  };

  const t = content[language];

  return (
    <section className="exhibitions-search">
      <div className="container">
        <div className="search-wrapper">
          <div className="search-box">
            <svg
              className="search-icon"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M21 21L16.65 16.65"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />

              <circle
                cx="11"
                cy="11"
                r="6"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>

            <input
              type="text"
              placeholder={t.placeholder}
              aria-label={t.placeholder}
            />

            <button type="button">
              {t.button}
            </button>
          </div>

          <p className="search-helper">
            {t.helper}
          </p>
        </div>
      </div>
    </section>
  );
}

export default ExhibitionsSearch;