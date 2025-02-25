"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { LucideIcon, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from "framer-motion";
import { BackgroundGradientAnimation } from "./background-gradient-animation";

type Card = {
  title: string;
  src: string;
  icon: LucideIcon;
  description: string;
  href: string;
};

const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
    enableAnimation,
  }: {
    card: Card;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    enableAnimation: boolean;
  }) => (
    <Link href={card.href} passHref>
      <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "rounded-lg relative overflow-hidden h-60 md:h-96 w-full transition-all duration-500 ease-in-out flex flex-col cursor-pointer",
          hovered === index && "outline outline-2 outline-accent scale-105 z-10",
          hovered !== null && hovered !== index && "blur-sm scale-95"
        )}
      >
        <Image
          src={card.src}
          alt={card.title}
          fill
          className="object-cover absolute inset-0 transition-opacity duration-300"
        />
        {hovered === index && (
          <BackgroundGradientAnimation
            interactive={true}
            size="200%"
            containerClassName="absolute inset-0"
            className="transition-opacity duration-300"
          />
        )}
        <div className="relative z-10 p-4 flex flex-col h-full">
          <div className="text-white">
            <card.icon size={24} />
          </div>
          <div
            className={cn(
              "text-white text-xl md:text-2xl font-medium transition-all duration-300 ease-in-out absolute left-4",
              hovered === index
                ? "top-12"
                : "bottom-4"
            )}
          >
            {card.title}
          </div>
          <div
            className={cn(
              "text-white text-sm md:text-base transition-all duration-300 ease-in-out absolute left-4 bottom-4 pr-12",
              hovered === index
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            )}
          >
            {card.description}
          </div>
          <div
            className={cn(
              "absolute bottom-4 right-4 bg-gray-800 rounded-full p-2 transition-opacity duration-300",
              hovered === index ? "opacity-100" : "opacity-0"
            )}
          >
            <ArrowUpRight className="text-white" size={24} />
          </div>
        </div>
      </div>
    </Link>
  )
);

Card.displayName = "Card";

export function FocusCards({ cards, enableAnimation = true }: { cards: Card[], enableAnimation?: boolean }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
          enableAnimation={enableAnimation}
        />
      ))}
    </div>
  );
}
