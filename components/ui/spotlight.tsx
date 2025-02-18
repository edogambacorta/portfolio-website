'use client';
import React, { useEffect } from 'react';
import { motion, useSpring, useTransform, SpringOptions } from 'framer-motion';
import { cn } from '../../lib/utils';

type SpotlightProps = {
  className?: string;
  size?: number;
  springOptions?: SpringOptions;
  mousePosition: { x: number; y: number };
};

export function Spotlight({
  className,
  size = 350,
  springOptions = { bounce: 0, damping: 20, stiffness: 200 },
  mousePosition,
}: SpotlightProps) {
  const mouseX = useSpring(0, springOptions);
  const mouseY = useSpring(0, springOptions);

  useEffect(() => {
    mouseX.set(mousePosition.x);
    mouseY.set(mousePosition.y);
  }, [mousePosition, mouseX, mouseY]);

  const spotlightLeft = useTransform(mouseX, (x) => `${x}%`);
  const spotlightTop = useTransform(mouseY, (y) => `${y}%`);

  return (
    <motion.div
      className={cn(
        'pointer-events-none absolute rounded-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops),transparent_80%)] blur-lg transition-opacity duration-300',
        'from-blue-100 via-blue-200 to-blue-300 opacity-30',
        className
      )}
      style={{
        width: size,
        height: size,
        left: spotlightLeft,
        top: spotlightTop,
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
}
