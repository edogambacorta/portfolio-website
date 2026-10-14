import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bot Blast — Privacy Policy",
  description: "How Bot Blast handles local game data, device motion and support requests.",
  alternates: { canonical: "https://www.edogambacorta.com/bot-blast/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <h1>Privacy policy</h1>
      <p>Bot Blast · Effective October 14, 2026</p>
      <p>Bot Blast is an offline game developed by Edoardo Gambacorta. This policy covers the current version of the game, these support pages and information you choose to send when asking for help.</p>

      <h2>Playing the game</h2>
      <p>Bot Blast does not require an account. The game does not send your gameplay, scores, device identifiers or motion data to the developer. It includes no advertising, tracking, analytics or third-party crash-reporting services.</p>
      <p>Best scores, sound and haptic settings, visual preferences and some gameplay preferences are stored locally on your device. Bot Blast does not provide a developer-operated cloud save or leaderboard service.</p>

      <h2>Device motion</h2>
      <p>The game uses device motion locally for visual tilt effects and optional tilt controls. Motion readings are used during play and are not saved or transmitted by Bot Blast. You can turn off “Tilt the world” and “Tilt to spin” in Settings → More settings.</p>

      <h2>Storage and deletion</h2>
      <p>Local game data stays on your device until it is removed. Deleting the app removes its local scores and settings; offloading the app may keep them. Your iOS backup settings may include app data in device backups. You manage those backups through Apple’s device and iCloud settings.</p>

      <h2>If you contact support</h2>
      <p>If you email <a href="mailto:edoardo.gambacorta@gmail.com">edoardo.gambacorta@gmail.com</a>, Edoardo Gambacorta receives your email address and whatever information you include, such as your name, message, device details or screenshots. Please include only what is needed to explain the issue.</p>
      <p>This information is used to respond to your request and resolve problems. Support messages are handled through the email service provider and are kept only as needed for the request and any applicable legal obligations. They are not sold or used for advertising. You can ask for access, correction or deletion of your support messages at the same address.</p>

      <h2>Apple services and these webpages</h2>
      <p>Apple operates the App Store, TestFlight and iOS. Depending on your settings and how you use those services, Apple may process diagnostics, usage information or feedback and make reports available to developers under its own policies. See <a href="https://www.apple.com/legal/privacy/">Apple’s privacy policy</a>.</p>
      <p>Privacy and support links open in your browser. These pages are hosted on Vercel, which may process technical request information such as IP addresses and browser details to deliver and secure the website. These pages do not add advertising or analytics trackers. See <a href="https://vercel.com/legal/privacy-policy">Vercel’s privacy policy</a>. This website hosting is separate from the offline game.</p>

      <h2>Children’s privacy</h2>
      <p>Bot Blast does not collect personal information through gameplay from children or other players. If you believe a child has sent personal information in a support message, contact the address below so it can be addressed.</p>

      <h2>Changes and contact</h2>
      <p>This policy will be updated if the game’s data practices change, including before adding advertising or analytics. The effective date above identifies the current policy.</p>
      <p>Developer and privacy contact: Edoardo Gambacorta<br /><a href="mailto:edoardo.gambacorta@gmail.com">edoardo.gambacorta@gmail.com</a></p>
      <p>Need help with the game? Visit <a href="/bot-blast/support">Bot Blast support</a>.</p>
    </>
  );
}
