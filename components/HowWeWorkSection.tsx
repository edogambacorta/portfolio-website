"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    title: "Step 1 – Discover Your Vision",
    description: "We begin with a conversation that dives deep into your unique business challenges and aspirations. By truly understanding your current hurdles and future goals, we lay the foundation for a solution that speaks directly to your needs.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Step 2 – Craft Your Strategy",
    description: "Next, we translate your vision into a tailored plan. Merging creative insights with proven digital technologies, we design a seamless strategy that simplifies your operations and sets the stage for growth.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
  },
  {
    title: "Step 3 – Launch Advanced Solutions",
    description: "This is where your journey transforms into action. We implement a range of dynamic services—from chatbots and automated workflows to innovative video ads, AI training, and bespoke web applications. These solutions are built to deliver clear, measurable impact, empowering your business to thrive while you focus on what you do best.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
  }
];

const ContainerScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className="w-full max-w-4xl mx-auto"
    >
      {children}
    </motion.div>
  );
};

export function HowWeWorkSection() {
  return (
    <div className="bg-black text-white py-10">
      <h1 className="text-5xl md:text-7xl font-bold text-center mb-16 text-white">How We Work</h1>
      {steps.map((step, index) => (
        <div key={index} className="mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center text-white">
            {step.title}
          </h2>
          <ContainerScroll>
            <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden border-4 border-gray-800">
              <Image
                src={step.image}
                alt={`Step ${index + 1}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </ContainerScroll>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto mt-8 text-white">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );
}
