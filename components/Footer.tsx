"use client";

import CenteredContainer from "./CenteredContainer";
import { Linkedin, Github, FileDown, FileText } from "lucide-react";
import { useLanguage } from "../lib/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  const footerLinks = [
    {
      label: t("footer.linkedin"),
      href: "https://www.linkedin.com/in/edoardo-gambacorta/",
      icon: Linkedin,
    },
    {
      label: t("footer.github"),
      href: "https://github.com/edogambacorta",
      icon: Github,
    },
    {
      label: t("footer.cv"),
      href: "/documents/Edoardo_Gambacorta_CV_01_2026.pdf",
      icon: FileDown,
    },
    {
      label: t("footer.portfolio"),
      href: "/documents/EDOARDO_GAMBACORTA_FINAL_PORTFOLIO_2025.pdf",
      icon: FileText,
    },
  ];

  return (
    <footer className="py-10 bg-gray-950 border-t border-gray-800">
      <CenteredContainer>
        <div className="flex flex-col items-center gap-6">
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") || link.href.startsWith("/documents") ? "_blank" : undefined}
                rel={link.href.startsWith("http") || link.href.startsWith("/documents") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors duration-200 text-sm font-sans"
              >
                <link.icon size={16} />
                {link.label}
              </a>
            ))}
          </nav>
          <p className="text-xs text-gray-500 font-sans">
            {t("footer.copyright")}
          </p>
        </div>
      </CenteredContainer>
    </footer>
  );
}
