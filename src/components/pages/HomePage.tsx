import { HeroSection } from "../HeroSection";
import { AboutSection } from "../AboutSection";
import { IndustriesSection } from "../IndustriesSection";
import { ServicesSection } from "../ServicesSection";
import { ProcessSection } from "../ProcessSection";
import { FAQSection } from "../FAQSection";
import { ContactSection } from "../ContactSection";
import { CareerSection } from "../CareerSection";

interface HomePageProps {
  onNavigate?: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div>
      <HeroSection onNavigate={onNavigate} />
      <AboutSection onNavigate={onNavigate} />
      <IndustriesSection onNavigate={onNavigate} />
      <ServicesSection onNavigate={onNavigate} />
      <ProcessSection />
      <FAQSection />
      <ContactSection />
      {onNavigate && <CareerSection onNavigate={onNavigate} />}
    </div>
  );
}