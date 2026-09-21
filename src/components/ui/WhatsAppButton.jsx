import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { MessageCircle } from "lucide-react";

import { useTranslation } from "../../hooks/useTranslation";

import { WHATSAPP_NUMBER } from "../../config/site";
import { SECUREX_PATH } from "../../data/securexSouthAfrica2027";

import "./WhatsAppButton.css";

// Prefilled first message. Exhibition pages get a message about that
// exhibition; it is neutral wording only (no representation claim).
const messages = {
  en: {
    label: "WhatsApp",
    aria: "Chat with VIAFA on WhatsApp",
    default:
      "Hello, I would like to get information about international exhibition participation.",
    securex:
      "Hello, I would like to get information about Securex South Africa 2027.",
    wampex:
      "Hello, I would like to get information about WAMPEX West Africa 2027.",
  },

  tr: {
    label: "WhatsApp",
    aria: "VIAFA ile WhatsApp'ta yazışın",
    default:
      "Merhaba, uluslararası fuar katılımı hakkında bilgi almak istiyorum.",
    securex:
      "Merhaba, Securex South Africa 2027 fuarı hakkında bilgi almak istiyorum.",
    wampex:
      "Merhaba, WAMPEX West Africa 2027 fuarı hakkında bilgi almak istiyorum.",
  },
};

function WhatsAppButton() {
  const { language } = useTranslation();
  const { pathname } = useLocation();
  const linkRef = useRef(null);

  const t = messages[language];

  let text = t.default;

  if (pathname === SECUREX_PATH) {
    text = t.securex;
  } else if (pathname === "/exhibition-detail") {
    text = t.wampex;
  }

  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

  // Lift the button by however much of the footer is on screen, so it
  // never covers footer links at the bottom of a page.
  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;

      const footer = document.querySelector(".site-footer");
      const node = linkRef.current;

      if (!footer || !node) return;

      const overlap = Math.max(
        0,
        window.innerHeight - footer.getBoundingClientRect().top,
      );

      node.style.setProperty("--whatsapp-lift", `${Math.round(overlap)}px`);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      if (frame) cancelAnimationFrame(frame);

      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [pathname]);

  return (
    <a
      ref={linkRef}
      className="whatsapp-float"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.aria}
    >
      <MessageCircle
        size={22}
        aria-hidden="true"
      />

      <span className="whatsapp-float__label">
        {t.label}
      </span>
    </a>
  );
}

export default WhatsAppButton;
