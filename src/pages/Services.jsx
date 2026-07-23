import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import SEO from "../components/seo/SEO";

import ServicesHero from "../components/Services/ServicesHero";
import ServicesGrid from "../components/Services/ServicesGrid";
import ServicesProcess from "../components/Services/ServicesProcess";
import ServicesCTA from "../components/Services/ServicesCTA";

function Services() {
  return (
    <>
      <SEO
        title="International Exhibition Services"
        description="Discover EREXPO services for international exhibition participation, including exhibition selection, stand planning, participation management and pre-exhibition support."
        canonical="/services"
      />

      <Header />

      <main>
        <ServicesHero />
        <ServicesGrid />
        <ServicesProcess />
        <ServicesCTA />
      </main>

      <Footer />
    </>
  );
}

export default Services;