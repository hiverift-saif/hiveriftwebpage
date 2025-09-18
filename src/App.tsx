import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/pages/HomePage";
import { AboutPage } from "./components/pages/AboutPage";
import { ServicesPage } from "./components/pages/ServicesPage";
import { ServiceDetailPage } from "./components/pages/ServiceDetailPage";
import { TechnologiesPage } from "./components/pages/TechnologiesPage";
import { CareerPage } from "./components/pages/CareerPage";
import { ContactPage } from "./components/pages/ContactPage";
import { BookingPage } from "./components/pages/BookingPage";
import { IndustryPage } from "./components/pages/IndustryPage";
import { JobDetailPage } from "./components/pages/JobDetailPage";
import { PrivacyPolicyPage } from "./components/pages/PrivacyPolicyPage";
import { TermsConditionsPage } from "./components/pages/TermsConditionsPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    // Smooth scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    // Handle job detail pages
    if (currentPage.startsWith('job-')) {
      const jobId = currentPage.replace('job-', '');
      return <JobDetailPage jobId={jobId} onNavigate={handleNavigation} />;
    }

    // Handle service detail pages
    if (currentPage.startsWith('service-')) {
      const serviceId = currentPage.replace('service-', '');
      return <ServiceDetailPage serviceId={serviceId} onNavigate={handleNavigation} />;
    }

    // Handle industry pages
    if (currentPage.startsWith('industry-')) {
      let industryId = currentPage.replace('industry-', '');
      // Map route names to data keys
      const industryMapping: { [key: string]: string } = {
        'banking': 'banking',
        'capital-markets': 'capital-markets',
        'communications': 'communications',
        'consumer-goods': 'consumer-goods',
        'education': 'education',
        'energy': 'energy',
        'healthcare': 'healthcare',
        'high-tech': 'high-tech',
        'insurance': 'insurance',
        'life-sciences': 'life-sciences',
        'manufacturing': 'manufacturing',
        'public-services': 'public-services',
        'retail': 'retail',
        'travel': 'travel'
      };
      
      industryId = industryMapping[industryId] || industryId;
      return <IndustryPage industryId={industryId} onNavigate={handleNavigation} />;
    }

    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={handleNavigation} />;
      case "about":
        return <AboutPage />;
      case "services":
        return <ServicesPage onNavigate={handleNavigation} />;
      case "technologies":
        return <TechnologiesPage />;
      case "career":
        return <CareerPage onNavigate={handleNavigation} />;
      case "contact":
        return <ContactPage onNavigate={handleNavigation} />;
      case "booking":
        return <BookingPage onNavigate={handleNavigation} />;
      case "privacy-policy":
        return <PrivacyPolicyPage />;
      case "terms-conditions":
        return <TermsConditionsPage />;
      default:
        return <HomePage onNavigate={handleNavigation} />;
    }
  };

  const pageVariants = {
    initial: { 
      opacity: 0,
      y: 20,
      scale: 0.98
    },
    in: { 
      opacity: 1,
      y: 0,
      scale: 1
    },
    out: { 
      opacity: 0,
      y: -20,
      scale: 1.02
    }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.6
  };

  return (
    <div className="min-h-screen bg-black relative">
      {/* Enhanced Background Video with subtle overlay effects */}
      {currentPage === "home" && (
        <motion.div 
          className="fixed inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            {/* Primary: Modern business technology */}
            <source
              src="https://videos.pexels.com/video-files/3129957/3129957-uhd_3840_2160_25fps.mp4"
              type="video/mp4"
            />
            {/* Fallback: Digital innovation and data */}
            <source
              src="https://videos.pexels.com/video-files/3141211/3141211-uhd_3840_2160_25fps.mp4"
              type="video/mp4"
            />
            {/* Second fallback: Professional workspace technology */}
            <source
              src="https://videos.pexels.com/video-files/3209828/3209828-uhd_3840_2160_25fps.mp4"
              type="video/mp4"
            />
            {/* Third fallback: Abstract tech visualization */}
            <source
              src="https://videos.pexels.com/video-files/3045163/3045163-uhd_3840_2160_25fps.mp4"
              type="video/mp4"
            />
            {/* Fourth fallback: Business growth visualization */}
            <source
              src="https://videos.pexels.com/video-files/3130182/3130182-uhd_3840_2160_25fps.mp4"
              type="video/mp4"
            />
          </video>
          {/* Elegant gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80"></div>
          {/* Subtle animated vignette */}
          <motion.div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle, transparent 20%, rgba(0,0,0,0.4) 100%)'
            }}
            animate={{ 
              opacity: [0.3, 0.6, 0.3] 
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          ></motion.div>
        </motion.div>
      )}
      
      <div className="relative z-10">
        <Header currentPage={currentPage} onNavigate={handleNavigation} />
        
        <AnimatePresence mode="wait">
          <motion.main
            key={currentPage}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="relative"
          >
            {renderCurrentPage()}
          </motion.main>
        </AnimatePresence>
        
        <Footer onNavigate={handleNavigation} />
      </div>
      
      {/* Elegant floating elements for visual interest */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/3 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        />
      </div>
    </div>
  );
}