import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import SEO from "../components/seo/SEO";

import ExhibitionsHero from "../components/exhibitions/ExhibitionsHero";
import ExhibitionsPortfolioNotice from "../components/exhibitions/ExhibitionsPortfolioNotice";
import ExhibitionsCTA from "../components/exhibitions/ExhibitionsCTA";

function Exhibitions() {
  return (
    <>
      <SEO
        title="International Trade Exhibitions"
        description="Explore international trade exhibitions across mining, construction, energy, manufacturing and other strategic industries with EXPOVIA."
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