import { motion } from "motion/react";
import { Button } from "../../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
import { Shield, Code, Users, Headphones, Lightbulb, Lock, Zap, Handshake } from "lucide-react";
import { useNavigate } from "react-router-dom";


interface BankingPageProps {
  onNavigate?: (page: string) => void;
}


export function BankingPage({ onNavigate }: BankingPageProps) {
  const navigate = useNavigate();
  const whyChooseUs = [
    {
      icon: <Code className="h-8 w-8 text-blue-400" />,
      title: "Tailored IT Solutions",
      description: "Flexible, bank-ready software solutions designed specifically for financial institutions."
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-400" />,
      title: "Security & Compliance",
      description: "Adhering to RBI, GDPR, PCI-DSS and other banking regulations with robust security measures."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-400" />,
      title: "Customer-Centric",
      description: "Enhance customer experience with intuitive digital banking solutions and services."
    },
    {
      icon: <Headphones className="h-8 w-8 text-blue-400" />,
      title: "End-to-End Support",
      description: "From development to maintenance, we provide comprehensive support for all your IT needs."
    }
  ];

  const services = [
    {
      title: "Custom Software Development",
      description: "Core banking solutions tailored to your needs",
      features: ["Core banking mini-modules", "Loan/credit management", "CRM solutions"]
    },
    {
      title: "Mobile & Web App Development",
      description: "Secure digital banking experiences",
      features: ["Secure mobile banking apps", "e-KYC portals", "Chatbots"]
    },
    {
      title: "Cybersecurity & Compliance",
      description: "Protecting your financial infrastructure",
      features: ["Security audits & testing", "Data encryption", "Regulatory compliance"]
    },
    {
      title: "Automation & Workflow Solutions",
      description: "Streamline banking operations",
      features: ["RPA for KYC, approvals", "Automated dashboards", "Process optimization"]
    },
    {
      title: "Data Analytics & AI",
      description: "Intelligent banking insights",
      features: ["Fraud detection", "Spending insights", "Loan prediction"]
    },
    {
      title: "Cloud & Infrastructure",
      description: "Modern banking infrastructure",
      features: ["Cloud migration", "IT infra support", "Disaster recovery"]
    },
    {
      title: "Digital Experience Enhancements",
      description: "Next-generation banking experiences",
      features: ["Self-service portals", "Secure payment systems", "UI/UX modernization"]
    },
    {
      title: "24/7 IT Support",
      description: "Round-the-clock technical assistance",
      features: ["Monitoring & troubleshooting", "Helpdesk support", "Regular updates"]
    }
  ];

  const advantages = [
    {
      icon: <Lightbulb className="h-8 w-8 text-blue-400" />,
      title: "Innovation First",
      description: "Modern, scalable solutions that drive banking forward."
    },
    {
      icon: <Lock className="h-8 w-8 text-blue-400" />,
      title: "Security Assured",
      description: "Banking-grade compliance and security standards."
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-400" />,
      title: "Agility",
      description: "Faster delivery than large vendors with personalized service."
    },
    {
      icon: <Handshake className="h-8 w-8 text-blue-400" />,
      title: "Partnership Approach",
      description: "We act as your IT extension, not just a vendor."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-white">Banking Transformed with</span>
                <br />
                <span className="gradient-text">Smart IT Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                HiveRift helps banks deliver secure, customer-friendly, and future-ready digital services that transform the banking experience.
              </p>
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                onClick={() => navigate("/services")}
              >
                Explore Our Services
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5raW5nJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTc5NjAxNjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Banking technology and digital transformation"
                className="rounded-lg shadow-elegant w-full h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Banks Choose HiveRift */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Why Banks Choose HiveRift
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 h-full hover:bg-gray-800/70 hover:border-blue-400/30 transition-colors">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-blue-600/20 rounded-lg group-hover:bg-blue-600/30 transition-colors">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Banking IT Services */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our Banking IT Services
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-800/50 border-gray-700 h-full hover:bg-gray-800/70 hover:border-blue-400/30 transition-colors group">
                  <CardHeader>
                    <CardTitle className="text-white group-hover:text-blue-100 transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-300 flex items-center">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The HiveRift Advantage */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              The HiveRift Advantage
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-6 bg-gray-800/50 border border-gray-700 rounded-lg hover:bg-gray-800/70 hover:border-blue-400/30 transition-colors group"
              >
                <div className="flex-shrink-0 p-2 bg-blue-600/20 rounded-lg group-hover:bg-blue-600/30 transition-colors">
                  {advantage.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-100 transition-colors">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-300">{advantage.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-blue-800/20 relative overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5raW5nJTIwdGlnaXRhbCUyMHRyYW5zZm9ybWF0aW9ufGVufDF8fHx8MTc1Nzk2MDE2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Banking digital transformation background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Transform Your Banking Experience?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let HiveRift empower your bank with secure, future-ready IT solutions that drive growth and enhance customer satisfaction.
            </p>
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              onClick={() => onNavigate?.('contact')}
            >
              Talk to Our Experts
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}