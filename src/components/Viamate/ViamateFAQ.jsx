import { useState } from "react";

import { ChevronDown } from "lucide-react";

import { useTranslation } from "../../hooks/useTranslation";

function ViamateFAQ() {
  const { language } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const content = {
    en: {
      eyebrow: "FAQ",
      title: "Frequently asked questions",
      items: [
        {
          question: "Can VIAMATE work without an internet connection?",
          answer:
            "Yes. VIAMATE is designed offline-first for field use. Core Workspace, capture, and organization flows do not require a continuous internet connection.",
        },
        {
          question:
            "Can I scan QR codes on exhibition badges as well as business cards?",
          answer:
            "Yes. VIAMATE can read the information contained in a QR code, including QR codes on exhibition badges. If the QR content is not enough, you can scan the business card or complete the information manually.",
        },
        {
          question: "Does my data stay locked inside VIAMATE?",
          answer:
            "No. VIAMATE is built around Collect. Process. Transfer. When you complete a Workspace, you can take your company and contact information in Excel files and your business cards, photos, documents, recordings, receipts, and other files in an organized folder structure.",
        },
        {
          question: "Do I need a CRM to use VIAMATE?",
          answer:
            "No. VIAMATE works independently. You can take your data in standard Excel files and folders and continue using it in your own workflow.",
        },
        {
          question: "Can I track travel expenses?",
          answer:
            "Yes. You can record expenses in different currencies, enter the exchange rate you used, and attach receipts to the relevant expense. At the end of the Workspace, you can review your expense records together with the total in your base currency.",
        },
        {
          question: "Which devices can use VIAMATE?",
          answer:
            "The first version of VIAMATE is being prepared for Android 10 and above. An iOS version is planned for a later stage.",
        },
      ],
    },

    tr: {
      eyebrow: "SSS",
      title: "Sıkça sorulan sorular",
      items: [
        {
          question: "VIAMATE internet bağlantısı olmadan çalışır mı?",
          answer:
            "Evet. VIAMATE saha kullanımı için offline-first tasarlanmıştır. Temel çalışma, kayıt ve düzenleme akışlarında sürekli internet bağlantısına bağımlı kalmadan çalışabilirsiniz.",
        },
        {
          question:
            "Kartvizit dışında fuar badge'lerindeki QR kodlarını da okuyabilir miyim?",
          answer:
            "Evet. VIAMATE, QR kodunda bulunan bilgileri okuyabilir. QR içeriği yeterli değilse kartviziti tarayabilir veya bilgileri manuel olarak tamamlayabilirsiniz.",
        },
        {
          question: "Bilgilerim VIAMATE'in içinde mi kalıyor?",
          answer:
            "Hayır. VIAMATE'in temel yaklaşımı Collect. Process. Transfer. Çalışmanızı tamamladığınızda şirket ve kişi bilgilerinizi Excel dosyalarıyla; kartvizit, fotoğraf, belge, ses kaydı, fiş ve diğer çalışma dosyalarınızı düzenli klasör yapısıyla alabilirsiniz.",
        },
        {
          question: "VIAMATE'i kullanmak için bir CRM'e ihtiyacım var mı?",
          answer:
            "Hayır. VIAMATE bağımsız çalışır. Verilerinizi normal Excel dosyaları ve klasörler halinde alabilir, daha sonra kendi çalışma sisteminizde kullanabilirsiniz.",
        },
        {
          question: "Seyahat harcamalarımı da takip edebilir miyim?",
          answer:
            "Evet. Harcamalarınızı farklı para birimleriyle kaydedebilir, kullandığınız kuru girebilir ve fişlerinizi ilgili harcamaya ekleyebilirsiniz. Çalışma sonunda harcama kayıtlarınızı ve baz para biriminizdeki toplamınızı düzenli şekilde alabilirsiniz.",
        },
        {
          question: "VIAMATE hangi cihazlarda kullanılabilir?",
          answer:
            "VIAMATE'in ilk sürümü Android 10 ve üzeri cihazlar için hazırlanmıştır. iOS sürümü daha sonraki aşamada planlanmaktadır.",
        },
      ],
    },
  };

  const t = content[language];

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="viamate-section viamate-faq-section">
      <div className="container">
        <div className="viamate-section-inner">
          <p className="section-label">{t.eyebrow}</p>

          <h2>{t.title}</h2>

          <div className="viamate-faq-list">
            {t.items.map((item, index) => {
            const isOpen = openIndex === index;
            const buttonId = `viamate-faq-button-${index}`;
            const panelId = `viamate-faq-panel-${index}`;

            return (
              <div
                className="viamate-faq-item"
                key={item.question}
              >
                <h3 className="viamate-faq-heading">
                  <button
                    type="button"
                    id={buttonId}
                    className="viamate-faq-trigger"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(index)}
                  >
                    <span>{item.question}</span>

                    <ChevronDown
                      size={18}
                      className="viamate-faq-chevron"
                      aria-hidden="true"
                    />
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="viamate-faq-panel"
                  hidden={!isOpen}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ViamateFAQ;
