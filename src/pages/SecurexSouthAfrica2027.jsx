import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import SEO from "../components/seo/SEO";

import SecurexHero from "../components/exhibition-detail/securex/SecurexHero";
import SecurexOverview from "../components/exhibition-detail/securex/SecurexOverview";
import SecurexShows from "../components/exhibition-detail/securex/SecurexShows";
import SecurexResults from "../components/exhibition-detail/securex/SecurexResults";
import SecurexSponsors from "../components/exhibition-detail/securex/SecurexSponsors";
import SecurexParticipation from "../components/exhibition-detail/securex/SecurexParticipation";
import SecurexCTA from "../components/exhibition-detail/securex/SecurexCTA";

import { PAGE_TITLES } from "../config/pageTitles";
import { SECUREX_PATH } from "../data/securexSouthAfrica2027";
import { useTranslation } from "../hooks/useTranslation";

import ogImage from "../assets/exhibitions/securex/securex-2027-og.jpg";

const DESCRIPTIONS = {
  en: "Securex South Africa 2027 (1–3 June 2027, Gallagher Convention Centre, Johannesburg): four co-located shows covering security technology, occupational health & safety, facilities management and fire protection. Companies from Türkiye can contact VIAFA about participation.",
  tr: "Securex South Africa 2027 (1–3 Haziran 2027, Gallagher Convention Centre, Johannesburg): güvenlik teknolojileri, iş sağlığı ve güvenliği, tesis yönetimi ve yangın güvenliğini kapsayan dört fuar. Türkiye'deki firmalar katılım konusunda VIAFA ile iletişime geçebilir.",
};

function SecurexSouthAfrica2027() {
  const { language } = useTranslation();

  return (
    <>
      <SEO
        title={PAGE_TITLES.securexSouthAfrica2027[language]}
        description={DESCRIPTIONS[language]}
        canonical={SECUREX_PATH}
        image={ogImage}
      />

      <Header />

      <main>
        <SecurexHero />

        <SecurexOverview />

        <SecurexShows />

        <SecurexResults />

        <SecurexSponsors />

        <SecurexParticipation />

        <SecurexCTA />
      </main>

      <Footer />
    </>
  );
}

export default SecurexSouthAfrica2027;
