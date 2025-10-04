<<<<<<< HEAD
"use client";

=======
>>>>>>> b28797d (addres changes)
import { Button } from "./ui/button";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
<<<<<<< HEAD
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.svg";

interface HeaderProps {}

export function Header({}: HeaderProps) {
  const location = useLocation();
  const currentPath = location.pathname;

=======

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
>>>>>>> b28797d (addres changes)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navigationItems = [
<<<<<<< HEAD
    { name: "Home", page: "/" },
    { name: "About Us", page: "/about" },
    { name: "Our Services", page: "/services", hasDropdown: true },
    { name: "Industries", page: "/industries", hasDropdown: true },
    { name: "Technologies", page: "/technologies" },
    { name: "Career", page: "/career" },
    { name: "Contact Us", page: "/contact" },
=======
    { name: "Home", page: "home" },
    { name: "About Us", page: "about" },
    { name: "Our Services", page: "services", hasDropdown: true },
    { name: "Industries", page: "industries", hasDropdown: true },
    { name: "Technologies", page: "technologies" },
    { name: "Career", page: "career" },
    { name: "Contact Us", page: "contact" }
>>>>>>> b28797d (addres changes)
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
<<<<<<< HEAD
    { name: "Maintenance & Support", id: "maintenance-support" },
=======
    { name: "Maintenance & Support", id: "maintenance-support" }
>>>>>>> b28797d (addres changes)
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
<<<<<<< HEAD
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
=======
    { name: "Travel & Logistics", id: "travel" }
  ];

  const handleNavigation = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
    setIsIndustriesOpen(false);
    setIsServicesOpen(false);
  };

  const handleIndustryClick = (industryId: string) => {
    handleNavigation(`industry-${industryId}`);
  };

  const handleServiceClick = (serviceId: string) => {
    handleNavigation(`service-${serviceId}`);
  };

  return (
    <motion.header 
      className="sticky top-0 z-50 w-full bg-black/95 backdrop-blur-xl supports-[backdrop-filter]:bg-black/90 border-b border-white/10"
>>>>>>> b28797d (addres changes)
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
<<<<<<< HEAD
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
=======
          {/* Logo with elegant animation */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <button 
              onClick={() => handleNavigation("home")}
              className="text-2xl font-bold text-white hover:text-gray-300 transition-all duration-300 relative"
            >
              <motion.span
                className="relative z-10"
                whileHover={{ 
                  textShadow: "0 0 20px rgba(255,255,255,0.5)" 
                }}
              >
                HiveRift
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-white/20 rounded-lg -z-10 opacity-0"
                whileHover={{ opacity: 1, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              />
            </button>
          </motion.div>

          {/* Desktop Navigation with enhanced animations */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item, index) => (
              <motion.div
                key={item.page}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative"
              >
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => {
                      if (item.page === 'industries') {
                        setIsIndustriesOpen(true);
                      } else if (item.page === 'services') {
                        setIsServicesOpen(true);
                      }
                    }}
                    onMouseLeave={() => {
                      if (item.page === 'industries') {
                        setIsIndustriesOpen(false);
                      } else if (item.page === 'services') {
                        setIsServicesOpen(false);
                      }
                    }}
                  >
                    <motion.button
                      className={`relative px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 rounded-lg flex items-center gap-1 ${
                        (item.page === 'industries' && currentPage.startsWith('industry-')) ||
                        (item.page === 'services' && (currentPage === 'services' || currentPage.startsWith('service-')))
                          ? 'text-white' : ''
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative z-10">{item.name}</span>
                      <motion.div
                        animate={{ 
                          rotate: (item.page === 'industries' && isIndustriesOpen) || 
                                 (item.page === 'services' && isServicesOpen) ? 180 : 0 
>>>>>>> b28797d (addres changes)
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </motion.div>
<<<<<<< HEAD
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
=======
                      
                      {/* Active indicator */}
                      {((item.page === 'industries' && currentPage.startsWith('industry-')) ||
                        (item.page === 'services' && (currentPage === 'services' || currentPage.startsWith('service-')))) && (
                        <motion.div
                          className="absolute inset-0 bg-white/10 rounded-lg border border-white/20"
                          layoutId="activeTab"
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                      
                      {/* Hover effect */}
                      <motion.div
                        className="absolute inset-0 bg-white/5 rounded-lg opacity-0"
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    </motion.button>

                    {/* Industries Dropdown */}
                    {item.page === 'industries' && (
                      <AnimatePresence>
                        {isIndustriesOpen && (
                          <motion.div
                            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[800px] max-w-4xl"
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl p-6">
                              <div className="grid grid-cols-2 gap-3">
                                {industries.map((industry, idx) => (
                                  <motion.button
                                    key={industry.id}
                                    onClick={() => handleIndustryClick(industry.id)}
                                    className="flex items-center gap-3 p-3 rounded-lg text-left text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 group"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.03, duration: 0.2 }}
                                    whileHover={{ x: 5, scale: 1.02 }}
                                  >
                                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                                    <span className="text-sm font-medium">{industry.name}</span>
                                  </motion.button>
                                ))}
                              </div>
                              <div className="mt-4 pt-4 border-t border-white/10">
                                <p className="text-xs text-gray-400 text-center">
                                  Explore our industry-specific IT solutions
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}

                    {/* Services Dropdown */}
                    {item.page === 'services' && (
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[900px] max-w-5xl"
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl p-6">
                              <div className="grid grid-cols-3 gap-3">
                                {services.map((service, idx) => (
                                  <motion.button
                                    key={service.id}
                                    onClick={() => handleServiceClick(service.id)}
                                    className="flex items-center gap-3 p-3 rounded-lg text-left text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 group"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.03, duration: 0.2 }}
                                    whileHover={{ x: 5, scale: 1.02 }}
                                  >
                                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                                    <span className="text-sm font-medium">{service.name}</span>
                                  </motion.button>
                                ))}
                              </div>
                              <div className="mt-4 pt-4 border-t border-white/10">
                                <p className="text-xs text-gray-400 text-center">
                                  Discover our comprehensive digital solutions
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ) : (
                  <motion.button
                    onClick={() => handleNavigation(item.page)}
                    className={`relative px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 rounded-lg ${
                      currentPage === item.page ? 'text-white' : ''
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">{item.name}</span>
                    
                    {/* Active indicator */}
                    {currentPage === item.page && (
                      <motion.div
                        className="absolute inset-0 bg-white/10 rounded-lg border border-white/20"
                        layoutId="activeTab"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                    
                    {/* Hover effect */}
                    <motion.div
                      className="absolute inset-0 bg-white/5 rounded-lg opacity-0"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.button>
                )}
              </motion.div>
            ))}
          </nav>

          {/* CTA Button with enhanced styling */}
          <div className="hidden md:flex">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button 
                onClick={() => handleNavigation("contact")}
                className="bg-gradient-to-r from-white to-gray-200 text-black hover:from-gray-200 hover:to-white font-medium px-6 py-2 shadow-lg hover:shadow-white/20 transition-all duration-300"
              >
                Get Started
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button with smooth icon transition */}
          <div className="md:hidden">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/10 p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-5 w-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-5 w-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Navigation with elegant slide animation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden py-4 border-t border-white/10"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <nav className="flex flex-col space-y-2">
                {navigationItems.map((item, index) => {
                  if (item.hasDropdown) {
                    return (
                      <div key={item.page}>
                        <motion.button
                          onClick={() => {
                            if (item.page === 'industries') {
                              setIsIndustriesOpen(!isIndustriesOpen);
                            } else if (item.page === 'services') {
                              setIsServicesOpen(!isServicesOpen);
                            }
                          }}
                          className="text-left px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 w-full flex items-center justify-between"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.3 }}
                          whileHover={{ x: 5 }}
                        >
                          <span>{item.name}</span>
                          <motion.div
                            animate={{ 
                              rotate: (item.page === 'industries' && isIndustriesOpen) || 
                                     (item.page === 'services' && isServicesOpen) ? 180 : 0 
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown className="h-4 w-4" />
                          </motion.div>
                        </motion.button>
                        
                        {/* Industries Mobile Dropdown */}
                        {item.page === 'industries' && (
                          <AnimatePresence>
                            {isIndustriesOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="ml-4 mt-2"
                              >
                                {industries.map((industry, idx) => (
                                  <motion.button
                                    key={industry.id}
                                    onClick={() => handleIndustryClick(industry.id)}
                                    className="flex items-center gap-3 p-3 rounded-lg text-left text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 group w-full"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.03, duration: 0.2 }}
                                    whileHover={{ x: 5, scale: 1.02 }}
                                  >
                                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                                    <span className="text-sm font-medium">{industry.name}</span>
                                  </motion.button>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        )}

                        {/* Services Mobile Dropdown */}
                        {item.page === 'services' && (
                          <AnimatePresence>
                            {isServicesOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="ml-4 mt-2"
                              >
                                {services.map((service, idx) => (
                                  <motion.button
                                    key={service.id}
                                    onClick={() => handleServiceClick(service.id)}
                                    className="flex items-center gap-3 p-3 rounded-lg text-left text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 group w-full"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.03, duration: 0.2 }}
                                    whileHover={{ x: 5, scale: 1.02 }}
                                  >
                                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                                    <span className="text-sm font-medium">{service.name}</span>
                                  </motion.button>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        )}
                      </div>
                    );
                  }
                  
                  return (
                    <motion.button
                      key={item.page}
                      onClick={() => handleNavigation(item.page)}
                      className={`text-left px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 ${
                        currentPage === item.page ? 'text-white bg-white/10 border border-white/20' : ''
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      whileHover={{ x: 5 }}
                    >
                      {item.name}
                    </motion.button>
                  );
                })}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  className="pt-4"
                >
                  <Button 
                    onClick={() => handleNavigation("contact")}
                    className="bg-gradient-to-r from-white to-gray-200 text-black hover:from-gray-200 hover:to-white w-full font-medium"
                  >
                    Get Started
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
>>>>>>> b28797d (addres changes)
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> b28797d (addres changes)
