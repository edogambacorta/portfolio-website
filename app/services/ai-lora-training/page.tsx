import type { Metadata } from 'next';
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import AILoraTrainingClient from '@/components/AILoraTrainingClient';

export const metadata: Metadata = {
  title: 'AI Lora Training | TheFactory AI Agency',
  description: 'Unlock the power of custom AI models with Lora Training. Efficient fine-tuning of large AI models tailored to your specific business needs.',
  keywords: 'AI, Lora Training, Custom AI Models, Machine Learning, Business AI Solutions',
};

export default function AILoraTraining() {
  const benefits = [
    { 
      title: "Cost-Effective Customization",
      description: "Reduce computational cost and time for adapting AI models, making custom AI accessible to all businesses.",
      icon: "dollar-sign",
      src: "/images/cost-effective.jpg",
      href: "#cost-effective"
    },
    { 
      title: "Improved Model Performance",
      description: "Fine-tune pre-trained AI models on your specific data for superior performance in target applications.",
      icon: "zap",
      src: "/images/improved-performance.jpg",
      href: "#improved-performance"
    },
    { 
      title: "Faster Deployment",
      description: "Quickly deploy customized AI models into your workflows, accelerating your time to market.",
      icon: "rocket",
      src: "/images/faster-deployment.jpg",
      href: "#faster-deployment"
    }
  ];

  return (
    <>
      <Header />
      <AILoraTrainingClient benefits={benefits} />
      <Footer />
    </>
  );
}
