export type Language = "en" | "de" | "fr";

export interface Translations {
    [key: string]: string;
}

const en: Translations = {
    // Header
    "header.projects": "Projects",
    "header.paidMedia": "Paid Media",
    "header.timeline": "Timeline",
    "header.contact": "Contact",
    "header.bookCall": "Book Call",

    // Hero Section
    "hero.heading": "I turn ad spend into measurable growth.",
    "hero.subtitle": "Growth marketer with an engineering brain. Paid acquisition, mobile attribution, results you can audit.",
    "hero.cta": "See What I've Built",

    // Intro Line
    "intro.heading": "I'm Edoardo Gambacorta",

    // Project Cards
    "projects.sectionTitle": "Active Ventures",
    "projects.sectionSubtitle": "Currently building, scaling, and advising",

    "projects.mommirror.subtitle": "Co-founder & Head of Distribution",
    "projects.mommirror.description":
        "AI-powered mental health companion for expecting mothers. Drove 25M+ organic views across the last two years and built the entire go-to-market engine from zero.",
    "projects.mommirror.badge": "Active • Health Tech",

    "projects.thefactory.subtitle": "Founder",
    "projects.thefactory.description":
        "Digital art business scaled to 2,400+ sales across 50+ countries. CHF 75'000+ revenue, now fully automated and delegated.",
    "projects.thefactory.badge": "Automated • E-commerce",

    "projects.picorn.subtitle": "Advisor, Marketing & Distribution",
    "projects.picorn.description":
        "Next-generation AI creative automation tools for digital artists. Building workflows that eliminate repetitive creative work.",
    "projects.picorn.badge": "Active • AI Tools",

    // Timeline
    "timeline.sectionTitle": "Five Years in 60 Seconds",


    "timeline.locare.title": "LoCare: Hip Recovery Tracker",
    "timeline.locare.description":
        "Collaborated with DePuy Synthes to design IoT wearable for elderly hip replacement patients. Led user interviews and prototyped Arduino-based hardware.",
    "timeline.locare.button": "Read Pitchdeck",

    "timeline.thefactory.title": "Launched TheFactoryByEdo",
    "timeline.thefactory.description":
        "Started selling digital art online. Built e-commerce infrastructure from scratch. Year 1 revenue: CHF 15,000.",

    "timeline.breathe.title": "MSc Thesis: Breathe, Sensory Light",
    "timeline.breathe.description":
        "Developed fluid-mechanics-based lighting for public spaces. Engineered two-chamber water/oil system with rotating mechanics. Grade: Distinction.",
    "timeline.breathe.button": "Read Thesis",

    "timeline.rootslice.title": "RootSlice: Autonomous Weeding Robot",
    "timeline.rootslice.description":
        "Led mechanical design for agricultural robot targeting Andean potato farms. Designed helical auger system with Arduino-controlled positioning.",
    "timeline.rootslice.button": "Discover Report",

    "timeline.graduated.title": "Graduated MSc Mechanical Engineering",
    "timeline.graduated.description":
        "First-class honors from University College London. Specialized in entrepreneurial finance, renewable energy, and computational fluid dynamics",
    "timeline.graduated.button": "See Research Paper",

    "timeline.bis.title": "Junior Technical Advisor, BIS",
    "timeline.bis.description":
        "Worked closely with economists on central bank balance sheet data, built an internal repository to make historical datasets easier to access and verify.",

    "timeline.kunst.title": "Exhibited at Kunst in Reinach",
    "timeline.kunst.description":
        "Showcased large-scale acrylic paintings and sculptures alongside professional artists, achieving CHF 10,000+ in collective sales.",
    "timeline.kunst.button": "Discover Portfolio",

    "timeline.mommirror.title": "Co-founded MomMirror",
    "timeline.mommirror.description":
        "Launched AI mental health companion for mothers. Drove 25M+ organic views across the last two years through TikTok/Instagram campaigns. Now scaling via UGC partnerships & AI content systems.",

    "timeline.ironman.title": "Completed 70.3 Ironman",
    "timeline.ironman.description":
        "1.9km swim, 90km bike, 21.1km run. September 2025.",

    "timeline.deltapay.title": "Head of Marketing, DeltaPay",
    "timeline.deltapay.description":
        "Leading marketing for a mobile payments fintech across Switzerland and Eswatini. Built the company's first Meta ads and AppsFlyer attribution stack from zero: 1,000+ tracked installs in week one at CHF 0.25 per install, cost per lead down 66%.",

    // Timeline Links
    "timeline.links.thefactory_etsy": "Visit Shop",
    "timeline.links.bis_website": "About the BIS",
    "timeline.links.ironman_results": "View Race Results",
    "timeline.links.mommirror_website": "Visit MomMirror",
    "timeline.links.deltapay_website": "Visit DeltaPay",

    // Capabilities
    "capabilities.sectionTitle": "Paid Media: Capabilities & Results",
    "capabilities.sectionSubtitle": "What I run, and what it produced",
    "capabilities.intro":
        "I approach acquisition like an engineering problem: build the measurement first, then optimise against it. At DeltaPay that meant standing up Meta and AppsFlyer attribution from zero before scaling spend, so every number below is tracked, not estimated.",
    "capabilities.stat1.value": "CHF 0.25",
    "capabilities.stat1.label": "cost per app install",
    "capabilities.stat2.value": "66%",
    "capabilities.stat2.label": "reduction in cost per lead",
    "capabilities.stat3.value": "1,000+",
    "capabilities.stat3.label": "tracked installs in week one",
    "capabilities.stat4.value": "0 → 1",
    "capabilities.stat4.label": "Meta + AppsFlyer attribution built from scratch",
    "capabilities.stat5.value": "25M+",
    "capabilities.stat5.label": "organic views across the last two years",
    "capabilities.stat6.value": "7M+",
    "capabilities.stat6.label": "views generated through paid media",
    "capabilities.stat7.value": "10K → 20K",
    "capabilities.stat7.label": "social followers in around two months",
    "capabilities.stat8.value": "10,988,586",
    "capabilities.stat8.label": "paid media impressions from CHF 1'484.89 spend",
    "capabilities.group1.title": "Paid acquisition",
    "capabilities.group1.items":
        "Meta campaign architecture built from scratch • Custom and lookalike audiences, geo and behavioural targeting • App install campaigns with full mobile attribution (AppsFlyer, Firebase) • Follower growth campaigns • CPA / CPI / CPL optimisation • Budget structuring, pacing and scaling • Creative fatigue diagnosis and structured testing",
    "capabilities.group2.title": "Measurement & attribution",
    "capabilities.group2.items":
        "MMP implementation (AppsFlyer) • Meta ↔ MMP attribution setup and troubleshooting • Firebase / BigQuery pipelines, cohort and retention analysis • Dashboards that connect spend to revenue",
    "capabilities.group3.title": "Creative & campaigns",
    "capabilities.group3.items":
        "Creative strategy and direction for paid social • Short-form video production and editing • UGC and creator campaign management • National launch campaigns and retail activations, including a payment-switch launch and a 17-location grocery rollout",

    // CTA Section
    "cta.heading": "Let's Build Something Together",
    "cta.paragraph1":
        "I've spent the last five years building businesses, shipping products, and running paid acquisition, most recently building DeltaPay's marketing engine from zero.",
    "cta.paragraph2":
        "Now I'm looking for a Geneva-based growth or performance marketing team that values measurement, speed, and results that hold up in a spreadsheet.",
    "cta.bookCall": "Book a Call",

    // Contact Section
    "contact.heading": "Get in Touch",
    "contact.subtitle": "Have a role in mind? Let's talk about it.",
    "contact.emailLabel": "Send me an email",
    "contact.phoneLabel": "Give me a call",
    "contact.location": "Geneva, Switzerland",

    // Footer
    "footer.linkedin": "LinkedIn",
    "footer.github": "GitHub",
    "footer.cv": "CV",
    "footer.portfolio": "Portfolio",
    "footer.copyright": "© 2026 Edoardo Gambacorta. All rights reserved.",

    // Metadata
    "meta.title": "Edoardo Gambacorta",
    "meta.description":
        "Edoardo Gambacorta: growth marketer in Geneva. Paid acquisition, mobile attribution (AppsFlyer) and measurable results. Head of Marketing at DeltaPay.",
};

