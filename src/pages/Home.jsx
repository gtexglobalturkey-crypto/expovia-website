import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import Hero from "../components/home/Hero";
import FeaturedExhibitions from "../components/home/FeaturedExhibitions";
import CTA from "../components/home/CTA";

import SEO from "../components/seo/SEO";

import { PAGE_TITLES } from "../config/pageTitles";
import { useTranslation } from "../hooks/useTranslation";

function Home() {
  const { language } = useTranslation();

  return (
    <>
      <SEO
        title={PAGE_TITLES.home[language]}
        description="VIAFA helps manufacturers and exporters participate in leading international trade exhibitions through professional exhibition representation, participation management and business development services."
        canonical="/"
      />

      <Header />

      <main>
        <Hero />
        <FeaturedExhibitions />
        <CTA />
      </main>

      <Footer />
    </>
  );
}

export default Home;