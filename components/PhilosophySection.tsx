import React from 'react';
import { TextRevealByWord } from './ui/text-reveal';
import { Feature } from './ui/feature-with-image-carousel';
import CenteredContainer from './CenteredContainer';

export const PhilosophySection: React.FC = () => {
  return (
<section className="bg-white text-black w-full pt-12 md:pt-16 lg:pt-20">
  <CenteredContainer>
    <div className="py-2">
          <TextRevealByWord 
            text="The AI Revolution is here  We make sure you're always one step ahead." 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold"
            preHighlightedWords={5}
            textAlign="left"
          />
          <Feature />
        </div>
      </CenteredContainer>
    </section>
  );
};
