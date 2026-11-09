import LegalPage from "../components/legal/LegalPage";
import SEO from "../components/seo/SEO";

const sections = [
  {
    id: "app",
    title: "1. About this policy",
    content: (
      <>
        <p>
          MOZAIK is an offline nonogram logic puzzle game for Android with 100 levels, published by VIAFA (package name <code>com.viazero.mozaik</code>). This policy explains how the MOZAIK app handles information.
        </p>
        <p>
          It covers the MOZAIK Android app only. It does not cover other VIAFA apps, services, or this website.
        </p>
      </>
    ),
  },
  {
    id: "no-collection",
    title: "2. No personal data collected",
    content: (
      <>
        <p>
          MOZAIK does not collect personal data. There is no account or sign-in, and the app does not ask for your name, email address, phone number, location, contacts, photos, or any other personal information.
        </p>
        <p>
          The game works fully offline. It does not request internet access and does not send any data to our servers or anyone else's.
        </p>
      </>
    ),
  },
  {
    id: "on-device",
    title: "3. Data stored on your device",
    content: (
      <>
        <p>
          To let you continue where you left off, MOZAIK saves a small amount of game data locally on your device, such as which levels you have completed, your sound setting, and whether you have seen the tutorial.
        </p>
        <p>
          This data stays on your device. We cannot see it, access it, or retrieve it.
        </p>
      </>
    ),
  },
  {
    id: "no-tracking",
    title: "4. No advertising, analytics or tracking",
    content: (
      <>
        <p>
          MOZAIK contains no advertisements and no advertising SDKs. It does not use analytics, crash reporting, or tracking tools, and it does not use advertising identifiers or track you across other apps or websites.
        </p>
        <p>
          The app does not request any special Android permissions.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "5. No sharing with third parties",
    content: (
      <>
        <p>
          Because MOZAIK does not collect personal data, we do not sell, share, or transfer personal data to third parties.
        </p>
        <p>
          Google Play, which distributes the app, may process information under its own terms and privacy policy when you download or update apps. That processing is handled by Google, not by MOZAIK.
        </p>
      </>
    ),
  },
  {
    id: "deletion",
    title: "6. Deleting your data",
    content: (
      <>
        <p>
          You can delete all MOZAIK game data at any time by clearing the app's storage in your Android settings or by uninstalling the app.
        </p>
        <p>
          If Android backup is turned on for your device, the system may include the app's local game data in your personal device backup and restore it if you reinstall MOZAIK. You control this backup through your Android and Google account settings.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "7. Children's privacy",
    content: (
      <>
        <p>
          MOZAIK does not knowingly collect personal information from anyone, including children. Since the app collects no personal data, has no ads, and has no chat or social features, players of any age can use it without sharing personal information.
        </p>
        <p>
          Parents or guardians with questions can contact us at the address below.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "8. Changes to this policy",
    content: (
      <>
        <p>
          If MOZAIK changes in a way that affects how information is handled, we will update this policy before or when that change takes effect. The current version and its date will always be published on this page.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "9. Contact",
    content: (
      <>
        <p>
          For questions about this policy or MOZAIK, contact VIAFA at{" "}
          <a href="mailto:info@expoviafair.com">info@expoviafair.com</a>.
        </p>
      </>
    ),
  },
];

export default function MozaikPrivacyPolicy() {
  return (
    <>
      <SEO
        title="MOZAIK Privacy Policy | VIAFA"
        description="Privacy policy for MOZAIK, an offline nonogram puzzle game for Android. No personal data collection, no ads, no analytics."
        path="/mozaik/privacy"
      />
      <LegalPage
        eyebrow="VIAFA · MOZAIK"
        title="MOZAIK Privacy Policy"
        description="MOZAIK is an offline puzzle game. It does not collect, send, or share personal data."
        updatedLabel="Last updated"
        updatedDate="November 9, 2026"
        sections={sections}
      />
    </>
  );
}
