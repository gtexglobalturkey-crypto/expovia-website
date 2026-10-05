import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import SEO from "../components/seo/SEO";

import ExhibitionsHero from "../components/exhibitions/ExhibitionsHero";
import FeaturedExhibitions from "../components/exhibitions/FeaturedExhibitions";
import ExhibitionsPortfolioNotice from "../components/exhibitions/ExhibitionsPortfolioNotice";
import ExhibitionsCTA from "../components/exhibitions/ExhibitionsCTA";

import { PAGE_TITLES } from "../config/pageTitles";
import { useTranslation } from "../hooks/useTranslation";

const DESCRIPTIONS = {
  en: "Explore the international exhibitions VIAFA offers for participation from Türkiye: WAMPEX West Africa 2027, Securex South Africa 2027 and CONTECH Vietnam 2027.",
  tr: "VIAFA aracılığıyla Türkiye'den katılım sağlanabilecek uluslararası fuarları keşfedin: WAMPEX West Africa 2027, Securex South Africa 2027 ve CONTECH Vietnam 2027.",
};

function Exhibitions() {
  const { language } = useTranslation();

  return (
    <>
      <SEO
        title={PAGE_TITLES.exhibitions[language]}
        description={DESCRIPTIONS[language]}
        canonical="/exhibitions"
      />

      <Header />

      <main>
        <ExhibitionsHero />

        <FeaturedExhibitions />

        <ExhibitionsPortfolioNotice />

        <ExhibitionsCTA />
      </main>

      <Footer />
    </>
  );
}

export default Exhibitions;
