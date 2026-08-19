import { useState } from "react";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import SEO from "../components/seo/SEO";

import ViawaHero from "../components/Viawa/ViawaHero";
import ViawaShowcase from "../components/Viawa/ViawaShowcase";
import ViawaClosing from "../components/Viawa/ViawaClosing";
import ViawaLoginModal from "../components/Viawa/ViawaLoginModal";

import { PAGE_TITLES } from "../config/pageTitles";
import { useTranslation } from "../hooks/useTranslation";

function Viawa() {
  const { language } = useTranslation();
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <>
      <SEO
        title={PAGE_TITLES.viawa[language]}
        description="VIAWA is VIAFA's internal operational platform, developed to plan, manage and follow international exhibition projects within one consistent workspace."
        canonical="/viawa"
      />

      <Header />

      <main>
        <ViawaHero onOpenLogin={() => setIsLoginOpen(true)} />
        <ViawaShowcase />
        <ViawaClosing onOpenLogin={() => setIsLoginOpen(true)} />
      </main>

      <Footer />

      <ViawaLoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />
    </>
  );
}

export default Viawa;
