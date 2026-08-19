import "./Header.css";

import { Link, NavLink, useLocation } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

import logo from "../../assets/images/VIAFA-seffaf-temiz.png";
import viamateLogo from "../../assets/images/viamate/viamate-logo.png";
import viawaLogo from "../../assets/images/viawa/viawa-logo.png";

import { useTranslation } from "../../hooks/useTranslation";
import { LanguageContext } from "../../context/LanguageContext";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { t, language } = useTranslation();
  const { changeLanguage } = useContext(LanguageContext);

  const location = useLocation();
  const [lastPathname, setLastPathname] = useState(location.pathname);

  // Close the mobile menu whenever the route changes. Adjusting state
  // during render (rather than in an effect) avoids an extra render pass.
  if (location.pathname !== lastPathname) {
    setLastPathname(location.pathname);
    setMobileMenuOpen(false);
  }

  const menuToggleRef = useRef(null);
  const mobileNavRef = useRef(null);
  const firstMobileLinkRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Outside click + Escape key handling while the menu is open.
  useEffect(() => {
    if (!mobileMenuOpen) {
      return undefined;
    }

    function handleClickOutside(event) {
      const clickedInsideMenu =
        mobileNavRef.current?.contains(event.target);

      const clickedToggle =
        menuToggleRef.current?.contains(event.target);

      if (!clickedInsideMenu && !clickedToggle) {
        setMobileMenuOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        menuToggleRef.current?.focus();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  // Move focus into the panel on open, and lock background scroll.
  useEffect(() => {
    if (mobileMenuOpen) {
      firstMobileLinkRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`site-header ${
        scrolled ? "site-header--scrolled" : ""
      }`}
    >
      <div className="container header-inner">
        <Link
          to="/"
          className="logo"
          aria-label="VIAFA home"
        >
          <span className="logo-mark">
            <img
              src={logo}
              alt="VIAFA"
              className="logo-image"
            />
          </span>
        </Link>

        <nav
          className="nav"
          aria-label="Main navigation"
        >
          <NavLink to="/exhibitions">
            {t.header.exhibitions}
          </NavLink>

          <NavLink to="/industries">
            {t.header.industries}
          </NavLink>

          <NavLink to="/about">
            {t.header.about}
          </NavLink>

          <NavLink to="/services">
            {t.header.services}
          </NavLink>

          <NavLink to="/viamate">
            <img
              src={viamateLogo}
              alt={t.header.viamate}
              className="viamate-nav-logo"
            />
          </NavLink>

          <NavLink to="/viawa">
            <img
              src={viawaLogo}
              alt={t.header.viawa}
              className="viawa-nav-logo"
            />
          </NavLink>
        </nav>

        <div className="header-right">
          <button
            type="button"
            className={`language-button ${
              language === "en"
                ? "active"
                : ""
            }`}
            onClick={() =>
              changeLanguage("en")
            }
          >
            EN
          </button>

          <button
            type="button"
            className={`language-button ${
              language === "tr"
                ? "active"
                : ""
            }`}
            onClick={() =>
              changeLanguage("tr")
            }
          >
            TR
          </button>

          <Link
            to="/contact"
            className="header-cta"
          >
            {t.header.contact}
          </Link>

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-panel"
            aria-label={
              mobileMenuOpen ? "Close menu" : "Open menu"
            }
            onClick={() =>
              setMobileMenuOpen((open) => !open)
            }
            ref={menuToggleRef}
          >
            {mobileMenuOpen ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="mobile-nav"
          ref={mobileNavRef}
        >
          <nav
            className="container mobile-nav-inner"
            aria-label="Mobile navigation"
          >
            <NavLink
              to="/"
              end
              onClick={closeMobileMenu}
              ref={firstMobileLinkRef}
            >
              {t.header.home}
            </NavLink>

            <NavLink
              to="/exhibitions"
              onClick={closeMobileMenu}
            >
              {t.header.exhibitions}
            </NavLink>

            <NavLink
              to="/industries"
              onClick={closeMobileMenu}
            >
              {t.header.industries}
            </NavLink>

            <NavLink
              to="/about"
              onClick={closeMobileMenu}
            >
              {t.header.about}
            </NavLink>

            <NavLink
              to="/services"
              onClick={closeMobileMenu}
            >
              {t.header.services}
            </NavLink>

            <NavLink
              to="/viamate"
              onClick={closeMobileMenu}
            >
              <img
                src={viamateLogo}
                alt={t.header.viamate}
                className="viamate-nav-logo"
              />
            </NavLink>

            <NavLink
              to="/viawa"
              onClick={closeMobileMenu}
            >
              <img
                src={viawaLogo}
                alt={t.header.viawa}
                className="viawa-nav-logo"
              />
            </NavLink>

            <NavLink
              to="/contact"
              onClick={closeMobileMenu}
            >
              {t.header.contact}
            </NavLink>

            <div className="mobile-nav-languages">
              <button
                type="button"
                className={
                  language === "en" ? "active" : ""
                }
                onClick={() => changeLanguage("en")}
              >
                EN
              </button>

              <button
                type="button"
                className={
                  language === "tr" ? "active" : ""
                }
                onClick={() => changeLanguage("tr")}
              >
                TR
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;