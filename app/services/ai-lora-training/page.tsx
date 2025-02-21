"use client";

import React, { useState, useCallback, useRef } from 'react';
import Image from 'next/image';
import { HeroBackgroundAnimation } from "@/components/ui/hero-background-animation";
import { Spotlight } from "@/components/ui/spotlight";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import CenteredContainer from "@/components/CenteredContainer";
import { FocusCards } from "@/components/ui/focus-cards";
import { CaseStudySection } from "@/components/CaseStudySection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { FAQSection } from "@/components/FAQSection";
import { DollarSign, Zap, Rocket } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { FloatingNavBar } from "@/components/FloatingNavBar";
import { ThemeToggle } from "@/components/ThemeToggle";
import BackgroundAnimation from "@/components/BackgroundAnimation";

const AnimatedSection: React.FC<{ children: React.ReactNode; id?: string }> = ({ children, id }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

import Head from 'next/head';

export default function AILoraTraining() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  }, []);

  const benefits = [
    { 
      title: "Cost-Effective Customization",
      description: "Reduce computational cost and time for adapting AI models, making custom AI accessible to all businesses.",
      icon: DollarSign,
      src: "/images/cost-effective.jpg",
      href: "#cost-effective"
    },
    { 
      title: "Improved Model Performance",
      description: "Fine-tune pre-trained AI models on your specific data for superior performance in target applications.",
      icon: Zap,
      src: "/images/improved-performance.jpg",
      href: "#improved-performance"
    },
    { 
      title: "Faster Deployment",
      description: "Quickly deploy customized AI models into your workflows, accelerating your time to market.",
      icon: Rocket,
      src: "/images/faster-deployment.jpg",
      href: "#faster-deployment"
    }
  ];

  return (
    <>
      <Head>
        <title>AI Lora Training | TheFactory AI Agency</title>
        <meta name="description" content="Unlock the power of custom AI models with Lora Training. Efficient fine-tuning of large AI models tailored to your specific business needs." />
        <meta name="keywords" content="AI, Lora Training, Custom AI Models, Machine Learning, Business AI Solutions" />
      </Head>
      <FloatingNavBar aria-label="Main Navigation" />
      <ThemeToggle aria-label="Toggle Dark Mode" />
      <BackgroundAnimation aria-hidden="true" />
      <HeroBackgroundAnimation
        gradientBackgroundStart="rgb(0, 0, 0)"
        gradientBackgroundEnd="rgb(0, 0, 0)"
        firstColor="255, 102, 0"
        secondColor="255, 153, 0"
        thirdColor="255, 204, 0"
        fourthColor="255, 102, 0"
        fifthColor="255, 153, 0"
        className="relative w-full overflow-hidden"
      >
        <div className="relative w-full" onMouseMove={handleMouseMove}>
          <Spotlight
            className="absolute inset-0"
            size={350}
            mousePosition={mousePosition}
          />
          
          {/* Hero Section */}
          <AnimatedSection>
            <CenteredContainer className="relative z-10 py-16">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-center text-white font-sans">
                Unlock the Power of Custom AI Models with Lora Training
              </h1>
              
              <p className="text-xl mb-12 text-center text-gray-300 font-sans">
                Harness the potential of AI Lora (Low-Rank Adaptation) training to create highly customized AI models tailored to your specific business needs. Lora training allows for efficient fine-tuning of large AI models with minimal resources, delivering powerful results without the complexity of training from scratch.
              </p>
            </CenteredContainer>
          </AnimatedSection>

          {/* Benefits Section */}
          <AnimatedSection id="benefits">
            <CenteredContainer className="py-16 bg-gray-900">
              <h2 className="text-3xl font-semibold mb-8 text-center text-white font-sans">Benefits for Business Owners</h2>
              <FocusCards 
                cards={benefits.map(benefit => ({
                  ...benefit,
                  image: <LazyImage src={benefit.src} alt={benefit.title} className="w-full h-48 object-cover rounded-t-lg" />
                }))}
              />
            </CenteredContainer>
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
            <CenteredContainer className="py-16 bg-gradient-to-r from-orange-600 to-red-600">
              <h2 className="text-3xl font-semibold mb-8 text-center text-white font-sans">Ready to Get Started?</h2>
              <div className="text-center">
                <ShimmerButton
                  onClick={() => window.location.href = '/contact'}
                  className="text-black font-semibold text-lg"
                  shimmerColor="rgba(255, 255, 255, 0.4)"
                  shimmerDuration="2s"
                  aria-label="Explore AI Lora Training for Your Business"
                >
                  Explore AI Lora Training for Your Business
                </ShimmerButton>
              </div>
            </CenteredContainer>
          </AnimatedSection>
        </div>
      </HeroBackgroundAnimation>
    </>
  );
}

// Helper component for lazy-loaded images
const LazyImage: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={500}
      height={300}
      className={className}
      loading="lazy"
    />
  );
};
