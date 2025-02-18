"use client";

import { useState, useEffect, useRef } from "react";
import { SplineSceneBasic } from "./SplineSceneBasic";
import { ShimmerButton } from "./ui/shimmer-button";
import { Spotlight } from "./ui/spotlight";
export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleGetStarted = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden pt-20">
      <Spotlight
        className="absolute inset-0"
        size={350}
        mousePosition={mousePosition}
      />
      <div className="flex flex-col md:flex-row h-full">
        <div className="flex-1 flex flex-col justify-center p-8 z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white text-left">
            Accelerate Your Brand with Swiss AI Expertise
          </h1>
          <p className="text-xl mb-8 text-white text-left max-w-2xl">
            Cutting-Edge Marketing Powered by RAG Workflows & Bespoke AI Solutions
          </p>
          <div>
            <ShimmerButton
              onClick={handleGetStarted}
              className="text-black font-semibold"
              shimmerColor="rgba(255, 255, 255, 0.4)"
              shimmerDuration="2s"
            >
              Get Started
            </ShimmerButton>
          </div>
        </div>
        <div className="flex-1 relative overflow-hidden">
          <SplineSceneBasic scale={1.1} />
        </div>
      </div>
    </div>
  );
}
