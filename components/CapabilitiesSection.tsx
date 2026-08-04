"use client";

import { BarChart3, ChevronDown } from "lucide-react";
import CenteredContainer from "./CenteredContainer";
import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "../lib/LanguageContext";

const stats = ["stat1", "stat2", "stat3", "stat4", "stat5", "stat6", "stat7", "stat8"];
const groups = ["group1", "group2", "group3"];

function CapabilitiesContent() {
  const { t } = useLanguage();

  return (
    <div className="pt-8 md:pt-10">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent mb-3">
          {t("capabilities.sectionSubtitle")}
        </p>
        <p className="max-w-4xl text-base md:text-lg text-gray-300 leading-relaxed font-sans">
          {t("capabilities.intro")}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {stats.map((stat) => (
          <div
            key={stat}
            className="rounded-2xl bg-black/40 p-5 text-center border border-accent/20"
          >
            <span className="inline-block text-2xl md:text-3xl font-bold text-accent bg-accent/10 px-4 py-1.5 rounded-full mb-4 border border-accent/20">
              {t(`capabilities.${stat}.value`)}
            </span>
            <p className="text-sm text-gray-400 font-sans leading-relaxed">
              {t(`capabilities.${stat}.label`)}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {groups.map((group) => (
          <div key={group} className="rounded-2xl bg-black/40 p-6 md:p-7 border border-white/5">
            <h4 className="text-xl font-bold text-white mb-5 font-sans">
              {t(`capabilities.${group}.title`)}
            </h4>
            <ul className="space-y-3">
              {t(`capabilities.${group}.items`)
                .split(" • ")
                .map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-gray-300 leading-relaxed font-sans">
                    <span className="text-accent" aria-hidden="true">•</span>
                    <span>{item}</span>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PaidMediaDetails() {
  const { t } = useLanguage();

  return (
    <details
      id="paid-media"
      className="group scroll-mt-28 rounded-2xl border border-accent/25 bg-gray-900/95 p-5 md:p-8 shadow-2xl shadow-accent/5"
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-5 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent [&::-webkit-details-marker]:hidden">
        <span className="flex items-center gap-3 text-left text-lg md:text-2xl font-bold text-white font-sans">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/25 bg-accent/10 text-accent">
            <BarChart3 className="h-5 w-5" aria-hidden="true" />
          </span>
          {t("capabilities.explore")}
        </span>
        <ChevronDown
          className="h-6 w-6 shrink-0 text-accent transition-transform duration-300 group-open:rotate-180"
          aria-hidden="true"
        />
      </summary>
      <CapabilitiesContent />
    </details>
  );
}

export function CapabilitiesSection() {
  const { t } = useLanguage();

  return (
    <section id="paid-media" className="py-20 md:py-28 bg-black">
      <CenteredContainer>
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-sans">
              {t("capabilities.sectionTitle")}
            </h2>
            <p className="text-lg md:text-xl text-gray-400 font-sans">
              {t("capabilities.sectionSubtitle")}
            </p>
          </div>
          <CapabilitiesContent />
        </AnimatedSection>
      </CenteredContainer>
    </section>
  );
}
