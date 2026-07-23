import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import SEO from "../components/seo/SEO";

import AboutHero from "../components/about/AboutHero";
import WhoWeAre from "../components/about/WhoWeAre";
import Experience from "../components/about/Experience";
import HowWeWork from "../components/about/HowWeWork";
import Values from "../components/about/Values";

function About() {
  return (
    <div className="about-page">
      <SEO
        title="About EREXPO"
        description="Learn about EREXPO, our international exhibition representation expertise, industry experience and commitment to helping companies expand into global markets."
        canonical="/about"
      />

      <Header />

      <main>
        <AboutHero />

        <WhoWeAre />

        <Experience />

        <HowWeWork />

        <Values />
      </main>

      <Footer />
    </div>
  );
}

export default About;