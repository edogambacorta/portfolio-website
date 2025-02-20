'use client'

import { useEffect, useRef } from "react"
import { SplineScene } from "./ui/spline"

interface SplineSceneBasicProps {
  scale?: number;
}

interface SplineObject {
  emitEvent: (eventName: string, data: any) => void;
}

export function SplineSceneBasic({ scale = 1.1 }: SplineSceneBasicProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const splineRef = useRef<SplineObject | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      if (splineRef.current && splineRef.current.emitEvent) {
        splineRef.current.emitEvent('mouseMove', { x, y });
      }
    };

    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full relative flex items-center justify-center overflow-hidden">
      <div style={{ transform: `scale(${scale})`, width: '100%', height: '100%' }}>
        <SplineScene 
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
      </div>
    </div>
  )
}
