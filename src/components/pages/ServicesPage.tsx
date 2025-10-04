import { Button } from "../ui/button";
<<<<<<< HEAD
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { SEO } from "../SEO";
import webDevImage from "figma:asset/d2413cd85dd704fb971f5e15f71a49d9c808ffaf.png";
import { useNavigate } from "react-router-dom";
import {
  Code,
  Smartphone,
  Palette,
  Wrench,
  Shield,
  Briefcase,
  HelpCircle,
  TrendingUp,
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import webDevImage from 'figma:asset/d2413cd85dd704fb971f5e15f71a49d9c808ffaf.png';
import { 
  Code, 
  Smartphone, 
  Palette, 
  Wrench, 
  Shield, 
  Briefcase, 
  HelpCircle, 
  TrendingUp, 
>>>>>>> b28797d (addres changes)
  Monitor,
  CheckCircle,
  Globe,
  Database,
  Cloud,
  Search,
  Mail,
  Users,
<<<<<<< HEAD
  BarChart,
} from "lucide-react";

export function ServicesPage({
  onNavigate,
}: {
  onNavigate?: (page: string) => void;
}) {
  const navigate = useNavigate();
=======
  BarChart
} from "lucide-react";

export function ServicesPage({ onNavigate }: { onNavigate?: (page: string) => void }) {
>>>>>>> b28797d (addres changes)
  const serviceCategories = [
    {
      title: "Development Services",
      description: "Comprehensive software and web development solutions",
      services: [
        {
          id: "web-development",
          icon: <Code className="h-8 w-8 text-primary" />,
          title: "Custom Website Design & Development",
<<<<<<< HEAD
          description:
            "Tailored web solutions that reflect your brand and drive business growth. From simple landing pages to complex web applications.",
          features: [
            "Responsive Design",
            "SEO Optimization",
            "Performance Optimization",
            "CMS Integration",
          ],
=======
          description: "Tailored web solutions that reflect your brand and drive business growth. From simple landing pages to complex web applications.",
          features: ["Responsive Design", "SEO Optimization", "Performance Optimization", "CMS Integration"]
>>>>>>> b28797d (addres changes)
        },
        {
          id: "mobile-app-development",
          icon: <Smartphone className="h-8 w-8 text-primary" />,
          title: "Mobile App Development",
<<<<<<< HEAD
          description:
            "Native and cross-platform mobile applications that engage users and drive business objectives.",
          features: [
            "iOS & Android",
            "Cross-platform",
            "App Store Deployment",
            "Push Notifications",
          ],
=======
          description: "Native and cross-platform mobile applications that engage users and drive business objectives.",
          features: ["iOS & Android", "Cross-platform", "App Store Deployment", "Push Notifications"]
>>>>>>> b28797d (addres changes)
        },
        {
          id: "mvp-development",
          icon: <Monitor className="h-8 w-8 text-primary" />,
          title: "MVP Development & Testing",
<<<<<<< HEAD
          description:
            "Rapid prototyping and testing for business applications including POS systems, accounting software, and other business solutions to validate your ideas efficiently before full-scale development.",
          features: [
            "POS System Development",
            "Accounting Software Prototypes",
            "Business Application MVPs",
            "User Testing & Market Validation",
          ],
=======
          description: "Rapid prototyping and testing for business applications including POS systems, accounting software, and other business solutions to validate your ideas efficiently before full-scale development.",
          features: ["POS System Development", "Accounting Software Prototypes", "Business Application MVPs", "User Testing & Market Validation"]
>>>>>>> b28797d (addres changes)
        },
        {
          id: "blockchain-solutions",
          icon: <Shield className="h-8 w-8 text-primary" />,
          title: "Blockchain Solutions",
<<<<<<< HEAD
          description:
            "Cutting-edge blockchain technology for secure and transparent business solutions.",
          features: [
            "Smart Contracts",
            "DApp Development",
            "Token Creation",
            "Security Audits",
          ],
=======
          description: "Cutting-edge blockchain technology for secure and transparent business solutions.",
          features: ["Smart Contracts", "DApp Development", "Token Creation", "Security Audits"]
>>>>>>> b28797d (addres changes)
        },
        {
          id: "ecommerce-development",
          icon: <Globe className="h-8 w-8 text-primary" />,
          title: "E-commerce Development",
<<<<<<< HEAD
          description:
            "Complete online store solutions with payment integration and inventory management systems.",
          features: [
            "Shopping Cart Integration",
            "Payment Gateways",
            "Inventory Management",
            "Order Tracking",
          ],
=======
          description: "Complete online store solutions with payment integration and inventory management systems.",
          features: ["Shopping Cart Integration", "Payment Gateways", "Inventory Management", "Order Tracking"]
>>>>>>> b28797d (addres changes)
        },
        {
          id: "api-development",
          icon: <Database className="h-8 w-8 text-primary" />,
          title: "API Development & Integration",
<<<<<<< HEAD
          description:
            "Custom APIs and third-party integrations to connect your systems and streamline operations.",
          features: [
            "RESTful APIs",
            "Third-party Integrations",
            "Database Design",
            "API Documentation",
          ],
        },
      ],
=======
          description: "Custom APIs and third-party integrations to connect your systems and streamline operations.",
          features: ["RESTful APIs", "Third-party Integrations", "Database Design", "API Documentation"]
        }
      ]
>>>>>>> b28797d (addres changes)
    },
    {
      title: "Design & UX Services",
      description: "User-centered design that creates exceptional experiences",
      services: [
        {
          id: "ui-ux-design",
          icon: <Palette className="h-8 w-8 text-primary" />,
          title: "UI/UX Design & Prototyping",
<<<<<<< HEAD
          description:
            "User-centered design that creates exceptional digital experiences and drives user engagement.",
          features: [
            "User Research",
            "Wireframing",
            "Interactive Prototypes",
            "Design Systems",
          ],
=======
          description: "User-centered design that creates exceptional digital experiences and drives user engagement.",
          features: ["User Research", "Wireframing", "Interactive Prototypes", "Design Systems"]
>>>>>>> b28797d (addres changes)
        },
        {
          id: "brand-identity-design",
          icon: <Monitor className="h-8 w-8 text-primary" />,
          title: "Brand Identity Design",
<<<<<<< HEAD
          description:
            "Complete brand identity packages including logos, color schemes, and brand guidelines.",
          features: [
            "Logo Design",
            "Brand Guidelines",
            "Color Palettes",
            "Typography Selection",
          ],
=======
          description: "Complete brand identity packages including logos, color schemes, and brand guidelines.",
          features: ["Logo Design", "Brand Guidelines", "Color Palettes", "Typography Selection"]
>>>>>>> b28797d (addres changes)
        },
        {
          id: "mobile-app-ui-design",
          icon: <Smartphone className="h-8 w-8 text-primary" />,
          title: "Mobile App UI Design",
<<<<<<< HEAD
          description:
            "Specialized mobile interface design focused on user experience and platform guidelines.",
          features: [
            "iOS Design Guidelines",
            "Android Material Design",
            "Mobile Prototyping",
            "App Store Assets",
          ],
=======
          description: "Specialized mobile interface design focused on user experience and platform guidelines.",
          features: ["iOS Design Guidelines", "Android Material Design", "Mobile Prototyping", "App Store Assets"]
>>>>>>> b28797d (addres changes)
        },
        {
          id: "landing-page-design",
          icon: <Globe className="h-8 w-8 text-primary" />,
          title: "Landing Page Design",
<<<<<<< HEAD
          description:
            "High-converting landing page designs optimized for lead generation and conversions.",
          features: [
            "Conversion Optimization",
            "A/B Testing Design",
            "Responsive Layouts",
            "Call-to-Action Design",
          ],
        },
      ],
=======
          description: "High-converting landing page designs optimized for lead generation and conversions.",
          features: ["Conversion Optimization", "A/B Testing Design", "Responsive Layouts", "Call-to-Action Design"]
        }
      ]
