import { HeroSection } from "../HeroSection";
import { AboutSection } from "../AboutSection";
import { IndustriesSection } from "../IndustriesSection";
import { ServicesSection } from "../ServicesSection";
import { ProcessSection } from "../ProcessSection";
import { FAQSection } from "../FAQSection";
import { ContactSection } from "../ContactSection";
import { CareerSection } from "../CareerSection";
<<<<<<< HEAD
import { SEO } from "../SEO";
=======
>>>>>>> b28797d (addres changes)

interface HomePageProps {
  onNavigate?: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div>
<<<<<<< HEAD
      {/* ✅ SEO Meta Tags for Home Page */}
      <SEO
        title="Home | HiveRift Technologies"
        description="HiveRift Technologies offers cutting-edge IT solutions including web development, mobile apps, AI, cloud, and digital transformation services."
        keywords="HiveRift, IT services, web development, mobile apps, cloud computing, AI solutions"
        image="https://hiverift.com/logo.svg"
        url="https://hiverift.com/"
      />

=======
>>>>>>> b28797d (addres changes)
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
<<<<<<< HEAD
}
=======
}
>>>>>>> b28797d (addres changes)
