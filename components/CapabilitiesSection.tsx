"use client";

import CenteredContainer from "./CenteredContainer";
import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "../lib/LanguageContext";

const stats = ["stat1", "stat2", "stat3", "stat4", "stat5", "stat6", "stat7", "stat8"];
const groups = ["group1", "group2", "group3"];

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
            <p className="max-w-4xl mx-auto mt-8 text-base md:text-lg text-gray-400 leading-relaxed font-sans">
              {t("capabilities.intro")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {stats.map((stat) => (
              <div
                key={stat}
                className="rounded-2xl bg-gray-900 p-6 text-center border border-accent/20"
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {groups.map((group) => (
              <div key={group} className="rounded-2xl bg-gray-900 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-5 font-sans">
                  {t(`capabilities.${group}.title`)}
                </h3>
                <ul className="space-y-3">
                  {t(`capabilities.${group}.items`)
                    .split(" • ")
                    .map((item) => (
                      <li key={item} className="flex gap-3 text-sm md:text-base text-gray-300 leading-relaxed font-sans">
                        <span className="text-accent" aria-hidden="true">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </CenteredContainer>
    </section>
  );
}
