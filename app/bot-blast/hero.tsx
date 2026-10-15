import Image from "next/image";
import type { ReactNode } from "react";
import styles from "./pages.module.css";

export default function Hero({ privacy = false, children }: { privacy?: boolean; children: ReactNode }) {
  return <section className={`${styles.hero} ${privacy ? styles.privacyHero : ""}`} aria-labelledby="page-title">
    <div className={styles.heroInner}>
      <div className={styles.heroCopy}>{children}</div>
      <div className={styles.heroArt} aria-hidden="true">
        <Image className={styles.world} src={`/bot-blast-assets/${privacy ? "coral-reef" : "sky-garden"}.png`} alt="" fill sizes="(max-width: 760px) 100vw, 55vw" priority />
        <div className={styles.bot}>
          <Image src={`/bot-blast-assets/bot-${privacy ? "neutral" : "happy"}.webp`} alt="" fill sizes="(max-width: 760px) 170px, 300px" priority />
        </div>
        <span className={styles.worldLabel}>{privacy ? "Coral Reef" : "Sky Garden"}<span>One of Bot’s eight worlds</span></span>
      </div>
    </div>
  </section>;
}
