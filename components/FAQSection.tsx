import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is AI Lora Training?",
    answer: "AI Lora Training, or Low-Rank Adaptation training, is a technique for efficiently fine-tuning large language models. It allows for customization of AI models with minimal computational resources, making it accessible for businesses of all sizes."
  },
  {
    question: "How does Lora Training differ from traditional fine-tuning?",
    answer: "Lora Training is more efficient and cost-effective than traditional fine-tuning. It adapts only a small subset of the model's parameters, resulting in faster training times, lower computational costs, and reduced memory requirements."
  },
  {
    question: "What are the benefits of using AI Lora Training for my business?",
    answer: "AI Lora Training offers several benefits, including cost-effective customization of AI models, improved model performance for specific tasks, faster deployment times, and the ability to maintain the core strengths of the base model while adding specialized expertise."
  },
  {
    question: "How long does the AI Lora Training process typically take?",
    answer: "The duration of AI Lora Training can vary depending on the complexity of the task and the size of your dataset. However, it's generally much faster than traditional fine-tuning, often taking hours or days instead of weeks or months."
  },
  {
    question: "Can Lora Training be applied to any AI model?",
    answer: "While Lora Training is particularly effective for large language models, it can be applied to various types of neural networks. However, its effectiveness may vary depending on the specific architecture and task."
  }
];

const FAQItem: React.FC<{ item: FAQItem; isOpen: boolean; toggleOpen: () => void; index: number }> = ({ item, isOpen, toggleOpen, index }) => {
  return (
    <div className="border-b border-gray-700">
      <button
        className="flex justify-between items-center w-full py-4 text-left text-white focus:outline-none focus:ring-2 focus:ring-orange-500 rounded"
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <span className="text-lg font-semibold">{item.question}</span>
        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key={`faq-answer-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p id={`faq-answer-${index}`} className="py-4 text-gray-300">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-12 text-center text-white font-sans">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              item={faq}
              isOpen={openIndex === index}
              toggleOpen={() => toggleOpen(index)}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
