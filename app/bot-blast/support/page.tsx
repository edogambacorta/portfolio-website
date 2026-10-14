import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bot Blast — Support",
  description: "Get help with Bot Blast, contact the developer and find answers about offline play, settings and scores.",
  alternates: { canonical: "https://www.edogambacorta.com/bot-blast/support" },
};

export default function SupportPage() {
  return (
    <>
      <h1>A little help for Bot Blast.</h1>
      <p>Bot Blast brings a colorful block puzzle and three arcade games to iPhone and iPad. This is the official support page from the developer, Edoardo Gambacorta.</p>

      <h2>Contact support</h2>
      <p>Email <a href="mailto:edoardo.gambacorta@gmail.com?subject=Bot%20Blast%20support">edoardo.gambacorta@gmail.com</a> with “Bot Blast support” in the subject.</p>
      <p>Tell me which game mode you were playing, what happened and what you expected. Your device model, iOS version and app version help me investigate. A screenshot is useful if it shows the problem; please leave out personal information.</p>

      <h2>How do I play?</h2>
      <ul>
        <li><strong>Classic:</strong> place blocks on the board and complete rows or columns to clear space.</li>
        <li><strong>Chroma:</strong> tap the fruit lanes in time with the music and hold the ribbons.</li>
        <li><strong>Helix:</strong> rotate the tower to drop through gaps and avoid hazards.</li>
        <li><strong>Drift:</strong> tap to stack moving layers as neatly as you can.</li>
      </ul>
      <p>Choose Classic on the home screen, or open More Games for Chroma, Helix and Drift.</p>

      <h2>Does it need an internet connection?</h2>
      <p>No. All four games work offline after installation. Opening support or privacy webpages, downloading updates and using TestFlight require an internet connection.</p>

      <h2>Where are my scores?</h2>
      <p>Best scores and preferences are saved on your device. There is no account or in-game cloud sync. Deleting the app can remove your scores; reinstalling is not the first troubleshooting step.</p>

      <h2>Sound, haptics and movement</h2>
      <p>Open Settings from the home screen to change sound and haptic strength. More settings lets you adjust visual quality, turn off world tilting and choose tilt controls for Helix. If there is no sound, also check your device volume and silent mode.</p>

      <h2>The game is slow or closes unexpectedly</h2>
      <p>Close and reopen Bot Blast, install any available app update and try Settings → More settings → Visual quality → Battery. If the problem continues, email the details above. Your scores should remain when you update the app normally.</p>

      <h2>Ads, purchases and privacy</h2>
      <p>The current version has no ads, subscriptions or in-app purchases. Read the <a href="/bot-blast/privacy">privacy policy</a> for details about local game data and support messages.</p>
    </>
  );
}
