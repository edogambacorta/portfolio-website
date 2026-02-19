"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import CenteredContainer from "./CenteredContainer";
import HeroStack from "./HeroStack";
import { useLanguage } from "../lib/LanguageContext";

interface TimelineLink {
    translationKey: string;
    url: string;
}

interface TimelineItem {
    year: string;
    translationKey: string;
    gradient: string;
    images: string[];
    aspectRatio?: "aspect-[4/3]" | "aspect-[9/16]" | string;
    buttonLink?: string;
    links?: TimelineLink[];
}

const timelineItems: TimelineItem[] = [
    {
        year: "2022",
        translationKey: "locare",
        gradient: "from-teal-500/60 to-cyan-600/60",
        images: [
            "/images/locare/1.webp",
            "/images/locare/2.webp",
            "/images/locare/3.webp",
            "/images/locare/4.webp",
            "/images/locare/5.webp",
            "/images/locare/6.webp",
            "/images/locare/7.webp",
            "/images/locare/8.webp",
            "/images/locare/9.webp",
        ],
        buttonLink: "/documents/Locare.pdf",
    },
    {
        year: "2022",
        translationKey: "thefactory",
        gradient: "from-amber-500/60 to-orange-600/60",
        images: [
            "/images/thefactory/10.webp",
            "/images/thefactory/11.webp",
            "/images/thefactory/12.webp",
            "/images/thefactory/13.webp",
            "/images/thefactory/14.webp",
            "/images/thefactory/15.webp",
            "/images/thefactory/16.webp",
        ],
        links: [
            { translationKey: "thefactory_etsy", url: "https://thefactorybyedo.etsy.com/" },
        ],
    },
    {
        year: "2023",
        translationKey: "breathe",
        gradient: "from-violet-500/60 to-purple-600/60",
        images: [
            "/images/breathe/17.webp",
            "/images/breathe/18.webp",
            "/images/breathe/19.webp",
            "/images/breathe/20.webp",
        ],
        buttonLink: "/documents/22231205_Individual_Project_Final_Draft_v2_2.pdf",
    },
    {
        year: "2023",
        translationKey: "rootslice",
        gradient: "from-green-500/60 to-emerald-600/60",
        images: [
            "/images/rootslice/21.webp",
            "/images/rootslice/22.webp",
            "/images/rootslice/23.webp",
            "/images/rootslice/24.webp",
            "/images/rootslice/25.webp",
        ],
        buttonLink: "/documents/Final-group-report-Flat_Iron.pdf",
    },
    {
        year: "2023",
        translationKey: "graduated",
        gradient: "from-blue-500/60 to-indigo-600/60",
        images: [
            "/images/graduated/26.webp",
            "/images/graduated/27.webp",
            "/images/graduated/28.webp",
        ],
        buttonLink: "/documents/Gambacorta_Edoardo_Manifold_MECH0059_CFD_Coursework_Final.pdf",
    },
    {
        year: "2024",
        translationKey: "bis",
        gradient: "from-slate-500/60 to-gray-600/60",
        images: [
            "/images/bis/29.webp",
            "/images/bis/30.webp",
            "/images/bis/31.webp",
        ],
        links: [
            { translationKey: "bis_website", url: "https://www.bis.org/" },
        ],
    },
    {
        year: "2024",
        translationKey: "kunst",
        gradient: "from-rose-500/60 to-pink-600/60",
        images: [
            "/images/kunst/32.webp",
            "/images/kunst/33.webp",
            "/images/kunst/34.webp",
            "/images/kunst/35.webp",
            "/images/kunst/36.webp",
            "/images/kunst/37.webp",
            "/images/kunst/38.webp",
            "/images/kunst/39.webp",
            "/images/kunst/40.webp",
        ],
        buttonLink: "/documents/EDOARDO_GAMBACORTA_FINAL_PORTFOLIO_2025.pdf",
    },
    {
        year: "2025",
        translationKey: "mommirror",
        gradient: "from-fuchsia-500/60 to-purple-600/60",
        images: [
            "/images/mommirror/1.webp",
            "/images/mommirror/2.webp",
            "/images/mommirror/3.webp",
            "/images/mommirror/4.webp",
            "/images/mommirror/5.webp",
            "/images/mommirror/6.webp",
            "/images/mommirror/7.webp",
            "/images/mommirror/8.webp",
            "/images/mommirror/9.webp",
            "/images/mommirror/10.webp",
        ],
        aspectRatio: "aspect-[1284/2778]",
        links: [
            { translationKey: "mommirror_website", url: "https://mommirror.com/" },
        ],
    },
    {
        year: "2025",
        translationKey: "ironman",
        gradient: "from-red-500/60 to-orange-600/60",
        images: [
            "/images/ironman/41.webp",
            "/images/ironman/42.webp",
            "/images/ironman/43.webp",
            "/images/ironman/44.webp",
            "/images/ironman/45.webp",
        ],
        links: [
            { translationKey: "ironman_results", url: "https://www.datasport.com/live/ranking/?racenr=27533#1_47C27A" },
        ],
    },
];

