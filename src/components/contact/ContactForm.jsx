import { useState } from "react";
import { useTranslation } from "../../hooks/useTranslation";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mdenpjol";

const INITIAL_FORM = {
  company: "",
  contact_person: "",
  corporate_email: "",
  phone: "",
  industry: "",
  message: "",
};

function ContactForm() {
  const { language } = useTranslation();

  const content = {
    en: {
      label: "Send a Message",
      title: "Tell Us About Your Project",
      description:
        "Complete the form below and our team will contact you as soon as possible.",

      placeholders: {
        company: "Company",
        name: "Contact Person",
        email: "Business Email",
        phone: "Phone",
        industry: "Industry",
        message:
          "Tell us about your products, target markets and the exhibitions you are interested in.",
      },

      button: "Send Message",
      buttonSending: "Sending...",
      success:
        "Your message has been sent successfully. We'll get back to you shortly.",
      error: "Your message could not be sent. Please try again.",
    },

    tr: {
      label: "Mesaj Gönderin",
      title: "Bize Ulaşın",
      description:
        "Aşağıdaki formu doldurun. Ekibimiz en kısa sürede sizinle iletişime geçecektir.",

      placeholders: {
        company: "Şirket",
        name: "İlgili Kişi",
        email: "Kurumsal E-posta",
        phone: "Telefon",
        industry: "Sektör",
        message:
          "Ürünleriniz, hedef pazarlarınız ve ilgilendiğiniz fuarlar hakkında bize bilgi verin.",
      },

      button: "Mesaj Gönder",
      buttonSending: "Gönderiliyor...",
      success:
        "Mesajınız başarıyla gönderildi. En kısa sürede sizinle iletişime geçeceğiz.",
      error: "Mesaj gönderilemedi. Lütfen tekrar deneyin.",
    },
  };

  const t = content[language];

  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState("idle");

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (status === "submitting") {
      return;
    }

    setStatus("submitting");

    try {
      const formData = new FormData(event.target);
      formData.append("_replyto", form.corporate_email);

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        setForm(INITIAL_FORM);
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const isSubmitting = status === "submitting";

  return (
    <section className="contact-workspace-form-panel">
      <div className="contact-workspace-form-header">
        <p className="contact-section-label">
          {t.label}
        </p>

        <h2>{t.title}</h2>

        <p>{t.description}</p>
      </div>

      <form
        className="contact-workspace-form"
        onSubmit={handleSubmit}
      >
        <div className="contact-form-grid">
          <input
            type="text"
            name="company"
            placeholder={t.placeholders.company}
            value={form.company}
            onChange={handleChange}
          />

          <input
            type="text"
            name="contact_person"
            placeholder={t.placeholders.name}
            value={form.contact_person}
            onChange={handleChange}
          />

          <input
            type="email"
            name="corporate_email"
            placeholder={t.placeholders.email}
            value={form.corporate_email}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder={t.placeholders.phone}
            value={form.phone}
            onChange={handleChange}
          />
        </div>

        <input
          type="text"
          name="industry"
          placeholder={t.placeholders.industry}
          value={form.industry}
          onChange={handleChange}
        />

        <textarea
          name="message"
          rows="6"
          placeholder={t.placeholders.message}
          value={form.message}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="primary-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? t.buttonSending : t.button}
        </button>

        {status === "success" && (
          <p className="contact-form-status contact-form-status--success">
            {t.success}
          </p>
        )}

        {status === "error" && (
          <p className="contact-form-status contact-form-status--error">
            {t.error}
          </p>
        )}
      </form>
    </section>
  );
}

export default ContactForm;
