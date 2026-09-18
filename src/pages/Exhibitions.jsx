import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import SEO from "../components/seo/SEO";

import ExhibitionsHero from "../components/exhibitions/ExhibitionsHero";
import FeaturedExhibitions from "../components/exhibitions/FeaturedExhibitions";
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
        description="Explore the international exhibitions VIAFA represents for participation from Türkiye, including WAMPEX West Africa, the region's largest mining and power exhibition."
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
