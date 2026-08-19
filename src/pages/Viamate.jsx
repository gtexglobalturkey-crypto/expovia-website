import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import SEO from "../components/seo/SEO";

import ViamateHero from "../components/Viamate/ViamateHero";
import ViamateProblem from "../components/Viamate/ViamateProblem";
import ViamateContactCapture from "../components/Viamate/ViamateContactCapture";
import ViamateCollectProcessTransfer from "../components/Viamate/ViamateCollectProcessTransfer";
import ViamateMeeting from "../components/Viamate/ViamateMeeting";
import ViamateExpenses from "../components/Viamate/ViamateExpenses";
import ViamateTripOutcome from "../components/Viamate/ViamateTripOutcome";
import ViamateOffline from "../components/Viamate/ViamateOffline";
import ViamateFAQ from "../components/Viamate/ViamateFAQ";
import ViamateClosing from "../components/Viamate/ViamateClosing";

import { useTranslation } from "../hooks/useTranslation";

function Viamate() {
  const { language } = useTranslation();

  const seo = {
    en: {
      description:
        "VIAMATE helps you collect, organize and transfer business cards, contacts, meetings, notes, documents and travel expenses during field work and business trips.",
    },
    tr: {
      description:
        "VIAMATE; fuar, iş seyahati ve saha çalışmalarında kartvizit, kişi, görüşme, not, belge ve harcamalarınızı toplamanıza, düzenlemenize ve yanınıza almanıza yardımcı olur.",
    },
  };

  const t = seo[language];

  return (
    <>
      <SEO
        title="VIAMATE"
        description={t.description}
        canonical="/viamate"
      />

      <Header />

      <main>
        <ViamateHero />
        <ViamateProblem />
        <ViamateContactCapture />
        <ViamateCollectProcessTransfer />
        <ViamateMeeting />
        <ViamateExpenses />
        <ViamateTripOutcome />
        <ViamateOffline />
        <ViamateFAQ />
        <ViamateClosing />
      </main>

      <Footer />
    </>
  );
}

export default Viamate;