function TimelineCard({
    item,
    index,
}: {
    item: TimelineItem;
    index: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-20%" });
    const isLeft = index % 2 === 0;
    const { t } = useLanguage();

    const title = t(`timeline.${item.translationKey}.title`);
    const description = t(`timeline.${item.translationKey}.description`);
    const buttonText = t(`timeline.${item.translationKey}.button`);
    const hasButton = item.buttonLink && buttonText !== `timeline.${item.translationKey}.button`;

    return (
        <div
            ref={ref}
            className={`relative flex items-center w-full min-h-screen ${isLeft ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col-reverse justify-center py-20`}
        >
            {/* Desktop: Content side (Image Stack) */}
            <div className={`w-full md:w-1/2 flex justify-center ${isLeft ? "md:pr-20" : "md:pl-20"} mb-12 md:mb-0`}>
                <motion.div
                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`w-full ${item.aspectRatio === "aspect-[1284/2778]" ? "max-w-xs" : "max-w-2xl"}`}
                >
                    <HeroStack images={item.images} aspectRatio={item.aspectRatio} />
                </motion.div>
            </div>

            {/* Center dot - Absolutely positioned */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex justify-center items-center z-10 pointer-events-none">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="w-5 h-5 bg-accent rounded-full ring-4 ring-black shadow-lg shadow-accent/30"
                />
            </div>

            {/* Desktop: Text side */}
            <div className={`w-full md:w-1/2 flex flex-col justify-center ${isLeft ? "md:pl-20 items-start text-left" : "md:pr-20 items-end text-right"}`}>
                <motion.div
                    initial={{ opacity: 0, x: isLeft ? 40 : -40 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    className="max-w-xl"
                >
                    <span className="inline-block text-sm font-bold text-accent bg-accent/10 px-4 py-1.5 rounded-full mb-6 border border-accent/20">
                        {item.year}
                    </span>
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 font-sans">
                        {title}
                    </h3>
                    <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-sans mb-6">
                        {description}
                    </p>
                    <div className={`flex flex-wrap gap-3 ${isLeft ? '' : 'justify-end'}`}>
                        {hasButton && (
                            <a
                                href={item.buttonLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/link inline-flex items-center gap-2 px-6 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent font-bold text-sm hover:bg-accent/20 hover:gap-3 transition-all duration-300"
                            >
                                {buttonText}
                                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                            </a>
                        )}
                        {item.links?.map((link) => {
                            const linkText = t(`timeline.links.${link.translationKey}`);
                            return (
                                <a
                                    key={link.translationKey}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/link inline-flex items-center gap-2 px-6 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent font-bold text-sm hover:bg-accent/20 hover:gap-3 transition-all duration-300"
                                >
                                    {linkText}
                                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                                </a>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export function Timeline() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const { t } = useLanguage();

    return (
        <section id="timeline" className="py-20 md:py-28 bg-black relative">
            <CenteredContainer>
                <div ref={sectionRef} className="text-center mb-16 md:mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-4 font-sans"
                    >
                        {t('timeline.sectionTitle')}
                    </motion.h2>

                </div>

                {/* Timeline container */}
                <div className="relative">
                    {/* Desktop vertical line */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/50 via-accent/30 to-accent/10 -translate-x-1/2" />

                    {timelineItems.map((item, index) => (
                        <TimelineCard key={item.translationKey} item={item} index={index} />
                    ))}
                </div>
            </CenteredContainer>
        </section>
    );
}
