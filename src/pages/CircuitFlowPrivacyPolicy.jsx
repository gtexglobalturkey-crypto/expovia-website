import LegalPage from "../components/legal/LegalPage";
import SEO from "../components/seo/SEO";

const CONTACT = "ahmet@expoviafair.com";
const mail = <a href={`mailto:${CONTACT}`}>{CONTACT}</a>;

const sections = [
  {
    id: "app",
    title: "1. Application and developer information",
    content: (
      <>
        <p>
          Circuit Flow is a wire-turning puzzle game for Android, published by VIAFA (package name <code>com.viazero.circuitflow</code>). This policy explains how the Circuit Flow app handles information.
        </p>
        <p>
          It covers the Circuit Flow Android app only, not other VIAFA apps, services, or this website. For questions, contact {mail}.
        </p>
      </>
    ),
  },
  {
    id: "collection",
    title: "2. Information we collect",
    content: (
      <>
        <p>
          We do not ask you for, collect, or receive personal information. There is no account or sign-in, and the app does not ask for your name, email address, phone number, precise location, contacts, photos, camera, or microphone.
        </p>
        <p>
          We do not run servers for the app, and your game data is not sent to us.
        </p>
      </>
    ),
  },
  {
    id: "local-storage",
    title: "3. Data stored on your device",
    content: (
      <>
        <p>
          To let you continue where you left off, the app saves in its private storage on your device: the furthest level you have reached; your settings (sound, reduce motion); and which difficulty milestones have been celebrated and whether all 50 levels are complete.
        </p>
        <p>
          This data stays on your device; we cannot see or access it. The game itself plays offline; only advertising uses the internet.
        </p>
      </>
    ),
  },
  {
    id: "advertising",
    title: "4. Advertising (Google AdMob)",
    content: (
      <>
        <p>
          The app is free and shows advertisements from Google AdMob, a service of Google LLC. A full-screen ad may be shown between some levels; there are no banner ads.
        </p>
        <p>
          When the app requests or shows an ad, the Google Mobile Ads SDK in the app automatically collects and shares the following with Google, which uses it for advertising, analytics, and fraud prevention: device and account identifiers (such as the Android advertising ID and app set ID); IP address, which may be used to estimate the general location of the device; product interactions (such as app launches, taps, and ad and video views); and diagnostic information (such as app launch time, hang rate, and energy usage). Google states that this data is encrypted in transit.
        </p>
        <p>
          Google and its advertising partners process this data under their own policies. Read{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google's Privacy Policy</a>,{" "}
          <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">how Google uses information from apps that use its services</a>, and the{" "}
          <a href="https://developers.google.com/admob/android/privacy/play-data-disclosure" target="_blank" rel="noopener noreferrer">Google Mobile Ads SDK data disclosure</a>.
        </p>
      </>
    ),
  },
  {
    id: "choices",
    title: "5. Consent and your choices",
    content: (
      <>
        <p>
          Where required by law (for example in the European Economic Area, the United Kingdom, and Switzerland), the app uses Google's User Messaging Platform to ask for your consent before personalized advertising or other consent-based processing. The consent status is checked every time the app starts, and ads are requested only when Google's consent tools allow it.
        </p>
        <p>
          You can change your choice at any time in the app under Settings &rarr; Privacy options (shown where your region requires it). If you do not consent, the game still works fully; you may see non-personalized or limited ads, or none. You can also reset or delete your advertising ID, or opt out of ad personalization, in your Android settings.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "6. Data sharing",
    content: (
      <>
        <p>
          We do not sell, rent, trade, or share personal information. The only data that leaves your device is the advertising data described above, which the Google Mobile Ads SDK sends to Google and its advertising partners. Google Play may process information under Google's own terms when you download or update apps.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "7. Data retention and deletion",
    content: (
      <>
        <p>
          Game progress and settings stay on your device until you clear the app's storage in Android settings or uninstall the app, which removes them. If Android backup is on, Android may include this data in your personal device backup, which you control in your Android and Google account settings.
        </p>
        <p>
          Google keeps advertising data according to its own policies. You can reset or delete your advertising ID in Android settings. We cannot access, retrieve, or delete data held by Google. For any request, contact {mail}.
        </p>
      </>
    ),
  },
  {
    id: "rights",
    title: "8. Your rights",
    content: (
      <>
        <p>
          Depending on where you live, you may have rights to access, correct, or delete personal data, to restrict or object to processing, to withdraw consent, and to complain to a data protection authority. As we hold no personal data about you, most requests concern data held by Google; see Google's privacy controls and policies. You can withdraw ad consent at any time under Settings &rarr; Privacy options, where shown.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "9. Children's privacy",
    content: (
      <>
        <p>
          Circuit Flow is not specifically directed at children, and we do not knowingly collect personal information from children. Ad requests are configured according to the target audience declared for the app on Google Play. If you believe a child has provided personal information through the app, contact us at {mail}.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "10. Security",
    content: (
      <>
        <p>
          Local data is kept in Android's private app storage, which other apps cannot read. According to Google, advertising data is encrypted in transit using TLS.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "11. Changes to this policy",
    content: (
      <>
        <p>
          We will update this policy if the app, its advertising, or legal requirements change in a way that affects it. The current version and its date are always published on this page.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "12. Contact information",
    content: (
      <>
        <p>
          For questions about this policy or Circuit Flow, contact VIAFA at {mail}.
        </p>
      </>
    ),
  },
];

export default function CircuitFlowPrivacyPolicy() {
  return (
    <>
      <SEO
        title="Circuit Flow Privacy Policy | VIAFA"
        description="Privacy policy for Circuit Flow, a puzzle game for Android: local progress, Google AdMob advertising, and consent choices."
        path="/circuit-flow/privacy"
      />
      <LegalPage
        eyebrow="VIAFA · CIRCUIT FLOW"
        title="Circuit Flow Privacy Policy"
        description="How the Circuit Flow Android game and its advertising (Google AdMob) handle information."
        updatedLabel="Last updated"
        updatedDate="November 15, 2026"
        sections={sections}
      />
    </>
  );
}
