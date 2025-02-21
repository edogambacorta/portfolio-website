import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Database, Cpu, Rocket } from 'lucide-react';

interface Step {
  icon: React.ElementType;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: Settings,
    title: "Model Selection",
    description: "Choose a pre-trained AI model as the foundation for your custom solution."
  },
  {
    icon: Database,
    title: "Data Preparation",
    description: "Curate and preprocess your specific dataset to fine-tune the model."
  },
  {
    icon: Cpu,
    title: "Lora Training",
    description: "Apply Low-Rank Adaptation to efficiently customize the model to your needs."
  },
  {
    icon: Rocket,
    title: "Deployment",
    description: "Integrate the fine-tuned model into your existing workflows and systems."
  }
];

export const HowItWorksSection: React.FC = () => {
  return (
    <div className="py-16 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-12 text-center text-white font-sans">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white bg-opacity-5 p-6 rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-orange-600 rounded-full mb-4 mx-auto">
                <step.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white text-center">{step.title}</h3>
              <p className="text-gray-400 text-center">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
