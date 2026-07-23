import Header from "../layout/Header";
import Footer from "../layout/Footer";

import "./LegalPage.css";

function LegalPage({
  eyebrow,
  title,
  description,
  updatedLabel,
  updatedDate,
  sections = [],
}) {
  return (
    <div className="legal-page">
      <Header />

      <main>
        <section className="legal-page__hero">
          <div className="container">
            <div className="legal-page__hero-content">
              <p className="legal-page__eyebrow">
                {eyebrow}
              </p>

              <h1 className="legal-page__title">
                {title}
              </h1>

              <p className="legal-page__description">
                {description}
              </p>

              <div className="legal-page__updated">
                <span>{updatedLabel}</span>
                <strong>{updatedDate}</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="legal-page__content-section">
          <div className="container">
            <div className="legal-page__layout">
              <aside className="legal-page__sidebar">
                <p className="legal-page__sidebar-title">
                  {title}
                </p>

                <nav
                  className="legal-page__navigation"
                  aria-label={title}
                >
                  {sections.map((section, index) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                    >
                      <span>
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {section.title}
                    </a>
                  ))}
                </nav>
              </aside>

              <article className="legal-page__article">
                {sections.map((section, index) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="legal-page__section"
                  >
                    <div className="legal-page__section-heading">
                      <span>
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h2>{section.title}</h2>
                    </div>

                    <div className="legal-page__section-content">
                      {section.content}
                    </div>
                  </section>
                ))}
              </article>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default LegalPage;