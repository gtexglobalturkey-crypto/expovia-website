import LegalPage from "../components/legal/LegalPage";
import SEO from "../components/seo/SEO";

const sections = [
  { id: "operator", title: "1. App and contact", content: <><p>FLIP IT! is an arcade game published under the One Dollar Apps brand. For privacy questions, contact <a href="mailto:info@expoviafair.com">info@expoviafair.com</a>.</p><p>This policy covers the FLIP IT! Android app, not other products or the corporate website.</p></> },
  { id: "information", title: "2. Information processed", content: <><p>FLIP IT! uses Google AdMob to display advertisements. AdMob and its technology partners may process device identifiers (including advertising identifiers where available), IP address, approximate location inferred from technical signals, app interactions, advertising interactions, and diagnostic information for ad delivery, measurement, fraud prevention, and, where permitted, personalization.</p><p>The precise data processed depends on device settings, applicable law, consent choices, and Google's services. The game does not require you to provide a name or email address to play.</p></> },
  { id: "purpose", title: "3. Advertising and legal basis", content: <><p>Information may be processed to serve and measure ads, protect against invalid traffic, maintain service security, and meet legal obligations. Where required, consent is requested before personalized advertising or other consent-dependent processing. Other processing may rely on applicable lawful grounds, depending on the jurisdiction and the processing activity.</p></> },
  { id: "choices", title: "4. Consent and your choices", content: <><p>Where applicable, FLIP IT! uses Google's User Messaging Platform (UMP) to present privacy choices. You can accept or decline consent-dependent advertising purposes and revisit available choices through the in-app privacy options control when shown.</p><p>You can also manage your device's advertising privacy settings. Declining personalized advertising does not necessarily remove all advertisements.</p></> },
  { id: "partners", title: "5. Third-party services and transfers", content: <><p>Google AdMob and participating advertising partners may process information under their own policies and may transfer data internationally subject to applicable safeguards. Read <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google's Privacy Policy</a> and <a href="https://support.google.com/admob/answer/6128543" target="_blank" rel="noopener noreferrer">Google's information about AdMob privacy</a>.</p></> },
  { id: "storage", title: "6. Storage, retention and security", content: <><p>Game settings and progress may be stored on your device. Removing the app may remove app-managed local data, subject to device backup behavior. Third-party advertising providers determine their own retention periods under their published policies. No method of electronic processing is completely secure.</p></> },
  { id: "rights", title: "7. Your privacy rights", content: <><p>Depending on where you live, you may have rights to access, correct, delete, restrict or object to certain processing, withdraw consent, or complain to a data protection authority. Contact us at <a href="mailto:info@expoviafair.com">info@expoviafair.com</a> for app-related requests. For data independently controlled by Google or its advertising partners, consult their privacy controls and policies.</p></> },
  { id: "children", title: "8. Children", content: <><p>FLIP IT! is intended for a general audience and is not specifically directed at children. Advertising and age-related settings will be applied according to the app's applicable store declarations and legal requirements. Parents or guardians may contact us about privacy concerns.</p></> },
  { id: "changes", title: "9. Changes to this policy", content: <><p>We may update this policy when the app, its advertising integrations, or legal requirements change. The updated version and date will appear here.</p></> },
];

export default function FlipItPrivacyPolicy() {
  return (
    <>
      <SEO title="FLIP IT! Privacy Policy | One Dollar Apps" description="Privacy policy for FLIP IT!, including Google AdMob advertising and consent choices." path="/flip-it/privacy" />
      <LegalPage eyebrow="One Dollar Apps · FLIP IT!" title="FLIP IT! Privacy Policy" description="How the FLIP IT! Android game and its advertising services process information." updatedLabel="Last updated" updatedDate="November 5, 2026" sections={sections} />
    </>
  );
}
