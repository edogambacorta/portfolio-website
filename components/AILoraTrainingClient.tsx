'use client';

import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { DollarSign, Zap, Rocket, LucideIcon } from 'lucide-react';
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { FocusCards } from "@/components/ui/focus-cards";
import { CaseStudySection } from "@/components/CaseStudySection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { FAQSection } from "@/components/FAQSection";

const AILoraBackgroundAnimation = dynamic(() => import("@/components/ui/ai-lora-background-animation").then(mod => mod.AILoraBackgroundAnimation), { ssr: false, loading: () => <div>Loading...</div> });
const Spotlight = dynamic(() => import("@/components/ui/spotlight").then(mod => mod.Spotlight), { ssr: false, loading: () => <div>Loading...</div> });
const AnimatedSection = dynamic(() => import("@/components/AnimatedSection"), { ssr: false, loading: () => <div>Loading...</div> });

const iconMap: { [key: string]: LucideIcon } = {
  'dollar-sign': DollarSign,
  'zap': Zap,
  'rocket': Rocket,
};

interface AILoraTrainingClientProps {
  benefits: Array<{
    title: string;
    description: string;
    icon: string;
    src: string;
    href: string;
  }>;
}

export default function AILoraTrainingClient({ benefits }: AILoraTrainingClientProps) {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = React.useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  }, []);

  return (
    <AILoraBackgroundAnimation>
      <div className="min-h-screen w-full" onMouseMove={handleMouseMove}>
        <Spotlight
          className="absolute inset-0 z-10"
          size={350}
          mousePosition={mousePosition}
        />
        
        {/* Hero Section */}
        <AnimatedSection>
          <div className="relative z-10 py-16 px-4 md:px-8">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-center text-white font-sans">
              Unlock the Power of Custom AI Models with Lora Training
            </h1>
            
            <p className="text-xl mb-12 text-center text-gray-300 font-sans">
              Harness the potential of AI Lora (Low-Rank Adaptation) training to create highly customized AI models tailored to your specific business needs. Lora training allows for efficient fine-tuning of large AI models with minimal resources, delivering powerful results without the complexity of training from scratch.
            </p>
          </div>
        </AnimatedSection>

        {/* Benefits Section */}
        <AnimatedSection id="benefits">
          <div className="py-16 bg-black w-full">
            <h2 className="text-3xl font-semibold mb-8 text-center text-white font-sans">Benefits for Business Owners</h2>
            <FocusCards 
              cards={benefits.map(benefit => ({
                ...benefit,
                icon: iconMap[benefit.icon] || DollarSign,
                image: <img src={benefit.src} alt={benefit.title} className="w-full h-48 object-cover" />
              }))}
            />
          </div>
        </AnimatedSection>

        {/* Case Study Section */}
        <AnimatedSection id="case-study">
          <CaseStudySection
            title="AI-Powered Customer Service Transformation"
            description="A leading e-commerce company implemented AI Lora Training to enhance their customer service chatbot. The result was a highly personalized and efficient customer support system that could handle complex queries with human-like understanding."
            metrics={[
              { label: "Reduction in Response Time", value: "60%" },
              { label: "Increase in Customer Satisfaction", value: "35%" },
              { label: "Cost Savings", value: "$2M/year" },
              { label: "Successful Query Resolution", value: "95%" }
            ]}
            imageUrl="/images/ai-customer-service.jpg"
            imageAlt="AI-powered customer service chatbot interface showcasing personalized responses"
          />
        </AnimatedSection>

        {/* How It Works Section */}
        <AnimatedSection id="how-it-works">
          <HowItWorksSection />
        </AnimatedSection>

        {/* FAQ Section */}
        <AnimatedSection id="faq">
          <FAQSection />
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection>
          <div className="py-16 bg-black w-full">
            <h2 className="text-3xl font-semibold mb-8 text-center text-white font-sans">Ready to Get Started?</h2>
            <div className="text-center">
              <ShimmerButton
                onClick={() => window.location.href = '/contact'}
                className="text-white font-semibold text-lg inline-block px-8 py-3 bg-orange-600 hover:bg-orange-700 transition-colors duration-300"
                shimmerColor="rgba(255, 255, 255, 0.2)"
                shimmerDuration="2s"
                aria-label="Explore AI Lora Training for Your Business"
              >
                Explore AI Lora Training for Your Business
              </ShimmerButton>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </AILoraBackgroundAnimation>
  );
}
