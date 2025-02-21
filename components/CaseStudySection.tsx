import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

interface CaseStudyProps {
  title: string;
  description: string;
  metrics: { label: string; value: string }[];
  imageUrl: string;
  imageAlt: string;
}

export const CaseStudySection: React.FC<CaseStudyProps> = ({ title, description, metrics, imageUrl, imageAlt }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div className="relative overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <Image src={imageUrl} alt={imageAlt} layout="fill" objectFit="cover" />
      </motion.div>
      <div className="relative z-10 bg-black bg-opacity-70 text-white p-8 md:p-16">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">{title}</h3>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <p className="text-lg mb-6">{description}</p>
              <div className="grid grid-cols-2 gap-4">
                {metrics.map((metric, index) => (
                  <div key={index} className="bg-white bg-opacity-10 p-4 rounded-lg">
                    <p className="text-2xl font-bold text-orange-500">{metric.value}</p>
                    <p className="text-sm text-gray-300">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 relative h-64 md:h-auto">
              <Image src={imageUrl} alt={imageAlt} layout="fill" objectFit="cover" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
