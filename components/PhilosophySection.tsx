import React from 'react';
import { TextRevealByWord } from './ui/text-reveal';
import { Feature } from './ui/feature-with-image-carousel';
import CenteredContainer from './CenteredContainer';

export const PhilosophySection: React.FC = () => {
  return (
<section className="bg-white text-black w-full pt-16 md:pt-20 lg:pt-24 pb-8 md:pb-12 lg:pb-16">
  <CenteredContainer>
    <div className="flex flex-col items-start gap-3">
      <div className="py-2">
        <TextRevealByWord 
          text="The AI Revolution is here  We make sure you're always one step ahead." 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 md:mb-12 lg:mb-16"
          preHighlightedWords={5}
          textAlign="left"
        />
        <Feature />
      </div>
    </div>
  </CenteredContainer>
</section>
  );
};
