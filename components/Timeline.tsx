"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CenteredContainer from "./CenteredContainer";

interface TimelineItem {
    year: string;
    title: string;
    description: string;
    gradient: string;
    icon: string;
}

const timelineItems: TimelineItem[] = [
    {
        year: "2022",
        title: "LoCare — Hip Recovery Tracker",
        description:
            "Collaborated with DePuy Synthes to design IoT wearable for elderly hip replacement patients. Led user interviews and prototyped Arduino-based hardware.",
        gradient: "from-teal-500/60 to-cyan-600/60",
        icon: "🏥",
    },
    {
        year: "2022",
        title: "Launched TheFactoryByEdo",
        description:
            "Started selling digital art online. Built e-commerce infrastructure from scratch. Year 1 revenue: CHF 15,000.",
        gradient: "from-amber-500/60 to-orange-600/60",
        icon: "🎨",
    },
    {
        year: "2023",
        title: "MSc Thesis: Breathe — Sensory Light",
        description:
            "Developed fluid-mechanics-based lighting for public spaces. Engineered two-chamber water/oil system with rotating mechanics. Grade: Distinction.",
        gradient: "from-violet-500/60 to-purple-600/60",
        icon: "💡",
    },
    {
        year: "2023",
        title: "RootSlice — Autonomous Weeding Robot",
        description:
            "Led mechanical design for agricultural robot targeting Andean potato farms. Designed helical auger system with Arduino-controlled positioning.",
        gradient: "from-green-500/60 to-emerald-600/60",
        icon: "🤖",
    },
    {
        year: "2023",
        title: "Graduated MSc Mechanical Engineering",
        description:
            "First-class honors from University College London. Specialized in entrepreneurial finance, renewable energy, and advanced CAD.",
        gradient: "from-blue-500/60 to-indigo-600/60",
        icon: "🎓",
    },
    {
        year: "2024",
        title: "Junior Technical Advisor — BIS",
        description:
            "Cleaned central bank balance sheet datasets. Resolved decades of data discrepancies across 15+ central bank archives.",
        gradient: "from-slate-500/60 to-gray-600/60",
        icon: "🏦",
    },
    {
        year: "2024",
        title: "Exhibited at Kunst in Reinach",
        description:
            "Showcased large-scale acrylic paintings alongside professional artists. 'In My Head' — 100×120cm.",
        gradient: "from-rose-500/60 to-pink-600/60",
        icon: "🖼️",
    },
    {
        year: "2025",
        title: "Co-founded MomMirror",
        description:
            "Launched AI mental health companion for mothers. Achieved 10M+ organic impressions through TikTok/Instagram campaigns. Tech: Flutter, Firebase, Claude API.",
        gradient: "from-fuchsia-500/60 to-purple-600/60",
        icon: "📱",
    },
    {
        year: "2025",
        title: "Completed 70.3 Ironman",
        description:
            "1.9km swim, 90km bike, 21.1km run. September 2025. Mental toughness compounds everywhere.",
        gradient: "from-red-500/60 to-orange-600/60",
        icon: "🏊",
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
    const isInView = useInView(ref, { once: true, margin: "-80px" });
    const isLeft = index % 2 === 0;

    return (
        <div
            ref={ref}
            className={`relative flex items-center w-full mb-12 md:mb-20 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"
                } flex-row`}
        >
            {/* Desktop: Content side */}
            <div className={`hidden md:block w-5/12 ${isLeft ? "pr-12" : "pl-12"}`}>
                <motion.div
                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="group"
                >
                    {/* Visual card */}
                    <div
                        className={`rounded-xl overflow-hidden bg-gradient-to-br ${item.gradient} p-8 h-44 flex items-center justify-center relative transition-transform duration-300 group-hover:scale-[1.02]`}
                    >
                        <div className="absolute inset-0 opacity-10">
                            <div
                                className="absolute inset-0"
                                style={{
                                    backgroundImage:
                                        "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)",
                                    backgroundSize: "20px 20px",
                                }}
                            />
                        </div>
                        <span className="text-5xl select-none">{item.icon}</span>
                    </div>
                </motion.div>
            </div>

            {/* Center dot & line */}
            <div className="hidden md:flex w-2/12 justify-center relative">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="w-5 h-5 bg-accent rounded-full z-10 ring-4 ring-black shadow-lg shadow-accent/30"
                />
            </div>

            {/* Desktop: Text side */}
            <div className={`hidden md:block w-5/12 ${isLeft ? "pl-12" : "pr-12"}`}>
                <motion.div
                    initial={{ opacity: 0, x: isLeft ? 40 : -40 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                >
                    <span className="inline-block text-xs font-bold text-accent bg-accent/10 px-3 py-1 rounded-full mb-3 border border-accent/20">
                        {item.year}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 font-sans">
                        {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed font-sans">
                        {item.description}
                    </p>
                </motion.div>
            </div>

            {/* Mobile layout */}
            <div className="md:hidden flex w-full">
                {/* Mobile dot */}
                <div className="flex flex-col items-center mr-6">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ duration: 0.4 }}
                        className="w-4 h-4 bg-accent rounded-full z-10 ring-4 ring-black shadow-lg shadow-accent/30 flex-shrink-0"
                    />
                    <div className="w-0.5 bg-accent/30 flex-1 mt-2" />
                </div>

                {/* Mobile content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="flex-1 pb-4"
                >
                    <span className="inline-block text-xs font-bold text-accent bg-accent/10 px-3 py-1 rounded-full mb-3 border border-accent/20">
                        {item.year}
                    </span>
                    <div
                        className={`rounded-xl overflow-hidden bg-gradient-to-br ${item.gradient} p-6 h-32 flex items-center justify-center mb-4 relative`}
                    >
                        <div className="absolute inset-0 opacity-10">
                            <div
                                className="absolute inset-0"
                                style={{
                                    backgroundImage:
                                        "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)",
                                    backgroundSize: "20px 20px",
                                }}
                            />
                        </div>
                        <span className="text-4xl select-none">{item.icon}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 font-sans">
                        {item.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed font-sans">
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
