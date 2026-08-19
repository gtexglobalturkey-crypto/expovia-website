import { FileText, Mic, PenLine } from "lucide-react";

import { useTranslation } from "../../hooks/useTranslation";

import viamateMeetingScreenshotEn from "../../assets/images/viamate/optimized/viamate-meeting-details.webp";
import viamateMeetingScreenshotTr from "../../assets/images/viamate/optimized/viamate-meeting-details-tr.webp";

import ViamatePhoneScreenshot from "./ViamatePhoneScreenshot";

function ViamateMeeting() {
  const { language } = useTranslation();

  const content = {
    en: {
      title: "Leave no part of a meeting behind.",
      options: [
        {
          Icon: Mic,
          question:
            "Does the information contain complex codes, technical details, or something you may mistype while taking notes?",
          action: "Record it as voice.",
        },
        {
          Icon: PenLine,
          question: "Does the conversation require a sketch or diagram?",
          action: "Draw it, take a photo, and add it to the meeting.",
        },
        {
          Icon: FileText,
          question:
            "Did you quote from a discounted price list already stored on your device?",
          action: "Attach the file directly as a document.",
        },
      ],
      paragraphLead:
        "Instead of searching for written notes, voice recordings, photos, and documents in different places,",
      paragraphEmphasis: "keep them together under one meeting.",
      punchlineTitle: "Stop stapling business cards into notebooks.",
      punchlineText: "Keep the whole meeting together, in one place.",
      screenshotAlt: "VIAMATE meeting details screen",
    },

    tr: {
      title: "Bir görüşmenin hiçbir parçasını geride bırakmayın.",
      options: [
        {
          Icon: Mic,
          question:
            "Alacağınız not karmaşık kodlar, teknik detaylar veya yazarken hata yapabileceğiniz bilgiler mi içeriyor?",
          action: "Sesli kaydedin.",
        },
        {
          Icon: PenLine,
          question: "Anlatılan konu bir çizim veya şema mı gerektiriyor?",
          action: "Çizin, fotoğrafını çekin ve görüşmeye ekleyin.",
        },
        {
          Icon: FileText,
          question:
            "Cihazınızda kayıtlı indirimli fiyat listesinden teklif mi verdiniz?",
          action: "Dosyayı doğrudan belge olarak ekleyin.",
        },
      ],
      paragraphLead:
        "Yazılı notlarınızı, ses kayıtlarınızı, fotoğraflarınızı ve belgelerinizi farklı yerlerde aramak yerine",
      paragraphEmphasis: "tek bir görüşmenin altında bir arada tutun.",
      punchlineTitle: "Artık deftere kartvizit zımbalamayın.",
      punchlineText:
        "Bir toplantıyı bütün parçalarıyla birlikte tek yerde toplayın.",
      screenshotAlt: "VIAMATE görüşme detayı ekranı",
    },
  };

  const t = content[language];
  const meetingScreenshot =
    language === "tr" ? viamateMeetingScreenshotTr : viamateMeetingScreenshotEn;

  return (
    <section className="viamate-section">
      <div className="container">
        <div className="viamate-section-split viamate-section-split--reverse viamate-section-split--centered viamate-section-split--wide">
          <div>
            <h2>{t.title}</h2>

            <ul className="viamate-option-list">
              {t.options.map(({ Icon, question, action }) => (
                <li
                  className="viamate-option-item"
                  key={question}
                >
                  <span className="viamate-option-icon">
                    <Icon size={18} />
                  </span>

                  <span>
                    <span className="viamate-option-question">
                      {question}
                    </span>
                    <strong className="viamate-option-action">
                      {action}
                    </strong>
                  </span>
                </li>
              ))}
            </ul>

            <p>
              {t.paragraphLead}{" "}
              <span className="viamate-inline-emphasis">
                {t.paragraphEmphasis}
              </span>
            </p>

            <div className="viamate-punchline-card viamate-punchline-card--outline">
              <h3>{t.punchlineTitle}</h3>

              <p>{t.punchlineText}</p>
            </div>
          </div>

          <ViamatePhoneScreenshot
            image={meetingScreenshot}
            alt={t.screenshotAlt}
          />
        </div>
      </div>
    </section>
  );
}

export default ViamateMeeting;
