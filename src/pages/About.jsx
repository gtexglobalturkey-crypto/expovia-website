import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import SEO from "../components/seo/SEO";

import AboutHero from "../components/about/AboutHero";
import WhoWeAre from "../components/about/WhoWeAre";
import AboutTimeline from "../components/about/AboutTimeline";
import HowWeWork from "../components/about/HowWeWork";
import Values from "../components/about/Values";

import { PAGE_TITLES } from "../config/pageTitles";
import { useTranslation } from "../hooks/useTranslation";

function About() {
  const { language } = useTranslation();

  return (
    <div className="about-page">
      <SEO
        title={PAGE_TITLES.about[language]}
        description="Learn about VIAFA, our international exhibition representation expertise, industry experience and commitment to helping companies expand into global markets."
        canonical="/about"
      />

      <Header />

      <main>
        <AboutHero />

        <WhoWeAre />

        <AboutTimeline />

        <HowWeWork />

        <Values />
      </main>

      <Footer />
    </div>
  );
}

export default About;