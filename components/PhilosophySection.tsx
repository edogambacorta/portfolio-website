import React from 'react';
import { TextRevealByWord } from './ui/text-reveal';

export const PhilosophySection: React.FC = () => {
  return (
    <section className="bg-white text-black w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <TextRevealByWord 
          text="The AI Revolution is here - we make sure you're always one step ahead." 
          className="text-4xl lg:text-6xl font-bold text-center mt-2"
          preHighlightedWords={5}
        />
      </div>
    </section>
  );
};
