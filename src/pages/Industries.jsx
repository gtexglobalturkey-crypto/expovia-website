import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import IndustriesHero from "../components/industries/IndustriesHero";
import IndustriesGrid from "../components/industries/IndustriesGrid";
import IndustryCTA from "../components/industries/IndustryCTA";

function Industries() {
  return (
    <>
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