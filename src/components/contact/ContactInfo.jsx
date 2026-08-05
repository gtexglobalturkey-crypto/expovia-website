import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useTranslation } from "../../hooks/useTranslation";

import { CONTACT_EMAIL } from "../../config/site";

function ContactInfo() {
  const { language } = useTranslation();

  const content = {
    en: {
      label: "Contact Details",
      title: "Speak with Our Team",
      description:
        "Contact EXPOVIA for exhibition selection, participation planning and organizer coordination.",

      items: [
        {
          icon: <Mail size={14} />,
          heading: "Email",
          value: CONTACT_EMAIL || "Email address pending",
          href: CONTACT_EMAIL ? `mailto:${CONTACT_EMAIL}` : undefined,
          description:
            "General enquiries and participation requests.",
        },
        {
          icon: <Phone size={14} />,
          heading: "Phone",
          value: "+90 (212) 123 45 67",
          href: "tel:+902121234567",
          description:
            "Speak directly with our exhibition team.",
        },
        {
          icon: <MapPin size={14} />,
          heading: "Office",
          value: "Istanbul, Türkiye",
          description:
            "Connecting Turkish companies with global exhibition markets.",
        },
      ],
    },

    tr: {
      label: "İletişim Bilgileri",
      title: "Ekibimizle Görüşün",
      description:
        "Fuar seçimi, katılım planlaması ve organizatör koordinasyonu için EXPOVIA ile iletişime geçin.",

      items: [
        {
          icon: <Mail size={14} />,
          heading: "E-posta",
          value: CONTACT_EMAIL || "E-posta adresi belirleniyor",
          href: CONTACT_EMAIL ? `mailto:${CONTACT_EMAIL}` : undefined,
          description:
            "Genel bilgi talepleri ve fuar katılım başvuruları.",
        },
        {
          icon: <Phone size={14} />,
          heading: "Telefon",
          value: "+90 (212) 123 45 67",
          href: "tel:+902121234567",
          description:
            "Fuar danışmanlarımızla doğrudan görüşebilirsiniz.",
        },
        {
          icon: <MapPin size={14} />,
          heading: "Ofis",
          value: "İstanbul, Türkiye",
          description:
            "Türk şirketlerini uluslararası fuar pazarlarıyla buluşturuyoruz.",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <aside className="contact-workspace-info">
      <div className="contact-workspace-info-header">
        <p className="contact-section-label">
          {t.label}
        </p>

        <h2>{t.title}</h2>

        <p>{t.description}</p>
      </div>

      <div className="contact-workspace-info-list">
        {t.items.map((item) => (
          <div
            key={item.heading}
            className="contact-workspace-info-item"
          >
            <div className="contact-workspace-info-icon">
              {item.icon}
            </div>

            <div>
              <span>{item.heading}</span>

              {item.href ? (
                <a href={item.href}>
                  {item.value}
                </a>
              ) : (
                <strong>{item.value}</strong>
              )}

              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default ContactInfo;