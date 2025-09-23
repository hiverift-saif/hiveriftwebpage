import { Button } from "../ui/button";
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
  Monitor,
  CheckCircle,
  Globe,
  Database,
  Cloud,
  Search,
  Mail,
  Users,
  BarChart,
} from "lucide-react";

export function ServicesPage({
  onNavigate,
}: {
  onNavigate?: (page: string) => void;
}) {
  const navigate = useNavigate();
  const serviceCategories = [
    {
      title: "Development Services",
      description: "Comprehensive software and web development solutions",
      services: [
        {
          id: "web-development",
          icon: <Code className="h-8 w-8 text-primary" />,
          title: "Custom Website Design & Development",
          description:
            "Tailored web solutions that reflect your brand and drive business growth. From simple landing pages to complex web applications.",
          features: [
            "Responsive Design",
            "SEO Optimization",
            "Performance Optimization",
            "CMS Integration",
          ],
        },
        {
          id: "mobile-app-development",
          icon: <Smartphone className="h-8 w-8 text-primary" />,
          title: "Mobile App Development",
          description:
            "Native and cross-platform mobile applications that engage users and drive business objectives.",
          features: [
            "iOS & Android",
            "Cross-platform",
            "App Store Deployment",
            "Push Notifications",
          ],
        },
        {
          id: "mvp-development",
          icon: <Monitor className="h-8 w-8 text-primary" />,
          title: "MVP Development & Testing",
          description:
            "Rapid prototyping and testing for business applications including POS systems, accounting software, and other business solutions to validate your ideas efficiently before full-scale development.",
          features: [
            "POS System Development",
            "Accounting Software Prototypes",
            "Business Application MVPs",
            "User Testing & Market Validation",
          ],
        },
        {
          id: "blockchain-solutions",
          icon: <Shield className="h-8 w-8 text-primary" />,
          title: "Blockchain Solutions",
          description:
            "Cutting-edge blockchain technology for secure and transparent business solutions.",
          features: [
            "Smart Contracts",
            "DApp Development",
            "Token Creation",
            "Security Audits",
          ],
        },
        {
          id: "ecommerce-development",
          icon: <Globe className="h-8 w-8 text-primary" />,
          title: "E-commerce Development",
          description:
            "Complete online store solutions with payment integration and inventory management systems.",
          features: [
            "Shopping Cart Integration",
            "Payment Gateways",
            "Inventory Management",
            "Order Tracking",
          ],
        },
        {
          id: "api-development",
          icon: <Database className="h-8 w-8 text-primary" />,
          title: "API Development & Integration",
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
    },
    {
      title: "Design & UX Services",
      description: "User-centered design that creates exceptional experiences",
      services: [
        {
          id: "ui-ux-design",
          icon: <Palette className="h-8 w-8 text-primary" />,
          title: "UI/UX Design & Prototyping",
          description:
            "User-centered design that creates exceptional digital experiences and drives user engagement.",
          features: [
            "User Research",
            "Wireframing",
            "Interactive Prototypes",
            "Design Systems",
          ],
        },
        {
          id: "brand-identity-design",
          icon: <Monitor className="h-8 w-8 text-primary" />,
          title: "Brand Identity Design",
          description:
            "Complete brand identity packages including logos, color schemes, and brand guidelines.",
          features: [
            "Logo Design",
            "Brand Guidelines",
            "Color Palettes",
            "Typography Selection",
          ],
        },
        {
          id: "mobile-app-ui-design",
          icon: <Smartphone className="h-8 w-8 text-primary" />,
          title: "Mobile App UI Design",
          description:
            "Specialized mobile interface design focused on user experience and platform guidelines.",
          features: [
            "iOS Design Guidelines",
            "Android Material Design",
            "Mobile Prototyping",
            "App Store Assets",
          ],
        },
        {
          id: "landing-page-design",
          icon: <Globe className="h-8 w-8 text-primary" />,
          title: "Landing Page Design",
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
    },
    {
      title: "Business Services",
      description: "Comprehensive business support and consulting",
      services: [
        {
          id: "operations-consultancy",
          icon: <Briefcase className="h-8 w-8 text-primary" />,
          title: "Operations Consultancy Services",
          description:
            "Strategic guidance to optimize your business operations and processes for maximum efficiency.",
          features: [
            "Process Optimization",
            "Digital Transformation",
            "Workflow Analysis",
            "Performance Metrics",
          ],
        },
        {
          id: "virtual-assistant",
          icon: <HelpCircle className="h-8 w-8 text-primary" />,
          title: "Virtual Assistant Services",
          description:
            "Professional support services to handle your administrative tasks and daily operations.",
          features: [
            "Administrative Support",
            "Customer Service",
            "Data Entry",
            "Project Coordination",
          ],
        },
        {
          id: "digital-marketing",
          icon: <TrendingUp className="h-8 w-8 text-primary" />,
          title: "Digital Marketing",
          description:
            "Data-driven marketing strategies to grow your online presence and reach your target audience.",
          features: [
            "SEO Optimization",
            "Social Media Marketing",
            "Content Strategy",
            "Analytics & Reporting",
          ],
        },
        {
          id: "seo-content-marketing",
          icon: <Search className="h-8 w-8 text-primary" />,
          title: "SEO & Content Marketing",
          description:
            "Comprehensive SEO strategies and content creation to improve your search rankings and engagement.",
          features: [
            "Keyword Research",
            "Content Creation",
            "Link Building",
            "Local SEO",
          ],
        },
        {
          id: "email-marketing",
          icon: <Mail className="h-8 w-8 text-primary" />,
          title: "Email Marketing Automation",
          description:
            "Automated email campaigns and customer journey mapping to nurture leads and retain customers.",
          features: [
            "Campaign Automation",
            "Customer Segmentation",
            "A/B Testing",
            "Analytics Tracking",
          ],
        },
        {
          id: "business-analytics",
          icon: <BarChart className="h-8 w-8 text-primary" />,
          title: "Business Analytics & Reporting",
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
    },
    {
      title: "Cloud & Infrastructure",
      description: "Modern cloud solutions and infrastructure management",
      services: [
        {
          id: "cloud-migration",
          icon: <Cloud className="h-8 w-8 text-primary" />,
          title: "Cloud Migration Services",
          description:
            "Seamless migration of your applications and data to cloud platforms like AWS, Azure, or Google Cloud.",
          features: [
            "Cloud Assessment",
            "Migration Planning",
            "Data Transfer",
            "Performance Optimization",
          ],
        },
        {
          id: "devops-automation",
          icon: <Shield className="h-8 w-8 text-primary" />,
          title: "DevOps & Automation",
          description:
            "Streamline your development and deployment processes with modern DevOps practices.",
          features: [
            "CI/CD Pipelines",
            "Infrastructure as Code",
            "Monitoring & Logging",
            "Security Integration",
          ],
        },
        {
          id: "database-management",
          icon: <Database className="h-8 w-8 text-primary" />,
          title: "Database Management",
          description:
            "Professional database design, optimization, and management services for better performance.",
          features: [
            "Database Design",
            "Performance Tuning",
            "Backup Solutions",
            "Security Implementation",
          ],
        },
        {
          id: "maintenance-support",
          icon: <Wrench className="h-8 w-8 text-primary" />,
          title: "Ongoing Maintenance & Support",
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
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description:
        "We start by understanding your business needs, goals, and constraints to create a tailored approach.",
    },
    {
      step: "02",
      title: "Strategy & Design",
      description:
        "Our team develops a comprehensive strategy and creates detailed designs that align with your objectives.",
    },
    {
      step: "03",
      title: "Development & Implementation",
      description:
        "We build your solution using best practices and cutting-edge technologies for optimal performance.",
    },
    {
      step: "04",
      title: "Testing & Launch",
      description:
        "Rigorous testing ensures quality before launch, followed by ongoing support and optimization.",
    },
  ];

  return (
    <div className="py-20">
      {/* ✅ SEO Section */}
      <SEO
        title="Our Services | HiveRift"
        description="Explore HiveRift's full range of digital services including web development, mobile apps, UI/UX design, cloud solutions, and digital marketing to transform your business."
        keywords="HiveRift services, web development, mobile apps, UI/UX design, cloud, digital marketing"
        url="https://hiverift.com/"
        image="https://hiverift.com/logo.svg"
      />

      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital solutions designed to transform your business
            and drive sustainable growth through innovation and expertise.
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
              <p className="text-muted-foreground text-lg">
                {category.description}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {category.services.map((service, serviceIndex) => (
                <Card
                  key={serviceIndex}
                  className="p-6 hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        {service.icon}
                        <div>
                          <CardTitle className="text-xl">
                            {service.title}
                          </CardTitle>
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
                            <li
                              key={featureIndex}
                              className="flex items-center gap-2 text-sm text-muted-foreground"
                            >
                              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex gap-2">
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
              A proven methodology that ensures successful project delivery and
              client satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h4 className="font-semibold mb-2">{step.title}</h4>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-primary text-primary-foreground rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 opacity-90">
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
              Request Quote
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
