"use client";

import { FC, ReactNode, useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";

import { cn } from "../../lib/utils";

interface TextRevealByWordProps {
  text: string;
  className?: string;
  preHighlightedWords?: number;
  textAlign?: "left" | "center" | "right";
}

const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  className,
  preHighlightedWords = 0,
  textAlign = "left",
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 80%", "end 20%"],
  });

  const words = text.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0", className)}>
      <p className={`flex flex-wrap items-center ${textAlign === "center" ? "justify-center" : textAlign === "right" ? "justify-end" : "justify-start"}`}>
        {words.map((word, i) => (
          <Word 
            key={i} 
            progress={scrollYProgress} 
            range={[i / (words.length * 1.5), (i + 1) / (words.length * 1.5)]}
            isPreHighlighted={i < preHighlightedWords}
          >
            {word}
          </Word>
        ))}
      </p>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
  isPreHighlighted: boolean;
}

const Word: FC<WordProps> = ({ children, progress, range, isPreHighlighted }) => {
  const opacity = useTransform(progress, range, [0.3, 1]);
  return (
    <span className="relative mx-1 lg:mx-2.5">
      <motion.span
        style={{ opacity: isPreHighlighted ? 1 : opacity }}
        className={"text-black dark:text-white"}
      >
        {children}
      </motion.span>
    </span>
  );
};

export { TextRevealByWord };
