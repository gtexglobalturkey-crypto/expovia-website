import LegalPage from "../components/legal/LegalPage";
import SEO from "../components/seo/SEO";

const sections = [
  {
    id: "app",
    title: "1. Application and developer information",
    content: (
      <>
        <p>
          VIAZERO Air Hockey is an offline air hockey game for Android in which you play against a computer opponent. It is published by VIAFA (package name <code>com.viazero.airhockey</code>). This policy explains how the VIAZERO Air Hockey app handles information.
        </p>
        <p>
          It covers the VIAZERO Air Hockey Android app only. It does not cover other VIAFA apps, services, or this website.
        </p>
      </>
    ),
  },
  {
    id: "collection",
    title: "2. Information collection and use",
    content: (
      <>
        <p>
          VIAZERO Air Hockey does not collect personal data. There is no account or sign-in, and the app does not ask for your name, email address, phone number, location, contacts, photos, microphone, camera, or any other personal information.
        </p>
        <p>
          The game works fully offline. The app does not request internet access and does not send any data to our servers or to anyone else's. Your touches are used only on your device, while you play, to move your mallet; they are not recorded or stored.
        </p>
      </>
    ),
  },
  {
    id: "local-storage",
    title: "3. Local storage",
    content: (
      <>
        <p>
          The app saves one setting on your device: whether sound effects are switched on or off. It is kept in the app's private storage so the game remembers your choice the next time you open it.
        </p>
        <p>
          To play its built-in sound effects, the app may also copy those sound files into its own temporary cache on your device. These files are part of the game and contain no information about you.
        </p>
        <p>
          Scores and match results are not saved. This local data stays on your device; we cannot see, access, or retrieve it.
        </p>
      </>
    ),
  },
  {
    id: "third-party",
    title: "4. Third-party services",
    content: (
      <>
        <p>
          VIAZERO Air Hockey contains no advertisements and no advertising SDKs. It does not use analytics, crash reporting, or tracking tools, and it does not use advertising identifiers or track you across other apps or websites.
        </p>
        <p>
          The app is built with Flutter and standard Android libraries. Besides these, it uses two open-source plugins (and their supporting components) that run entirely on your device: one to play the game's sound effects and one to remember your sound setting. None of these components send data off your device in this app.
        </p>
        <p>
          The app does not request any special Android permissions.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "5. Data sharing",
    content: (
      <>
        <p>
          Because VIAZERO Air Hockey does not collect personal data, we do not sell, share, or transfer personal data to third parties.
        </p>
        <p>
          Google Play, which distributes the app, may process information under its own terms and privacy policy when you download or update apps. That processing is handled by Google, not by VIAZERO Air Hockey.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "6. Data retention and deletion",
    content: (
      <>
        <p>
          We do not hold any data about you, so there is nothing for us to retain or delete on our side.
        </p>
        <p>
          The sound setting stays on your device until you change it, clear the app's storage in your Android settings, or uninstall the app. Either of the last two removes all of the app's local data.
        </p>
        <p>
          If Android backup is turned on for your device, the system may include the app's local setting in your personal device backup and restore it if you reinstall the app. You control this backup through your Android and Google account settings.
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
          VIAZERO Air Hockey does not knowingly collect personal information from anyone, including children. Since the app collects no personal data, has no ads, and has no chat, online, or social features, players of any age can use it without sharing personal information.
        </p>
        <p>
          Parents or guardians with questions can contact us at the address below.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "8. Security",
    content: (
      <>
        <p>
          Because the app does not collect or transmit personal data, no personal data is exposed in transit or held on our servers. The sound setting is stored in the app's private storage, which Android protects from other apps.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "9. Changes to this policy",
    content: (
      <>
        <p>
          If VIAZERO Air Hockey changes in a way that affects how information is handled, we will update this policy before or when that change takes effect. The current version and its date will always be published on this page.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "10. Contact information",
    content: (
      <>
        <p>
          For questions about this policy or VIAZERO Air Hockey, contact VIAFA at{" "}
          <a href="mailto:info@expoviafair.com">info@expoviafair.com</a>.
        </p>
      </>
    ),
  },
];

export default function AirHockeyPrivacyPolicy() {
  return (
    <>
      <SEO
        title="VIAZERO Air Hockey Privacy Policy | VIAFA"
        description="Privacy policy for VIAZERO Air Hockey, an offline air hockey game for Android. No personal data collection, no ads, no analytics."
        path="/air-hockey/privacy"
      />
      <LegalPage
        eyebrow="VIAFA · VIAZERO AIR HOCKEY"
        title="VIAZERO Air Hockey Privacy Policy"
        description="VIAZERO Air Hockey is an offline game. It does not collect, send, or share personal data."
        updatedLabel="Last updated"
        updatedDate="November 10, 2026"
        sections={sections}
      />
    </>
  );
}
