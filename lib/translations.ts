export type Language = "en" | "de";

export interface Translations {
    [key: string]: string;
}

const en: Translations = {
    // Header
    "header.projects": "Projects",
    "header.timeline": "Timeline",
    "header.contact": "Contact",
    "header.bookCall": "Book Call",

    // Hero Section
    "hero.heading": "Building at the intersection of innovation and business.",
    "hero.subtitle": "Mechanical Engineer. Startup Builder. 24 years old.",
    "hero.cta": "See What I've Built",

    // Intro Line
    "intro.heading": "I'm Edoardo Gambacorta",

    // Project Cards
    "projects.sectionTitle": "Active Ventures",
    "projects.sectionSubtitle": "Currently building, scaling, and advising",

    "projects.mommirror.subtitle": "Co-founder & Head of Distribution",
    "projects.mommirror.description":
        "AI-powered mental health companion for expecting mothers. Generated 10M+ organic views in one month and built entire go-to-market engine from zero.",
    "projects.mommirror.badge": "Active • Health Tech",

    "projects.thefactory.subtitle": "Founder",
    "projects.thefactory.description":
        "Digital art business scaled to 2,300+ sales across 50+ countries. CHF 60,000+ revenue, now fully automated and delegated.",
    "projects.thefactory.badge": "Automated • E-commerce",

    "projects.picorn.subtitle": "Advisor — Marketing & Distribution",
    "projects.picorn.description":
        "Next-generation AI creative automation tools for digital artists. Building workflows that eliminate repetitive creative work.",
    "projects.picorn.badge": "Active • AI Tools",

    // Timeline
    "timeline.sectionTitle": "4 Years in 60 Seconds",


    "timeline.locare.title": "LoCare — Hip Recovery Tracker",
    "timeline.locare.description":
        "Collaborated with DePuy Synthes to design IoT wearable for elderly hip replacement patients. Led user interviews and prototyped Arduino-based hardware.",
    "timeline.locare.button": "Read Pitchdeck",

    "timeline.thefactory.title": "Launched TheFactoryByEdo",
    "timeline.thefactory.description":
        "Started selling digital art online. Built e-commerce infrastructure from scratch. Year 1 revenue: CHF 15,000.",

    "timeline.breathe.title": "MSc Thesis: Breathe — Sensory Light",
    "timeline.breathe.description":
        "Developed fluid-mechanics-based lighting for public spaces. Engineered two-chamber water/oil system with rotating mechanics. Grade: Distinction.",
    "timeline.breathe.button": "Read Thesis",

    "timeline.rootslice.title": "RootSlice — Autonomous Weeding Robot",
    "timeline.rootslice.description":
        "Led mechanical design for agricultural robot targeting Andean potato farms. Designed helical auger system with Arduino-controlled positioning.",
    "timeline.rootslice.button": "Discover Report",

    "timeline.graduated.title": "Graduated MSc Mechanical Engineering",
    "timeline.graduated.description":
        "First-class honors from University College London. Specialized in entrepreneurial finance, renewable energy, and computational fluid dynamics",
    "timeline.graduated.button": "See Research Paper",

    "timeline.bis.title": "Junior Technical Advisor — BIS",
    "timeline.bis.description":
        "Worked closely with economists on central bank balance sheet data, built an internal repository to make historical datasets easier to access and verify.",

    "timeline.kunst.title": "Exhibited at Kunst in Reinach",
    "timeline.kunst.description":
        "Showcased large-scale acrylic paintings and sculptures alongside professional artists, achieving CHF 10,000+ in collective sales.",
    "timeline.kunst.button": "Discover Portfolio",

    "timeline.mommirror.title": "Co-founded MomMirror",
    "timeline.mommirror.description":
        "Launched AI mental health companion for mothers. Achieved 10M+ organic views in one month through TikTok/Instagram campaigns. Now scaling via UGC partnerships & AI content systems.",

    "timeline.ironman.title": "Completed 70.3 Ironman",
    "timeline.ironman.description":
        "1.9km swim, 90km bike, 21.1km run. September 2025.",

    // Timeline Links
    "timeline.links.thefactory_etsy": "Visit Shop",
    "timeline.links.bis_website": "About the BIS",
    "timeline.links.ironman_results": "View Race Results",
    "timeline.links.mommirror_website": "Visit MomMirror",

    // CTA Section
    "cta.heading": "Let's Build Something Together",
    "cta.paragraph1":
        "I've spent the last 4 years building businesses, shipping products, and automating systems. Now I want to join a team.",
    "cta.paragraph2":
        "Looking for a Swiss AI or robotics startup that values execution speed, systems thinking, and ambitious goals with supportive teams.",
    "cta.bookCall": "Book a Call",
    "cta.sendEmail": "Send Email",

    // Contact Section
    "contact.heading": "Get in Touch",
    "contact.subtitle": "Have a role in mind? Let's talk about it.",
    "contact.emailLabel": "Send me an email",
    "contact.phoneLabel": "Give me a call",

    // Footer
    "footer.linkedin": "LinkedIn",
    "footer.github": "GitHub",
    "footer.cv": "CV",
    "footer.portfolio": "Portfolio",
    "footer.copyright": "© 2026 Edoardo Gambacorta. All rights reserved.",

    // Metadata
    "meta.title": "Edoardo Gambacorta",
    "meta.description": "Mechanical Engineer. Startup Builder. 24 years old.",
};

