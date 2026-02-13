"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CenteredContainer from "./CenteredContainer";
import HeroStack from "./HeroStack";

interface TimelineItem {
    year: string;
    title: string;
    description: string;
    gradient: string; // Kept for text/details styling if needed, or removed if unused
    images: string[];
    aspectRatio?: "aspect-[4/3]" | "aspect-[9/16]" | string;
}

const timelineItems: TimelineItem[] = [
    {
        year: "2022",
        title: "LoCare — Hip Recovery Tracker",
        description:
            "Collaborated with DePuy Synthes to design IoT wearable for elderly hip replacement patients. Led user interviews and prototyped Arduino-based hardware.",
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
    },
    {
        year: "2022",
        title: "Launched TheFactoryByEdo",
        description:
            "Started selling digital art online. Built e-commerce infrastructure from scratch. Year 1 revenue: CHF 15,000.",
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
    },
    {
        year: "2023",
        title: "MSc Thesis: Breathe — Sensory Light",
        description:
            "Developed fluid-mechanics-based lighting for public spaces. Engineered two-chamber water/oil system with rotating mechanics. Grade: Distinction.",
        gradient: "from-violet-500/60 to-purple-600/60",
        images: [
            "/images/breathe/17.webp",
            "/images/breathe/18.webp",
            "/images/breathe/19.webp",
            "/images/breathe/20.webp",
        ],
    },
    {
        year: "2023",
        title: "RootSlice — Autonomous Weeding Robot",
        description:
            "Led mechanical design for agricultural robot targeting Andean potato farms. Designed helical auger system with Arduino-controlled positioning.",
        gradient: "from-green-500/60 to-emerald-600/60",
        images: [
            "/images/rootslice/21.webp",
            "/images/rootslice/22.webp",
            "/images/rootslice/23.webp",
            "/images/rootslice/24.webp",
            "/images/rootslice/25.webp",
        ],
    },
    {
        year: "2023",
        title: "Graduated MSc Mechanical Engineering",
        description:
            "First-class honors from University College London. Specialized in entrepreneurial finance, renewable energy, and advanced CAD.",
        gradient: "from-blue-500/60 to-indigo-600/60",
        images: [
            "/images/graduated/26.webp",
            "/images/graduated/27.webp",
            "/images/graduated/28.webp",
        ],
    },
    {
        year: "2024",
        title: "Junior Technical Advisor — BIS",
        description:
            "Cleaned central bank balance sheet datasets. Resolved decades of data discrepancies across 15+ central bank archives.",
        gradient: "from-slate-500/60 to-gray-600/60",
        images: [
            "/images/bis/29.webp",
            "/images/bis/30.webp",
            "/images/bis/31.webp",
        ],
    },
    {
        year: "2024",
        title: "Exhibited at Kunst in Reinach",
        description:
            "Showcased large-scale acrylic paintings alongside professional artists. 'In My Head' — 100×120cm.",
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
    },
    {
        year: "2025",
        title: "Co-founded MomMirror",
        description:
            "Launched AI mental health companion for mothers. Achieved 10M+ organic impressions through TikTok/Instagram campaigns. Tech: Flutter, Firebase, Claude API.",
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
    },
    {
        year: "2025",
        title: "Completed 70.3 Ironman",
        description:
            "1.9km swim, 90km bike, 21.1km run. September 2025. Mental toughness compounds everywhere.",
        gradient: "from-red-500/60 to-orange-600/60",
        images: [
            "/images/ironman/41.webp",
            "/images/ironman/42.webp",
            "/images/ironman/43.webp",
            "/images/ironman/44.webp",
            "/images/ironman/45.webp",
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
    const isInView = useInView(ref, { once: true, margin: "-20%" }); // Adjusted margin for singular view
    const isLeft = index % 2 === 0;

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
                    className={`w-full ${item.aspectRatio === "aspect-[1284/2778]" ? "max-w-xs" : "max-w-2xl"}`} // Conditional max-width for vertical cards
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
                        {item.title}
                    </h3>
                    <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-sans">
                        {item.description}
                    </p>
                </motion.div>
            </div>
        </div>
    );
}

export function Timeline() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

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
                        5 Years in 60 Seconds
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-lg md:text-xl text-gray-400 font-sans"
                    >
                        Age is just a number. Output is what matters.
                    </motion.p>
                </div>

                {/* Timeline container */}
                <div className="relative">
                    {/* Desktop vertical line */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/50 via-accent/30 to-accent/10 -translate-x-1/2" />

                    {timelineItems.map((item, index) => (
                        <TimelineCard key={item.title} item={item} index={index} />
                    ))}
                </div>
            </CenteredContainer>
        </section>
    );
}
