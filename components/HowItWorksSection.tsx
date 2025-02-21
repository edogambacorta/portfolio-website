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
    <div className="py-16 bg-gray-900 overflow-hidden">
      <h2 className="text-3xl font-semibold mb-8 text-center text-white font-sans">How It Works</h2>
      <div className="flex overflow-x-auto pb-8 hide-scrollbar">
        <div className="flex space-x-8 px-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-64 bg-gray-800 p-6 rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full mb-4">
                <step.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
