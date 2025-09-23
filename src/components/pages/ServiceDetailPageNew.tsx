import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { 
  ArrowLeft,
  CheckCircle,
  Clock,
  Users,
  Target,
  Zap,
  Shield,
  TrendingUp,
  Code,
  Smartphone,
  Palette,
  Database,
  Cloud,
  Search,
  Mail,
  BarChart,
  Globe,
  Monitor,
  Wrench,
  Briefcase,
  HelpCircle
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ServiceDetailPageProps {
  serviceId: string;
  onNavigate: (page: string) => void;
}

export function ServiceDetailPage({ serviceId, onNavigate }: ServiceDetailPageProps) {
  const navigate = useNavigate();
  const serviceData: { [key: string]: any } = {
    'web-development': {
      icon: <Code className="h-12 w-12 text-primary" />,
      title: "Custom Website Design & Development",
      subtitle: "Tailored web solutions that reflect your brand and drive business growth",
      heroImage: "https://images.unsplash.com/photo-1593720213681-e9a8778330a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMHByb2dyYW1tZXJ8ZW58MXx8fHwxNzU4MTg4ODM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      overview: "From simple landing pages to complex web applications, our custom website development services are designed to create digital experiences that not only look stunning but also drive measurable business results. We combine cutting-edge technology with user-centered design to build websites that engage your audience and convert visitors into customers.",
      keyFeatures: [
        "Responsive Design for All Devices",
        "SEO-Optimized Architecture", 
        "Performance Optimization",
        "Content Management Integration",
        "E-commerce Functionality",
        "Third-party Integrations",
        "Security Best Practices",
        "Analytics & Tracking Setup"
      ],
      process: [
        {
          step: "Discovery & Planning",
          description: "We analyze your business goals, target audience, and technical requirements to create a comprehensive project roadmap."
        },
        {
          step: "Design & Prototyping",
          description: "Our designers create wireframes and interactive prototypes that visualize the user experience and interface design."
        },
        {
          step: "Development & Integration",
          description: "Our developers build your website using modern frameworks and integrate necessary third-party services."
        },
        {
          step: "Testing & Launch",
          description: "Comprehensive testing across devices and browsers ensures your website performs flawlessly before going live."
        },
        {
          step: "Maintenance & Support",
          description: "Ongoing updates, security patches, and performance optimization keep your website running smoothly."
        }
      ],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "WordPress", "Shopify", "AWS"],
      timeline: "2-8 weeks",
      benefits: [
        "Increased Online Visibility",
        "Better User Engagement",
        "Higher Conversion Rates",
        "Mobile-First Experience",
        "Search Engine Optimization",
        "Scalable Architecture"
      ],
      faqs: [
        {
          question: "What's included in your web development service?",
          answer: "Our web development service includes custom design, responsive development, CMS integration, SEO optimization, performance optimization, security implementation, and post-launch support."
        },
        {
          question: "How long does it take to build a website?",
          answer: "Timeline varies based on complexity. Simple websites take 2-4 weeks, while complex applications can take 6-8 weeks or more. We provide detailed timelines during the planning phase."
        },
        {
          question: "Do you provide ongoing maintenance?",
          answer: "Yes, we offer comprehensive maintenance packages including security updates, performance monitoring, content updates, and technical support."
        },
        {
          question: "Can you work with our existing brand guidelines?",
          answer: "Absolutely! We seamlessly integrate your existing brand identity, colors, fonts, and style guidelines into the website design."
        }
      ]
    },
    'mobile-app-development': {
      icon: <Smartphone className="h-12 w-12 text-primary" />,
      title: "Mobile App Development",
      subtitle: "Native and cross-platform applications that engage users and drive business objectives",
      heroImage: "https://images.unsplash.com/photo-1730818875087-182c15e1e7a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMHNtYXJ0cGhvbmV8ZW58MXx8fHwxNzU4MTg3NjcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      overview: "Transform your business ideas into powerful mobile applications that reach customers wherever they are. Our mobile app development services cover native iOS and Android apps, as well as cross-platform solutions that maximize your reach while optimizing development costs and time to market.",
      keyFeatures: [
        "Native iOS & Android Development",
        "Cross-Platform Solutions",
        "User-Centric UI/UX Design",
        "App Store Optimization",
        "Push Notification Integration",
        "Offline Functionality",
        "Social Media Integration",
        "Analytics & Performance Tracking"
      ],
      process: [
        {
          step: "Concept & Strategy",
          description: "We define your app's core functionality, target audience, and competitive positioning to create a winning mobile strategy."
        },
        {
          step: "UI/UX Design",
          description: "Our designers create intuitive interfaces that follow platform-specific guidelines while maintaining your brand identity."
        },
        {
          step: "Development & Testing",
          description: "Native or cross-platform development with rigorous testing across multiple devices and operating system versions."
        },
        {
          step: "App Store Submission",
          description: "We handle the complete app store submission process, including optimization for better discoverability."
        },
        {
          step: "Post-Launch Support",
          description: "Ongoing updates, bug fixes, and feature enhancements keep your app competitive and user-friendly."
        }
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "AWS Mobile", "App Store Connect", "Google Play Console"],
      timeline: "8-16 weeks",
      benefits: [
        "Direct Customer Engagement",
        "Increased Brand Loyalty",
        "New Revenue Streams",
        "Enhanced Customer Experience",
        "Real-time User Analytics",
        "Competitive Advantage"
      ],
      faqs: [
        {
          question: "Should I choose native or cross-platform development?",
          answer: "Native apps offer the best performance and platform-specific features, while cross-platform apps are cost-effective for reaching both iOS and Android users. We'll recommend the best approach based on your requirements."
        },
        {
          question: "How much does mobile app development cost?",
          answer: "Costs vary significantly based on features, complexity, and platform choice. We provide detailed quotes after understanding your specific requirements during our discovery phase."
        },
        {
          question: "Do you help with app store submissions?",
          answer: "Yes, we handle the complete app store submission process, including creating store listings, screenshots, and managing the approval process for both Apple App Store and Google Play Store."
        },
        {
          question: "Can you integrate the app with our existing systems?",
          answer: "Absolutely! We specialize in integrating mobile apps with existing CRM systems, databases, payment gateways, and other business tools through APIs."
        }
      ]
    },
    'mvp-development': {
      icon: <Monitor className="h-12 w-12 text-primary" />,
      title: "MVP Development & Testing",
      subtitle: "Rapid prototyping and validation for your business ideas",
      heroImage: "https://images.unsplash.com/photo-1682971829405-42b40b5f0895?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNVlAlMjBkZXZlbG9wbWVudCUyMHByb3RvdHlwZSUyMHRlc3Rpbmd8ZW58MXx8fHwxNzU4MTg5MDIyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      overview: "Validate your business ideas efficiently with our MVP development services. We help you build minimum viable products that test core functionality, gather user feedback, and minimize time-to-market while maximizing learning opportunities before full-scale development.",
      keyFeatures: [
        "Rapid Prototyping",
        "User Feedback Integration",
        "Market Validation Testing",
        "Iterative Development",
        "Core Feature Focus",
        "Analytics Implementation",
        "Scalable Architecture",
        "Cost-Effective Solutions"
      ],
      process: [
        {
          step: "Idea Validation",
          description: "We analyze your business concept, identify core features, and validate market demand through research and user interviews."
        },
        {
          step: "Feature Prioritization",
          description: "Define the essential features that will deliver maximum value to users while keeping development time minimal."
        },
        {
          step: "Rapid Development",
          description: "Build the MVP using agile methodologies, focusing on core functionality and user experience essentials."
        },
        {
          step: "Testing & Launch",
          description: "Deploy the MVP to a controlled user group and gather valuable feedback and usage analytics."
        },
        {
          step: "Iteration & Scaling",
          description: "Based on user feedback and metrics, iterate on features and plan for full product development."
        }
      ],
      technologies: ["React", "Node.js", "Firebase", "AWS", "MongoDB", "PostgreSQL", "Docker", "Analytics Tools"],
      timeline: "3-6 weeks",
      benefits: [
        "Reduced Development Risk",
        "Faster Time-to-Market",
        "User-Validated Features",
        "Cost-Effective Testing",
        "Investor-Ready Prototype",
        "Market Insights"
      ],
      faqs: [
        {
          question: "What's the difference between MVP and full product development?",
          answer: "MVP focuses on core features to test market viability quickly and cost-effectively, while full development includes comprehensive features, advanced integrations, and polished user experience."
        },
        {
          question: "How do you determine which features to include in the MVP?",
          answer: "We work with you to identify features that directly address your core value proposition and are essential for users to understand and experience your product's main benefits."
        },
        {
          question: "Can the MVP be scaled into a full product later?",
          answer: "Absolutely! We build MVPs with scalable architecture, so they can serve as the foundation for full product development based on validated learnings and user feedback."
        },
        {
          question: "How do you measure MVP success?",
          answer: "We implement analytics to track user engagement, feature usage, conversion rates, and other relevant KPIs that help validate your business assumptions."
        }
      ]
    },
    'blockchain-solutions': {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: "Blockchain Solutions",
      subtitle: "Cutting-edge blockchain technology for secure and transparent business solutions",
      heroImage: "https://images.unsplash.com/photo-1639182697243-9641e4b2f4b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwdGVjaG5vbG9neSUyMGRpZ2l0YWx8ZW58MXx8fHwxNzU4MDkyODE4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      overview: "Harness the power of blockchain technology to create secure, transparent, and decentralized solutions for your business. From smart contracts to full DApp development, we provide end-to-end blockchain services that can revolutionize how you handle transactions, data security, and business processes.",
      keyFeatures: [
        "Smart Contract Development",
        "DApp (Decentralized App) Creation",
        "Token Creation & Management",
        "Blockchain Security Audits",
        "NFT Marketplace Development",
        "Cryptocurrency Integration",
        "Supply Chain Solutions",
        "Identity Verification Systems"
      ],
      process: [
        {
          step: "Blockchain Strategy",
          description: "We assess your business needs and determine how blockchain technology can provide value and competitive advantages."
        },
        {
          step: "Architecture Design",
          description: "Design the blockchain architecture, smart contracts, and integration points with your existing systems."
        },
        {
          step: "Development & Testing",
          description: "Build and rigorously test smart contracts and DApps on testnets before mainnet deployment."
        },
        {
          step: "Security Audit",
          description: "Comprehensive security audits ensure your blockchain solution is secure and follows best practices."
        },
        {
          step: "Deployment & Monitoring",
          description: "Deploy to mainnet and provide ongoing monitoring and maintenance for optimal performance."
        }
      ],
      technologies: ["Ethereum", "Solidity", "Web3.js", "Hardhat", "Polygon", "Binance Smart Chain", "IPFS", "MetaMask"],
      timeline: "8-20 weeks",
      benefits: [
        "Enhanced Security",
        "Transparent Transactions",
        "Reduced Intermediary Costs",
        "Immutable Record Keeping",
        "Global Accessibility",
        "Automated Processes"
      ],
      faqs: [
        {
          question: "What blockchain platforms do you work with?",
          answer: "We work with major blockchain platforms including Ethereum, Polygon, Binance Smart Chain, and can recommend the best platform based on your specific requirements and budget."
        },
        {
          question: "How secure are blockchain solutions?",
          answer: "Blockchain is inherently secure due to its decentralized nature, but smart contract code must be properly audited. We follow security best practices and conduct thorough audits before deployment."
        },
        {
          question: "What are the costs associated with blockchain development?",
          answer: "Costs include development, gas fees for deployment, and ongoing transaction costs. We provide transparent estimates and help optimize for cost-efficiency."
        },
        {
          question: "Can blockchain integrate with our existing systems?",
          answer: "Yes, we specialize in creating hybrid solutions that integrate blockchain technology with your existing databases, APIs, and business systems."
        }
      ]
    },
    'ecommerce-development': {
      icon: <Globe className="h-12 w-12 text-primary" />,
      title: "E-commerce Development",
      subtitle: "Complete online store solutions with payment integration and inventory management",
      heroImage: "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBvbmxpbmUlMjBzaG9wcGluZ3xlbnwxfHx8fDE3NTgxNTUwMjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      overview: "Build powerful e-commerce platforms that drive sales and enhance customer experience. Our comprehensive e-commerce solutions include custom online stores, marketplace development, payment processing, inventory management, and mobile commerce capabilities.",
      keyFeatures: [
        "Custom E-commerce Platforms",
        "Payment Gateway Integration",
        "Inventory Management Systems",
        "Mobile Commerce Solutions",
        "Multi-vendor Marketplace",
        "Order Management & Tracking",
        "Customer Account Management",
        "Analytics & Reporting"
      ],
      process: [
        {
          step: "Requirements Analysis",
          description: "Understand your business model, target market, product catalog, and specific e-commerce requirements."
        },
        {
          step: "Platform Selection",
          description: "Choose the optimal e-commerce platform or decide on custom development based on your needs and scalability requirements."
        },
        {
          step: "Design & Development",
          description: "Create user-friendly interfaces, implement secure payment systems, and develop robust backend functionality."
        },
        {
          step: "Integration & Testing",
          description: "Integrate with payment gateways, shipping providers, and third-party services while ensuring security and performance."
        },
        {
          step: "Launch & Optimization",
          description: "Deploy your e-commerce platform and continuously optimize based on user behavior and performance metrics."
        }
      ],
      technologies: ["Shopify", "WooCommerce", "Magento", "React", "Node.js", "Stripe", "PayPal", "AWS"],
      timeline: "4-12 weeks",
      benefits: [
        "24/7 Sales Capability",
        "Global Market Reach",
        "Automated Order Processing",
        "Customer Data Insights",
        "Scalable Business Model",
        "Reduced Operational Costs"
      ],
      faqs: [
        {
          question: "Which e-commerce platform is best for my business?",
          answer: "The choice depends on your product type, business size, budget, and growth plans. We evaluate your needs and recommend the platform that offers the best balance of features, cost, and scalability."
        },
        {
          question: "How secure are online payment transactions?",
          answer: "We implement industry-standard security measures including SSL certificates, PCI compliance, secure payment gateways, and fraud protection to ensure safe transactions."
        },
        {
          question: "Can you integrate with my existing inventory system?",
          answer: "Yes, we can integrate your e-commerce platform with existing ERP, CRM, and inventory management systems through APIs to maintain synchronized data across platforms."
        },
        {
          question: "Do you provide ongoing e-commerce support?",
          answer: "We offer comprehensive support including security updates, performance optimization, feature enhancements, and technical support to keep your store running smoothly."
        }
      ]
    },
    'api-development': {
      icon: <Database className="h-12 w-12 text-primary" />,
      title: "API Development & Integration",
      subtitle: "Connect your systems and streamline operations with custom APIs",
      heroImage: "https://images.unsplash.com/photo-1651282462432-2e33bec6b206?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBUEklMjBkZXZlbG9wbWVudCUyMGludGVncmF0aW9ufGVufDF8fHx8MTc1ODE4OTAzMXww&ixlib=rb-4.1.0&q=80&w=1080",
      overview: "Create seamless connections between your applications, services, and data sources with our custom API development services. We build robust, scalable APIs that enable efficient data exchange and system integration.",
      keyFeatures: [
        "RESTful API Development",
        "GraphQL Implementation",
        "Third-party Integrations",
        "API Documentation",
        "Security & Authentication",
        "Rate Limiting & Monitoring",
        "Version Management",
        "Performance Optimization"
      ],
      process: [
        {
          step: "Requirements Gathering",
          description: "Analyze your integration needs, data flows, and system architecture to design optimal API solutions."
        },
        {
          step: "API Design",
          description: "Create comprehensive API specifications, including endpoints, data models, and authentication mechanisms."
        },
        {
          step: "Development & Testing",
          description: "Build robust APIs with proper error handling, validation, and comprehensive testing for reliability."
        },
        {
          step: "Documentation & Security",
          description: "Create detailed documentation and implement security measures including authentication, authorization, and rate limiting."
        },
        {
          step: "Integration & Monitoring",
          description: "Deploy APIs and integrate with your systems while setting up monitoring and analytics for performance tracking."
        }
      ],
      technologies: ["Node.js", "Python", "Express.js", "FastAPI", "MongoDB", "PostgreSQL", "AWS API Gateway", "Postman"],
      timeline: "2-6 weeks",
      benefits: [
        "Seamless System Integration",
        "Improved Data Accessibility",
        "Enhanced Automation",
        "Scalable Architecture",
        "Third-party Connectivity",
        "Streamlined Workflows"
      ],
      faqs: [
        {
          question: "What's the difference between REST and GraphQL APIs?",
          answer: "REST APIs use multiple endpoints for different resources, while GraphQL uses a single endpoint with flexible queries. We recommend the best approach based on your specific use case and requirements."
        },
        {
          question: "How do you ensure API security?",
          answer: "We implement multiple security layers including authentication, authorization, rate limiting, input validation, HTTPS encryption, and regular security audits."
        },
        {
          question: "Can you integrate with existing third-party services?",
          answer: "Yes, we specialize in integrating with popular third-party services like payment gateways, CRM systems, marketing tools, and social media platforms through their APIs."
        },
        {
          question: "Do you provide API documentation?",
          answer: "Absolutely! We create comprehensive API documentation including endpoint descriptions, request/response examples, authentication details, and integration guides."
        }
      ]
    },
    'ui-ux-design': {
      icon: <Palette className="h-12 w-12 text-primary" />,
      title: "UI/UX Design & Prototyping",
      subtitle: "User-centered design that creates exceptional digital experiences",
      heroImage: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVSSUyMFVYJTIwZGVzaWduJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc1ODE4NDI4MXww&ixlib=rb-4.1.0&q=80&w=1080",
      overview: "Create digital experiences that users love and businesses benefit from. Our UI/UX design services focus on understanding your users' needs and behaviors to design interfaces that are not only visually appealing but also intuitive, accessible, and conversion-focused.",
      keyFeatures: [
        "User Research & Analysis",
        "Information Architecture",
        "Wireframing & Prototyping",
        "Visual Design Systems",
        "Interaction Design",
        "Usability Testing",
        "Accessibility Compliance",
        "Design System Creation"
      ],
      process: [
        {
          step: "Research & Discovery",
          description: "We conduct user research, analyze competitors, and understand your business goals to inform design decisions."
        },
        {
          step: "Information Architecture",
          description: "Structure content and functionality to create logical, intuitive navigation and user flows."
        },
        {
          step: "Wireframing & Prototyping",
          description: "Create low-fidelity wireframes and interactive prototypes to test concepts before visual design."
        },
        {
          step: "Visual Design",
          description: "Apply your brand identity to create beautiful, consistent interfaces that engage and delight users."
        },
        {
          step: "Testing & Iteration",
          description: "Conduct usability testing and iterate on designs based on user feedback and performance data."
        }
      ],
      technologies: ["Figma", "Adobe Creative Suite", "Sketch", "InVision", "Principle", "Framer", "Miro", "Maze"],
      timeline: "2-6 weeks",
      benefits: [
        "Improved User Satisfaction",
        "Higher Conversion Rates",
        "Reduced Development Costs",
        "Better Brand Perception",
        "Increased User Retention",
        "Competitive Advantage"
      ],
      faqs: [
        {
          question: "What's the difference between UI and UX design?",
          answer: "UX (User Experience) focuses on the overall user journey and functionality, while UI (User Interface) deals with the visual design and interactive elements. Both are essential for successful digital products."
        },
        {
          question: "Do you conduct user research?",
          answer: "Yes, user research is a crucial part of our design process. We conduct interviews, surveys, and usability testing to understand user needs and validate design decisions."
        },
        {
          question: "Can you work with our development team?",
          answer: "Absolutely! We collaborate closely with development teams, providing detailed design specifications, assets, and ongoing support throughout the implementation process."
        },
        {
          question: "Do you create design systems?",
          answer: "Yes, we create comprehensive design systems that include style guides, component libraries, and documentation to ensure consistency across all touchpoints."
        }
      ]
    },
    'brand-identity-design': {
      icon: <Monitor className="h-12 w-12 text-primary" />,
      title: "Brand Identity Design",
      subtitle: "Complete brand identity packages that reflect your unique value proposition",
      heroImage: "https://images.unsplash.com/photo-1749104953185-d171e149ccb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwZGVzaWduJTIwbG9nb3xlbnwxfHx8fDE3NTgxMDA5Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      overview: "Build a strong, memorable brand identity that resonates with your target audience and differentiates you from competitors. Our comprehensive brand design services create cohesive visual identities that communicate your values and drive business growth.",
      keyFeatures: [
        "Logo Design & Variations",
        "Brand Guidelines & Standards",
        "Color Palette Development",
        "Typography Selection",
        "Brand Voice & Messaging",
        "Marketing Material Design",
        "Brand Asset Library",
        "Implementation Guidelines"
      ],
      process: [
        {
          step: "Brand Discovery",
          description: "Understand your business values, target audience, competitors, and brand positioning through comprehensive research."
        },
        {
          step: "Concept Development",
          description: "Create initial brand concepts, logos, and visual directions based on discovery insights and strategic positioning."
        },
        {
          step: "Design Refinement",
          description: "Refine selected concepts, develop color palettes, typography, and create comprehensive brand guidelines."
        },
        {
          step: "Asset Creation",
          description: "Design complete brand asset library including logos, icons, templates, and marketing materials."
        },
        {
          step: "Brand Implementation",
          description: "Apply brand identity across all touchpoints and provide guidelines for consistent brand implementation."
        }
      ],
      technologies: ["Adobe Illustrator", "Adobe Photoshop", "Figma", "Adobe InDesign", "Brand Book Templates", "Style Guides"],
      timeline: "2-4 weeks",
      benefits: [
        "Memorable Brand Recognition",
        "Professional Credibility",
        "Consistent Communication",
        "Competitive Differentiation",
        "Customer Trust Building",
        "Marketing Effectiveness"
      ],
      faqs: [
        {
          question: "What's included in a complete brand identity package?",
          answer: "A complete package includes logo design, color palette, typography selection, brand guidelines, business card design, letterhead, and basic marketing templates."
        },
        {
          question: "How long does brand identity design take?",
          answer: "Typically 2-4 weeks depending on complexity and number of revisions. We provide a detailed timeline during the discovery phase."
        },
        {
          question: "Can you redesign an existing brand?",
          answer: "Yes, we specialize in brand evolution and redesign while maintaining brand equity and customer recognition where appropriate."
        },
        {
          question: "Do you provide brand guidelines?",
          answer: "Absolutely! We create comprehensive brand guidelines that cover logo usage, colors, typography, voice, and application examples to ensure consistent brand implementation."
        }
      ]
    },
    'mobile-app-ui-design': {
      icon: <Smartphone className="h-12 w-12 text-primary" />,
      title: "Mobile App UI Design",
      subtitle: "Platform-specific mobile interfaces that enhance user experience and engagement",
      heroImage: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBVSSUyMGRlc2lnbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NTgxODk1MTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      overview: "Create stunning mobile app interfaces that follow platform-specific design guidelines while delivering exceptional user experiences. Our mobile UI design services focus on creating intuitive, engaging, and conversion-focused interfaces for iOS and Android applications.",
      keyFeatures: [
        "iOS Human Interface Guidelines",
        "Android Material Design",
        "Platform-specific Components",
        "Touch-friendly Interactions",
        "Adaptive Layouts",
        "Dark Mode Support",
        "Accessibility Compliance",
        "App Store Asset Creation"
      ],
      process: [
        {
          step: "Platform Analysis",
          description: "Analyze target platforms and user behaviors to determine optimal design approaches for iOS and Android."
        },
        {
          step: "User Flow Mapping",
          description: "Create detailed user flows and wireframes optimized for mobile interactions and navigation patterns."
        },
        {
          step: "Visual Design",
          description: "Design high-fidelity interfaces following platform guidelines while maintaining brand consistency."
        },
        {
          step: "Interactive Prototyping",
          description: "Create interactive prototypes to test gestures, animations, and micro-interactions."
        },
        {
          step: "Asset Preparation",
          description: "Prepare all design assets, specifications, and app store materials for development and submission."
        }
      ],
      technologies: ["Figma", "Sketch", "Adobe XD", "Principle", "Framer", "Zeplin", "iOS Design Guidelines", "Material Design"],
      timeline: "3-8 weeks",
      benefits: [
        "Platform-Optimized Experience",
        "Higher User Engagement",
        "Better App Store Performance",
        "Reduced Development Time",
        "Improved User Retention",
        "Accessibility Compliance"
      ],
      faqs: [
        {
          question: "Do you design for both iOS and Android?",
          answer: "Yes, we create platform-specific designs that follow iOS Human Interface Guidelines and Android Material Design principles while maintaining brand consistency."
        },
        {
          question: "What's included in mobile app UI design?",
          answer: "Our service includes wireframes, high-fidelity designs, interactive prototypes, design specifications, app icons, and all necessary app store assets."
        },
        {
          question: "How do you ensure designs work on different screen sizes?",
          answer: "We create adaptive designs using responsive grids and flexible layouts that work seamlessly across various device sizes and orientations."
        },
        {
          question: "Do you provide design handoff for developers?",
          answer: "Yes, we provide detailed design specifications, asset files, and use tools like Figma or Zeplin to ensure smooth handoff to development teams."
        }
      ]
    },
    'landing-page-design': {
      icon: <Globe className="h-12 w-12 text-primary" />,
      title: "Landing Page Design",
      subtitle: "High-converting landing pages optimized for lead generation and conversions",
      heroImage: "https://images.unsplash.com/photo-1671759378505-ede0506a165c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kaW5nJTIwcGFnZSUyMGRlc2lnbiUyMGNvbnZlcnNpb258ZW58MXx8fHwxNzU4MTg5NTE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      overview: "Design compelling landing pages that convert visitors into customers. Our landing page design service focuses on creating high-performing, conversion-optimized pages that align with your marketing campaigns and business objectives.",
      keyFeatures: [
        "Conversion-Focused Design",
        "A/B Testing Variations",
        "Mobile-First Approach",
        "Fast Loading Optimization",
        "Clear Call-to-Actions",
        "Lead Capture Forms",
        "Social Proof Integration",
        "Analytics Integration"
      ],
      process: [
        {
          step: "Goal Definition",
          description: "Define conversion goals, target audience, and key performance indicators for the landing page."
        },
        {
          step: "Competitor Analysis",
          description: "Analyze competitor landing pages and industry best practices to identify optimization opportunities."
        },
        {
          step: "Design Creation",
          description: "Create conversion-focused designs with clear value propositions and compelling calls-to-action."
        },
        {
          step: "A/B Test Design",
          description: "Develop multiple design variations for A/B testing to optimize conversion rates."
        },
        {
          step: "Performance Optimization",
          description: "Optimize designs for fast loading times and implement tracking for conversion analysis."
        }
      ],
      technologies: ["Figma", "Adobe Creative Suite", "Unbounce", "Leadpages", "Google Analytics", "Hotjar", "Optimizely", "WordPress"],
      timeline: "1-3 weeks",
      benefits: [
        "Higher Conversion Rates",
        "Improved ROI",
        "Better Lead Quality",
        "Reduced Bounce Rate",
        "Enhanced User Experience",
        "Data-Driven Insights"
      ],
      faqs: [
        {
          question: "What makes a landing page convert well?",
          answer: "High-converting landing pages have clear value propositions, compelling headlines, minimal distractions, strong calls-to-action, social proof, and fast loading times."
        },
        {
          question: "Do you create multiple versions for testing?",
          answer: "Yes, we create multiple design variations to A/B test different elements like headlines, CTAs, layouts, and colors to optimize conversion rates."
        },
        {
          question: "How do you measure landing page success?",
          answer: "We track metrics like conversion rate, bounce rate, time on page, scroll depth, and form completion rates to measure and optimize performance."
        },
        {
          question: "Can you integrate with our marketing tools?",
          answer: "Yes, we can integrate landing pages with popular marketing tools like CRM systems, email marketing platforms, analytics tools, and ad networks."
        }
      ]
    },
    'seo-content-marketing': {
      icon: <Search className="h-12 w-12 text-primary" />,
      title: "SEO & Content Marketing",
      subtitle: "Strategic content creation and optimization to boost search rankings and engagement",
      heroImage: "https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTRU8lMjBjb250ZW50JTIwbWFya2V0aW5nJTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzU4MTg5NTIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      overview: "Boost your online visibility and attract qualified traffic with our comprehensive SEO and content marketing services. We create valuable, search-optimized content that engages your audience and drives organic growth for your business.",
      keyFeatures: [
        "Keyword Research & Strategy",
        "On-Page SEO Optimization",
        "Technical SEO Audits",
        "Content Creation & Optimization",
        "Link Building Campaigns",
        "Local SEO Services",
        "Performance Tracking",
        "Competitor Analysis"
      ],
      process: [
        {
          step: "SEO Audit & Analysis",
          description: "Comprehensive analysis of your website's current SEO performance and identification of improvement opportunities."
        },
        {
          step: "Keyword Strategy",
          description: "Research and develop a targeted keyword strategy based on search volume, competition, and business goals."
        },
        {
          step: "Content Planning",
          description: "Create a content calendar and strategy that aligns with SEO goals and audience interests."
        },
        {
          step: "Content Creation",
          description: "Develop high-quality, SEO-optimized content including blogs, articles, guides, and landing pages."
        },
        {
          step: "Optimization & Monitoring",
          description: "Continuously optimize content and monitor rankings, traffic, and engagement metrics for ongoing improvement."
        }
      ],
      technologies: ["Google Analytics", "Search Console", "SEMrush", "Ahrefs", "Moz", "Screaming Frog", "Google Keyword Planner", "Yoast SEO"],
      timeline: "Ongoing",
      benefits: [
        "Increased Organic Traffic",
        "Higher Search Rankings",
        "Better Brand Authority",
        "Qualified Lead Generation",
        "Long-term ROI",
        "Improved User Engagement"
      ],
      faqs: [
        {
          question: "How long does it take to see SEO results?",
          answer: "SEO is a long-term strategy. You may start seeing improvements in 3-6 months, with significant results typically visible after 6-12 months of consistent optimization."
        },
        {
          question: "What types of content do you create?",
          answer: "We create various content types including blog posts, articles, guides, infographics, videos, case studies, and landing pages, all optimized for search engines."
        },
        {
          question: "Do you handle local SEO?",
          answer: "Yes, we provide local SEO services including Google My Business optimization, local citations, review management, and location-specific content creation."
        },
        {
          question: "How do you measure SEO success?",
          answer: "We track metrics like organic traffic, keyword rankings, click-through rates, bounce rate, time on page, and conversions to measure and report on SEO performance."
        }
      ]
    },
    'operations-consultancy': {
      icon: <Briefcase className="h-12 w-12 text-primary" />,
      title: "Operations Consultancy Services",
      subtitle: "Strategic guidance to optimize business operations and maximize efficiency",
      heroImage: "https://images.unsplash.com/photo-1740818576358-7596eb883cf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG9wZXJhdGlvbnMlMjBjb25zdWx0YW5jeXxlbnwxfHx8fDE3NTgxODk1MjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      overview: "Transform your business operations with our expert consultancy services. We help organizations streamline processes, implement efficient systems, and achieve operational excellence through strategic planning and digital transformation initiatives.",
      keyFeatures: [
        "Process Optimization",
        "Digital Transformation",
        "Workflow Analysis",
        "Performance Metrics",
        "Change Management",
        "Technology Integration",
        "Cost Reduction Strategies",
        "Quality Improvement"
      ],
      process: [
        {
          step: "Current State Assessment",
          description: "Comprehensive analysis of existing operations, processes, and systems to identify inefficiencies and improvement opportunities."
        },
        {
          step: "Gap Analysis",
          description: "Compare current performance with industry best practices and desired future state to identify gaps."
        },
        {
          step: "Strategy Development",
          description: "Develop customized improvement strategies and implementation roadmaps aligned with business objectives."
        },
        {
          step: "Implementation Support",
          description: "Guide and support the implementation of recommended changes with change management best practices."
        },
        {
          step: "Performance Monitoring",
          description: "Establish KPIs and monitoring systems to track improvements and ensure sustainable operational excellence."
        }
      ],
      technologies: ["Process Mapping Tools", "Microsoft Visio", "Lucidchart", "Six Sigma", "Lean Methodology", "Project Management Tools", "ERP Systems", "CRM Integration"],
      timeline: "Ongoing",
      benefits: [
        "Improved Efficiency",
        "Cost Reduction",
        "Better Quality Control",
        "Enhanced Productivity",
        "Streamlined Processes",
        "Competitive Advantage"
      ],
      faqs: [
        {
          question: "What areas of operations do you cover?",
          answer: "We cover all aspects of business operations including supply chain, production, quality control, customer service, finance, HR, and technology integration."
        },
        {
          question: "How do you measure operational improvements?",
          answer: "We establish baseline metrics and KPIs, then track improvements in areas like efficiency, cost reduction, quality scores, customer satisfaction, and employee productivity."
        },
        {
          question: "Do you provide ongoing support?",
          answer: "Yes, we offer ongoing support to ensure sustained improvements and help adapt to changing business needs and market conditions."
        },
        {
          question: "Can you help with digital transformation?",
          answer: "Absolutely! We specialize in digital transformation initiatives, helping businesses leverage technology to improve operations, automate processes, and enhance customer experiences."
        }
      ]
    },
    'virtual-assistant': {
      icon: <HelpCircle className="h-12 w-12 text-primary" />,
      title: "Virtual Assistant Services",
      subtitle: "Professional administrative support to help you focus on core business activities",
      heroImage: "https://images.unsplash.com/photo-1560346785-8263f5e55a64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXJ0dWFsJTIwYXNzaXN0YW50JTIwcmVtb3RlJTIwd29ya3xlbnwxfHx8fDE3NTgxMTE3NTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      overview: "Streamline your business operations with our professional virtual assistant services. Our skilled VAs handle administrative tasks, customer support, and specialized projects, allowing you to focus on strategic business growth and core activities.",
      keyFeatures: [
        "Administrative Support",
        "Customer Service",
        "Data Entry & Management",
        "Project Coordination",
        "Email Management",
        "Calendar Scheduling",
        "Social Media Management",
        "Research & Analysis"
      ],
      process: [
        {
          step: "Needs Assessment",
          description: "Understand your specific requirements, workflow preferences, and business objectives to match you with the right virtual assistant."
        },
        {
          step: "VA Selection & Onboarding",
          description: "Select and onboard a qualified virtual assistant with relevant skills and experience for your industry and tasks."
        },
        {
          step: "Task Setup & Training",
          description: "Establish clear processes, provide necessary training, and set up communication channels for seamless collaboration."
        },
        {
          step: "Daily Operations",
          description: "Begin regular task execution with ongoing communication, progress updates, and quality assurance."
        },
        {
          step: "Performance Review",
          description: "Regular performance reviews and process optimization to ensure maximum efficiency and satisfaction."
        }
      ],
      technologies: ["Microsoft Office Suite", "Google Workspace", "CRM Systems", "Project Management Tools", "Communication Platforms", "Time Tracking Software", "Social Media Tools", "Database Systems"],
      timeline: "Ongoing",
      benefits: [
        "Cost Savings",
        "Increased Productivity",
        "Better Time Management",
        "24/7 Availability",
        "Specialized Skills Access",
        "Scalable Support"
      ],
      faqs: [
        {
          question: "What tasks can virtual assistants handle?",
          answer: "Our VAs can handle administrative tasks, customer support, data entry, email management, calendar scheduling, research, social media management, and specialized projects based on their skills."
        },
        {
          question: "How do you ensure data security?",
          answer: "We implement strict security protocols including NDAs, secure access controls, encrypted communication, and regular security training for all virtual assistants."
        },
        {
          question: "What are the working hours?",
          answer: "We offer flexible working arrangements and can provide support during your business hours or extend coverage for different time zones as needed."
        },
        {
          question: "How do you handle quality control?",
          answer: "We have robust quality assurance processes including regular check-ins, performance reviews, task audits, and continuous training to maintain high service standards."
        }
      ]
    },
    'email-marketing': {
      icon: <Mail className="h-12 w-12 text-primary" />,
      title: "Email Marketing Automation",
      subtitle: "Automated email campaigns that nurture leads and drive customer engagement",
      heroImage: "https://images.unsplash.com/photo-1566918621183-ff90d3e0553f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWFpbCUyMG1hcmtldGluZyUyMGF1dG9tYXRpb24lMjBjYW1wYWlnbnxlbnwxfHx8fDE3NTgxODk1Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      overview: "Build stronger customer relationships and drive revenue with our comprehensive email marketing automation services. We create targeted, personalized email campaigns that nurture leads, engage customers, and maximize your marketing ROI.",
      keyFeatures: [
        "Automated Email Sequences",
        "Customer Segmentation",
        "Personalization Engine",
        "A/B Testing",
        "Performance Analytics",
        "List Management",
        "Template Design",
        "Deliverability Optimization"
      ],
      process: [
        {
          step: "Strategy Development",
          description: "Define email marketing goals, target audience segments, and campaign strategies aligned with your business objectives."
        },
        {
          step: "List Building & Segmentation",
          description: "Build and segment email lists based on demographics, behavior, and preferences for targeted messaging."
        },
        {
          step: "Campaign Creation",
          description: "Design and develop email templates, create compelling content, and set up automated workflows."
        },
        {
          step: "Testing & Launch",
          description: "A/B test different elements like subject lines, content, and CTAs before launching campaigns."
        },
        {
          step: "Analysis & Optimization",
          description: "Monitor performance metrics and continuously optimize campaigns for better engagement and conversions."
        }
      ],
      technologies: ["Mailchimp", "HubSpot", "Constant Contact", "SendGrid", "Campaign Monitor", "ActiveCampaign", "Klaviyo", "Google Analytics"],
      timeline: "Ongoing",
      benefits: [
        "Higher ROI",
        "Improved Customer Retention",
        "Better Lead Nurturing",
        "Increased Sales",
        "Enhanced Brand Loyalty",
        "Automated Workflows"
      ],
      faqs: [
        {
          question: "How do you ensure high email deliverability?",
          answer: "We follow best practices including proper authentication, list hygiene, content optimization, and monitoring sender reputation to ensure emails reach inboxes."
        },
        {
          question: "What types of email campaigns do you create?",
          answer: "We create welcome series, promotional campaigns, newsletters, abandoned cart emails, re-engagement campaigns, and automated drip sequences based on your needs."
        },
        {
          question: "How do you personalize email content?",
          answer: "We use customer data, behavior tracking, and segmentation to personalize subject lines, content, product recommendations, and send times for each recipient."
        },
        {
          question: "What metrics do you track?",
          answer: "We track open rates, click-through rates, conversion rates, unsubscribe rates, bounce rates, and ROI to measure campaign performance and optimize results."
        }
      ]
    },
    'business-analytics': {
      icon: <BarChart className="h-12 w-12 text-primary" />,
      title: "Business Analytics & Reporting",
      subtitle: "Data-driven insights and reporting to make informed business decisions",
      heroImage: "https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFuYWx5dGljcyUyMGRhdGElMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzU4MTgwNTI2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      overview: "Transform your business data into actionable insights with our comprehensive analytics and reporting services. We help you understand customer behavior, optimize operations, and make data-driven decisions that drive growth and profitability.",
      keyFeatures: [
        "Custom Dashboard Creation",
        "Data Visualization",
        "KPI Tracking",
        "Predictive Analytics",
        "Performance Reporting",
        "Business Intelligence",
        "Data Integration",
        "Automated Reporting"
      ],
      process: [
        {
          step: "Data Assessment",
          description: "Evaluate your current data sources, quality, and accessibility to understand available information and identify gaps."
        },
        {
          step: "Analytics Strategy",
          description: "Define key metrics, KPIs, and reporting requirements based on your business goals and decision-making needs."
        },
        {
          step: "Dashboard Development",
          description: "Create custom dashboards and reports that provide clear, actionable insights into your business performance."
        },
        {
          step: "Implementation & Training",
          description: "Implement analytics solutions and train your team on how to interpret and use the data effectively."
        },
        {
          step: "Ongoing Optimization",
          description: "Continuously refine analytics and reporting based on changing business needs and new data sources."
        }
      ],
      technologies: ["Google Analytics", "Power BI", "Tableau", "Google Data Studio", "SQL", "Python", "R", "Excel", "Looker"],
      timeline: "Ongoing",
      benefits: [
        "Better Decision Making",
        "Improved ROI",
        "Operational Efficiency",
        "Customer Insights",
        "Performance Optimization",
        "Competitive Advantage"
      ],
      faqs: [
        {
          question: "What data sources can you integrate?",
          answer: "We can integrate data from various sources including CRM systems, marketing platforms, sales tools, financial systems, social media, and web analytics."
        },
        {
          question: "How do you ensure data accuracy?",
          answer: "We implement data validation rules, regular audits, and quality checks to ensure data accuracy and reliability in all reports and dashboards."
        },
        {
          question: "Can you create real-time dashboards?",
          answer: "Yes, we can create real-time dashboards that automatically update with the latest data, allowing you to monitor business performance continuously."
        },
        {
          question: "Do you provide training on analytics tools?",
          answer: "Absolutely! We provide comprehensive training on how to use dashboards, interpret data, and generate insights to maximize the value of your analytics investment."
        }
      ]
    },
    'devops-automation': {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: "DevOps & Automation",
      subtitle: "Streamline development and deployment with modern DevOps practices and automation",
      heroImage: "https://images.unsplash.com/photo-1644165918597-f182dc5e43f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEZXZPcHMlMjBhdXRvbWF0aW9uJTIwaW5mcmFzdHJ1Y3R1cmV8ZW58MXx8fHwxNzU4MTg5NTM1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      overview: "Accelerate your software delivery and improve reliability with our DevOps and automation services. We implement CI/CD pipelines, infrastructure automation, and monitoring solutions that enhance development velocity while maintaining high quality and security standards.",
      keyFeatures: [
        "CI/CD Pipeline Setup",
        "Infrastructure as Code",
        "Automated Testing",
        "Container Orchestration",
        "Monitoring & Logging",
        "Security Integration",
        "Performance Optimization",
        "Release Management"
      ],
      process: [
        {
          step: "Current State Analysis",
          description: "Assess existing development processes, tools, and infrastructure to identify automation opportunities and pain points."
        },
        {
          step: "DevOps Strategy",
          description: "Design a comprehensive DevOps strategy including tool selection, process improvements, and automation roadmap."
        },
        {
          step: "Pipeline Implementation",
          description: "Set up CI/CD pipelines, automated testing, and deployment processes to streamline software delivery."
        },
        {
          step: "Monitoring & Security",
          description: "Implement comprehensive monitoring, logging, and security measures across the development and deployment lifecycle."
        },
        {
          step: "Optimization & Training",
          description: "Continuously optimize processes and provide team training on DevOps best practices and tools."
        }
      ],
      technologies: ["Docker", "Kubernetes", "Jenkins", "GitLab", "AWS CodePipeline", "Terraform", "Ansible", "Prometheus", "Grafana"],
      timeline: "3-8 weeks",
      benefits: [
        "Faster Deployment",
        "Improved Quality",
        "Reduced Manual Errors",
        "Better Collaboration",
        "Enhanced Security",
        "Scalable Infrastructure"
      ],
      faqs: [
        {
          question: "What is DevOps and how can it benefit our team?",
          answer: "DevOps combines development and operations practices to automate and streamline software delivery, resulting in faster releases, better quality, and improved collaboration."
        },
        {
          question: "How long does it take to implement DevOps practices?",
          answer: "Implementation timeline varies based on complexity, but basic CI/CD pipelines can be set up in 3-4 weeks, while comprehensive DevOps transformation may take 2-3 months."
        },
        {
          question: "Do you provide training for our development team?",
          answer: "Yes, we provide comprehensive training on DevOps tools, practices, and methodologies to ensure your team can effectively maintain and improve the implemented solutions."
        },
        {
          question: "Can you integrate with our existing tools?",
          answer: "Absolutely! We work with your existing development tools and can integrate new DevOps solutions seamlessly with your current technology stack."
        }
      ]
    },
    'database-management': {
      icon: <Database className="h-12 w-12 text-primary" />,
      title: "Database Management",
      subtitle: "Professional database design, optimization, and management for peak performance",
      heroImage: "https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhYmFzZSUyMG1hbmFnZW1lbnQlMjBzZXJ2ZXJ8ZW58MXx8fHwxNzU4MTg5NTM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      overview: "Optimize your data infrastructure with our comprehensive database management services. We design, implement, and maintain high-performance database solutions that ensure data integrity, security, and scalability for your business applications.",
      keyFeatures: [
        "Database Design & Architecture",
        "Performance Tuning",
        "Backup & Recovery Solutions",
        "Security Implementation",
        "Migration Services",
        "Monitoring & Maintenance",
        "Scalability Planning",
        "Disaster Recovery"
      ],
      process: [
        {
          step: "Database Assessment",
          description: "Analyze current database performance, structure, and identify optimization opportunities and potential issues."
        },
        {
          step: "Design & Planning",
          description: "Design optimal database architecture considering performance, scalability, security, and business requirements."
        },
        {
          step: "Implementation & Migration",
          description: "Implement new database solutions or migrate existing data with minimal downtime and data integrity."
        },
        {
          step: "Optimization & Security",
          description: "Fine-tune performance, implement security measures, and establish backup and recovery procedures."
        },
        {
          step: "Monitoring & Maintenance",
          description: "Provide ongoing monitoring, maintenance, and support to ensure optimal database performance and availability."
        }
      ],
      technologies: ["MySQL", "PostgreSQL", "MongoDB", "SQL Server", "Oracle", "Redis", "AWS RDS", "Azure Database", "Google Cloud SQL"],
      timeline: "2-6 weeks",
      benefits: [
        "Improved Performance",
        "Enhanced Security",
        "Better Scalability",
        "Reduced Downtime",
        "Data Integrity",
        "Cost Optimization"
      ],
      faqs: [
        {
          question: "Which database technology should we use?",
          answer: "The choice depends on your specific requirements including data structure, scalability needs, performance requirements, and budget. We help evaluate and recommend the best solution."
        },
        {
          question: "How do you ensure database security?",
          answer: "We implement multiple security layers including encryption, access controls, audit logging, regular security updates, and compliance with industry standards."
        },
        {
          question: "Can you help with database migration?",
          answer: "Yes, we specialize in database migrations including schema conversion, data transfer, testing, and ensuring minimal downtime during the migration process."
        },
        {
          question: "Do you provide 24/7 database monitoring?",
          answer: "We offer various support levels including 24/7 monitoring and support to ensure your database systems remain available and perform optimally."
        }
      ]
    },
    'maintenance-support': {
      icon: <Wrench className="h-12 w-12 text-primary" />,
      title: "Ongoing Maintenance & Support",
      subtitle: "Reliable technical support to keep your digital assets running smoothly and securely",
      heroImage: "https://images.unsplash.com/photo-1753964724380-2c5ae02512a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJVCUyMG1haW50ZW5hbmNlJTIwc3VwcG9ydCUyMHRlY2huaWNhbHxlbnwxfHx8fDE3NTgxODk1NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      overview: "Ensure your digital infrastructure remains secure, updated, and performing optimally with our comprehensive maintenance and support services. We provide proactive monitoring, regular updates, and rapid issue resolution to minimize downtime and maximize performance.",
      keyFeatures: [
        "24/7 System Monitoring",
        "Security Updates & Patches",
        "Performance Optimization",
        "Bug Fixes & Troubleshooting",
        "Backup Management",
        "Technical Support",
        "Software Updates",
        "Preventive Maintenance"
      ],
      process: [
        {
          step: "System Assessment",
          description: "Comprehensive evaluation of your current systems, identifying maintenance needs and potential vulnerabilities."
        },
        {
          step: "Maintenance Planning",
          description: "Develop a customized maintenance schedule and support plan based on your business requirements and criticality."
        },
        {
          step: "Proactive Monitoring",
          description: "Implement continuous monitoring systems to detect and prevent issues before they impact your business."
        },
        {
          step: "Regular Maintenance",
          description: "Execute scheduled maintenance activities including updates, optimizations, and preventive measures."
        },
        {
          step: "Incident Response",
          description: "Provide rapid response and resolution for any technical issues or emergencies that arise."
        }
      ],
      technologies: ["Monitoring Tools", "Backup Solutions", "Security Scanners", "Performance Analyzers", "Remote Access Tools", "Ticketing Systems", "Update Management", "Cloud Platforms"],
      timeline: "Ongoing",
      benefits: [
        "Reduced Downtime",
        "Enhanced Security",
        "Improved Performance",
        "Cost Savings",
        "Peace of Mind",
        "Extended System Life"
      ],
      faqs: [
        {
          question: "What types of systems do you support?",
          answer: "We provide maintenance and support for websites, web applications, mobile apps, databases, cloud infrastructure, and various software systems across different platforms."
        },
        {
          question: "How quickly do you respond to issues?",
          answer: "Our response times vary by support level, ranging from immediate response for critical issues to 24-48 hours for standard requests, all outlined in our SLA."
        },
        {
          question: "Do you provide emergency support?",
          answer: "Yes, we offer emergency support services with rapid response times for critical issues that could impact your business operations."
        },
        {
          question: "Can you work with systems built by other teams?",
          answer: "Absolutely! We can take over maintenance and support for systems developed by other teams, starting with a comprehensive assessment and knowledge transfer."
        }
      ]
    },
    'digital-marketing': {
      icon: <TrendingUp className="h-12 w-12 text-primary" />,
      title: "Digital Marketing",
      subtitle: "Data-driven marketing strategies to grow your online presence and reach your target audience",
      heroImage: "https://images.unsplash.com/photo-1599658880436-c61792e70672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc1ODE1NjgxMHww&ixlib=rb-4.1.0&q=80&w=1080",
      overview: "Grow your business with comprehensive digital marketing strategies that drive results. Our data-driven approach combines multiple channels and tactics to increase your online visibility, engage your target audience, and convert prospects into loyal customers.",
      keyFeatures: [
        "SEO & Content Marketing",
        "Social Media Management",
        "Pay-Per-Click Advertising",
        "Email Marketing Campaigns",
        "Conversion Rate Optimization",
        "Marketing Analytics",
        "Brand Management",
        "Influencer Marketing"
      ],
      process: [
        {
          step: "Market Analysis",
          description: "Analyze your market, competitors, and target audience to identify opportunities and create strategic positioning."
        },
        {
          step: "Strategy Development",
          description: "Develop a comprehensive digital marketing strategy aligned with your business goals and budget."
        },
        {
          step: "Campaign Implementation",
          description: "Execute multi-channel campaigns across search engines, social media, email, and other digital platforms."
        },
        {
          step: "Performance Monitoring",
          description: "Track key metrics and KPIs to measure campaign performance and identify optimization opportunities."
        },
        {
          step: "Optimization & Growth",
          description: "Continuously optimize campaigns based on data insights to improve ROI and drive sustainable growth."
        }
      ],
      technologies: ["Google Analytics", "Google Ads", "Facebook Business", "Mailchimp", "HubSpot", "SEMrush", "Hootsuite", "Buffer"],
      timeline: "Ongoing",
      benefits: [
        "Increased Website Traffic",
        "Higher Lead Generation",
        "Better Brand Awareness",
        "Improved ROI",
        "Enhanced Customer Engagement",
        "Competitive Market Position"
      ],
      faqs: [
        {
          question: "Which digital marketing channels do you focus on?",
          answer: "We work across all major digital channels including search engines, social media, email, content marketing, and paid advertising. We recommend the best mix based on your audience and goals."
        },
        {
          question: "How do you measure marketing success?",
          answer: "We track relevant KPIs such as website traffic, lead generation, conversion rates, cost per acquisition, and ROI. We provide regular reports with actionable insights."
        },
        {
          question: "Do you handle social media management?",
          answer: "Yes, we provide comprehensive social media management including content creation, community management, paid advertising, and performance analytics across all major platforms."
        },
        {
          question: "Can you work with our existing marketing tools?",
          answer: "Absolutely! We integrate with popular marketing tools like CRM systems, email platforms, and analytics tools to create a seamless marketing ecosystem."
        }
      ]
    },
    'cloud-migration': {
      icon: <Cloud className="h-12 w-12 text-primary" />,
      title: "Cloud Migration Services",
      subtitle: "Seamless migration to modern cloud platforms for scalability and efficiency",
      heroImage: "https://images.unsplash.com/photo-1676378280996-cff6b481d701?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMGluZnJhc3RydWN0dXJlfGVufDF8fHx8MTc1ODExNTkzNHww&ixlib=rb-4.1.0&q=80&w=1080",
      overview: "Modernize your IT infrastructure with our comprehensive cloud migration services. We help businesses transition from on-premises systems to cloud platforms like AWS, Azure, and Google Cloud, ensuring improved scalability, security, and cost-efficiency while minimizing downtime and business disruption.",
      keyFeatures: [
        "Cloud Readiness Assessment",
        "Migration Strategy & Planning",
        "Data Migration & Synchronization",
        "Application Modernization",
        "Infrastructure Optimization",
        "Security & Compliance",
        "Performance Monitoring",
        "Cost Optimization"
      ],
      process: [
        {
          step: "Assessment & Planning",
          description: "Evaluate your current infrastructure, applications, and data to create a comprehensive migration roadmap."
        },
        {
          step: "Migration Strategy",
          description: "Design the optimal migration approach whether it's lift-and-shift, re-platforming, or complete modernization."
        },
        {
          step: "Pilot Migration",
          description: "Start with a pilot project to validate the migration approach and identify any potential issues."
        },
        {
          step: "Full Migration",
          description: "Execute the complete migration plan with minimal downtime and business impact."
        },
        {
          step: "Optimization & Support",
          description: "Optimize performance, costs, and security while providing ongoing support and monitoring."
        }
      ],
      technologies: ["AWS", "Microsoft Azure", "Google Cloud Platform", "Docker", "Kubernetes", "Terraform", "Ansible", "CloudFormation"],
      timeline: "4-12 weeks",
      benefits: [
        "Reduced IT Costs",
        "Improved Scalability",
        "Enhanced Security",
        "Better Disaster Recovery",
        "Increased Agility",
        "Global Accessibility"
      ],
      faqs: [
        {
          question: "Which cloud platform should we choose?",
          answer: "The choice depends on your specific requirements, existing technology stack, compliance needs, and budget. We help evaluate and recommend the best platform for your needs."
        },
        {
          question: "How long does cloud migration take?",
          answer: "Timeline varies based on the complexity and size of your infrastructure. Simple migrations might take 4-6 weeks, while complex enterprise migrations can take several months."
        },
        {
          question: "What about data security during migration?",
          answer: "We follow industry best practices for secure data migration, including encryption, secure transfer protocols, and comprehensive backup strategies to ensure data integrity."
        },
        {
          question: "Do you provide post-migration support?",
          answer: "Yes, we provide comprehensive post-migration support including monitoring, optimization, troubleshooting, and ongoing maintenance to ensure optimal performance."
        }
      ]
    }
  };

  const service = serviceData[serviceId];

  if (!service) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
        <p className="text-muted-foreground mb-8">The requested service could not be found.</p>
        <Button onClick={() => onNavigate('services')}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Services
        </Button>
      </div>
    );
  }

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Button 
          variant="outline" 
          onClick={() => onNavigate('services')}
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Services
        </Button>

        {/* Hero Section */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                {service.icon}
                <div>
                  <h1 className="text-4xl font-bold mb-2">{service.title}</h1>
                  <p className="text-xl text-muted-foreground">{service.subtitle}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <Badge variant="secondary" className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {service.timeline}
                </Badge>
              </div>
              
              <p className="text-lg text-muted-foreground mb-8">{service.overview}</p>
              
              <Button 
                size="lg" 
                onClick={() => onNavigate('contact')}
                className="mr-4"
              >
                Get Quote
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => onNavigate('booking')}
              >
                Schedule Consultation
              </Button>
            </div>
            
            <div>
              <ImageWithFallback
                src={service.heroImage}
                alt={service.title}
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Key Features & Capabilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.keyFeatures.map((feature: string, index: number) => (
              <Card key={index} className="p-6 text-center">
                <CheckCircle className="h-8 w-8 text-primary mx-auto mb-4" />
                <p className="font-medium">{feature}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Process</h2>
          <div className="space-y-6">
            {service.process.map((step: any, index: number) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{step.step}</h4>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Technologies & Benefits Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Technologies */}
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6">Technologies We Use</h3>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((tech: string, index: number) => (
                <Badge key={index} variant="secondary" className="text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>

          {/* Benefits */}
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6">Key Benefits</h3>
            <div className="space-y-3">
              {service.benefits.map((benefit: string, index: number) => (
                <div key={index} className="flex items-center gap-3">
                  <Target className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="max-w-4xl mx-auto">
            {service.faqs.map((faq: any, index: number) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA Section */}
        <Card className="p-12 text-center bg-primary text-primary-foreground">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 opacity-90">
            Let's discuss how our {service.title.toLowerCase()} services can help transform your business and achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => navigate('/contact')}
            >
              Get Detailed Quote
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              onClick={() => navigate('/BookingPage')}
            >
              Schedule Free Consultation
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}