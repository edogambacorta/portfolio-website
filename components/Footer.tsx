"use client";

import CenteredContainer from "./CenteredContainer";
import { Linkedin, Github, FileDown, FileText } from "lucide-react";

const footerLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/edoardo-gambacorta/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/edogambacorta",
    icon: Github,
  },
  {
    label: "CV Download",
    href: "#",
    icon: FileDown,
  },
  {
    label: "Portfolio PDF",
    href: "#",
    icon: FileText,
  },
];

export function Footer() {
  return (
    <footer className="py-10 bg-gray-950 border-t border-gray-800">
      <CenteredContainer>
        <div className="flex flex-col items-center gap-6">
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors duration-200 text-sm font-sans"
              >
                <link.icon size={16} />
                {link.label}
              </a>
            ))}
          </nav>
          <p className="text-xs text-gray-500 font-sans">
            &copy; 2026 Edoardo Gambacorta. All rights reserved.
          </p>
        </div>
      </CenteredContainer>
    </footer>
  );
}