>>>>>>> b28797d (addres changes)
    },
    {
      title: "Business Services",
      description: "Comprehensive business support and consulting",
      services: [
        {
          id: "operations-consultancy",
          icon: <Briefcase className="h-8 w-8 text-primary" />,
          title: "Operations Consultancy Services",
<<<<<<< HEAD
          description:
            "Strategic guidance to optimize your business operations and processes for maximum efficiency.",
          features: [
            "Process Optimization",
            "Digital Transformation",
            "Workflow Analysis",
            "Performance Metrics",
          ],
=======
          description: "Strategic guidance to optimize your business operations and processes for maximum efficiency.",
          features: ["Process Optimization", "Digital Transformation", "Workflow Analysis", "Performance Metrics"]
>>>>>>> b28797d (addres changes)
        },
        {
          id: "virtual-assistant",
          icon: <HelpCircle className="h-8 w-8 text-primary" />,
          title: "Virtual Assistant Services",
<<<<<<< HEAD
          description:
            "Professional support services to handle your administrative tasks and daily operations.",
          features: [
            "Administrative Support",
            "Customer Service",
            "Data Entry",
            "Project Coordination",
          ],
=======
          description: "Professional support services to handle your administrative tasks and daily operations.",
          features: ["Administrative Support", "Customer Service", "Data Entry", "Project Coordination"]
>>>>>>> b28797d (addres changes)
        },
        {
          id: "digital-marketing",
          icon: <TrendingUp className="h-8 w-8 text-primary" />,
          title: "Digital Marketing",
<<<<<<< HEAD
          description:
            "Data-driven marketing strategies to grow your online presence and reach your target audience.",
          features: [
            "SEO Optimization",
            "Social Media Marketing",
            "Content Strategy",
            "Analytics & Reporting",
          ],
=======
          description: "Data-driven marketing strategies to grow your online presence and reach your target audience.",
          features: ["SEO Optimization", "Social Media Marketing", "Content Strategy", "Analytics & Reporting"]
>>>>>>> b28797d (addres changes)
        },
        {
          id: "seo-content-marketing",
          icon: <Search className="h-8 w-8 text-primary" />,
          title: "SEO & Content Marketing",
<<<<<<< HEAD
          description:
            "Comprehensive SEO strategies and content creation to improve your search rankings and engagement.",
          features: [
            "Keyword Research",
            "Content Creation",
            "Link Building",
            "Local SEO",
          ],
=======
          description: "Comprehensive SEO strategies and content creation to improve your search rankings and engagement.",
          features: ["Keyword Research", "Content Creation", "Link Building", "Local SEO"]
>>>>>>> b28797d (addres changes)
        },
        {
          id: "email-marketing",
          icon: <Mail className="h-8 w-8 text-primary" />,
          title: "Email Marketing Automation",
<<<<<<< HEAD
          description:
            "Automated email campaigns and customer journey mapping to nurture leads and retain customers.",
          features: [
            "Campaign Automation",
            "Customer Segmentation",
            "A/B Testing",
            "Analytics Tracking",
          ],
=======
          description: "Automated email campaigns and customer journey mapping to nurture leads and retain customers.",
          features: ["Campaign Automation", "Customer Segmentation", "A/B Testing", "Analytics Tracking"]
>>>>>>> b28797d (addres changes)
        },
        {
          id: "business-analytics",
          icon: <BarChart className="h-8 w-8 text-primary" />,
          title: "Business Analytics & Reporting",
<<<<<<< HEAD
          description:
            "Data analysis and reporting services to help you make informed business decisions.",
          features: [
            "Data Visualization",
            "Custom Dashboards",
            "KPI Tracking",
            "Business Intelligence",
          ],
        },
      ],
=======
          description: "Data analysis and reporting services to help you make informed business decisions.",
          features: ["Data Visualization", "Custom Dashboards", "KPI Tracking", "Business Intelligence"]
        }
      ]
