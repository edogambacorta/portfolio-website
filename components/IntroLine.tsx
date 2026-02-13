"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CenteredContainer from "./CenteredContainer";
import { useLanguage } from "../lib/LanguageContext";

export function IntroLine() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const { t } = useLanguage();

    return (
        <section className="bg-white py-16 md:py-20">
            <CenteredContainer>
                <div ref={ref} className="flex flex-col items-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black text-center font-sans"
                    >
                        {t('intro.heading')}
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={isInView ? { scaleX: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        className="mt-6 h-1 w-24 bg-accent rounded-full"
                    />
                </div>
            </CenteredContainer>
        </section>
    );
}