const de: Translations = {
    // Header
    "header.projects": "Projekte",
    "header.timeline": "Zeitleiste",
    "header.contact": "Kontakt",
    "header.bookCall": "Gespräch buchen",

    // Hero Section
    "hero.heading":
        "An der Schnittstelle von Innovation und Business.",
    "hero.subtitle": "Maschinenbauingenieur. Startup-Builder. 24 Jahre alt.",
    "hero.cta": "Meine Projekte entdecken",

    // Intro Line
    "intro.heading": "Ich bin Edoardo Gambacorta",

    // Project Cards
    "projects.sectionTitle": "Aktive Ventures",
    "projects.sectionSubtitle": "Derzeit am Aufbauen, Skalieren und Beraten",

    "projects.mommirror.subtitle": "Mitgründer & Head of Distribution",
    "projects.mommirror.description":
        "KI-gestützter Mental-Health-Begleiter für werdende Mütter. Über 10 Mio. organische Views in einem Monat und die gesamte Go-to-Market-Strategie von null aufgebaut.",
    "projects.mommirror.badge": "Aktiv • Health Tech",

    "projects.thefactory.subtitle": "Gründer",
    "projects.thefactory.description":
        "Digitales Kunstbusiness mit über 2'300 Verkäufen in mehr als 50 Ländern. Über CHF 60'000 Umsatz, heute vollständig automatisiert und delegiert.",
    "projects.thefactory.badge": "Automatisiert • E-Commerce",

    "projects.picorn.subtitle": "Berater — Marketing & Distribution",
    "projects.picorn.description":
        "KI-gestützte kreative Automatisierungstools der nächsten Generation für digitale Künstler. Workflows, die repetitive kreative Arbeit eliminieren.",
    "projects.picorn.badge": "Aktiv • KI-Tools",

    // Timeline
    "timeline.sectionTitle": "4 Jahre in 60 Sekunden",

    "timeline.locare.title": "LoCare — Hüft-Reha-Tracker",
    "timeline.locare.description":
        "Zusammenarbeit mit DePuy Synthes zur Entwicklung eines IoT-Wearables für ältere Hüftprothesenpatient*innen. Nutzerinterviews geleitet und Arduino-basierte Hardware prototypisiert.",
    "timeline.locare.button": "Pitchdeck lesen",

    "timeline.thefactory.title": "TheFactoryByEdo gegründet",
    "timeline.thefactory.description":
        "Beginn des Online-Verkaufs digitaler Kunst. E-Commerce-Infrastruktur von Grund auf aufgebaut. Umsatz im 1. Jahr: CHF 15'000.",

    "timeline.breathe.title": "MSc-Thesis: Breathe — Sensory Light",
    "timeline.breathe.description":
        "Fluidmechanik-basierte Beleuchtung für den öffentlichen Raum entwickelt. Zweikammer-Wasser-/Ölsystem mit Rotationsmechanik konstruiert. Note: Distinction.",
    "timeline.breathe.button": "Thesis lesen",

    "timeline.rootslice.title": "RootSlice — Autonomer Jät-Roboter",
    "timeline.rootslice.description":
        "Mechanisches Design für Agrar-Roboter für Anden-Kartoffelfarmen geleitet. Helikale Förderschnecke mit Arduino-gesteuerter Positionierung entworfen.",
    "timeline.rootslice.button": "Bericht entdecken",

    "timeline.graduated.title": "MSc Maschinenbau abgeschlossen",
    "timeline.graduated.description":
        "Abschluss mit Auszeichnung vom University College London. Spezialisierung auf unternehmerische Finanzen, erneuerbare Energien und numerische Strömungsmechanik.",
    "timeline.graduated.button": "Forschungsarbeit ansehen",

    "timeline.bis.title": "Junior Technical Advisor — BIZ",
    "timeline.bis.description":
        "Enge Zusammenarbeit mit Ökonomen im Bereich Zentralbank-Bilanzdaten. Internes Repository aufgebaut, um historische Datensätze leichter zugänglich und überprüfbar zu machen.",

    "timeline.kunst.title": "Ausstellung an Kunst in Reinach",
    "timeline.kunst.description":
        "Grossformatige Acrylgemälde und Skulpturen neben professionellen Künstlern ausgestellt. Kollektiver Umsatz von über CHF 10'000.",
    "timeline.kunst.button": "Portfolio entdecken",

    "timeline.mommirror.title": "MomMirror mitgegründet",
    "timeline.mommirror.description":
        "KI-Mental-Health-Begleiter für Mütter lanciert. Über 10 Mio. organische Views in einem Monat durch TikTok-/Instagram-Kampagnen. Skalierung über UGC-Partnerschaften & KI-Content-Systeme.",

    "timeline.ironman.title": "70.3 Ironman absolviert",
    "timeline.ironman.description":
        "1,9 km Schwimmen, 90 km Radfahren, 21,1 km Laufen. September 2025.",

    // Timeline Links
    "timeline.links.thefactory_etsy": "Shop besuchen",
    "timeline.links.bis_website": "Über die BIZ",
    "timeline.links.ironman_results": "Ergebnisse ansehen",
    "timeline.links.mommirror_website": "MomMirror besuchen",

    // CTA Section
    "cta.heading": "Lass uns gemeinsam etwas aufbauen",
    "cta.paragraph1":
        "In den letzten 4 Jahren habe ich Unternehmen aufgebaut, Produkte gelauncht und Systeme automatisiert. Jetzt möchte ich einem Team beitreten.",
    "cta.paragraph2":
        "Auf der Suche nach einem Schweizer KI- oder Robotik-Startup, das Umsetzungsgeschwindigkeit, Systemdenken und ambitionierte Ziele mit unterstützenden Teams schätzt.",
    "cta.bookCall": "Gespräch buchen",
    "cta.sendEmail": "E-Mail senden",

    // Contact Section
    "contact.heading": "Kontakt aufnehmen",
    "contact.subtitle": "Eine Rolle im Kopf? Lass uns darüber sprechen.",
    "contact.emailLabel": "Schreib mir eine E-Mail",
    "contact.phoneLabel": "Ruf mich an",

    // Footer
    "footer.linkedin": "LinkedIn",
    "footer.github": "GitHub",
    "footer.cv": "Lebenslauf",
    "footer.portfolio": "Portfolio",
    "footer.copyright": "© 2026 Edoardo Gambacorta. Alle Rechte vorbehalten.",

    // Metadata
    "meta.title": "Edoardo Gambacorta",
    "meta.description":
        "Maschinenbauingenieur. Startup-Builder. 24 Jahre alt.",
};

const translations: Record<Language, Translations> = { en, de };

export function getTranslation(language: Language, key: string): string {
    return translations[language][key] ?? translations.en[key] ?? key;
}

export default translations;
