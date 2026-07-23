import { useState } from "react";
import { useTranslation } from "../../hooks/useTranslation";

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
    },

    tr: {
      label: "Mesaj Gönderin",
      title: "Projenizden Bize Bahsedin",
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
    },
  };

  const t = content[language];

  const [form, setForm] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    industry: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log(form);
  }

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
            name="name"
            placeholder={t.placeholders.name}
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder={t.placeholders.email}
            value={form.email}
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
        >
          {t.button}
        </button>
      </form>
    </section>
  );
}

export default ContactForm;