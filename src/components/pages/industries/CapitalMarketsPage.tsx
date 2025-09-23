import { motion } from "motion/react";
import { Button } from "../../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
import { TrendingUp, Shield, BarChart3, Zap, Lightbulb, Lock, Activity, Handshake } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CapitalMarketsPageProps {
  onNavigate?: (page: string) => void;
}

export function CapitalMarketsPage({ onNavigate }: CapitalMarketsPageProps) {
   const navigate = useNavigate();
  const whyChooseUs = [
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-400" />,
      title: "High Performance",
      description: "Scalable, low-latency platforms for trading & analysis that handle peak market volumes."
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-400" />,
      title: "Security First",
      description: "Protecting sensitive financial data with global compliance and advanced security measures."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-blue-400" />,
      title: "Data-Driven Insights",
      description: "AI and analytics for smarter investment decisions and market predictions."
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-400" />,
      title: "Agile Delivery",
      description: "Rapid deployment and continuous support for fast-moving markets."
    }
  ];

  const services = [
    {
      title: "Trading & Investment Platforms",
      description: "Professional trading solutions",
      features: ["Custom-built trading portals & dashboards", "Algorithmic & high-frequency trading support", "Secure online brokerage solutions"]
    },
    {
      title: "Risk & Compliance Management",
      description: "Comprehensive risk oversight",
      features: ["Automated compliance monitoring (SEBI, MiFID II, Basel)", "Real-time risk analytics", "Fraud detection & anti-money laundering (AML) systems"]
    },
    {
      title: "Data Analytics & AI",
      description: "Intelligent market insights",
      features: ["Predictive models for market trends", "Portfolio optimization using AI-driven insights", "Client behavior analysis for targeted advisory"]
    },
    {
      title: "Digital Experience Platforms",
      description: "Client-focused solutions",
      features: ["Investor self-service portals", "Mobile apps for trading & portfolio tracking", "Secure payment & settlement integration"]
    },
    {
      title: "Automation & Workflow Solutions",
      description: "Streamlined operations",
      features: ["RPA for trade settlements & reconciliations", "Smart contract integration using blockchain", "Automated reporting & regulatory filings"]
    },
    {
      title: "Cloud & Infrastructure Services",
      description: "Scalable technology foundation",
      features: ["Cloud migration for trading environments", "Scalable infrastructure to handle peak trades", "Disaster recovery & business continuity planning"]
    },
    {
      title: "Cybersecurity Solutions",
      description: "Advanced protection systems",
      features: ["Threat monitoring & penetration testing", "Data encryption & transaction security", "Identity & access management"]
    },
    {
      title: "24/7 Support & Maintenance",
      description: "Continuous market support",
      features: ["Round-the-clock monitoring", "Proactive bug fixes & performance optimization", "Helpdesk & technical support"]
    }
  ];

  const advantages = [
    {
      icon: <Lightbulb className="h-8 w-8 text-blue-400" />,
      title: "Innovation at Core",
      description: "From AI-driven insights to blockchain solutions, we lead with innovation."
    },
    {
      icon: <Lock className="h-8 w-8 text-blue-400" />,
      title: "Compliance-Ready",
      description: "Built to meet financial regulations and industry standards globally."
    },
    {
      icon: <Activity className="h-8 w-8 text-blue-400" />,
      title: "Performance Engineered",
      description: "Optimized for speed & scale to handle high-frequency trading demands."
    },
    {
      icon: <Handshake className="h-8 w-8 text-blue-400" />,
      title: "Your Growth Partner",
      description: "Focused on long-term client success in volatile markets."
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
                <span className="text-white">📈 Powering Capital Markets with</span>
                <br />
                <span className="gradient-text">Technology That Builds Trust</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                In today's fast-paced financial world, speed, security, and accuracy define success. HiveRift delivers cutting-edge IT solutions that help capital market firms trade smarter, manage risks effectively, and deliver exceptional client experiences.
              </p>
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
        onClick={() => navigate("/services")}

              >
                👉 Explore Our Solutions
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXBpdGFsJTIwbWFya2V0cyUyMHRyYWRpbmd8ZW58MXx8fHwxNzU3OTYwMjI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Capital markets trading technology"
                className="rounded-lg shadow-elegant w-full h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Capital Market Leaders Choose HiveRift */}
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
              Why Capital Market Leaders Choose HiveRift
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

      {/* Our Capital Markets IT Services */}
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
              Our Capital Markets IT Services
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
            src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1Nzk2MDIyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Financial technology trading background"
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
              Ready to Trade Smarter and Faster?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              HiveRift helps capital market leaders build secure, scalable, and future-ready platforms for growth in competitive markets.
            </p>
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              onClick={() => onNavigate?.('/contact')}
            >
              📩 Talk to Our Experts
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}