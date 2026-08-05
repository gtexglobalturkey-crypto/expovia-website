import { Link } from "react-router-dom";

import { useTranslation } from "../../hooks/useTranslation";

import logo from "../../assets/images/expovia-logo-white.png";

import "./Footer.css";

function Footer() {
  const { language } = useTranslation();

  const currentYear = new Date().getFullYear();

  const content = {
    en: {
      about: "About",
      privacy: "Privacy Policy",
      cookies: "Cookie Policy",
      terms: "Terms of Use",
      rights: "All Rights Reserved.",
      backToTop: "Back to top",
      footerNav: "Footer",
    },

    tr: {
      about: "Hakkımızda",
      privacy: "Gizlilik Politikası",
      cookies: "Çerez Politikası",
      terms: "Kullanım Koşulları",
      rights: "Tüm hakları saklıdır.",
      backToTop: "Yukarı dön",
      footerNav: "Alt Bilgi",
    },
  };

  const t = content[language] ?? content.en;

  const links = [
    {
      label: t.about,
      to: "/about",
    },
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
      <div className="container site-footer__bar">
        <Link
          to="/"
          className="site-footer__logo-link"
          aria-label="EXPOVIA home"
        >
          <span className="site-footer__logo-mark">
            <img
              src={logo}
              alt="EXPOVIA"
              className="site-footer__logo-image"
            />
          </span>
        </Link>

        <p className="site-footer__copyright">
          © {currentYear} EXPOVIA · {t.rights}
        </p>

        <nav
          className="site-footer__links"
          aria-label={t.footerNav}
        >
          {links.map((item) => (
            <Link
              key={item.to}
              to={item.to}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="site-footer__back-to-top"
          onClick={scrollToTop}
          aria-label={t.backToTop}
        >
          <span aria-hidden="true">↑</span>
        </button>
      </div>
    </footer>
  );
}

export default Footer;
