"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { DownArrowIcon } from "./ui/DownArrowIcon";
import { SplineSceneBasic } from "./SplineSceneBasic";
import { ShimmerButton } from "./ui/shimmer-button";
import { Spotlight } from "./ui/spotlight";
import { HeroBackgroundAnimation } from "./ui/hero-background-animation";

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showArrow, setShowArrow] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

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

  const scrollToServices = useCallback(() => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      const headerHeight = 80; // Adjust this value based on your actual header height
      const offset = 16; // Additional offset for fine-tuning
      const scrollPosition = servicesSection.offsetTop - headerHeight - offset;
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  const handleGetStarted = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    scrollToServices();
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
      className="relative w-full min-h-screen overflow-hidden"
    >
      <div ref={containerRef} className="relative w-full min-h-screen overflow-hidden">
        <Spotlight
          className="absolute inset-0"
          size={350}
          mousePosition={mousePosition}
        />
        <div className="flex flex-col lg:flex-row h-full items-center relative z-10 container mx-auto px-4 pb-16">
          <div className="flex-1 flex flex-col justify-center lg:max-w-2xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white font-sans">
            Accelerate Your Brand with Swiss AI Expertise
            </h1>
            <p className="text-xl mb-8 text-gray-300 font-sans">
              Custom AI solutions that takes care of the complexity—so you can keep doing what you do best.
            </p>
            <div>
              <ShimmerButton
                onClick={handleGetStarted}
                className="text-black font-semibold text-sm"
                shimmerColor="rgba(255, 255, 255, 0.4)"
                shimmerDuration="2s"
              >
                Get Started
              </ShimmerButton>
            </div>
          </div>
          <div className="flex-1 w-full lg:w-1/2 h-[50vh] lg:h-screen relative z-0 mt-8 lg:mt-0">
            <SplineSceneBasic scale={1} />
          </div>
        </div>
        {showArrow && (
          <div
            ref={arrowRef}
            className="absolute bottom-[110px] left-1/2 transform -translate-x-1/2 cursor-pointer transition-transform hover:scale-110"
            onClick={scrollToServices}
          >
            <DownArrowIcon size={38} className="animate-bounce" />
          </div>
        )}
      </div>
    </HeroBackgroundAnimation>
  );
}
