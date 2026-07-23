import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import Hero from "../components/home/Hero";
import FeaturedExhibitions from "../components/home/FeaturedExhibitions";
import WhyERExpo from "../components/home/WhyERExpo";
import CTA from "../components/home/CTA";

import SEO from "../components/seo/SEO";

function Home() {
  return (
    <>
      <SEO
        title="International Exhibition Representation"
        description="EREXPO helps manufacturers and exporters participate in leading international trade exhibitions through professional exhibition representation, participation management and business development services."
        canonical="/"
      />

      <Header />

      <main>
        <Hero />
        <FeaturedExhibitions />
        <WhyERExpo />
        <CTA />
      </main>

      <Footer />
    </>
  );
}

export default Home;