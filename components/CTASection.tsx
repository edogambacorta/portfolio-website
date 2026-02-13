"use client";

import { ShimmerButton } from "./ui/shimmer-button";
import CenteredContainer from "./CenteredContainer";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "../lib/LanguageContext";

export function CTASection() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const { t } = useLanguage();

    return (
        <section className="py-20 md:py-24 bg-gray-950">
            <CenteredContainer>
                <div ref={ref} className="max-w-3xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-8 font-sans"
                    >
                        {t('cta.heading')}
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.15 }}
                    >
                        <p className="text-lg md:text-xl text-gray-300 mb-4 leading-relaxed font-sans">
                            {t('cta.paragraph1')}
                        </p>
                        <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed font-sans">
                            {t('cta.paragraph2')}
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <ShimmerButton
                            onClick={() =>
                                window.open(
                                    "https://calendly.com/edoardo-gambacorta/",
                                    "_blank"
                                )
                            }
                            className="text-black font-semibold text-sm w-full sm:w-auto"
                            shimmerColor="rgba(255, 255, 255, 0.4)"
                            shimmerDuration="2s"
                        >
                            {t('cta.bookCall')}
                        </ShimmerButton>
                        <a
                            href="mailto:edoardo.gambacorta@gmail.com"
                            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-600 text-white font-semibold text-sm hover:border-accent hover:text-accent transition-all duration-300 w-full sm:w-auto"
                        >
                            {t('cta.sendEmail')}
                        </a>
                    </motion.div>
                </div>
            </CenteredContainer>
        </section>
    );
}
