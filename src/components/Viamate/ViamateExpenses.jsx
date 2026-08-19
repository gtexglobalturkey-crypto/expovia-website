import { Receipt, Wallet } from "lucide-react";

import { useTranslation } from "../../hooks/useTranslation";

import viamateExpensesScreenshotEn from "../../assets/images/viamate/optimized/viamate-expenses.webp";
import viamateExpensesScreenshotTr from "../../assets/images/viamate/optimized/viamate-expenses-tr.webp";

import ViamatePhoneScreenshot from "./ViamatePhoneScreenshot";

function ViamateExpenses() {
  const { language } = useTranslation();

  const content = {
    en: {
      title: "Do not rebuild your expense report after the trip.",
      question:
        "Do you need to report travel expenses to accounting, or simply keep a clean record for yourself?",
      paragraph2Lead: "Record the expense",
      paragraph2Emphasis:
        "in the currency you actually used and enter the exchange rate.",
      paragraph2Rest:
        "If you have a receipt, take a photo and attach it. If there is no receipt, create the expense manually.",
      paragraph3Lead:
        "Record expenses as you go. At the end of the Workspace, VIAMATE prepares a clear view of",
      paragraph3Emphasis:
        "how much you spent in each currency and your total spend in your base currency.",
      paragraph4:
        "Your receipts and expense records stay together with the rest of your Workspace files.",
      callout: "Keep them for yourself or send them to accounting.",
      punchlineTitle: "Stop spending hours rebuilding expense reports.",
      punchlineText:
        "Record the expense when it happens; let VIAMATE have the report ready when you return.",
      screenshotAlt: "VIAMATE expenses screen",
    },

    tr: {
      title: "Harcamalarınızı seyahat dönüşünde yeniden hazırlamayın.",
      question:
        "Seyahat masraflarınızı muhasebeye raporlamanız veya yalnızca kendi kayıtlarınız için takip etmeniz mi gerekiyor?",
      paragraph2Lead: "Harcamanızı yaptığınız",
      paragraph2Emphasis: "para birimiyle kaydedin, kullandığınız kuru girin.",
      paragraph2Rest:
        "Fişiniz varsa fotoğrafını çekip harcamaya ekleyin; fiş yoksa kaydınızı manuel olarak oluşturun.",
      paragraph3Lead:
        "Seyahatiniz boyunca harcamalarınızı kaydedin. VIAMATE, çalışma sonunda",
      paragraph3Emphasis:
        "hangi para biriminde ne kadar harcadığınızı ve kendi baz para biriminizde toplam harcamanızın ne olduğunu",
      paragraph3Rest: "düzenli bir harcama raporu halinde hazırlar.",
      paragraph4:
        "Fişleriniz ve harcama kayıtlarınız da çalışma dosyalarınızla birlikte düzenli şekilde sizinle gelir.",
      callout: "İster kendi kayıtlarınız için saklayın, ister muhasebenize gönderin.",
      punchlineTitle: "Saatlerce harcama raporu hazırlamakla uğraşmayın.",
      punchlineText:
        "Siz harcamayı yaptığınız anda kaydedin; VIAMATE dönüşte raporunuzu hazır etsin.",
      screenshotAlt: "VIAMATE harcamalar ekranı",
    },
  };

  const t = content[language];
  const expensesScreenshot =
    language === "tr" ? viamateExpensesScreenshotTr : viamateExpensesScreenshotEn;

  return (
    <section className="viamate-section viamate-section--alt">
      <div className="container">
        <div className="viamate-section-split viamate-section-split--centered viamate-section-split--wide">
          <div>
            <div className="viamate-section-icon" aria-hidden="true">
              <Wallet size={22} />
            </div>

            <h2>{t.title}</h2>

            <p>{t.question}</p>

            <p>
              {t.paragraph2Lead}{" "}
              <span className="viamate-inline-emphasis">
                {t.paragraph2Emphasis}
              </span>{" "}
              {t.paragraph2Rest}
            </p>

            <p>
              {t.paragraph3Lead}{" "}
              <span className="viamate-inline-emphasis">
                {t.paragraph3Emphasis}
              </span>{" "}
              {t.paragraph3Rest}
            </p>

            <p>{t.paragraph4}</p>

            <p className="viamate-callout">
              <Receipt
                size={16}
                aria-hidden="true"
              />
              {t.callout}
            </p>

            <div className="viamate-punchline-card viamate-punchline-card--outline">
              <h3>{t.punchlineTitle}</h3>

              <p>{t.punchlineText}</p>
            </div>
          </div>

          <ViamatePhoneScreenshot
            image={expensesScreenshot}
            alt={t.screenshotAlt}
          />
        </div>
      </div>
    </section>
  );
}

export default ViamateExpenses;
