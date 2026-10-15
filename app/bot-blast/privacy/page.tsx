import type { Metadata } from "next";
import Hero from "../hero";
import styles from "../pages.module.css";

export const metadata: Metadata = {
  title: "Bot Blast — Privacy Policy",
  description: "How Bot Blast handles local game data, device motion, website visits and support requests.",
  alternates: { canonical: "https://www.edogambacorta.com/bot-blast/privacy" },
};

export default function PrivacyPage() {
  return <>
    <Hero privacy>
      <span className={styles.eyebrow}>The details, all here</span>
      <h1 id="page-title">Privacy<br />policy.</h1>
      <p className={styles.heroIntro}>Your scores stay with you. Here’s what Bot Blast stores, and what happens when you get in touch.</p>
      <p className={styles.promise}><span>No accounts.</span><span>No ads.</span><span>No tracking.</span></p>
    </Hero>
    <div className={styles.contentGrid}>
      <aside className={styles.contents} aria-label="On this page">
        <p className={styles.sideTitle}>On this page</p>
        <nav>
          <a href="#playing">Playing the game</a>
          <a href="#motion">Device motion</a>
          <a href="#storage">Storage & deletion</a>
          <a href="#support">Contacting support</a>
          <a href="#services">Apple & these webpages</a>
          <a href="#sharing">Sharing & processing abroad</a>
          <a href="#rights">Your privacy rights</a>
          <a href="#security">Security</a>
          <a href="#children">Children’s privacy</a>
          <a href="#contact">Changes & contact</a>
        </nav>
        <p className={styles.contentsDate}>Updated October 15, 2026</p>
      </aside>
      <article className={styles.policy} aria-label="Bot Blast privacy policy">
        <p className={styles.policyLead}>Bot Blast is an offline game developed and operated by Edoardo Gambacorta, based in Switzerland, who is responsible for the personal information described in this policy. This policy covers the current version of the game, its privacy and support pages, and information you choose to send when asking for help.</p>

        <section id="playing">
          <h2>Playing the game</h2>
          <p>Bot Blast does not require an account. The game does not send your gameplay, scores, device identifiers or motion data to the developer. It includes no advertising, tracking, analytics or third-party crash-reporting services.</p>
          <p>Best scores, sound and haptic settings, visual preferences and some gameplay preferences are stored locally on your device. Bot Blast does not provide a developer-operated cloud save or leaderboard service.</p>
        </section>
        <section id="motion">
          <h2>Device motion</h2>
          <p>The game uses device motion locally for visual tilt effects and optional tilt controls. Motion readings are used during play and are not saved or transmitted by Bot Blast. You can turn off “Tilt the world” and “Tilt to spin” in Settings → More settings.</p>
        </section>
        <section id="storage">
          <h2>Storage and deletion</h2>
          <p>Local game data stays on your device until it is removed. Deleting the app removes its local scores and settings; offloading the app may keep them. Your iOS backup settings may include app data in device backups. You manage those backups through Apple’s device and iCloud settings.</p>
          <p>The developer cannot access, recover or remotely delete scores stored only on your device. There is no Bot Blast account to close.</p>
        </section>
        <section id="support">
          <h2>If you contact support</h2>
          <p>If you email <a href="mailto:edoardo.gambacorta@gmail.com">edoardo.gambacorta@gmail.com</a>, Edoardo Gambacorta receives your email address and whatever information you include, such as your name, message, device details or screenshots. Contacting support is optional. Please include only what is needed to explain the issue.</p>
          <p>This information is used to respond to your request and resolve problems. Support email is handled through Google’s Gmail service; see <a href="https://policies.google.com/privacy">Google’s privacy policy</a>. Support messages are not sold or used for advertising.</p>
          <p>Messages are kept for as long as needed to resolve your request and related follow-up, or to meet an applicable legal obligation or handle a dispute. When those reasons no longer apply, they are deleted. You can request deletion sooner at the same email address; a legal requirement may prevent immediate deletion of some records.</p>
        </section>
        <section id="services">
          <h2>Apple services and these webpages</h2>
          <p>Apple operates the App Store, TestFlight and iOS. Depending on your settings and how you use those services, Apple may process diagnostics, usage information or feedback and make reports available to developers under its own policies. See <a href="https://www.apple.com/legal/privacy/">Apple’s privacy policy</a>.</p>
          <p>Privacy and support links open in your browser. These pages are hosted on Vercel, which may process technical request information such as IP addresses, requested pages and browser details to deliver and secure the website. See <a href="https://vercel.com/legal/privacy-notice">Vercel’s privacy notice</a>.</p>
          <p>The website’s shared stylesheet also requests font styles from Google Fonts. When your browser connects to Google to load them, Google receives technical request information, including your IP address. See <a href="https://policies.google.com/privacy">Google’s privacy policy</a>. Bot Blast’s artwork and rounded display font are hosted with this website.</p>
          <p>These pages do not add advertising or analytics trackers. Website requests and voluntary email support are separate from the offline game. Service providers may retain technical records under their own retention policies; this policy does not set a separate retention period for records they control.</p>
        </section>
        <section id="sharing">
          <h2>Sharing and processing abroad</h2>
          <p>Information is handled by the developer and the email and hosting providers described above as needed to answer support requests and operate the website. Information may also be disclosed where required by law. The developer does not sell personal information or share it with advertisers or data brokers.</p>
          <p>Google and Vercel operate internationally, and information handled by their services may be processed outside your country, including in the United States. Their notices explain their processing and transfer protections. Google describes these in its <a href="https://policies.google.com/privacy/frameworks">data transfer frameworks</a>; Vercel describes standard contractual clauses and its participation in the EU–U.S. and Swiss–U.S. Data Privacy Frameworks in its <a href="https://vercel.com/legal/privacy-notice">privacy notice</a>. This does not transfer the game data stored only on your device.</p>
        </section>
        <section id="rights">
          <h2>Your privacy rights</h2>
          <p>You can request access to, correction of or deletion of personal information the developer holds about you by emailing <a href="mailto:edoardo.gambacorta@gmail.com">edoardo.gambacorta@gmail.com</a>. Depending on the law that applies, you may also have rights to object to processing, restrict it, receive a portable copy, or withdraw consent where processing relies on consent. Withdrawing consent does not affect earlier lawful processing.</p>
          <p>Where a legal basis is required, the developer relies on legitimate interests in answering voluntary support requests and delivering a secure website, and on legal obligations where applicable. These purposes do not include profiling or advertising.</p>
          <p>You may complain to the data protection authority where you live. In Switzerland, this is the <a href="https://www.edoeb.admin.ch/en">Federal Data Protection and Information Commissioner</a>. Requests about data Apple, Google or Vercel controls independently can also be made using the contacts in their linked policies.</p>
        </section>
        <section id="security">
          <h2>Security</h2>
          <p>Keeping gameplay data on your device limits what is sent elsewhere. These webpages use HTTPS to protect information in transit. Support email uses the email provider’s security protections; ordinary email is not a private game-data backup service, so please do not send passwords or other sensitive information. No storage or transmission method can be guaranteed completely secure.</p>
        </section>
        <section id="children">
          <h2>Children’s privacy</h2>
          <p>Bot Blast does not collect personal information through gameplay from children or other players. If you believe a child has sent personal information in a support message, contact the address below so it can be reviewed and deleted where appropriate. A parent or guardian can contact support on a child’s behalf.</p>
        </section>
        <section id="contact">
          <h2>Changes and contact</h2>
          <p>This policy will be updated if the game’s data practices change, including before adding advertising or analytics. The date above identifies the current policy. Where a change requires your consent, that consent will be requested; continued use alone will not be treated as consent to new optional data collection.</p>
          <p>Developer and privacy contact: Edoardo Gambacorta, Switzerland<br /><a href="mailto:edoardo.gambacorta@gmail.com">edoardo.gambacorta@gmail.com</a></p>
        </section>
        <p className={styles.policyEnd}>Need help with the game? Visit <a href="/bot-blast/support">Bot Blast support</a>.</p>
      </article>
    </div>
  </>;
}