>>>>>>> b28797d (addres changes)
    },
    {
      title: "Cloud & Infrastructure",
      description: "Modern cloud solutions and infrastructure management",
      services: [
        {
          id: "cloud-migration",
          icon: <Cloud className="h-8 w-8 text-primary" />,
          title: "Cloud Migration Services",
<<<<<<< HEAD
          description:
            "Seamless migration of your applications and data to cloud platforms like AWS, Azure, or Google Cloud.",
          features: [
            "Cloud Assessment",
            "Migration Planning",
            "Data Transfer",
            "Performance Optimization",
          ],
=======
          description: "Seamless migration of your applications and data to cloud platforms like AWS, Azure, or Google Cloud.",
          features: ["Cloud Assessment", "Migration Planning", "Data Transfer", "Performance Optimization"]
>>>>>>> b28797d (addres changes)
        },
        {
          id: "devops-automation",
          icon: <Shield className="h-8 w-8 text-primary" />,
          title: "DevOps & Automation",
<<<<<<< HEAD
          description:
            "Streamline your development and deployment processes with modern DevOps practices.",
          features: [
            "CI/CD Pipelines",
            "Infrastructure as Code",
            "Monitoring & Logging",
            "Security Integration",
          ],
=======
          description: "Streamline your development and deployment processes with modern DevOps practices.",
          features: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring & Logging", "Security Integration"]
>>>>>>> b28797d (addres changes)
        },
        {
          id: "database-management",
          icon: <Database className="h-8 w-8 text-primary" />,
          title: "Database Management",
<<<<<<< HEAD
          description:
            "Professional database design, optimization, and management services for better performance.",
          features: [
            "Database Design",
            "Performance Tuning",
            "Backup Solutions",
            "Security Implementation",
          ],
=======
          description: "Professional database design, optimization, and management services for better performance.",
          features: ["Database Design", "Performance Tuning", "Backup Solutions", "Security Implementation"]
>>>>>>> b28797d (addres changes)
        },
        {
          id: "maintenance-support",
          icon: <Wrench className="h-8 w-8 text-primary" />,
          title: "Ongoing Maintenance & Support",
<<<<<<< HEAD
          description:
            "Reliable maintenance services to keep your digital assets running smoothly and securely.",
          features: [
            "Security Updates",
            "Performance Monitoring",
            "Bug Fixes",
            "24/7 Support",
          ],
        },
      ],
    },
