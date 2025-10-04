import { Separator } from "./ui/separator";
import { Phone, Mail, MapPin } from "lucide-react";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const services = [
<<<<<<< HEAD
    { name: "Custom Website Design & Development", page: "/services" },
    { name: "Mobile App Development", page: "/services" },
    { name: "MVP Development & Testing", page: "/services" },
    { name: "UI/UX Design & Prototyping", page: "/services" },
    { name: "Brand Identity Design", page: "/services" },
    { name: "Blockchain Solutions", page: "/services" },
    { name: "E-commerce Development", page: "/services" },
    { name: "API Development & Integration", page: "/services" },
    { name: "Digital Marketing", page: "/services" },
    { name: "SEO & Content Marketing", page: "/services" },
    { name: "Email Marketing Automation", page: "/services" },
    { name: "Landing Page Design", page: "/services" },
    { name: "Mobile App UI Design", page: "/services" },
    { name: "Cloud Migration Services", page: "/services" },
    { name: "DevOps & Automation", page: "/services" },
    { name: "Database Management", page: "/services" },
    { name: "Business Analytics & Reporting", page: "/services" },
    { name: "Operations Consultancy", page: "/services" },
    { name: "Virtual Assistant Services", page: "/services" },
    { name: "Maintenance & Support", page: "/services" }
  ];

  const industries = [
    { name: "Banking & Financial Services", page: "/industry/banking" },
    { name: "Capital Markets", page: "/industry/capital-markets" },
    { name: "Healthcare & Life Sciences", page: "/industry/healthcare" },
    { name: "Education & E-Learning", page: "/industry/education" },
    { name: "Energy & Utilities", page: "/industry/energy" },
    { name: "Communications & Media", page: "/industry/communications" },
    { name: "Consumer Goods", page: "/industry/consumer-goods" },
    { name: "Manufacturing", page: "/industry/manufacturing" },
    { name: "Retail & E-commerce", page: "/industry/retail" },
    { name: "Travel & Hospitality", page: "/industry/travel" },
    { name: "Insurance", page: "/industry/insurance" },
    { name: "High-Tech", page: "/industry/high-tech" },
    { name: "Life Sciences", page: "/industry/life-sciences" },
    { name: "Public Services", page: "/industry/public-services" }
  ];

  const quickLinks = [
    { name: "Home", page: "/" },
    { name: "About Us", page: "/about" },
    { name: "All Services", page: "/services" },
    { name: "Technologies", page: "/technologies" },
    { name: "Career", page: "/career" },
    { name: "Contact Us", page: "/contact" },
    { name: "Book Consultation", page: "/booking" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", page: "/privacy-policy" },
    { name: "Terms & Conditions", page: "/terms-conditions" }
=======
    { name: "Custom Website Design & Development", page: "service-web-development" },
    { name: "Mobile App Development", page: "service-mobile-app-development" },
    { name: "MVP Development & Testing", page: "service-mvp-development" },
    { name: "UI/UX Design & Prototyping", page: "service-ui-ux-design" },
    { name: "Brand Identity Design", page: "service-brand-identity-design" },
    { name: "Blockchain Solutions", page: "service-blockchain-solutions" },
    { name: "E-commerce Development", page: "service-ecommerce-development" },
    { name: "API Development & Integration", page: "service-api-development" },
    { name: "Digital Marketing", page: "service-digital-marketing" },
    { name: "SEO & Content Marketing", page: "service-seo-content-marketing" },
    { name: "Email Marketing Automation", page: "service-email-marketing" },
    { name: "Landing Page Design", page: "service-landing-page-design" },
    { name: "Mobile App UI Design", page: "service-mobile-app-ui-design" },
    { name: "Cloud Migration Services", page: "service-cloud-migration" },
    { name: "DevOps & Automation", page: "service-devops-automation" },
    { name: "Database Management", page: "service-database-management" },
    { name: "Business Analytics & Reporting", page: "service-business-analytics" },
    { name: "Operations Consultancy", page: "service-operations-consultancy" },
    { name: "Virtual Assistant Services", page: "service-virtual-assistant" },
    { name: "Maintenance & Support", page: "service-maintenance-support" }
  ];

  const industries = [
    { name: "Banking & Financial Services", page: "industry-banking" },
    { name: "Capital Markets", page: "industry-capital-markets" },
    { name: "Healthcare & Life Sciences", page: "industry-healthcare" },
    { name: "Education & E-Learning", page: "industry-education" },
    { name: "Energy & Utilities", page: "industry-energy" },
    { name: "Communications & Media", page: "industry-communications" },
    { name: "Consumer Goods", page: "industry-consumer-goods" },
    { name: "Manufacturing", page: "industry-manufacturing" },
    { name: "Retail & E-commerce", page: "industry-retail" },
    { name: "Travel & Hospitality", page: "industry-travel" },
    { name: "Insurance", page: "industry-insurance" },
    { name: "High-Tech", page: "industry-high-tech" },
    { name: "Life Sciences", page: "industry-life-sciences" },
    { name: "Public Services", page: "industry-public-services" }
  ];

  const quickLinks = [
    { name: "Home", page: "home" },
    { name: "About Us", page: "about" },
    { name: "All Services", page: "services" },
    { name: "Technologies", page: "technologies" },
    { name: "Career", page: "career" },
    { name: "Contact Us", page: "contact" },
    { name: "Book Consultation", page: "booking" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", page: "privacy-policy" },
    { name: "Terms & Conditions", page: "terms-conditions" }
>>>>>>> b28797d (addres changes)
  ];

  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <button 
<<<<<<< HEAD
              onClick={() => onNavigate("/")}
=======
              onClick={() => onNavigate("home")}
>>>>>>> b28797d (addres changes)
              className="text-2xl font-bold hover:opacity-80 transition-opacity"
            >
              HiveRift
            </button>
            <p className="text-gray-300 text-sm">
              Transforming business challenges into growth opportunities with our 3T Pillar - Talent, Tailored, Trust.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-white" />
                <span>info@hiverift.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-white" />
                <span>+91-88-1493-0229</span>
              </div>
<<<<<<< HEAD
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-white" />
                <span>New Delhi, New Rohtak Rd, Ratan Nagar, Karol Bagh, Delhi, 110005</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Our Services</h4>
            <ul className="space-y-2 max-h-80 overflow-y-auto">
              {services.map((service, i) => (
                <li key={i}>
=======
              <div className="flex items-center gap-2 text-sm mb-10">
                <MapPin className="h-8 w-8 text-white" />
                <span>New Delhi, New Rohtak Rd, Ratan Nagar, Karol Bagh New Delhi, Delhi, 110005</span>
              </div>

 <div className="flex items-center gap-2 text-sm ">

                <MapPin className="h-4 w-4 text-white "  />

              
                <span>265 Freure drive Cambridge <br /> ON N1S 0C1</span>
              </div>

            </div>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Our Services</h4>
            <ul className="space-y-2 max-h-80 overflow-y-auto">
              {services.map((service, index) => (
                <li key={index}>
>>>>>>> b28797d (addres changes)
                  <button 
                    onClick={() => onNavigate(service.page)}
                    className="text-sm text-gray-300 hover:text-white transition-colors text-left block"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

<<<<<<< HEAD
          {/* Industries */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Industries We Serve</h4>
            <ul className="space-y-2 max-h-80 overflow-y-auto">
              {industries.map((industry, i) => (
                <li key={i}>
=======
          {/* Industries We Serve */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Industries We Serve</h4>
            <ul className="space-y-2 max-h-80 overflow-y-auto">
              {industries.map((industry, index) => (
                <li key={index}>
>>>>>>> b28797d (addres changes)
                  <button 
                    onClick={() => onNavigate(industry.page)}
                    className="text-sm text-gray-300 hover:text-white transition-colors text-left block"
                  >
                    {industry.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
<<<<<<< HEAD
              {quickLinks.map((link, i) => (
                <li key={i}>
=======
              {quickLinks.map((link, index) => (
                <li key={index}>
>>>>>>> b28797d (addres changes)
                  <button 
                    onClick={() => onNavigate(link.page)}
                    className="text-sm text-gray-300 hover:text-white transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Legal & Support</h4>
            <ul className="space-y-2 mb-6">
<<<<<<< HEAD
              {legalLinks.map((link, i) => (
                <li key={i}>
=======
              {legalLinks.map((link, index) => (
                <li key={index}>
>>>>>>> b28797d (addres changes)
                  <button 
                    onClick={() => onNavigate(link.page)}
                    className="text-sm text-gray-300 hover:text-white transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
<<<<<<< HEAD
            <div>
              <h5 className="font-semibold mb-2 text-white text-sm">Contact Support</h5>
              <div className="space-y-1 text-sm text-gray-300">
                <div>Support: support@hiverift.com</div>
                <div>Legal: legal@hiverift.com</div>
                <div>Privacy: privacy@hiverift.com</div>
                <div>Business: business@hiverift.com</div>
=======
            
            <div>
              <h5 className="font-semibold mb-2 text-white text-sm">Contact Support</h5>
              <div className="space-y-1">
                <div className="text-sm text-gray-300">
                  Support: support@hiverift.com
                </div>
                <div className="text-sm text-gray-300">
                  Legal: legal@hiverift.com
                </div>
                <div className="text-sm text-gray-300">
                  Privacy: privacy@hiverift.com
                </div>
                <div className="text-sm text-gray-300">
                  Business: business@hiverift.com
                </div>
>>>>>>> b28797d (addres changes)
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
          <div className="text-center md:text-left mb-4 md:mb-0">
            © 2025 HiveRift | All Rights Reserved
          </div>
          <div className="flex flex-wrap gap-4 text-center">
<<<<<<< HEAD
            <button onClick={() => onNavigate("/privacy-policy")} className="hover:text-white transition-colors">Privacy Policy</button>
            <span className="text-gray-500">|</span>
            <button onClick={() => onNavigate("/terms-conditions")} className="hover:text-white transition-colors">Terms & Conditions</button>
=======
            <button 
              onClick={() => onNavigate("privacy-policy")}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <span className="text-gray-500">|</span>
            <button 
              onClick={() => onNavigate("terms-conditions")}
              className="hover:text-white transition-colors"
            >
              Terms & Conditions
            </button>
>>>>>>> b28797d (addres changes)
            <span className="text-gray-500">|</span>
            <span>www.hiverift.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> b28797d (addres changes)
