// App.tsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { HelmetProvider } from "react-helmet-async";

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
import { NotFoundPage } from "./components/pages/NotFoundPage";

// ---------------- Scroll To Top ----------------
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

// ---------------- Wrappers for dynamic routes ----------------
function ServiceDetailWrapper() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  return <ServiceDetailPage serviceId={serviceId!} onNavigate={navigate} />;
}

function JobDetailWrapper() {
  const { jobId } = useParams();
  const navigate = useNavigate();
  return <JobDetailPage jobId={jobId!} onNavigate={navigate} />;
}

// ---------------- Industry Wrapper with subpath support ----------------
function IndustryWrapper() {
  const { industryId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const industryMapping: { [key: string]: string } = {
    banking: "banking",
    "capital-markets": "capital-markets",
    communications: "communications",
    "consumer-goods": "consumer-goods",
    education: "education",
    energy: "energy",
    healthcare: "healthcare",
    "high-tech": "high-tech",
    insurance: "insurance",
    "life-sciences": "life-sciences",
    manufacturing: "manufacturing",
    "public-services": "public-services",
    retail: "retail",
    travel: "travel",
  };

  const industryKey = industryMapping[industryId!] || industryId!;

  // Subpath after /industry/:id/
  const subPath = location.pathname.split("/").slice(3).join("/");

  if (subPath === "services") {
    return <ServicesPage onNavigate={navigate} />;
  }

  return <IndustryPage industryId={industryKey} onNavigate={navigate} />;
}

// ---------------- Main App Content ----------------
function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();

  const pageVariants = {
    initial: { opacity: 0, y: 20, scale: 0.98 },
    in: { opacity: 1, y: 0, scale: 1 },
    out: { opacity: 0, y: -20, scale: 1.02 },
  };

  const pageTransition = { type: "tween", ease: "anticipate", duration: 0.6 };

  return (
    <div className="relative min-h-screen bg-black">
      <ScrollToTop />

      {/* Home Page Background Video */}
      {(location.pathname === "/" || location.pathname === "") && (
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
            <source
              src="https://videos.pexels.com/video-files/3129957/3129957-uhd_3840_2160_25fps.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80"></div>
        </motion.div>
      )}

      {/* Page Content */}
      <div className="relative z-10 min-h-screen">
        <Header
          currentPage={location.pathname}
          onNavigate={(path) => navigate(path)}
        />

        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <motion.main
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <HomePage onNavigate={(path) => navigate(path)} />
                </motion.main>
              }
            />
            <Route
              path="/about"
              element={
                <motion.main
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <AboutPage onNavigate={navigate} />
                </motion.main>
              }
            />
            <Route
              path="/services"
              element={
                <motion.main
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <ServicesPage onNavigate={navigate} />
                </motion.main>
              }
            />
            <Route
              path="/service/:serviceId"
              element={
                <motion.main
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <ServiceDetailWrapper />
                </motion.main>
              }
            />
            <Route
              path="/technologies"
              element={
                <motion.main
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <TechnologiesPage onNavigate={navigate} />
                </motion.main>
              }
            />
            <Route
              path="/career"
              element={
                <motion.main
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <CareerPage onNavigate={navigate} />
                </motion.main>
              }
            />
            <Route
              path="/job/:jobId"
              element={
                <motion.main
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <JobDetailWrapper />
                </motion.main>
              }
            />
            <Route
              path="/contact"
              element={
                <motion.main
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <ContactPage onNavigate={navigate} />
                </motion.main>
              }
            />
            <Route
              path="/booking"
              element={
                <motion.main
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <BookingPage onNavigate={navigate} />
                </motion.main>
              }
            />
            <Route
              path="/industry/:industryId/*"
              element={
                <motion.main
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <IndustryWrapper />
                </motion.main>
              }
            />
            <Route
              path="/privacy-policy"
              element={
                <motion.main
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <PrivacyPolicyPage onNavigate={navigate} />
                </motion.main>
              }
            />
            <Route
              path="/terms-conditions"
              element={
                <motion.main
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <TermsConditionsPage onNavigate={navigate} />
                </motion.main>
              }
            />
            <Route
              path="*"
              element={
                <motion.main
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <NotFoundPage />
                </motion.main>
              }
            />
          </Routes>
        </AnimatePresence>

        <Footer onNavigate={(path) => navigate(path)} />
      </div>
    </div>
  );
}

// ---------------- App Wrapper ----------------
export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}
