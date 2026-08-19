import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import SEO from "../components/seo/SEO";

import ServicesHero from "../components/Services/ServicesHero";
import ServicesProcess from "../components/Services/ServicesProcess";
import ServicesGrid from "../components/Services/ServicesGrid";
import ServicesCTA from "../components/Services/ServicesCTA";

function Services() {
  return (
    <>
      <SEO
        title="International Exhibition Services"
        description="Discover VIAFA services for international exhibition participation, including exhibition selection, stand planning, participation management and pre-exhibition support."
        canonical="/services"
      />

      <Header />

      <main>
        <ServicesHero />
        <ServicesProcess />
        <ServicesGrid />
        <ServicesCTA />
      </main>

      <Footer />
    </>
  );
}

export default Services;