"use client";

import { usePathname } from "next/navigation";
import styles from "./pages.module.css";

export default function Navigation() {
  const path = usePathname();
  return <nav className={styles.navigation} aria-label="Bot Blast">
    <a href="/bot-blast/support" aria-current={path === "/bot-blast/support" ? "page" : undefined}>Support</a>
    <a href="/bot-blast/privacy" aria-current={path === "/bot-blast/privacy" ? "page" : undefined}>Privacy</a>
  </nav>;
}