=======
          description: "Reliable maintenance services to keep your digital assets running smoothly and securely.",
          features: ["Security Updates", "Performance Monitoring", "Bug Fixes", "24/7 Support"]
        }
      ]
    }
>>>>>>> b28797d (addres changes)
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
<<<<<<< HEAD
      description:
        "We start by understanding your business needs, goals, and constraints to create a tailored approach.",
=======
      description: "We start by understanding your business needs, goals, and constraints to create a tailored approach."
>>>>>>> b28797d (addres changes)
    },
    {
      step: "02",
      title: "Strategy & Design",
<<<<<<< HEAD
      description:
        "Our team develops a comprehensive strategy and creates detailed designs that align with your objectives.",
=======
      description: "Our team develops a comprehensive strategy and creates detailed designs that align with your objectives."
>>>>>>> b28797d (addres changes)
    },
    {
      step: "03",
      title: "Development & Implementation",
<<<<<<< HEAD
      description:
        "We build your solution using best practices and cutting-edge technologies for optimal performance.",
=======
      description: "We build your solution using best practices and cutting-edge technologies for optimal performance."
>>>>>>> b28797d (addres changes)
    },
    {
      step: "04",
      title: "Testing & Launch",
<<<<<<< HEAD
      description:
        "Rigorous testing ensures quality before launch, followed by ongoing support and optimization.",
    },
=======
      description: "Rigorous testing ensures quality before launch, followed by ongoing support and optimization."
    }