const de: Translations = {
    // Header
    "header.projects": "Projekte",
    "header.paidMedia": "Paid Media",
    "header.timeline": "Zeitleiste",
    "header.contact": "Kontakt",
    "header.bookCall": "Gespräch buchen",

    // Hero Section
    "hero.heading": "Ich mache aus Werbebudget messbares Wachstum.",
    "hero.subtitle": "Growth Marketer mit Ingenieurshintergrund. Paid Acquisition, Mobile Attribution, überprüfbare Resultate.",
    "hero.cta": "Meine Projekte entdecken",

    // Intro Line
    "intro.heading": "Ich bin Edoardo Gambacorta",

    // Project Cards
    "projects.sectionTitle": "Aktive Ventures",
    "projects.sectionSubtitle": "Derzeit am Aufbauen, Skalieren und Beraten",

    "projects.mommirror.subtitle": "Mitgründer & Head of Distribution",
    "projects.mommirror.description":
        "KI-gestützter Mental-Health-Begleiter für werdende Mütter. Über 25 Mio. organische Views in den letzten zwei Jahren erzielt und die gesamte Go-to-Market-Strategie von null aufgebaut.",
    "projects.mommirror.badge": "Aktiv • Health Tech",

    "projects.thefactory.subtitle": "Gründer",
    "projects.thefactory.description":
        "Digitales Kunstbusiness mit über 2'400 Verkäufen in mehr als 50 Ländern. Über CHF 75'000 Umsatz, heute vollständig automatisiert und delegiert.",
    "projects.thefactory.badge": "Automatisiert • E-Commerce",

    "projects.picorn.subtitle": "Berater, Marketing & Distribution",
    "projects.picorn.description":
        "KI-gestützte kreative Automatisierungstools der nächsten Generation für digitale Künstler. Workflows, die repetitive kreative Arbeit eliminieren.",
    "projects.picorn.badge": "Aktiv • KI-Tools",

    // Timeline
    "timeline.sectionTitle": "Fünf Jahre in 60 Sekunden",

    "timeline.locare.title": "LoCare: Hüft-Reha-Tracker",
    "timeline.locare.description":
        "Zusammenarbeit mit DePuy Synthes zur Entwicklung eines IoT-Wearables für ältere Hüftprothesenpatient*innen. Nutzerinterviews geleitet und Arduino-basierte Hardware prototypisiert.",
    "timeline.locare.button": "Pitchdeck lesen",

    "timeline.thefactory.title": "TheFactoryByEdo gegründet",
    "timeline.thefactory.description":
        "Beginn des Online-Verkaufs digitaler Kunst. E-Commerce-Infrastruktur von Grund auf aufgebaut. Umsatz im 1. Jahr: CHF 15'000.",

    "timeline.breathe.title": "MSc-Thesis: Breathe, Sensory Light",
    "timeline.breathe.description":
        "Fluidmechanik-basierte Beleuchtung für den öffentlichen Raum entwickelt. Zweikammer-Wasser-/Ölsystem mit Rotationsmechanik konstruiert. Note: Distinction.",
    "timeline.breathe.button": "Thesis lesen",

    "timeline.rootslice.title": "RootSlice: Autonomer Jät-Roboter",
    "timeline.rootslice.description":
        "Mechanisches Design für Agrar-Roboter für Anden-Kartoffelfarmen geleitet. Helikale Förderschnecke mit Arduino-gesteuerter Positionierung entworfen.",
    "timeline.rootslice.button": "Bericht entdecken",

    "timeline.graduated.title": "MSc Maschinenbau abgeschlossen",
    "timeline.graduated.description":
        "Abschluss mit Auszeichnung vom University College London. Spezialisierung auf unternehmerische Finanzen, erneuerbare Energien und numerische Strömungsmechanik.",
    "timeline.graduated.button": "Forschungsarbeit ansehen",

    "timeline.bis.title": "Junior Technical Advisor, BIZ",
    "timeline.bis.description":
        "Enge Zusammenarbeit mit Ökonomen im Bereich Zentralbank-Bilanzdaten. Internes Repository aufgebaut, um historische Datensätze leichter zugänglich und überprüfbar zu machen.",

    "timeline.kunst.title": "Ausstellung an Kunst in Reinach",
    "timeline.kunst.description":
        "Grossformatige Acrylgemälde und Skulpturen neben professionellen Künstlern ausgestellt. Kollektiver Umsatz von über CHF 10'000.",
    "timeline.kunst.button": "Portfolio entdecken",

    "timeline.mommirror.title": "MomMirror mitgegründet",
    "timeline.mommirror.description":
        "KI-Mental-Health-Begleiter für Mütter lanciert. Über 25 Mio. organische Views in den letzten zwei Jahren durch TikTok-/Instagram-Kampagnen erzielt. Skalierung über UGC-Partnerschaften & KI-Content-Systeme.",

    "timeline.ironman.title": "70.3 Ironman absolviert",
    "timeline.ironman.description":
        "1,9 km Schwimmen, 90 km Radfahren, 21,1 km Laufen. September 2025.",

    "timeline.deltapay.title": "Head of Marketing, DeltaPay",
    "timeline.deltapay.description":
        "Marketingverantwortung für ein Mobile-Payments-Fintech in der Schweiz und in Eswatini. Erste Meta-Ads- und AppsFlyer-Attribution des Unternehmens von null aufgebaut: über 1'000 getrackte Installs in der ersten Woche zu CHF 0.25 pro Install, Cost per Lead um 66 % gesenkt.",

    // Timeline Links
    "timeline.links.thefactory_etsy": "Shop besuchen",
    "timeline.links.bis_website": "Über die BIZ",
    "timeline.links.ironman_results": "Ergebnisse ansehen",
    "timeline.links.mommirror_website": "MomMirror besuchen",
    "timeline.links.deltapay_website": "DeltaPay besuchen",

    // Capabilities
    "capabilities.sectionTitle": "Paid Media: Kompetenzen & Resultate",
    "capabilities.sectionSubtitle": "Was ich betreibe und was dabei herauskam",
    "capabilities.intro":
        "Ich behandle Acquisition wie ein Engineering-Problem: zuerst die Messung aufbauen, dann dagegen optimieren. Bei DeltaPay hiess das, Meta- und AppsFlyer-Attribution von null aufzusetzen, bevor das Budget skaliert wurde; jede Zahl unten ist getrackt, nicht geschätzt.",
    "capabilities.stat1.value": "CHF 0.25",
    "capabilities.stat1.label": "Kosten pro App-Install",
    "capabilities.stat2.value": "66 %",
    "capabilities.stat2.label": "tiefere Cost per Lead",
    "capabilities.stat3.value": "1'000+",
    "capabilities.stat3.label": "getrackte Installs in Woche eins",
    "capabilities.stat4.value": "0 → 1",
    "capabilities.stat4.label": "Meta- + AppsFlyer-Attribution von Grund auf aufgebaut",
    "capabilities.stat5.value": "25M+",
    "capabilities.stat5.label": "organische Views in den letzten zwei Jahren",
    "capabilities.stat6.value": "7M+",
    "capabilities.stat6.label": "Views durch Paid Media",
    "capabilities.stat7.value": "10'000 → 20'000",
    "capabilities.stat7.label": "Social Follower in rund zwei Monaten",
    "capabilities.stat8.value": "10'988'586",
    "capabilities.stat8.label": "Paid-Media-Impressions mit CHF 1'484.89 Spend",
    "capabilities.group1.title": "Paid Acquisition",
    "capabilities.group1.items":
        "Meta-Kampagnenarchitektur von Grund auf • Custom und Lookalike Audiences, Geo- und Verhaltens-Targeting • App-Install-Kampagnen mit vollständiger Mobile Attribution (AppsFlyer, Firebase) • Follower-Wachstumskampagnen • CPA-/CPI-/CPL-Optimierung • Budgetstruktur, Pacing und Skalierung • Creative-Fatigue-Diagnose und strukturiertes Creative Testing",
    "capabilities.group2.title": "Messung & Attribution",
    "capabilities.group2.items":
        "MMP-Implementierung (AppsFlyer) • Meta ↔ MMP Attribution einrichten und debuggen • Firebase-/BigQuery-Pipelines, Kohorten- und Retention-Analysen • Dashboards, die Spend mit Umsatz verbinden",
    "capabilities.group3.title": "Creative & Kampagnen",
    "capabilities.group3.items":
        "Creative-Strategie und -Direction für Paid Social • Kurzvideo-Produktion und -Schnitt • UGC- und Creator-Kampagnen • Nationale Launch-Kampagnen und Retail-Aktivierungen, darunter ein Payment-Switch-Launch und ein Rollout in 17 Filialen eines Lebensmittelhändlers",

    // CTA Section
    "cta.heading": "Lass uns gemeinsam etwas aufbauen",
    "cta.paragraph1":
        "In den letzten fünf Jahren habe ich Unternehmen aufgebaut, Produkte gelauncht und Paid Acquisition betrieben, zuletzt die gesamte Marketing-Engine von DeltaPay von null aufgebaut.",
    "cta.paragraph2":
        "Jetzt suche ich ein Growth- oder Performance-Marketing-Team in Genf, das auf Messbarkeit, Tempo und belastbare Resultate setzt.",
    "cta.bookCall": "Gespräch buchen",

    // Contact Section
    "contact.heading": "Kontakt aufnehmen",
    "contact.subtitle": "Eine Rolle im Kopf? Lass uns darüber sprechen.",
    "contact.emailLabel": "Schreib mir eine E-Mail",
    "contact.phoneLabel": "Ruf mich an",
    "contact.location": "Genf, Schweiz",

    // Footer
    "footer.linkedin": "LinkedIn",
    "footer.github": "GitHub",
    "footer.cv": "Lebenslauf",
    "footer.portfolio": "Portfolio",
    "footer.copyright": "© 2026 Edoardo Gambacorta. Alle Rechte vorbehalten.",

    // Metadata
    "meta.title": "Edoardo Gambacorta",
    "meta.description":
        "Edoardo Gambacorta: Growth Marketer in Genf. Paid Acquisition, Mobile Attribution (AppsFlyer) und messbare Resultate. Head of Marketing bei DeltaPay.",
};

