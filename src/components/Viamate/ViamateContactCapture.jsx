import { PenLine, QrCode, ScanLine } from "lucide-react";

import { useTranslation } from "../../hooks/useTranslation";

import viamateCardScanScreenshotEn from "../../assets/images/viamate/optimized/viamate-business-card-scan.webp";
import viamateCardScanScreenshotTr from "../../assets/images/viamate/optimized/viamate-business-card-scan-tr.webp";

import ViamatePhoneScreenshot from "./ViamatePhoneScreenshot";

function ViamateContactCapture() {
  const { language } = useTranslation();

  const content = {
    en: {
      title: "Never lose a new contact.",
      methods: [
        {
          Icon: QrCode,
          text: "Scan a QR code or the QR on an exhibition badge.",
        },
        {
          Icon: ScanLine,
          text: "If the information inside it is not enough, scan the business card.",
        },
        {
          Icon: PenLine,
          text: "If lighting, reflections, or the card itself make scanning difficult, enter the information manually.",
        },
      ],
      callout:
        "VIAMATE gives you more than one way to capture a contact. What matters is that the contact does not get lost.",
      paragraph:
        "The business card, contact details, and related notes stay together inside the same Workspace, where they belong.",
      punchlineTitle:
        "Don't leave the business card in one place and the notes somewhere else.",
      punchlineText:
        "Keep the person, the business card, and the meeting information together.",
      screenshotAlt: "VIAMATE business card scan screen",
    },

    tr: {
      title: "Yeni bir bağlantıyı kaybetmeyin.",
      methods: [
        {
          Icon: QrCode,
          text: "QR kodunu veya fuar badge'indeki QR'ı okutun.",
        },
        {
          Icon: ScanLine,
          text: "İçindeki bilgiler yeterli değilse kartviziti tarayın.",
        },
        {
          Icon: PenLine,
          text: "Işık, yansıma veya kartın yapısı taramayı zorlaştırıyorsa bilgileri manuel olarak kaydedin.",
        },
      ],
      callout:
        "VIAMATE size farklı kayıt yolları sunar; önemli olan, edindiğiniz bağlantının kaybolmamasıdır.",
      paragraph:
        "Kartvizit, kişi bilgileri ve ilgili notlar aynı çalışma içinde, ait oldukları yerde kalır.",
      punchlineTitle:
        "Kartvizit defterde, notlar kenarında kalmasın.",
      punchlineText:
        "Kişi, kartvizit ve görüşme bilgileri birlikte kalsın.",
      screenshotAlt: "VIAMATE kartvizit tarama ekranı",
    },
  };

  const t = content[language];
  const cardScanScreenshot =
    language === "tr" ? viamateCardScanScreenshotTr : viamateCardScanScreenshotEn;

  return (
    <section className="viamate-section viamate-section--alt">
      <div className="container">
        <div className="viamate-section-split viamate-section-split--centered viamate-section-split--wide viamate-section-split--gap-lg">
          <div>
            <h2>{t.title}</h2>

            <ul className="viamate-action-list">
              {t.methods.map(({ Icon, text }) => (
                <li
                  className="viamate-action-item"
                  key={text}
                >
                  <span className="viamate-action-icon">
                    <Icon size={18} />
                  </span>

                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <p>
              <span className="viamate-inline-emphasis">{t.callout}</span>{" "}
              {t.paragraph}
            </p>

            <div className="viamate-punchline-card">
              <h3>{t.punchlineTitle}</h3>

              <p>{t.punchlineText}</p>
            </div>
          </div>

          <ViamatePhoneScreenshot
            image={cardScanScreenshot}
            alt={t.screenshotAlt}
          />
        </div>
      </div>
    </section>
  );
}

export default ViamateContactCapture;
