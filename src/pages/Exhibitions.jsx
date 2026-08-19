import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import SEO from "../components/seo/SEO";

import ExhibitionsHero from "../components/exhibitions/ExhibitionsHero";
import ExhibitionsPortfolioNotice from "../components/exhibitions/ExhibitionsPortfolioNotice";
import ExhibitionsCTA from "../components/exhibitions/ExhibitionsCTA";

import { PAGE_TITLES } from "../config/pageTitles";
import { useTranslation } from "../hooks/useTranslation";

function Exhibitions() {
  const { language } = useTranslation();

  return (
    <>
      <SEO
        title={PAGE_TITLES.exhibitions[language]}
        description="Explore international trade exhibitions across mining, construction, energy, manufacturing and other strategic industries with VIAFA."
        canonical="/exhibitions"
      />

      <Header />

      <main>
        <ExhibitionsHero />

        <ExhibitionsPortfolioNotice />

        <ExhibitionsCTA />
      </main>

      <Footer />
    </>
  );
}

export default Exhibitions;