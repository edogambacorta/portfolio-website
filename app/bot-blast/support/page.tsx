import type { Metadata } from "next";
import Hero from "../hero";
import styles from "../pages.module.css";

export const metadata: Metadata = {
  title: "Bot Blast — Support",
  description: "A hand with Bot Blast: quick fixes, game controls and a direct line to the developer.",
  alternates: { canonical: "https://www.edogambacorta.com/bot-blast/support" },
};

export default function SupportPage() {
  return <>
    <Hero>
      <span className={styles.eyebrow}>Bot Blast support</span>
      <h1 id="page-title">Need<br />a hand?</h1>
      <p className={styles.heroIntro}>Game stuck? Sound gone? Let’s get you back to the good part.</p>
      <a className={styles.emailButton} href="mailto:edoardo.gambacorta@gmail.com?subject=Bot%20Blast%20support">Email Edoardo <span className={styles.buttonArrow} aria-hidden="true">↗</span></a>
      <p className={styles.contactEmail}><a href="mailto:edoardo.gambacorta@gmail.com?subject=Bot%20Blast%20support">edoardo.gambacorta@gmail.com</a></p>
    </Hero>

    <div className={styles.contentGrid}>
      <aside className={styles.sideCopy}>
        <p className={styles.sideTitle}>Hello, I’m Edoardo.</p>
        <p>I make Bot Blast. If something isn’t working, your message comes straight to me.</p>
        <p>Tell me the <strong>game mode</strong>, your <strong>device model</strong>, and what went wrong. Your iOS and app versions help too.</p>
        <p>A screenshot can help explain it. Just leave out any personal information.</p>
      </aside>

      <section aria-labelledby="quick-help">
        <h2 id="quick-help">Let’s sort it out.</h2>
        <details className={styles.faq} open>
          <summary>The game is slow or won’t open.</summary>
          <div className={styles.answer}>
            <ol>
              <li>Close Bot Blast and open it again.</li>
              <li>Check the App Store for an update.</li>
              <li>Try <strong>Settings → More settings → Visual quality → Battery</strong>.</li>
            </ol>
            <p>Still happening? <a href="mailto:edoardo.gambacorta@gmail.com?subject=Bot%20Blast%20support">Send me the details</a>. Please try these steps before deleting the app, which can remove your saved scores.</p>
          </div>
        </details>
        <details className={styles.faq}>
          <summary>Where did the sound go?</summary>
          <div className={styles.answer}><p>Check your device volume and silent mode, then open Bot Blast’s Settings and make sure Sound is on.</p><p>You can also change haptic strength there. For less movement, open More settings and turn off Tilt the world. Tilt to spin controls steering in Helix.</p></div>
        </details>
        <details className={styles.faq}>
          <summary>How do the four games work?</summary>
          <div className={styles.answer}>
            <p>Tap <strong>Classic</strong> on the home screen, or find the other three in <strong>More Games</strong>.</p>
            <ul>
              <li><strong>Classic:</strong> drag blocks onto the board. Fill a row or column to clear it and make room.</li>
              <li><strong>Chroma:</strong> tap the fruit lanes in time with the music. Hold the ribbons.</li>
              <li><strong>Helix:</strong> spin the tower, drop through gaps and steer clear of hazards.</li>
              <li><strong>Drift:</strong> tap to land each moving layer on the one below. A neat stack goes further.</li>
            </ul>
          </div>
        </details>
        <details className={styles.faq}>
          <summary>Can I play without Wi-Fi?</summary>
          <div className={styles.answer}><p>Yes. All four games work offline after installation. You only need an internet connection for things outside gameplay, such as updates, TestFlight and these support pages.</p></div>
        </details>
        <details className={styles.faq}>
          <summary>Where are my best scores saved?</summary>
          <div className={styles.answer}><p>On your device, along with your settings. There’s no account or in-game cloud sync, so scores don’t automatically follow you to another device.</p><p>Normal app updates should keep them. Deleting the app can remove them, so please get in touch before trying a reinstall.</p></div>
        </details>
        <details className={styles.faq}>
          <summary>Any ads, purchases or accounts?</summary>
          <div className={styles.answer}><p>None in this version. No account to create, no ads to sit through, and no subscriptions or in-app purchases.</p><p>You can read exactly how local game data and support messages are handled in the <a href="/bot-blast/privacy">privacy policy</a>.</p></div>
        </details>
        <div className={styles.contactStrip}>
          <h3>Something else on your mind?</h3>
          <p>Bugs, questions, or a little idea for Bot. I’d like to hear it.</p>
          <a href="mailto:edoardo.gambacorta@gmail.com?subject=Bot%20Blast%20support">Write to Edoardo <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </div>
  </>;
}
