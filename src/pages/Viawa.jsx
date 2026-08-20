import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import SEO from "../components/seo/SEO";

import ViawaHero from "../components/Viawa/ViawaHero";
import ViawaShowcase from "../components/Viawa/ViawaShowcase";
import ViawaClosing from "../components/Viawa/ViawaClosing";

import { PAGE_TITLES } from "../config/pageTitles";
import { useTranslation } from "../hooks/useTranslation";

function Viawa() {
  const { language } = useTranslation();

  const openViawaLogin = () => {
    window.location.assign("https://app.expoviafair.com/");
  };

  return (
    <>
      <SEO
        title={PAGE_TITLES.viawa[language]}
        description="VIAWA is VIAFA's internal operational platform, developed to plan, manage and follow international exhibition projects within one consistent workspace."
        canonical="/viawa"
      />

      <Header />

      <main>
        <ViawaHero onOpenLogin={openViawaLogin} />
        <ViawaShowcase />
        <ViawaClosing onOpenLogin={openViawaLogin} />
      </main>

      <Footer />
    </>
  );
}

export default Viawa;
