"use client";

import { FocusCards } from "@/components/ui/focus-cards";
import CenteredContainer from "./CenteredContainer";
import { MessageSquare, Brain, Video, Image, Users, Code } from 'lucide-react';

export function ServicesSection() {
  const services = [
    { 
      title: "RAG Workflows, Chatbots & Automations",
      description: "Placeholder description for RAG Workflows, Chatbots & Automations.",
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=3270&auto=format&fit=crop",
      icon: MessageSquare,
      slug: "rag-workflows-chatbots-automations"
    },
    { 
      title: "AI LoRa Training",
      description: "Placeholder description for AI LoRa Training.",
      src: "https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?q=80&w=3270&auto=format&fit=crop",
      icon: Brain,
      slug: "ai-lora-training"
    },
    { 
      title: "AI Video Ads",
      description: "Placeholder description for AI Video Ads.",
      src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=3270&auto=format&fit=crop",
      icon: Video,
      slug: "ai-video-ads"
    },
    { 
      title: "AI-Generated Images, SVGs & 3D Textures",
      description: "Placeholder description for AI-Generated Images, SVGs & 3D Textures.",
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=3270&auto=format&fit=crop",
      icon: Image,
      slug: "ai-generated-images-svgs-3d-textures"
    },
    { 
      title: "Virtual AI Influencers",
      description: "Placeholder description for Virtual AI Influencers.",
      src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=3270&auto=format&fit=crop",
      icon: Users,
      slug: "virtual-ai-influencers"
    },
    { 
      title: "Bespoke Web Applications",
      description: "Placeholder description for Bespoke Web Applications.",
      src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=3270&auto=format&fit=crop",
      icon: Code,
      slug: "bespoke-web-applications"
    }
  ];

  return (
    <section id="services" className="py-16 bg-primary text-secondary">
      <CenteredContainer>
        <h2 className="text-4xl font-bold mb-12 text-center text-accent">Our Services</h2>
        <FocusCards cards={services.map(service => ({
          ...service,
          href: `/services/${service.slug}`
        }))} />
      </CenteredContainer>
    </section>
  );
}
