"use client";

import { FC, ReactNode, useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";

import { cn } from "../../lib/utils";

interface TextRevealByWordProps {
  text: string;
  className?: string;
  preHighlightedWords?: number;
}

const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  className,
  preHighlightedWords = 0,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const words = text.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0", className)}>
      <p className="flex flex-wrap p-5 text-2xl font-bold md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl">
        {words.map((word, i) => (
          <Word 
            key={i} 
            progress={scrollYProgress} 
            range={[i / words.length, (i + 1) / words.length]}
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
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-2.5">
      <span className={"absolute opacity-30"}>{children}</span>
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
