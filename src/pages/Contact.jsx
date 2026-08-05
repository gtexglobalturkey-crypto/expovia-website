import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import SEO from "../components/seo/SEO";

import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";

import "../styles/contact.css";

function Contact() {
  return (
    <>
      <SEO
        title="Contact EXPOVIA"
        description="Contact EXPOVIA for international exhibition participation, stand planning, representation services and business development opportunities."
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