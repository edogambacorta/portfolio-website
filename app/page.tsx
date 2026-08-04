import Header from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { IntroLine } from "../components/IntroLine";
import { ProjectCards } from "../components/ProjectCards";
import { Timeline } from "../components/Timeline";
import { CTASection } from "../components/CTASection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-primary text-secondary">
      <Header />
      <main>
        <HeroSection />
        <IntroLine />
        <ProjectCards />
        <Timeline />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
