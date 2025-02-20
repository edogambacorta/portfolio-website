import React from 'react';
import { FeatureSteps } from './ui/feature-steps';

const features = [
  {
    step: 'Step 1',
    title: 'Innovative Solutions',
    content: 'We craft cutting-edge digital experiences that push the boundaries of creativity and technology.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop'
  },
  {
    step: 'Step 2',
    title: 'Strategic Approach',
    content: 'Our team develops tailored strategies to meet your unique business goals and challenges.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop'
  },
  {
    step: 'Step 3',
    title: 'Impactful Results',
    content: 'We deliver measurable outcomes that drive growth and elevate your brand in the digital landscape.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'
  }
];

export function IntroductionSection() {
  return (
    <section className="bg-background text-foreground py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 font-sans">Our Approach</h2>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto font-sans">
          At our core, we're driven by innovation, strategy, and results. Our unique approach combines cutting-edge technology with creative thinking to deliver exceptional digital solutions.
        </p>
        <FeatureSteps
          features={features}
          title="How We Work"
          autoPlayInterval={5000}
        />
      </div>
    </section>
  );
}
