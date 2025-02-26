import React from 'react';
import { TextRevealByWord } from './ui/text-reveal';
import { Feature } from './ui/feature-with-image-carousel';

export const PhilosophySection: React.FC = () => {
  return (
    <section className="bg-white text-black w-full pt-24 md:pt-32 lg:pt-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <TextRevealByWord 
            text="The AI Revolution is here - we make sure you're always one step ahead." 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-center"
            preHighlightedWords={5}
          />
        </div>
        <Feature />
      </div>
    </section>
  );
};
