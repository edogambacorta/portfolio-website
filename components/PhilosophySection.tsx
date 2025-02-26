import React from 'react';
import { TextRevealByWord } from './ui/text-reveal';

export const PhilosophySection: React.FC = () => {
  return (
    <section className="bg-white text-black w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TextRevealByWord 
          text="The AI Revolution is here - we make sure you're always one step ahead." 
          className="flex items-center justify-center text-4xl lg:text-6xl font-bold"
          preHighlightedWords={5}
        />
      </div>
    </section>
  );
};