const fr: Translations = {
    // Header
    "header.projects": "Projets",
    "header.paidMedia": "Paid Media",
    "header.timeline": "Parcours",
    "header.contact": "Contact",
    "header.bookCall": "Réserver un appel",

    // Hero Section
    "hero.heading": "Je transforme les budgets publicitaires en croissance mesurable.",
    "hero.subtitle": "Growth marketer avec un cerveau d'ingénieur. Acquisition payante, attribution mobile, des résultats vérifiables.",
    "hero.cta": "Voir ce que j'ai construit",

    // Intro Line
    "intro.heading": "Je suis Edoardo Gambacorta",

    // Project Cards
    "projects.sectionTitle": "Projets actifs",
    "projects.sectionSubtitle": "En construction, en croissance, en conseil",

    "projects.mommirror.subtitle": "Cofondateur & Head of Distribution",
    "projects.mommirror.description":
        "Compagnon de santé mentale propulsé par l'IA pour les futures mamans. Plus de 25 millions de vues organiques générées au cours des deux dernières années et un moteur go-to-market construit de zéro.",
    "projects.mommirror.badge": "Actif • Health Tech",

    "projects.thefactory.subtitle": "Fondateur",
    "projects.thefactory.description":
        "Business d'art numérique : plus de 2'400 ventes dans plus de 50 pays. Plus de CHF 75'000 de chiffre d'affaires, aujourd'hui entièrement automatisé et délégué.",
    "projects.thefactory.badge": "Automatisé • E-commerce",

    "projects.picorn.subtitle": "Conseiller, Marketing & Distribution",
    "projects.picorn.description":
        "Outils d'automatisation créative par IA de nouvelle génération pour artistes numériques. Des workflows qui éliminent le travail créatif répétitif.",
    "projects.picorn.badge": "Actif • Outils IA",

    // Timeline
    "timeline.sectionTitle": "Cinq ans en 60 secondes",

    "timeline.locare.title": "LoCare : Suivi de rééducation de la hanche",
    "timeline.locare.description":
        "Collaboration avec DePuy Synthes pour concevoir un wearable IoT destiné aux patients âgés opérés de la hanche. Entretiens utilisateurs et prototypage matériel sur Arduino.",
    "timeline.locare.button": "Lire le pitch deck",

    "timeline.thefactory.title": "Lancement de TheFactoryByEdo",
    "timeline.thefactory.description":
        "Début de la vente d'art numérique en ligne. Infrastructure e-commerce construite de zéro. Chiffre d'affaires de la première année : CHF 15'000.",

    "timeline.breathe.title": "Thèse de MSc : Breathe, Sensory Light",
    "timeline.breathe.description":
        "Éclairage basé sur la mécanique des fluides pour les espaces publics. Système à deux chambres eau/huile avec mécanique rotative. Mention : Distinction.",
    "timeline.breathe.button": "Lire la thèse",

    "timeline.rootslice.title": "RootSlice : Robot désherbeur autonome",
    "timeline.rootslice.description":
        "Direction de la conception mécanique d'un robot agricole pour les cultures de pommes de terre andines. Système de vis hélicoïdale à positionnement contrôlé par Arduino.",
    "timeline.rootslice.button": "Découvrir le rapport",

    "timeline.graduated.title": "Diplômé du MSc en génie mécanique",
    "timeline.graduated.description":
        "Diplômé avec mention très bien de l'University College London. Spécialisation en finance entrepreneuriale, énergies renouvelables et mécanique des fluides numérique.",
    "timeline.graduated.button": "Voir le travail de recherche",

    "timeline.bis.title": "Junior Technical Advisor, BRI",
    "timeline.bis.description":
        "Collaboration étroite avec des économistes sur les données de bilan des banques centrales. Création d'un référentiel interne pour rendre les données historiques plus accessibles et vérifiables.",

    "timeline.kunst.title": "Exposition à Kunst in Reinach",
    "timeline.kunst.description":
        "Peintures acryliques grand format et sculptures exposées aux côtés d'artistes professionnels. Plus de CHF 10'000 de ventes collectives.",
    "timeline.kunst.button": "Découvrir le portfolio",

    "timeline.mommirror.title": "Cofondation de MomMirror",
    "timeline.mommirror.description":
        "Lancement d'un compagnon de santé mentale IA pour les mamans. Plus de 25 millions de vues organiques générées au cours des deux dernières années via des campagnes TikTok/Instagram. Croissance via partenariats UGC et systèmes de contenu IA.",

    "timeline.ironman.title": "Ironman 70.3 terminé",
    "timeline.ironman.description":
        "1,9 km de natation, 90 km de vélo, 21,1 km de course. Septembre 2025.",

    "timeline.deltapay.title": "Head of Marketing, DeltaPay",
    "timeline.deltapay.description":
        "Responsable du marketing d'une fintech de paiement mobile, entre la Suisse et l'Eswatini. Première infrastructure Meta Ads et d'attribution AppsFlyer de l'entreprise, construite de zéro : plus de 1 000 installations trackées la première semaine à CHF 0.25 par installation, coût par lead réduit de 66 %.",

    // Timeline Links
    "timeline.links.thefactory_etsy": "Visiter la boutique",
    "timeline.links.bis_website": "À propos de la BRI",
    "timeline.links.ironman_results": "Voir les résultats",
    "timeline.links.mommirror_website": "Visiter MomMirror",
    "timeline.links.deltapay_website": "Découvrir DeltaPay",

    // Capabilities
    "capabilities.sectionTitle": "Paid Media : Compétences & Résultats",
    "capabilities.sectionSubtitle": "Ce que je pilote, et ce que ça a produit",
    "capabilities.intro":
        "J'aborde l'acquisition comme un problème d'ingénierie : construire d'abord la mesure, puis optimiser contre elle. Chez DeltaPay, cela a signifié mettre en place l'attribution Meta et AppsFlyer de zéro avant de faire monter le budget; chaque chiffre ci-dessous est tracké, pas estimé.",
    "capabilities.stat1.value": "CHF 0.25",
    "capabilities.stat1.label": "coût par installation d'app",
    "capabilities.stat2.value": "66 %",
    "capabilities.stat2.label": "de réduction du coût par lead",
    "capabilities.stat3.value": "1 000+",
    "capabilities.stat3.label": "installations trackées la première semaine",
    "capabilities.stat4.value": "0 → 1",
    "capabilities.stat4.label": "attribution Meta + AppsFlyer construite de zéro",
    "capabilities.stat5.value": "25M+",
    "capabilities.stat5.label": "vues organiques sur les deux dernières années",
    "capabilities.stat6.value": "7M+",
    "capabilities.stat6.label": "vues générées via le paid media",
    "capabilities.stat7.value": "10 000 → 20 000",
    "capabilities.stat7.label": "abonnés sociaux en environ deux mois",
    "capabilities.stat8.value": "10 988 586",
    "capabilities.stat8.label": "impressions paid media pour CHF 1'484.89 de dépenses",
    "capabilities.group1.title": "Acquisition payante",
    "capabilities.group1.items":
        "Architecture de campagnes Meta construite de zéro • Audiences custom et lookalike, ciblage géographique et comportemental • Campagnes d'installation d'app avec attribution mobile complète (AppsFlyer, Firebase) • Campagnes de croissance d'audience • Optimisation CPA / CPI / CPL • Structuration, pacing et scaling des budgets • Diagnostic de fatigue créative et tests structurés",
    "capabilities.group2.title": "Mesure & attribution",
    "capabilities.group2.items":
        "Implémentation MMP (AppsFlyer) • Configuration et débogage de l'attribution Meta ↔ MMP • Pipelines Firebase / BigQuery, analyses de cohortes et de rétention • Dashboards reliant les dépenses au chiffre d'affaires",
    "capabilities.group3.title": "Créatif & campagnes",
    "capabilities.group3.items":
        "Stratégie et direction créative pour le paid social • Production et montage de vidéos courtes • Gestion de campagnes UGC et créateurs • Campagnes de lancement nationales et activations retail, dont le lancement d'un switch de paiement national et un déploiement dans 17 points de vente d'une enseigne alimentaire",

    // CTA Section
    "cta.heading": "Construisons quelque chose ensemble",
    "cta.paragraph1":
        "Ces cinq dernières années, j'ai créé des entreprises, lancé des produits et piloté de l'acquisition payante, dernièrement en construisant de zéro le moteur marketing de DeltaPay.",
    "cta.paragraph2":
        "Je cherche aujourd'hui une équipe growth ou performance marketing à Genève qui valorise la mesure, la vitesse d'exécution et des résultats qui tiennent la route.",
    "cta.bookCall": "Réserver un appel",

    // Contact Section
    "contact.heading": "Prendre contact",
    "contact.subtitle": "Un poste en tête ? Parlons-en.",
    "contact.emailLabel": "Envoyez-moi un e-mail",
    "contact.phoneLabel": "Appelez-moi",
    "contact.location": "Genève, Suisse",

    // Footer
    "footer.linkedin": "LinkedIn",
    "footer.github": "GitHub",
    "footer.cv": "CV",
    "footer.portfolio": "Portfolio",
    "footer.copyright": "© 2026 Edoardo Gambacorta. Tous droits réservés.",

    // Metadata
    "meta.title": "Edoardo Gambacorta",
    "meta.description":
        "Edoardo Gambacorta : growth marketer à Genève. Acquisition payante, attribution mobile (AppsFlyer) et résultats mesurables. Head of Marketing chez DeltaPay.",
};

const translations: Record<Language, Translations> = { en, de, fr };

export function getTranslation(language: Language, key: string): string {
    return translations[language][key] ?? translations.en[key] ?? key;
}

export default translations;
