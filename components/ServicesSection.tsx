"use client";

import { ServiceCard } from "./ServiceCard";

export function ServicesSection() {
  const services = [
    { 
      title: "RAG Workflows, Chatbots & Automations",
      description: "Placeholder description for RAG Workflows, Chatbots & Automations. This is a more detailed description of the service."
    },
    { 
      title: "AI LoRa Training",
      description: "Placeholder description for AI LoRa Training. This is a more detailed description of the service."
    },
    { 
      title: "AI Video Ads",
      description: "Placeholder description for AI Video Ads. This is a more detailed description of the service."
    },
    { 
      title: "AI-Generated Images, SVGs & 3D Textures",
      description: "Placeholder description for AI-Generated Images, SVGs & 3D Textures. This is a more detailed description of the service."
    },
    { 
      title: "Virtual AI Influencers",
      description: "Placeholder description for Virtual AI Influencers. This is a more detailed description of the service."
    },
    { 
      title: "Bespoke Web Applications",
      description: "Placeholder description for Bespoke Web Applications. This is a more detailed description of the service."
    }
  ];

  return (
    <section id="services" className="py-16 px-8 bg-gray-900">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
}
