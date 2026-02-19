"use client";

import CenteredContainer from "./CenteredContainer";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "../lib/LanguageContext";
import { Mail, Phone, MapPin } from "lucide-react";

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 md:py-28 bg-black">
      <CenteredContainer>
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-sans">
              {t('contact.heading')}
            </h2>
            <p className="text-lg md:text-xl text-gray-400 font-sans">
              {t('contact.subtitle')}
            </p>
          </motion.div>

          {/* Prominent contact CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="max-w-2xl mx-auto flex flex-col gap-5"
          >
            {/* Email CTA */}
            <a
              href="mailto:edoardo.gambacorta@gmail.com"
              className="group flex items-center gap-5 p-6 rounded-2xl border border-gray-700 bg-gray-900/60 hover:border-accent hover:bg-accent/5 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-400 font-sans mb-1">{t('contact.emailLabel')}</p>
                <p className="text-lg md:text-xl font-semibold text-white group-hover:text-accent transition-colors duration-300 font-sans truncate">
                  edoardo.gambacorta@gmail.com
                </p>
              </div>
              <span className="text-gray-500 group-hover:text-accent group-hover:translate-x-1 transition-all duration-300 text-2xl">
                →
              </span>
            </a>

            {/* Phone CTA */}
            <a
              href="tel:+41767752097"
              className="group flex items-center gap-5 p-6 rounded-2xl border border-gray-700 bg-gray-900/60 hover:border-accent hover:bg-accent/5 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-400 font-sans mb-1">{t('contact.phoneLabel')}</p>
                <p className="text-lg md:text-xl font-semibold text-white group-hover:text-accent transition-colors duration-300 font-sans">
                  +41 76 775 20 97
                </p>
              </div>
              <span className="text-gray-500 group-hover:text-accent group-hover:translate-x-1 transition-all duration-300 text-2xl">
                →
              </span>
            </a>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center gap-2 text-gray-500 text-sm font-sans">
              <MapPin className="w-4 h-4" />
              <span>Basel, Switzerland</span>
            </div>
          </motion.div>
        </div>
      </CenteredContainer>
    </section>
  );
}
