import { Link } from "react-router-dom";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import SEO from "../components/seo/SEO";

import { useTranslation } from "../hooks/useTranslation";

function NotFound() {
  const { language } = useTranslation();

  const content = {
    en: {
      eyebrow: "Error 404",
      title: "This page can't be found.",
      description:
        "The page you are looking for doesn't exist or may have been moved. Check the address, or continue from one of the pages below.",
      home: "Back to Home",
      exhibitions: "Browse Exhibitions",
    },

    tr: {
      eyebrow: "Hata 404",
      title: "Bu sayfa bulunamadı.",
      description:
        "Aradığınız sayfa mevcut değil ya da taşınmış olabilir. Adresi kontrol edin ya da aşağıdaki sayfalardan birine devam edin.",
      home: "Ana Sayfaya Dön",
      exhibitions: "Fuarlara Göz At",
    },
  };

  const t = content[language] ?? content.en;

  return (
    <>
      <SEO
        title="404"
        description={t.description}
        canonical="/404"
        noIndex
      />

      <Header />

      <main>
        <section className="not-found-section">
          <div className="container not-found-inner">
            <p className="not-found-code">404</p>

            <p className="not-found-eyebrow">{t.eyebrow}</p>

            <h1 className="not-found-title">{t.title}</h1>

            <p className="not-found-description">
              {t.description}
            </p>

            <div className="not-found-actions">
              <Link
                to="/"
                className="not-found-btn not-found-btn--primary"
              >
                {t.home}
              </Link>

              <Link
                to="/exhibitions"
                className="not-found-btn not-found-btn--outline"
              >
                {t.exhibitions}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default NotFound;
