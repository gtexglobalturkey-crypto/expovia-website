import { Inbox, Layers, SquareArrowOutUpRight } from "lucide-react";

import { useTranslation } from "../../hooks/useTranslation";

const STEP_ICONS = [Inbox, Layers, SquareArrowOutUpRight];
const STEP_NUMBERS = ["01", "02", "03"];

function ViamateCollectProcessTransfer() {
  const { language } = useTranslation();

  const content = {
    en: {
      eyebrow: "Collect. Process. Transfer.",
      steps: [
        {
          label: "COLLECT",
          heading: "Leave nothing behind in the field.",
          body: "Capture business cards, contact details, QR codes, meetings, voice and written notes, photos, documents, and expenses while the work is happening.",
          emphasis:
            "Instead of trying to reconstruct the day later, capture the information when it is created.",
        },
        {
          label: "PROCESS",
          heading: "Turn scattered information into usable work.",
          body: "VIAMATE organizes what you collect around companies, people, meetings, documents, and expenses.",
          extra:
            "So instead of ending the day with disconnected files spread across your phone, you have a structured Workspace where you know what belongs to whom and where it belongs.",
        },
        {
          label: "TRANSFER",
          heading: "When the work is done, your data goes with you.",
          lead: "VIAMATE does not lock your work inside the app.",
          body: "When you complete a Workspace, your company and contact information is ready in {file1}, and your expense records are ready in {file2}.",
          extra:
            "Your business cards, photos, documents, voice recordings, receipts, and personal notes also come with you in an organized folder structure.",
          extra2:
            "Move the files to your computer, share them, archive them, or continue using them in your own workflow.",
          emphasis:
            "No CRM required. No proprietary file format. No lock-in.",
        },
      ],
      closing: "Your work does not stay inside VIAMATE. It goes with you.",
    },

    tr: {
      eyebrow: "Collect. Process. Transfer.",
      steps: [
        {
          label: "COLLECT",
          heading: "Sahada hiçbir şeyi geride bırakmayın.",
          body: "Kartvizitleri, kişi bilgilerini, QR kodlarını, görüşmeleri, sesli ve yazılı notları, fotoğrafları, belgeleri ve harcamaları çalışma sırasında toplayın.",
          emphasis:
            "Bilgiyi daha sonra hatırlamaya çalışmak yerine, oluştuğu anda kaydedin.",
        },
        {
          label: "PROCESS",
          heading: "Dağınık bilgiyi kullanılabilir hale getirin.",
          body: "VIAMATE topladığınız içeriği şirketler, kişiler, görüşmeler, belgeler ve harcamalar etrafında düzenler.",
          extra:
            "Böylece günün sonunda telefonunuzun farklı yerlerine dağılmış bilgiler yerine, neyin kime ve hangi çalışmaya ait olduğunu bildiğiniz düzenli bir çalışma oluşur.",
        },
        {
          label: "TRANSFER",
          heading: "Çalışmanız bittiğinde verileriniz sizinle gelir.",
          lead: "VIAMATE verilerinizi kendi içinde kilitlemez.",
          body: "Çalışmanızı tamamladığınızda şirket ve kişi bilgileriniz {file1}, harcama kayıtlarınız {file2} olarak hazırdır.",
          extra:
            "Kartvizitleriniz, fotoğraflarınız, belgeleriniz, ses kayıtlarınız, fişleriniz ve kişisel notlarınız da düzenli klasör yapısı içerisinde sizinle gelir.",
          extra2:
            "Dosyalarınızı bilgisayarınıza aktarın, paylaşın, arşivleyin veya kendi çalışma sisteminizde kullanmaya devam edin.",
          emphasis:
            "CRM zorunluluğu yok. Özel dosya formatı yok. Verilerinize erişmek için VIAMATE'e bağlı kalmak zorunda değilsiniz.",
        },
      ],
      closing: "Çalışmanız VIAMATE'te kalmaz. Sizinle gelir.",
    },
  };

  const t = content[language];

  const renderWithFiles = (template) => {
    const [before, rest] = template.split("{file1}");
    const [middle, after] = rest.split("{file2}");

    return (
      <>
        {before}
        <code className="viamate-file-chip">Firmalar.xlsx</code>
        {middle}
        <code className="viamate-file-chip">Harcamalar.xlsx</code>
        {after}
      </>
    );
  };

  return (
    <section className="viamate-cpt">
      <div className="container">
        <p className="viamate-cpt-eyebrow">{t.eyebrow}</p>

        <div className="viamate-cpt-grid">
          {t.steps.map((step, index) => {
            const Icon = STEP_ICONS[index];

            return (
              <div
                className="viamate-cpt-step"
                key={step.label}
              >
                <span
                  className="viamate-cpt-number"
                  aria-hidden="true"
                >
                  {STEP_NUMBERS[index]}
                </span>

                <div className="viamate-cpt-step-header">
                  <span className="viamate-cpt-icon">
                    <Icon size={20} />
                  </span>

                  <span className="viamate-cpt-label">{step.label}</span>
                </div>

                <h3>{step.heading}</h3>

                {step.lead && (
                  <p className="viamate-cpt-lead">{step.lead}</p>
                )}

                <p>
                  {step.body.includes("{file1}")
                    ? renderWithFiles(step.body)
                    : step.body}
                </p>

                {step.extra && <p>{step.extra}</p>}
                {step.extra2 && <p>{step.extra2}</p>}

                {step.emphasis && (
                  <p className="viamate-cpt-emphasis">{step.emphasis}</p>
                )}

                {index < t.steps.length - 1 && (
                  <span
                    className="viamate-cpt-connector"
                    aria-hidden="true"
                  />
                )}
              </div>
            );
          })}
        </div>

        <p className="viamate-cpt-closing">{t.closing}</p>
      </div>
    </section>
  );
}

export default ViamateCollectProcessTransfer;
