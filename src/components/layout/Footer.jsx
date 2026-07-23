import { Link } from "react-router-dom";

import { useTranslation } from "../../hooks/useTranslation";

import logo from "../../assets/images/erexpo-logo.png";

import "./Footer.css";

function Footer() {
  const { language } = useTranslation();

  const currentYear = new Date().getFullYear();

  const content = {
    en: {
      subtitle:
        "International Exhibition Representation",
      description:
        "EREXPO connects Turkish manufacturers and exporters with carefully selected international exhibitions and provides professional support throughout the participation process.",
      explore: "Explore",
      exhibitions: "Exhibitions",
      industries: "Industries",
      services: "Services",
      company: "Company",
      about: "About EREXPO",
      contact: "Contact",
      legal: "Legal",
      privacy: "Privacy Policy",
      cookies: "Cookie Policy",
      terms: "Terms of Use",
      contactTitle: "Get in Touch",
      location: "Türkiye",
      representation:
        "International Exhibition Representation",
      rights: "All rights reserved.",
      backToTop: "Back to Top",
    },

    tr: {
      subtitle: "Uluslararası Fuar Temsilciliği",
      description:
        "EREXPO, Türk üretici ve ihracatçıları özenle seçilmiş uluslararası fuarlarla buluşturur ve katılım sürecinin tamamında profesyonel destek sağlar.",
      explore: "Keşfet",
      exhibitions: "Fuarlar",
      industries: "Sektörler",
      services: "Hizmetler",
      company: "Kurumsal",
      about: "EREXPO Hakkında",
      contact: "İletişim",
      legal: "Yasal",
      privacy: "Gizlilik Politikası",
      cookies: "Çerez Politikası",
      terms: "Kullanım Koşulları",
      contactTitle: "Bize Ulaşın",
      location: "Türkiye",
      representation:
        "Uluslararası Fuar Temsilciliği",
      rights: "Tüm hakları saklıdır.",
      backToTop: "Yukarı Dön",
    },
  };

  const t = content[language] ?? content.en;

  const exploreLinks = [
    {
      label: t.exhibitions,
      to: "/exhibitions",
    },
    {
      label: t.industries,
      to: "/industries",
    },
    {
      label: t.services,
      to: "/services",
    },
  ];

  const companyLinks = [
    {
      label: t.about,
      to: "/about",
    },
    {
      label: t.contact,
      to: "/contact",
    },
  ];

  const legalLinks = [
    {
      label: t.privacy,
      to: "/privacy-policy",
    },
    {
      label: t.cookies,
      to: "/cookie-policy",
    },
    {
      label: t.terms,
      to: "/terms-of-use",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__main">
          <div className="site-footer__brand">
            <Link
              to="/"
              className="site-footer__logo-link"
              aria-label="EREXPO home"
            >
              <img
                src={logo}
                alt=""
                className="site-footer__logo-image"
              />

              <div className="site-footer__logo-text">
                <strong>EREXPO</strong>

                <span>{t.subtitle}</span>
              </div>
            </Link>

            <p className="site-footer__description">
              {t.description}
            </p>
          </div>

          <div className="site-footer__navigation">
            <nav
              className="site-footer__column"
              aria-label={t.explore}
            >
              <p className="site-footer__column-title">
                {t.explore}
              </p>

              <div className="site-footer__link-list">
                {exploreLinks.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>

            <nav
              className="site-footer__column"
              aria-label={t.company}
            >
              <p className="site-footer__column-title">
                {t.company}
              </p>

              <div className="site-footer__link-list">
                {companyLinks.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>

            <nav
              className="site-footer__column"
              aria-label={t.legal}
            >
              <p className="site-footer__column-title">
                {t.legal}
              </p>

              <div className="site-footer__link-list">
                {legalLinks.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>

            <div className="site-footer__column">
              <p className="site-footer__column-title">
                {t.contactTitle}
              </p>

              <address className="site-footer__contact">
                <a href="mailto:info@erexpo.com">
                  info@erexpo.com
                </a>

                <span>{t.location}</span>

                <span>{t.representation}</span>
              </address>
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>
            © {currentYear} EREXPO. {t.rights}
          </p>

          <button
            type="button"
            className="site-footer__back-to-top"
            onClick={scrollToTop}
            aria-label={t.backToTop}
          >
            <span>{t.backToTop}</span>

            <span aria-hidden="true">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;