import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import SEO from "../components/seo/SEO";

import ContechHero from "../components/exhibition-detail/contech/ContechHero";
import ContechOverview from "../components/exhibition-detail/contech/ContechOverview";
import ContechSectors from "../components/exhibition-detail/contech/ContechSectors";
import ContechVisitors from "../components/exhibition-detail/contech/ContechVisitors";
import ContechOpportunities from "../components/exhibition-detail/contech/ContechOpportunities";
import ContechParticipation from "../components/exhibition-detail/contech/ContechParticipation";
import ContechCTA from "../components/exhibition-detail/contech/ContechCTA";

import { PAGE_TITLES } from "../config/pageTitles";
import {
  CONTECH_IMAGES,
  CONTECH_PATH,
} from "../data/contechVietnam2027";
import { useTranslation } from "../hooks/useTranslation";

const DESCRIPTIONS = {
  en: "CONTECH Vietnam 2027 (23–25 June 2027, Vietnam Exposition Center, Hanoi): international exhibition for construction, mining and transport infrastructure machinery, equipment and technology. VIAFA is the Türkiye Sales Agent.",
  tr: "CONTECH Vietnam 2027 (23–25 Haziran 2027, Vietnam Exposition Center, Hanoi): inşaat, madencilik ve ulaştırma altyapısı makine, ekipman ve teknolojileri fuarı. VIAFA, fuarın Türkiye Satış Temsilcisidir.",
};

function ContechVietnam2027() {
  const { language } = useTranslation();

  return (
    <>
      <SEO
        title={PAGE_TITLES.contechVietnam2027[language]}
        description={DESCRIPTIONS[language]}
        canonical={CONTECH_PATH}
        image={CONTECH_IMAGES.og ?? undefined}
      />

      <Header />

      <main>
        <ContechHero />

        <ContechOverview />

        <ContechSectors />

        <ContechVisitors />

        <ContechOpportunities />

        <ContechParticipation />

        <ContechCTA />
      </main>

      <Footer />
    </>
  );
}

export default ContechVietnam2027;
