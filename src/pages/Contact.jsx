import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import SEO from "../components/seo/SEO";

import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";

import { PAGE_TITLES } from "../config/pageTitles";
import { useTranslation } from "../hooks/useTranslation";

import "../styles/contact.css";

function Contact() {
  const { language } = useTranslation();

  return (
    <>
      <SEO
        title={PAGE_TITLES.contact[language]}
        description="Contact VIAFA for international exhibition participation, stand planning, representation services and business development opportunities."
        canonical="/contact"
      />

      <Header />

      <main className="contact-page">
        <section className="contact-workspace">
          <div className="container">
            <div className="contact-workspace-shell">
              <ContactHero />
              <ContactInfo />
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Contact;