"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import CenteredContainer from "./CenteredContainer";
import { useLanguage } from "../lib/LanguageContext";

interface Project {
    title: string;
    translationKey: string;
    link: string;
    gradient: string;
    logoUrl: string;
    badgeColor: string;
}

const projects: Project[] = [
    {
        title: "MomMirror",
        translationKey: "mommirror",
        link: "https://mommirror.com",
        gradient: "from-rose-500/80 via-pink-600/70 to-purple-700/80",
        logoUrl: "/images/logos/mommirror.webp",
        badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    },
    {
        title: "TheFactoryByEdo",
        translationKey: "thefactory",
        link: "https://thefactorybyedo.etsy.com",
        gradient: "from-amber-500/80 via-orange-600/70 to-red-700/80",
        logoUrl: "/images/logos/thefactory.webp",
        badgeColor: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    },
    {
        title: "Picorn",
        translationKey: "picorn",
        link: "https://picorn.com",
        gradient: "from-cyan-500/80 via-blue-600/70 to-indigo-700/80",
        logoUrl: "/images/logos/picorn.webp",
        badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const [isHovered, setIsHovered] = useState(false);
    const { t } = useLanguage();

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
        >
            <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div
                    className={`relative rounded-2xl overflow-hidden transition-all duration-500 ${isHovered ? "scale-[1.02] shadow-2xl shadow-accent/10" : "shadow-lg"
                        }`}
                >
                    {/* Gradient background / Image area */}
                    <div
                        className={`h-64 md:h-80 bg-gradient-to-br ${project.gradient} relative overflow-hidden flex items-center justify-center p-8`}
                    >
                        {/* Logo Image */}
                        <div className="bg-white rounded-2xl overflow-hidden drop-shadow-2xl transition-transform duration-500 group-hover:scale-105 p-4">
                            <img
                                src={project.logoUrl}
                                alt={`${project.title} logo`}
                                className="w-full h-full object-contain"
                            />
                        </div>

                        {/* Arrow icon */}
                        <div
                            className={`absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-full p-2 transition-all duration-300 z-10 ${isHovered
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 translate-x-2"
                                }`}
                        >
                            <ArrowUpRight className="text-white" size={20} />
                        </div>
                    </div>

                    {/* Card body */}
                    <div className="bg-gray-900 p-6 md:p-8">
                        <div className="flex items-start justify-between mb-3">
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-gray-400 font-medium">
                                    {t(`projects.${project.translationKey}.subtitle`)}
                                </p>
                            </div>
                        </div>
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
                            {t(`projects.${project.translationKey}.description`)}
                        </p>
                        <span
                            className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border ${project.badgeColor}`}
                        >
                            {t(`projects.${project.translationKey}.badge`)}
                        </span>
                    </div>
                </div>
            </a>
        </motion.div>
    );
}

export function ProjectCards() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const { t } = useLanguage();

    return (
        <section id="projects" className="py-20 md:py-28 bg-black">
            <CenteredContainer>
                <div ref={sectionRef} className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-4 font-sans"
                    >
                        {t('projects.sectionTitle')}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-lg md:text-xl text-gray-400 font-sans"
                    >
                        {t('projects.sectionSubtitle')}
                    </motion.p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </CenteredContainer>
        </section>
    );
}
