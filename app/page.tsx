import { HeroSection } from "../components/HeroSection";

import { ServicesSection } from "../components/ServicesSection";

import { PortfolioSection } from "../components/PortfolioSection";

import { InsightsSection } from "../components/InsightsSection";

import { AboutUsSection } from "../components/AboutUsSection";

import { ContactSection } from "../components/ContactSection";

import { Footer } from "../components/Footer";

import { ServiceCard } from "../components/ServiceCard";

import { CTAButton } from "../components/CTAButton";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <InsightsSection />
      <AboutUsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
