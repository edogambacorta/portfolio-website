import { Layout, Pointer, Zap } from "lucide-react";
import { Feature108 } from "@/components/blocks/shadcnblocks-com-feature108";

const howWeWorkData = {
  badge: "Our Process",
  heading: "How We Work",
  description: "Discover our streamlined approach to delivering exceptional results.",
  tabs: [
    {
      value: "tab-1",
      icon: <Zap className="h-auto w-4 shrink-0" />,
      label: "Discover Your Vision",
      content: {
        badge: "Step 1",
        title: "Uncover Your Unique Needs",
        description: "We begin with a deep dive into your business challenges and aspirations. By understanding your current hurdles and future goals, we lay the foundation for a solution that speaks directly to your needs.",
        buttonText: "Learn More",
        imageSrc: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
        imageAlt: "Discover Your Vision",
      },
    },
    {
      value: "tab-2",
      icon: <Pointer className="h-auto w-4 shrink-0" />,
      label: "Craft Your Strategy",
      content: {
        badge: "Step 2",
        title: "Tailor Your Growth Plan",
        description: "We translate your vision into a tailored plan. Merging creative insights with proven digital technologies, we design a seamless strategy that simplifies your operations and sets the stage for growth.",
        buttonText: "Explore Strategy",
        imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        imageAlt: "Craft Your Strategy",
      },
    },
    {
      value: "tab-3",
      icon: <Layout className="h-auto w-4 shrink-0" />,
      label: "Launch Solutions",
      content: {
        badge: "Step 3",
        title: "Implement Advanced Technologies",
        description: "Your journey transforms into action. We implement dynamic services—from chatbots and automated workflows to innovative video ads, AI training, and bespoke web applications. These solutions deliver clear, measurable impact.",
        buttonText: "See Solutions",
        imageSrc: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
        imageAlt: "Launch Solutions",
      },
    },
  ],
};

export function HowWeWorkSection() {
  return <Feature108 {...howWeWorkData} />;
}
