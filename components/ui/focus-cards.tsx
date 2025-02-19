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
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
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
      <div className="absolute top-4 left-4 text-white">
        <card.icon size={24} />
      </div>
      <div
        className={cn(
          "absolute text-white text-xl md:text-2xl font-medium transition-all duration-300",
          hovered === index ? "top-12 left-4" : "bottom-4 left-4"
        )}
      >
        {card.title}
      </div>
      <div
        className={cn(
          "absolute bottom-4 left-4 right-4 text-white text-sm md:text-base transition-all duration-300 opacity-0",
          hovered === index && "animate-fadeInDelayed"
        )}
      >
        {card.description}
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
