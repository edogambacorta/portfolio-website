import type { ReactNode } from "react";
import styles from "./pages.module.css";

export default function BotBlastLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <a href="/bot-blast/support" className={styles.brand}>Bot Blast<span>by Edoardo Gambacorta</span></a>
          <nav aria-label="Bot Blast"><a href="/bot-blast/support">Support</a><a href="/bot-blast/privacy">Privacy</a></nav>
        </header>
        <main id="main-content">{children}</main>
        <footer>Bot Blast · © 2026 Edoardo Gambacorta<br /><a href="/">Visit my personal website</a></footer>
      </div>
    </div>
  );
}
