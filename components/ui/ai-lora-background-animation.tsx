"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface AILoraBackgroundAnimationProps {
  children: React.ReactNode;
}

export const AILoraBackgroundAnimation: React.FC<AILoraBackgroundAnimationProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <motion.div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(255,102,0,0.3) 0%, rgba(255,153,0,0.2) 25%, rgba(255,204,0,0.1) 50%, rgba(255,102,0,0.05) 75%, rgba(0,0,0,0) 100%)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
      />
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full z-0 opacity-20"
          style={{
            width: Math.random() * 3 + 1 + "px",
            height: Math.random() * 3 + 1 + "px",
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}
      <div className="relative z-10 min-h-screen">
        {children}
      </div>
    </div>
  );
};
