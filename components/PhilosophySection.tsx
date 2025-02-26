import React from 'react';
import { TextRevealByWord } from './ui/text-reveal';
import { Feature } from './ui/feature-with-image-carousel';

export const PhilosophySection: React.FC = () => {
  return (
    <section className="bg-white text-black w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <TextRevealByWord 
            text="The AI Revolution is here - we make sure you're always one step ahead." 
            className="text-4xl lg:text-6xl font-bold text-center"
            preHighlightedWords={5}
          />
        </div>
        <Feature />
      </div>
    </section>
  );
};
