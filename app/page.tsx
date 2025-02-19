import Header from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { IntroductionSection } from "../components/IntroductionSection";
import { ServicesSection } from "../components/ServicesSection";
import { PortfolioSection } from "../components/PortfolioSection";
import { InsightsSection } from "../components/InsightsSection";
import { AboutUsSection } from "../components/AboutUsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-primary text-secondary">
      <Header />
      <main>
        <HeroSection />
        <IntroductionSection />
        <ServicesSection />
        <PortfolioSection />
        <InsightsSection />
        <AboutUsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