>>>>>>> b28797d (addres changes)
  ];

  return (
    <div className="py-20">
<<<<<<< HEAD
      {/* ✅ SEO Section */}
      <SEO
        title="Our Services | HiveRift"
        description="Explore HiveRift's full range of digital services including web development, mobile apps, UI/UX design, cloud solutions, and digital marketing to transform your business."
        keywords="HiveRift services, web development, mobile apps, UI/UX design, cloud, digital marketing"
        url="https://hiverift.com/"
        image="https://hiverift.com/logo.svg"
      />

=======
>>>>>>> b28797d (addres changes)
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
<<<<<<< HEAD
            Comprehensive digital solutions designed to transform your business
            and drive sustainable growth through innovation and expertise.
=======
            Comprehensive digital solutions designed to transform your business and drive sustainable growth through innovation and expertise.
>>>>>>> b28797d (addres changes)
          </p>
        </div>

        {/* Featured Services Images */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="relative">
            <ImageWithFallback
              src={webDevImage}
              alt="Web development professional coding with multiple screens"
              className="rounded-lg shadow-lg w-full h-[300px] object-cover"
            />
            <div className="absolute inset-0 bg-primary/20 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-2">Web Development</h3>
                <p>Custom solutions for your business</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1695648443061-a14bc74bf29d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMHNtYXJ0cGhvbmV8ZW58MXx8fHwxNzU2MDMyNTg4fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Mobile app development"
              className="rounded-lg shadow-lg w-full h-[300px] object-cover"
            />
            <div className="absolute inset-0 bg-primary/20 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-2">Mobile Apps</h3>
                <p>Native & cross-platform solutions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Service Categories */}
        {serviceCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{category.title}</h2>
<<<<<<< HEAD
              <p className="text-muted-foreground text-lg">
                {category.description}
              </p>
=======
              <p className="text-muted-foreground text-lg">{category.description}</p>
>>>>>>> b28797d (addres changes)
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {category.services.map((service, serviceIndex) => (
<<<<<<< HEAD
                <Card
                  key={serviceIndex}
                  className="p-6 hover:shadow-lg transition-shadow"
                >
=======
                <Card key={serviceIndex} className="p-6 hover:shadow-lg transition-shadow">
>>>>>>> b28797d (addres changes)
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        {service.icon}
                        <div>
<<<<<<< HEAD
                          <CardTitle className="text-xl">
                            {service.title}
                          </CardTitle>
=======
                          <CardTitle className="text-xl">{service.title}</CardTitle>
>>>>>>> b28797d (addres changes)
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
<<<<<<< HEAD
                            <li
                              key={featureIndex}
                              className="flex items-center gap-2 text-sm text-muted-foreground"
                            >
=======
                            <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
>>>>>>> b28797d (addres changes)
                              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex gap-2">
<<<<<<< HEAD
                        <Button
                          className="flex-1"
                          onClick={() => navigate(`/service/${service.id}`)}
                        >
                          Learn More
                        </Button>
                        <Button
                          variant="outline"
                          className="flex-1"
                          onClick={() => navigate("/contact")}
=======
                        <Button 
                          className="flex-1" 
                          onClick={() => onNavigate?.(`service-${service.id}`)}
                        >
                          Learn More
                        </Button>
                        <Button 
                          variant="outline"
                          className="flex-1" 
                          onClick={() => onNavigate?.('contact')}
>>>>>>> b28797d (addres changes)
                        >
                          Get Quote
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}

        {/* Process Section */}
        <div className="bg-secondary/20 rounded-lg p-12 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-muted-foreground text-lg">
<<<<<<< HEAD
              A proven methodology that ensures successful project delivery and
              client satisfaction.
=======
              A proven methodology that ensures successful project delivery and client satisfaction.
>>>>>>> b28797d (addres changes)
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h4 className="font-semibold mb-2">{step.title}</h4>
<<<<<<< HEAD
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
=======
                <p className="text-muted-foreground text-sm">{step.description}</p>
>>>>>>> b28797d (addres changes)
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-primary text-primary-foreground rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 opacity-90">
<<<<<<< HEAD
            Let's discuss how our services can help transform your business and
            achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => navigate("/contact")}
            >
              Schedule Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              onClick={() => navigate("/contact")}
            >
=======
            Let's discuss how our services can help transform your business and achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Schedule Consultation
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
>>>>>>> b28797d (addres changes)
              Request Quote
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> b28797d (addres changes)
