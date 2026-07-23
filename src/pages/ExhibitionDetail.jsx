import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import SEO from "../components/seo/SEO";

import ExhibitionDetailHero from "../components/exhibition-detail/ExhibitionDetailHero";
import ExhibitionStatistics from "../components/exhibition-detail/ExhibitionStatistics";
import ExhibitionOverview from "../components/exhibition-detail/ExhibitionOverview";
import ExhibitionHighlights from "../components/exhibition-detail/ExhibitionHighlights";
import ExhibitionProfiles from "../components/exhibition-detail/ExhibitionProfiles";
import ExhibitionProducts from "../components/exhibition-detail/ExhibitionProducts";
import ExhibitionParticipation from "../components/exhibition-detail/ExhibitionParticipation";
import ExhibitionFloorPlan from "../components/exhibition-detail/ExhibitionFloorPlan";
import ExhibitionSupport from "../components/exhibition-detail/ExhibitionSupport";
import ExhibitionDetailCTA from "../components/exhibition-detail/ExhibitionDetailCTA";

function ExhibitionDetail() {
  return (
    <>
      <SEO
        title="Mining Türkiye 2027"
        description="Discover Mining Türkiye 2027, one of the leading international mining exhibitions, with participation information, exhibitor profiles, floor plan and EREXPO support services."
        canonical="/exhibition-detail"
      />

      <Header />

      <main>
        <ExhibitionDetailHero />

        <ExhibitionStatistics />

        <ExhibitionOverview />

        <ExhibitionHighlights />

        <ExhibitionProfiles />

        <ExhibitionProducts />

        <ExhibitionParticipation />

        <ExhibitionFloorPlan />

        <ExhibitionSupport />

        <ExhibitionDetailCTA />
      </main>

      <Footer />
    </>
  );
}

export default ExhibitionDetail;