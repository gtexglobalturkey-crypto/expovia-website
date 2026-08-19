import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import SEO from "../components/seo/SEO";

import IndustriesHero from "../components/Industries/IndustriesHero";
import IndustriesGrid from "../components/Industries/IndustriesGrid";
import IndustryCTA from "../components/Industries/IndustryCTA";

import { PAGE_TITLES } from "../config/pageTitles";
import { useTranslation } from "../hooks/useTranslation";

function Industries() {
  const { language } = useTranslation();

  return (
    <>
      <SEO
        title={PAGE_TITLES.industries[language]}
        canonical="/industries"
      />

      <Header />

      <main>
        <IndustriesHero />
        <IndustriesGrid />
        <IndustryCTA />
      </main>

      <Footer />
    </>
  );
}

export default Industries;