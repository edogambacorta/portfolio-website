"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from 'lucide-react';

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: Card;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-500 ease-in-out flex flex-col",
        hovered === index && "outline outline-2 outline-accent scale-105 z-10",
        hovered !== null && hovered !== index && "blur-sm scale-95"
      )}
    >
      <Image
        src={card.src}
        alt={card.title}
        fill
        className="object-cover absolute inset-0"
      />
      <div className="relative z-10 p-4 flex flex-col h-full">
        <div className="flex items-start mb-2">
          <div className="text-white mr-2">
            <card.icon size={24} />
          </div>
          <div
            className={cn(
              "text-white text-xl md:text-2xl font-medium transition-all duration-500 ease-in-out",
              hovered === index
                ? "animate-headerMoveUp"
                : "opacity-0"
            )}
          >
            {card.title}
          </div>
        </div>
        <div className="mt-auto">
          <div
            className={cn(
              "text-white text-xl md:text-2xl font-medium transition-all duration-500 ease-in-out",
              hovered === index
                ? "opacity-0"
                : "opacity-100"
            )}
          >
            {card.title}
          </div>
          <div
            className={cn(
              "text-white text-sm md:text-base transition-opacity duration-500 ease-in-out",
              hovered === index ? "animate-subheaderFadeIn" : "opacity-0 pointer-events-none"
            )}
          >
            {card.description}
          </div>
        </div>
      </div>
    </div>
  )
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
  icon: LucideIcon;
  description: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
