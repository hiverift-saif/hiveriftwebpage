"use client";

import { Button } from "./ui/button";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.svg";

interface HeaderProps {}

export function Header({}: HeaderProps) {
  const location = useLocation();
  const currentPath = location.pathname;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navigationItems = [
    { name: "Home", page: "/" },
    { name: "About Us", page: "/about" },
    { name: "Our Services", page: "/services", hasDropdown: true },
    { name: "Industries", page: "/industries", hasDropdown: true },
    { name: "Technologies", page: "/technologies" },
    { name: "Career", page: "/career" },
    { name: "Contact Us", page: "/contact" },
  ];

  const services = [
    { name: "Web Development", id: "web-development" },
    { name: "Mobile App Development", id: "mobile-app-development" },
    { name: "MVP Development", id: "mvp-development" },
    { name: "Blockchain Solutions", id: "blockchain-solutions" },
    { name: "E-commerce Development", id: "ecommerce-development" },
    { name: "API Development", id: "api-development" },
    { name: "UI/UX Design", id: "ui-ux-design" },
    { name: "Brand Identity Design", id: "brand-identity-design" },
    { name: "Mobile App UI Design", id: "mobile-app-ui-design" },
    { name: "Landing Page Design", id: "landing-page-design" },
    { name: "Digital Marketing", id: "digital-marketing" },
    { name: "SEO & Content Marketing", id: "seo-content-marketing" },
    { name: "Operations Consultancy", id: "operations-consultancy" },
    { name: "Virtual Assistant", id: "virtual-assistant" },
    { name: "Email Marketing", id: "email-marketing" },
    { name: "Business Analytics", id: "business-analytics" },
    { name: "Cloud Migration", id: "cloud-migration" },
    { name: "DevOps & Automation", id: "devops-automation" },
    { name: "Database Management", id: "database-management" },
    { name: "Maintenance & Support", id: "maintenance-support" },
  ];

  const industries = [
    { name: "Banking", id: "banking" },
    { name: "Capital Markets", id: "capital-markets" },
    { name: "Communications & Media", id: "communications" },
    { name: "Consumer Goods & Distribution", id: "consumer-goods" },
    { name: "Education", id: "education" },
    { name: "Energy & Utilities", id: "energy" },
    { name: "Healthcare", id: "healthcare" },
    { name: "High Tech", id: "high-tech" },
    { name: "Insurance", id: "insurance" },
    { name: "Life Sciences", id: "life-sciences" },
    { name: "Manufacturing", id: "manufacturing" },
    { name: "Public Services", id: "public-services" },
    { name: "Retail", id: "retail" },
    { name: "Travel & Logistics", id: "travel" },
  ];

  const isActive = (path: string) => {
    if (path === "/services")
      return currentPath.startsWith("/service") || currentPath === "/services";
    if (path === "/industries")
      return (
        currentPath.startsWith("/industry") || currentPath === "/industries"
      );
    return currentPath === path;
  };

  return (
    <motion.header
      className="sticky top-0 z-50 w-full bg-black/95 backdrop-blur-xl supports-[backdrop-filter]:bg-black/90 border-b border-white/10 "
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="flex items-center space-x-2 "
          >
            <img src={Logo} alt="HiveRift Logo" className="h-9 w-6 m-auto" />
            <Link
              to="/"
              className="text-2xl font-bold text-white hover:text-gray-300 transition-all duration-300"
            >
              iveRift
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 ">
            {navigationItems.map((item) => (
              <div key={item.page} className="relative">
                {item.hasDropdown ? (
                  <div
                    onMouseEnter={() => {
                      if (item.page === "/industries")
                        setIsIndustriesOpen(true);
                      else if (item.page === "/services")
                        setIsServicesOpen(true);
                    }}
                    onMouseLeave={() => {
                      if (item.page === "/industries")
                        setIsIndustriesOpen(false);
                      else if (item.page === "/services")
                        setIsServicesOpen(false);
                    }}
                  >
                    <motion.button
                      className={`relative px-4 py-2 rounded-lg flex items-center gap-1 transition-all duration-300 ${
                        isActive(item.page)
                          ? "text-white"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {item.name}
                      <motion.div
                        animate={{
                          rotate: (
                            item.page === "/industries"
                              ? isIndustriesOpen
                              : isServicesOpen
                          )
                            ? 180
                            : 0,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </motion.div>
                    </motion.button>

                    {/* Dropdown */}
                    <AnimatePresence>
                      {item.page === "/industries" && isIndustriesOpen && (
                        <motion.div
                          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[800px] max-w-4xl bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl p-6"
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        >
                          <div className="grid grid-cols-2 gap-3">
                            {industries.map((industry) => (
                              <Link
                                key={industry.id}
                                to={`/industry/${industry.id}`}
                                className="flex items-center gap-3 p-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                              >
                                <ChevronRight className="h-4 w-4" />
                                {industry.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                      {item.page === "/services" && isServicesOpen && (
                        <motion.div
                          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[900px] max-w-5xl bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl p-6"
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        >
                          <div className="grid grid-cols-3 gap-3">
                            {services.map((service) => (
                              <Link
                                key={service.id}
                                to={`/service/${service.id}`}
                                className="flex items-center gap-3 p-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                              >
                                <ChevronRight className="h-4 w-4" />
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.page}
                    className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                      isActive(item.page)
                        ? "text-white bg-white/10 border border-white/20"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-white to-gray-200 text-black hover:from-gray-200 hover:to-white font-medium px-6 py-2 shadow-lg transition-all duration-300">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:bg-white/10 p-2"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </AnimatePresence>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="md:hidden py-4 border-t border-white/10 flex flex-col space-y-2"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navigationItems.map((item) => (
                <div key={item.page}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => {
                          if (item.page === "/industries")
                            setIsIndustriesOpen(!isIndustriesOpen);
                          else if (item.page === "/services")
                            setIsServicesOpen(!isServicesOpen);
                        }}
                        className={`text-left px-4 py-3 rounded-lg w-full flex items-center justify-between transition-all duration-300 ${
                          isActive(item.page)
                            ? "text-white bg-white/10 border border-white/20"
                            : "text-gray-300 hover:text-white hover:bg-white/10"
                        }`}
                      >
                        {item.name}
                        <ChevronDown className="h-4 w-4" />
                      </button>

                      {/* Mobile Dropdown */}
                      <AnimatePresence>
                        {item.page === "/industries" && isIndustriesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-4 mt-2 flex flex-col gap-1"
                          >
                            {industries.map((industry) => (
                              <Link
                                key={industry.id}
                                to={`/industry/${industry.id}`}
                                className="px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
                              >
                                {industry.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                        {item.page === "/services" && isServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-4 mt-2 flex flex-col gap-1"
                          >
                            {services.map((service) => (
                              <Link
                                key={service.id}
                                to={`/service/${service.id}`}
                                className="px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
                              >
                                {service.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.page}
                      className={`text-left px-4 py-3 rounded-lg w-full transition-all duration-300 ${
                        isActive(item.page)
                          ? "text-white bg-white/10 border border-white/20"
                          : "text-gray-300 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link to="/contact" className="px-4 py-3">
                <Button className="bg-gradient-to-r from-white to-gray-200 text-black hover:from-gray-200 hover:to-white w-full font-medium">
                  Get Started
                </Button>
              </Link>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
