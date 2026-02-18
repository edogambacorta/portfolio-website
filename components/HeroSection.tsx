"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { DownArrowIcon } from "./ui/DownArrowIcon";
import { SplineSceneBasic } from "./SplineSceneBasic";
import { ShimmerButton } from "./ui/shimmer-button";
import { Spotlight } from "./ui/spotlight";
import { HeroBackgroundAnimation } from "./ui/hero-background-animation";
import { useLanguage } from "../lib/LanguageContext";

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showArrow, setShowArrow] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const handleScroll = useCallback(() => {
    if (containerRef.current) {
      const { bottom } = containerRef.current.getBoundingClientRect();
      setShowArrow(bottom > 0);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePosition({ x, y });
    }
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  const scrollToProjects = useCallback(() => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      const headerHeight = 80;
      const offset = 16;
      const scrollPosition = projectsSection.offsetTop - headerHeight - offset;
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  const handleGetStarted = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    scrollToProjects();
  };

  return (
    <HeroBackgroundAnimation
      gradientBackgroundStart="rgb(0, 0, 0)"
      gradientBackgroundEnd="rgb(0, 0, 0)"
      firstColor="255, 102, 0"
      secondColor="255, 153, 0"
      thirdColor="255, 204, 0"
      fourthColor="255, 102, 0"
      fifthColor="255, 153, 0"
      className="relative w-full min-h-screen"
    >
      <div ref={containerRef} className="relative w-full min-h-screen">
        <Spotlight
          className="absolute inset-0"
          size={350}
          mousePosition={mousePosition}
        />
        {/* Robot — absolutely positioned, free to expand */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full flex items-center justify-end">
            <div className="absolute top-0 bottom-0 right-0 left-[25%] lg:left-[30%]">
              <SplineSceneBasic scale={1} />
            </div>
          </div>
        </div>
        {/* Text content — sits above the robot */}
        <div className="relative z-10 h-full min-h-screen flex items-center pointer-events-none">
          <div className="container mx-auto px-4 pb-16">
            <div className="lg:max-w-xl">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white font-sans">
                {t('hero.heading')}
              </h1>
              <p className="text-xl mb-8 text-gray-300 font-sans">
                {t('hero.subtitle')}
              </p>
              <div className="pointer-events-auto">
                <ShimmerButton
                  onClick={handleGetStarted}
                  className="text-black font-semibold text-sm"
                  shimmerColor="rgba(255, 255, 255, 0.4)"
                  shimmerDuration="2s"
                >
                  {t('hero.cta')}
                </ShimmerButton>
              </div>
            </div>
          </div>
        </div>
        {showArrow && (
          <div
            ref={arrowRef}
            className="absolute bottom-[110px] left-1/2 transform -translate-x-1/2 cursor-pointer transition-transform hover:scale-110 z-10 pointer-events-auto"
            onClick={scrollToProjects}
          >
            <DownArrowIcon size={38} className="animate-bounce" />
          </div>
        )}
      </div>
    </HeroBackgroundAnimation>
  );
}
