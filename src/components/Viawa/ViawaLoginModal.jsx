import { useEffect } from "react";

import { useTranslation } from "../../hooks/useTranslation";

import viawaLogo from "../../assets/images/viawa/viawa-logo.png";

function ViawaLoginModal({ isOpen, onClose }) {
  const { language } = useTranslation();

  const content = {
    en: {
      title: "Team Sign In",
      subtitle:
        "VIAWA is accessible only to authorized VIAFA team members.",
      email: "Email",
      password: "Password",
      remember: "Remember me",
      submit: "Sign In",
      note: "Access is limited to active VIAFA corporate accounts.",
      close: "Close",
    },

    tr: {
      title: "Ekip Girişi",
      subtitle:
        "VIAWA yalnızca yetkili VIAFA ekip üyeleri tarafından kullanılabilir.",
      email: "E-posta",
      password: "Şifre",
      remember: "Beni Hatırla",
      submit: "Giriş Yap",
      note: "Erişim yalnızca aktif VIAFA kurumsal hesaplarıyla sınırlıdır.",
      close: "Kapat",
    },
  };

  const t = content[language];

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="viawa-login-overlay"
      onClick={onClose}
    >
      <div
        className="viawa-login-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="viawa-login-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="viawa-login-close"
          onClick={onClose}
          aria-label={t.close}
        >
          ×
        </button>

        <img
          src={viawaLogo}
          alt="VIAWA"
          className="viawa-login-logo"
        />

        <h2 id="viawa-login-title">{t.title}</h2>

        <p className="viawa-login-subtitle">{t.subtitle}</p>

        <form
          className="viawa-login-form"
          onSubmit={(event) => event.preventDefault()}
        >
          <label>
            {t.email}
            <input
              type="email"
              autoComplete="username"
              required
            />
          </label>

          <label>
            {t.password}
            <input
              type="password"
              autoComplete="current-password"
              required
            />
          </label>

          <label className="viawa-login-remember">
            <input type="checkbox" />
            {t.remember}
          </label>

          <button
            type="submit"
            className="viawa-login-submit"
          >
            {t.submit}
          </button>
        </form>

        <p className="viawa-login-note">{t.note}</p>
      </div>
    </div>
  );
}

export default ViawaLoginModal;
