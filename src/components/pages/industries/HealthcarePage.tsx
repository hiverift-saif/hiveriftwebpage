import { motion } from "motion/react";
import { Button } from "../../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
import { Heart, Shield, Activity, Zap, Lightbulb, Lock, Users, Handshake } from "lucide-react";
import { useNavigate } from "react-router-dom";


interface HealthcarePageProps {
  onNavigate?: (page: string) => void;
}

export function HealthcarePage({ onNavigate }: HealthcarePageProps) {
  const navigate = useNavigate();
  const whyChooseUs = [
    {
      icon: <Heart className="h-8 w-8 text-blue-400" />,
      title: "Patient-Centered Care",
      description: "Digital platforms that put patients first and improve healthcare outcomes."
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-400" />,
      title: "Secure & Compliant",
      description: "HIPAA, GDPR, and healthcare data protection with advanced security measures."
    },
    {
      icon: <Activity className="h-8 w-8 text-blue-400" />,
      title: "Data-Driven Decisions",
      description: "AI and analytics for better patient outcomes and operational efficiency."
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-400" />,
      title: "Operational Efficiency",
      description: "Automating workflows and reducing costs while improving care quality."
    }
  ];

  const services = [
    {
      title: "Hospital & Clinic Management Systems",
      description: "Comprehensive healthcare management",
      features: ["Electronic Health Records (EHR) & EMR solutions", "Patient registration & appointment scheduling", "Billing & insurance management"]
    },
    {
      title: "Telemedicine & Remote Care Platforms",
      description: "Remote healthcare delivery",
      features: ["Secure video consultation apps", "Digital prescription & e-pharmacy integration", "Remote patient monitoring tools"]
    },
    {
      title: "Mobile Health (mHealth) Apps",
      description: "Healthcare in your pocket",
      features: ["Fitness & wellness tracking apps", "Patient self-service apps for reports & history", "Push notifications for reminders & follow-ups"]
    },
    {
      title: "Data Analytics & AI in Healthcare",
      description: "Intelligent healthcare insights",
      features: ["Predictive diagnosis & treatment recommendations", "Population health analytics", "Fraud detection in claims & billing"]
    },
    {
      title: "Automation & Workflow Solutions",
      description: "Streamlined healthcare operations",
      features: ["RPA for patient onboarding, claims, and lab reports", "Automated scheduling & notifications", "Paperless workflow for hospital administration"]
    },
    {
      title: "Cloud & Infrastructure Services",
      description: "Scalable healthcare technology",
      features: ["Cloud hosting for EHR & medical imaging data", "Secure storage for sensitive patient information", "Disaster recovery & backup planning"]
    },
    {
      title: "Cybersecurity & Compliance",
      description: "Healthcare-grade security",
      features: ["End-to-end data encryption", "HIPAA, GDPR, and healthcare regulation compliance", "Threat detection & real-time monitoring"]
    },
    {
      title: "24/7 IT Support & Maintenance",
      description: "Always-on healthcare support",
      features: ["Continuous monitoring of healthcare systems", "Quick issue resolution & bug fixes", "Helpdesk support for staff & doctors"]
    }
  ];

  const advantages = [
    {
      icon: <Lightbulb className="h-8 w-8 text-blue-400" />,
      title: "Innovation-Driven",
      description: "AI, IoT, and telemedicine solutions that transform patient care."
    },
    {
      icon: <Lock className="h-8 w-8 text-blue-400" />,
      title: "Healthcare-Grade Security",
      description: "Fully compliant with global healthcare standards and regulations."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-400" />,
      title: "Scalable Platforms",
      description: "From small clinics to large hospitals, we scale with your needs."
    },
    {
      icon: <Handshake className="h-8 w-8 text-blue-400" />,
      title: "Trusted Partner",
      description: "Enabling better care through innovative technology solutions."
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
                <span className="text-white">🏥 Transforming Healthcare with</span>
                <br />
                <span className="gradient-text">Secure & Smart IT Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                HiveRift empowers hospitals, clinics, and healthcare providers with technology that improves patient outcomes, streamlines operations, and ensures compliance. From digital health platforms to AI-driven analytics, we help the healthcare sector go truly digital.
              </p>
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                 onClick={() => navigate("/services")}
              >
                👉 Explore Our Services
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTc5NjAyOTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Healthcare technology and digital transformation"
                className="rounded-lg shadow-elegant w-full h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Healthcare Providers Choose HiveRift */}
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
              Why Healthcare Providers Choose HiveRift
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

      {/* Our Healthcare IT Services */}
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
              Our Healthcare IT Services
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
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwZGlnaXRhbCUyMHRyYW5zZm9ybWF0aW9ufGVufDF8fHx8MTc1Nzk2MDI5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Healthcare digital transformation background"
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
              Digitize Healthcare with HiveRift
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              From EHR platforms to telemedicine apps, HiveRift builds secure and innovative IT solutions that transform patient care and healthcare delivery.
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