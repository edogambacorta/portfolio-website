"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import CenteredContainer from "./CenteredContainer";

interface Project {
    title: string;
    subtitle: string;
    description: string;
    badge: string;
    badgeColor: string;
    link: string;
    gradient: string;
}

const projects: Project[] = [
    {
        title: "MomMirror",
        subtitle: "Co-founder & Head of Distribution",
        description:
            "AI-powered mental health companion for expecting mothers. Generated 10M+ organic views and built entire go-to-market engine from zero.",
        badge: "Active • Health Tech",
        badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
        link: "https://mommirror.com",
        gradient: "from-rose-500/80 via-pink-600/70 to-purple-700/80",
    },
    {
        title: "TheFactoryByEdo",
        subtitle: "Founder",
        description:
            "Digital art business scaled to 2,300+ sales across 50+ countries. CHF 60,000+ revenue, now fully automated to <5 hours/week.",
        badge: "Automated • E-commerce",
        badgeColor: "bg-orange-500/20 text-orange-400 border-orange-500/30",
        link: "https://thefactorybyedo.etsy.com",
        gradient: "from-amber-500/80 via-orange-600/70 to-red-700/80",
    },
    {
        title: "Picorn",
        subtitle: "Advisor — Marketing & Distribution",
        description:
            "Next-generation AI creative automation tools for digital artists. Building workflows that eliminate repetitive creative work.",
        badge: "In Development • AI Tools",
        badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
        link: "https://picorn.com",
        gradient: "from-cyan-500/80 via-blue-600/70 to-indigo-700/80",
    },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const [isHovered, setIsHovered] = useState(false);

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
                    {/* Gradient background instead of image */}
                    <div
                        className={`h-56 md:h-72 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
                    >
                        {/* Animated grid pattern overlay */}
                        <div className="absolute inset-0 opacity-20">
                            <div
                                className="absolute inset-0"
                                style={{
                                    backgroundImage:
                                        "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
                                    backgroundSize: "24px 24px",
                                }}
                            />
                        </div>
                        {/* Floating title on the image area */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-white/30 text-6xl md:text-7xl font-bold tracking-tight select-none">
                                {project.title}
                            </span>
                        </div>
                        {/* Arrow icon */}
                        <div
                            className={`absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-full p-2 transition-all duration-300 ${isHovered
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
                                    {project.subtitle}
                                </p>
                            </div>
                        </div>
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
                            {project.description}
                        </p>
                        <span
                            className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border ${project.badgeColor}`}
                        >
                            {project.badge}
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
                        Active Ventures
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-lg md:text-xl text-gray-400 font-sans"
                    >
                        Currently building, scaling, and advising
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
