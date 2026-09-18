import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import SEO from "../components/seo/SEO";

import ExhibitionDetailHero from "../components/exhibition-detail/ExhibitionDetailHero";
import ExhibitionStatistics from "../components/exhibition-detail/ExhibitionStatistics";
import ExhibitionOverview from "../components/exhibition-detail/ExhibitionOverview";
import ExhibitionProfiles from "../components/exhibition-detail/ExhibitionProfiles";
import ExhibitionProducts from "../components/exhibition-detail/ExhibitionProducts";
import ExhibitionGallery from "../components/exhibition-detail/ExhibitionGallery";
import ExhibitionParticipants from "../components/exhibition-detail/ExhibitionParticipants";
import ExhibitionSponsors from "../components/exhibition-detail/ExhibitionSponsors";
import ExhibitionParticipation from "../components/exhibition-detail/ExhibitionParticipation";
import ExhibitionDetailCTA from "../components/exhibition-detail/ExhibitionDetailCTA";

function ExhibitionDetail() {
  return (
    <>
      <SEO
        title="WAMPEX West Africa 2027"
        description="Discover WAMPEX West Africa 2027, the region's largest mining and power exhibition, with participation information, exhibitor profiles and VIAFA support services."
        canonical="/exhibition-detail"
      />

      <Header />

      <main>
        <ExhibitionDetailHero />

        <ExhibitionStatistics />

        <ExhibitionOverview />

        <ExhibitionProfiles />

        <ExhibitionProducts />

        <ExhibitionGallery />

        <ExhibitionParticipants />

        <ExhibitionSponsors />

        <ExhibitionParticipation />

        <ExhibitionDetailCTA />
      </main>

      <Footer />
    </>
  );
}

export default ExhibitionDetail;
