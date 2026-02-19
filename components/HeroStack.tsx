"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";

interface HeroStackProps {
    images: string[];
    className?: string; // Standard React prop
    aspectRatio?: "aspect-[4/3]" | "aspect-[9/16]" | string;
}

export default function HeroStack({ images, className = "", aspectRatio = "aspect-[4/3]" }: HeroStackProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    // Flicker effect logic — runs when hovered OR playing
    useEffect(() => {
        let interval: NodeJS.Timeout;

        if ((isHovered || isPlaying) && images.length > 1) {
            interval = setInterval(() => {
                setActiveIndex((prev) => (prev + 1) % images.length);
            }, 750); // Slow flicker (5x slower than 150ms)
        }

        return () => clearInterval(interval);
    }, [isHovered, isPlaying, images.length]);

    return (
        <div
            className={`flex flex-col items-center group ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`relative w-full ${aspectRatio}`}>
                {[2, 1, 0].map((layerIndex) => {
                    // Visual layers: 0 is top, 1 is middle, 2 is bottom
                    // We want 3 layers regardless of image count (unless < 3, then repeat)

                    let displayImage = images[0]; // Default

                    // Logic for image assignment:
                    // Top layer (0): The one that changes rapidly.
                    // Middle/Bottom (1, 2): Static or slightly offset index images.
                    if (layerIndex === 0) {
                        displayImage = images[activeIndex];
                    } else {
                        // For background layers, use different images from the array if available
                        displayImage = images[(activeIndex + layerIndex) % images.length];
                    }

                    // Z-Index: 0 (top) -> 30, 1 -> 20, 2 -> 10
                    const zIndex = 30 - (layerIndex * 10);

                    // Visual Transforms (Simulating messy stack)
                    const rotation = [0, -4, 4][layerIndex]; // Top 0, Mid -4, Bot 4
                    const xOffset = [0, -5, 5][layerIndex]; // Slight horizontal scatter
                    const yOffset = layerIndex * 8; // Vertical stacking down/back
                    const scale = 1 - (layerIndex * 0.05);

                    return (
                        <motion.div
                            key={layerIndex}
                            className="absolute inset-0 w-full h-full rounded-2xl shadow-xl border border-white/5 bg-gray-900 overflow-hidden"
                            initial={{
                                y: 100,
                                opacity: 0,
                                rotate: (layerIndex % 2 === 0 ? 5 : -5) + layerIndex // Deterministic rotation
                            }}
                            whileInView={{
                                y: yOffset,
                                x: xOffset,
                                opacity: 1,
                                rotate: rotation,
                                scale: scale,
                            }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                type: "spring",
                                stiffness: 70,
                                damping: 15,
                                delay: layerIndex * 0.15, // Stagger entry: bottom first or top first?
                                // Top comes last usually looks better for "placing on top"
                            }}
                            style={{ zIndex }}
                        >
                            {/* Image */}
                            <img
                                src={displayImage}
                                alt="Memory"
                                className="w-full h-full object-cover transition-opacity duration-75"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 pointer-events-none" />
                        </motion.div>
                    );
                })}
            </div>

            {/* Play/Pause button + image counter */}
            <div className="mt-8 flex items-center gap-3">
                <button
                    onClick={() => setIsPlaying((prev) => !prev)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200 text-xs font-bold uppercase tracking-[0.15em]"
                    aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
                >
                    {isPlaying ? (
                        <>
                            <Pause className="w-3 h-3" />
                            <span>Pause</span>
                        </>
                    ) : (
                        <>
                            <Play className="w-3 h-3" />
                            <span>Play</span>
                        </>
                    )}
                </button>
                <span className="text-xs text-gray-600 tabular-nums">
                    {activeIndex + 1}/{images.length}
                </span>
            </div>
        </div>
    );
}

