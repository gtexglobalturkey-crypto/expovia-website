import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import IndustriesHero from "../components/Industries/IndustriesHero";
import IndustriesGrid from "../components/Industries/IndustriesGrid";
import IndustryCTA from "../components/Industries/IndustryCTA";

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