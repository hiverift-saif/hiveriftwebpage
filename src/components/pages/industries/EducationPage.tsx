import { motion } from "motion/react";
import { Button } from "../../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
import { GraduationCap, Globe, BarChart3, Shield, Lightbulb, Lock, Zap, Handshake } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface EducationPageProps {
  onNavigate?: (page: string) => void;
}

export function EducationPage({ onNavigate }: EducationPageProps) {
   const navigate = useNavigate();
  const whyChooseUs = [
    {
      icon: <Globe className="h-8 w-8 text-blue-400" />,
      title: "Anywhere Learning",
      description: "Digital platforms that break classroom barriers and enable learning from anywhere."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-blue-400" />,
      title: "Data-Driven Insights",
      description: "Smart analytics to improve student outcomes and educational effectiveness."
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-400" />,
      title: "Secure & Reliable",
      description: "Protecting student data and academic records with advanced security measures."
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-400" />,
      title: "Engaging Experiences",
      description: "Interactive, mobile-first learning journeys that captivate students."
    }
  ];

  const services = [
    {
      title: "E-Learning Platforms & LMS Development",
      description: "Comprehensive learning management",
      features: ["Custom Learning Management Systems (LMS)", "Virtual classrooms with video conferencing tools", "Gamification features to boost student engagement"]
    },
    {
      title: "Student & Faculty Portals",
      description: "Integrated educational management",
      features: ["Online admission & enrollment systems", "Student dashboards for assignments & grades", "Teacher portals for lesson planning & performance tracking"]
    },
    {
      title: "Mobile Learning Solutions",
      description: "Education on-the-go",
      features: ["Interactive mobile apps for students", "Digital libraries & e-books", "Push notifications for class schedules & updates"]
    },
    {
      title: "Data Analytics & AI in Education",
      description: "Intelligent educational insights",
      features: ["Student performance analytics", "AI-driven personalized learning paths", "Predictive insights to reduce dropout rates"]
    },
    {
      title: "Automation & Workflow Management",
      description: "Streamlined educational operations",
      features: ["RPA for admission, fee collection, and certification", "Automated grading & attendance tracking", "Paperless workflow for admin efficiency"]
    },
    {
      title: "Cloud & Infrastructure Services",
      description: "Scalable educational technology",
      features: ["Cloud hosting for LMS & student data", "Scalable storage for digital content", "Disaster recovery & backup solutions"]
    },
    {
      title: "Cybersecurity & Compliance",
      description: "Educational data protection",
      features: ["Data encryption for student and faculty records", "GDPR & FERPA compliance", "Secure online examination systems"]
    },
    {
      title: "24/7 Support & Maintenance",
      description: "Always-on educational support",
      features: ["Round-the-clock technical support", "System upgrades & bug fixes", "Continuous monitoring of education platforms"]
    }
  ];

  const advantages = [
    {
      icon: <Lightbulb className="h-8 w-8 text-blue-400" />,
      title: "Innovative Learning Tools",
      description: "AI, AR/VR, and gamification that transform education."
    },
    {
      icon: <Lock className="h-8 w-8 text-blue-400" />,
      title: "Safe & Secure",
      description: "Protecting academic integrity and student privacy."
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-400" />,
      title: "Scalable Solutions",
      description: "Supporting institutions of all sizes, from schools to universities."
    },
    {
      icon: <Handshake className="h-8 w-8 text-blue-400" />,
      title: "Partner in Growth",
      description: "Helping educators thrive in the digital era."
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
                <span className="text-white">🎓 Powering the Future of</span>
                <br />
                <span className="gradient-text">Learning with Technology</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                HiveRift helps schools, universities, and EdTech providers reimagine education through digital platforms, automation, and secure IT solutions. From virtual classrooms to student analytics, we make learning accessible, engaging, and future-ready.
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
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1Nzk2MDM1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Education technology and digital learning"
                className="rounded-lg shadow-elegant w-full h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Educators Choose HiveRift */}
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
              Why Educators Choose HiveRift
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

      {/* Our Education IT Services */}
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
              Our Education IT Services
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
            src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBkaWdpdGFsJTIwdHJhbnNmb3JtYXRpb258ZW58MXx8fHwxNzU3OTYwMzU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Education digital transformation background"
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
              Transform Education with HiveRift
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              From digital classrooms to AI-powered insights, HiveRift builds technology that empowers learners, teachers, and institutions to succeed in the digital age.
            </p>
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              onClick={() => onNavigate?.('contact')}
            >
              📩 Let's Build the Future of Learning
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}