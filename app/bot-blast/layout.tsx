import type { ReactNode } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Navigation from "./navigation";
import styles from "./pages.module.css";

export const metadata: Metadata = { icons: { icon: "/bot-blast-assets/icon.png" } };

export default function BotBlastLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.page}>
      <a className={styles.skipLink} href="#main-content">Skip to content</a>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a href="/bot-blast/support" className={styles.brand} aria-label="Bot Blast support">
            <Image src="/bot-blast-assets/wordmark.png" alt="Bot Blast" width={2043} height={371} sizes="(max-width: 600px) 150px, 210px" priority />
          </a>
          <Navigation />
        </div>
      </header>
      <main id="main-content">{children}</main>
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div><span className={styles.footerName}>Made for one more go.</span><p>Bot Blast · © 2026 <a href="/">Edoardo Gambacorta</a></p></div>
          <nav aria-label="Footer"><a href="/bot-blast/support">Support</a><a href="/bot-blast/privacy">Privacy policy</a><a href="mailto:edoardo.gambacorta@gmail.com">Contact</a></nav>
        </div>
      </footer>
    </div>
  );
}
