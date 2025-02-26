"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[60rem] md:h-[80rem] flex items-center justify-center relative"
      ref={containerRef}
    >
      <div className="w-full relative" style={{ perspective: "1000px" }}>
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

const Header = ({ translate, titleComponent }: { translate: MotionValue<number>; titleComponent: React.ReactNode }) => {
  return (
    <motion.div
      style={{ translateY: translate }}
      className="text-center mb-8"
    >
      {titleComponent}
    </motion.div>
  );
};

const Card = ({ rotate, scale, children }: { rotate: MotionValue<number>; scale: MotionValue<number>; children: React.ReactNode }) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
      }}
      className="w-full max-w-5xl mx-auto h-[30rem] md:h-[40rem] bg-[#222222] rounded-[30px] p-4 shadow-2xl"
    >
      {children}
    </motion.div>
  );
};
