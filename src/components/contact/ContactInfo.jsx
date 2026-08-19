import {
  Building2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useTranslation } from "../../hooks/useTranslation";

import { CONTACT_EMAIL } from "../../config/site";

function ContactInfo() {
  const { language } = useTranslation();

  const legalName =
    "EXPOVİA ULUSLARARASI FUARCILIK TEKNOLOJİ SEYAHAT TURİZM İÇ VE DIŞ TİCARET LTD. ŞTİ.";
  const mersisNo = "0381114212500001";

  const content = {
    en: {
      label: "Contact Details",
      title: "Speak with Our Team",

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
          value: ["+90 542 789 55 91", "+90 542 789 55 93"],
          href: ["tel:+905427895591", "tel:+905427895593"],
          description:
            "Speak directly with our exhibition team.",
        },
        {
          icon: <MapPin size={14} />,
          heading: "Office",
          value:
            "Hürriyet Mah. Şehit Yavuz Ayan Sk. Yapıncakkent Sit. A Blk. No:1/1 D:1, 59030 Süleymanpaşa/Tekirdağ, Turkey",
        },
        {
          icon: <Building2 size={14} />,
          heading: "Company Details",
          value: legalName,
          description: `Mersis No: ${mersisNo}`,
        },
      ],
    },

    tr: {
      label: "İletişim Bilgileri",
      title: "Ekibimizle Görüşün",

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
          value: ["+90 542 789 55 91", "+90 542 789 55 93"],
          href: ["tel:+905427895591", "tel:+905427895593"],
          description:
            "Fuar danışmanlarımızla doğrudan görüşebilirsiniz.",
        },
        {
          icon: <MapPin size={14} />,
          heading: "Ofis",
          value:
            "Hürriyet Mah. Şehit Yavuz Ayan Sk. Yapıncakkent Sit. A Blk. No:1/1 D:1, 59030 Süleymanpaşa/Tekirdağ",
        },
        {
          icon: <Building2 size={14} />,
          heading: "Firma Bilgileri",
          value: legalName,
          description: `Mersis No: ${mersisNo}`,
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

              {Array.isArray(item.value) ? (
                <div className="contact-workspace-info-value-list">
                  {item.value.map((value, i) =>
                    item.href?.[i] ? (
                      <a
                        key={value}
                        href={item.href[i]}
                      >
                        {value}
                      </a>
                    ) : (
                      <strong key={value}>{value}</strong>
                    ),
                  )}
                </div>
              ) : item.href ? (
                <a href={item.href}>{item.value}</a>
              ) : (
                <strong>{item.value}</strong>
              )}

              {item.description && <p>{item.description}</p>}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default ContactInfo;