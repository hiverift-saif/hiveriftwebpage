import { 
  Building2, Shield, Code, Users, Headphones, Lightbulb, Lock, Zap, Handshake,
  TrendingUp, BarChart3, Activity, Heart, Globe, GraduationCap, Cpu,
  Factory, ShoppingBag, Plane, Briefcase, Truck, Radio, Zap as Energy, Building
} from "lucide-react";
import { createElement } from "react";

export const industryData = {
  "banking": {
    id: "banking",
    name: "Banking & Financial Services",
    hero: {
      headline: "🏦 Transforming Banking for the Digital Era",
      subtext: "HiveRift empowers banks with cutting-edge fintech solutions, secure digital platforms, and automated workflows. From mobile banking to fraud detection and regulatory compliance, we help financial institutions deliver exceptional customer experiences while maintaining the highest security standards.",
      ctaText: "👉 Explore Our Solutions",
      imageQuery: "banking fintech digital"
    },
    whyChooseUs: {
      title: "Why Banks Choose HiveRift",
      items: [
        {
          icon: createElement(Shield, { className: "h-8 w-8 text-blue-400" }),
          title: "Security First",
          description: "Bank-grade security with encryption, fraud detection, and regulatory compliance."
        },
        {
          icon: createElement(Zap, { className: "h-8 w-8 text-blue-400" }),
          title: "Digital Innovation",
          description: "Modern fintech solutions that enhance customer engagement and operational efficiency."
        },
        {
          icon: createElement(Users, { className: "h-8 w-8 text-blue-400" }),
          title: "Customer-Centric",
          description: "Seamless digital banking experiences across all touchpoints and platforms."
        },
        {
          icon: createElement(BarChart3, { className: "h-8 w-8 text-blue-400" }),
          title: "Data-Driven Insights",
          description: "Advanced analytics for risk management, customer insights, and business intelligence."
        }
      ]
    },
    services: {
      title: "Our Banking IT Solutions",
      items: [
        {
          title: "Digital Banking Platforms",
          description: "Comprehensive online and mobile banking",
          features: ["Mobile banking apps", "Internet banking portals", "Digital wallet integration"]
        },
        {
          title: "Payment Processing Systems",
          description: "Secure and efficient payment solutions",
          features: ["Real-time payment processing", "Cross-border transactions", "Digital payment gateways"]
        },
        {
          title: "Risk Management & Compliance",
          description: "Advanced risk and compliance tools",
          features: ["Fraud detection systems", "AML/KYC automation", "Regulatory reporting"]
        },
        {
          title: "Core Banking Solutions",
          description: "Modern core banking infrastructure",
          features: ["Account management", "Loan processing", "Customer relationship management"]
        }
      ]
    },
    advantages: {
      title: "The HiveRift Advantage",
      items: [
        {
          icon: createElement(Lock, { className: "h-8 w-8 text-blue-400" }),
          title: "Enterprise Security",
          description: "Military-grade security protecting financial data and transactions."
        },
        {
          icon: createElement(Lightbulb, { className: "h-8 w-8 text-blue-400" }),
          title: "Innovation Leadership",
          description: "Cutting-edge fintech solutions that keep you ahead of the competition."
        },
        {
          icon: createElement(Zap, { className: "h-8 w-8 text-blue-400" }),
          title: "Operational Excellence",
          description: "Streamlined processes that reduce costs and improve efficiency."
        },
        {
          icon: createElement(Globe, { className: "h-8 w-8 text-blue-400" }),
          title: "Global Compliance",
          description: "Meeting international banking standards and regulatory requirements."
        }
      ]
    },
    cta: {
      headline: "Transform Your Banking Services with HiveRift",
      subtext: "From digital banking to advanced analytics, HiveRift delivers secure, innovative solutions that drive growth in the financial sector.",
      ctaText: "📩 Talk to Our Experts",
      backgroundImageQuery: "banking digital transformation fintech"
    }
  },
  "capital-markets": {
    id: "capital-markets",
    name: "Capital Markets",
    hero: {
      headline: "📈 Powering Capital Markets with Advanced Technology",
      subtext: "HiveRift provides sophisticated trading platforms, risk management systems, and regulatory compliance solutions for capital markets. From algorithmic trading to real-time analytics, we help financial firms capitalize on market opportunities with cutting-edge technology.",
      ctaText: "👉 Explore Our Solutions",
      imageQuery: "trading capital markets finance"
    },
    whyChooseUs: {
      title: "Why Capital Markets Firms Choose HiveRift",
      items: [
        {
          icon: createElement(TrendingUp, { className: "h-8 w-8 text-blue-400" }),
          title: "High-Performance Trading",
          description: "Ultra-low latency systems for competitive advantage in fast-moving markets."
        },
        {
          icon: createElement(BarChart3, { className: "h-8 w-8 text-blue-400" }),
          title: "Real-Time Analytics",
          description: "Advanced market data analysis and predictive modeling for informed decisions."
        },
        {
          icon: createElement(Shield, { className: "h-8 w-8 text-blue-400" }),
          title: "Risk Management",
          description: "Comprehensive risk assessment and mitigation tools for portfolio protection."
        },
        {
          icon: createElement(Globe, { className: "h-8 w-8 text-blue-400" }),
          title: "Regulatory Compliance",
          description: "Automated compliance monitoring and reporting for global markets."
        }
      ]
    },
    services: {
      title: "Our Capital Markets Solutions",
      items: [
        {
          title: "Trading Platforms",
          description: "High-performance trading systems",
          features: ["Algorithmic trading systems", "Order management systems", "Market data feeds integration"]
        },
        {
          title: "Risk Management Systems",
          description: "Comprehensive risk assessment",
          features: ["Real-time risk monitoring", "Portfolio risk analytics", "Stress testing platforms"]
        },
        {
          title: "Regulatory Reporting",
          description: "Automated compliance solutions",
          features: ["MiFID II reporting", "EMIR compliance", "Trade surveillance systems"]
        },
        {
          title: "Market Data Analytics",
          description: "Advanced data processing",
          features: ["Real-time market analysis", "Predictive modeling", "Performance attribution"]
        }
      ]
    },
    advantages: {
      title: "The HiveRift Advantage",
      items: [
        {
          icon: createElement(Zap, { className: "h-8 w-8 text-blue-400" }),
          title: "Ultra-Low Latency",
          description: "Microsecond trading execution for maximum market advantage."
        },
        {
          icon: createElement(Activity, { className: "h-8 w-8 text-blue-400" }),
          title: "Real-Time Processing",
          description: "Instant market data processing and decision support systems."
        },
        {
          icon: createElement(Lock, { className: "h-8 w-8 text-blue-400" }),
          title: "Enterprise Security",
          description: "Bank-grade security protecting sensitive trading data."
        },
        {
          icon: createElement(Building2, { className: "h-8 w-8 text-blue-400" }),
          title: "Scalable Infrastructure",
          description: "Systems that grow with your trading volume and market expansion."
        }
      ]
    },
    cta: {
      headline: "Accelerate Your Capital Markets Success",
      subtext: "From high-frequency trading to comprehensive risk management, HiveRift delivers the technology edge you need in capital markets.",
      ctaText: "📩 Talk to Our Experts",
      backgroundImageQuery: "capital markets trading technology"
    }
  },
  "communications": {
    id: "communications",
    name: "Communications & Media",
    hero: {
      headline: "📡 Connecting the World Through Advanced Communication Tech",
      subtext: "HiveRift empowers telecom and media companies with next-generation infrastructure, content delivery systems, and customer engagement platforms. From 5G networks to streaming platforms, we help communication providers deliver exceptional experiences at scale.",
      ctaText: "👉 Explore Our Solutions",
      imageQuery: "telecommunications 5G media"
    },
    whyChooseUs: {
      title: "Why Communication Companies Choose HiveRift",
      items: [
        {
          icon: createElement(Radio, { className: "h-8 w-8 text-blue-400" }),
          title: "Next-Gen Infrastructure",
          description: "5G-ready networks and cloud-native communication platforms."
        },
        {
          icon: createElement(Globe, { className: "h-8 w-8 text-blue-400" }),
          title: "Global Scalability",
          description: "Platforms that scale to millions of users across multiple regions."
        },
        {
          icon: createElement(Zap, { className: "h-8 w-8 text-blue-400" }),
          title: "Ultra-Fast Performance",
          description: "Low-latency solutions for real-time communication and media streaming."
        },
        {
          icon: createElement(Users, { className: "h-8 w-8 text-blue-400" }),
          title: "Enhanced User Experience",
          description: "Intuitive interfaces and seamless connectivity across all devices."
        }
      ]
    },
    services: {
      title: "Our Communication & Media Solutions",
      items: [
        {
          title: "Network Infrastructure",
          description: "Advanced telecom infrastructure",
          features: ["5G network deployment", "Network optimization", "Infrastructure monitoring"]
        },
        {
          title: "Content Delivery Platforms",
          description: "Media streaming and distribution",
          features: ["Video streaming platforms", "Content management systems", "CDN optimization"]
        },
        {
          title: "Customer Experience Platforms",
          description: "Enhanced customer engagement",
          features: ["Self-service portals", "Omnichannel support", "Billing and subscription management"]
        },
        {
          title: "IoT and Connected Services",
          description: "Internet of Things solutions",
          features: ["IoT device management", "Connected vehicle platforms", "Smart city solutions"]
        }
      ]
    },
    advantages: {
      title: "The HiveRift Advantage",
      items: [
        {
          icon: createElement(Lightbulb, { className: "h-8 w-8 text-blue-400" }),
          title: "Innovation Leadership",
          description: "Cutting-edge communication technologies that set industry standards."
        },
        {
          icon: createElement(Shield, { className: "h-8 w-8 text-blue-400" }),
          title: "Network Security",
          description: "Robust security measures protecting communication infrastructure."
        },
        {
          icon: createElement(TrendingUp, { className: "h-8 w-8 text-blue-400" }),
          title: "Scalable Growth",
          description: "Solutions that evolve with your subscriber base and technology needs."
        },
        {
          icon: createElement(Handshake, { className: "h-8 w-8 text-blue-400" }),
          title: "Reliable Partnership",
          description: "24/7 support ensuring maximum uptime for critical communication services."
        }
      ]
    },
    cta: {
      headline: "Build the Future of Communication with HiveRift",
      subtext: "From 5G networks to streaming platforms, HiveRift delivers the technology infrastructure that keeps the world connected.",
      ctaText: "📩 Talk to Our Experts",
      backgroundImageQuery: "telecommunications 5G technology"
    }
  },
  "consumer-goods": {
    id: "consumer-goods",
    name: "Consumer Goods",
    hero: {
      headline: "🛒 Revolutionizing Consumer Goods with Digital Innovation",
      subtext: "HiveRift helps consumer goods companies modernize their operations with smart supply chain management, e-commerce platforms, and data-driven marketing solutions. From product development to customer engagement, we enable brands to thrive in the digital marketplace.",
      ctaText: "👉 Explore Our Solutions",
      imageQuery: "consumer goods retail technology"
    },
    whyChooseUs: {
      title: "Why Consumer Goods Companies Choose HiveRift",
      items: [
        {
          icon: createElement(ShoppingBag, { className: "h-8 w-8 text-blue-400" }),
          title: "Market-Driven Solutions",
          description: "Technology that responds to changing consumer preferences and market trends."
        },
        {
          icon: createElement(BarChart3, { className: "h-8 w-8 text-blue-400" }),
          title: "Data-Driven Insights",
          description: "Advanced analytics for demand forecasting and consumer behavior analysis."
        },
        {
          icon: createElement(Truck, { className: "h-8 w-8 text-blue-400" }),
          title: "Supply Chain Excellence",
          description: "End-to-end visibility and optimization across global supply networks."
        },
        {
          icon: createElement(Globe, { className: "h-8 w-8 text-blue-400" }),
          title: "Omnichannel Presence",
          description: "Seamless integration across online, retail, and direct-to-consumer channels."
        }
      ]
    },
    services: {
      title: "Our Consumer Goods Solutions",
      items: [
        {
          title: "E-Commerce & Direct-to-Consumer",
          description: "Digital commerce platforms",
          features: ["Online store development", "Mobile commerce apps", "Subscription management systems"]
        },
        {
          title: "Supply Chain Management",
          description: "End-to-end supply chain optimization",
          features: ["Inventory management", "Demand planning", "Supplier collaboration platforms"]
        },
        {
          title: "Customer Analytics & Marketing",
          description: "Data-driven marketing solutions",
          features: ["Customer segmentation", "Personalized marketing campaigns", "Social media integration"]
        },
        {
          title: "Product Lifecycle Management",
          description: "Innovation and development platforms",
          features: ["Product development workflows", "Quality management systems", "Compliance tracking"]
        }
      ]
    },
    advantages: {
      title: "The HiveRift Advantage",
      items: [
        {
          icon: createElement(Lightbulb, { className: "h-8 w-8 text-blue-400" }),
          title: "Innovation Catalyst",
          description: "Technology solutions that accelerate product innovation and market entry."
        },
        {
          icon: createElement(TrendingUp, { className: "h-8 w-8 text-blue-400" }),
          title: "Market Agility",
          description: "Flexible platforms that adapt to rapidly changing consumer demands."
        },
        {
          icon: createElement(Users, { className: "h-8 w-8 text-blue-400" }),
          title: "Consumer-Centric",
          description: "Solutions focused on enhancing customer experience and brand loyalty."
        },
        {
          icon: createElement(Globe, { className: "h-8 w-8 text-blue-400" }),
          title: "Global Scale",
          description: "Technology infrastructure supporting worldwide operations and expansion."
        }
      ]
    },
    cta: {
      headline: "Transform Your Consumer Goods Business",
      subtext: "From digital commerce to smart supply chains, HiveRift delivers technology solutions that drive growth in the consumer goods sector.",
      ctaText: "📩 Talk to Our Experts",
      backgroundImageQuery: "consumer goods digital transformation"
    }
  },
  "education": {
    id: "education",
    name: "Education & E-Learning",
    hero: {
      headline: "🎓 Transforming Education Through Digital Innovation",
      subtext: "HiveRift empowers educational institutions and e-learning platforms with cutting-edge technology solutions. From learning management systems to virtual classrooms and student analytics, we help educators deliver engaging, personalized learning experiences.",
      ctaText: "👉 Explore Our Solutions",
      imageQuery: "education e-learning technology"
    },
    whyChooseUs: {
      title: "Why Educational Institutions Choose HiveRift",
      items: [
        {
          icon: createElement(GraduationCap, { className: "h-8 w-8 text-blue-400" }),
          title: "Learning-Focused",
          description: "Technology designed specifically for educational outcomes and student success."
        },
        {
          icon: createElement(Users, { className: "h-8 w-8 text-blue-400" }),
          title: "Inclusive Access",
          description: "Platforms that ensure equal access to quality education for all learners."
        },
        {
          icon: createElement(BarChart3, { className: "h-8 w-8 text-blue-400" }),
          title: "Data-Driven Insights",
          description: "Analytics that help educators understand and improve student performance."
        },
        {
          icon: createElement(Globe, { className: "h-8 w-8 text-blue-400" }),
          title: "Scalable Solutions",
          description: "Technology that grows from individual classrooms to global educational networks."
        }
      ]
    },
    services: {
      title: "Our Education Technology Solutions",
      items: [
        {
          title: "Learning Management Systems",
          description: "Comprehensive educational platforms",
          features: ["Course management", "Student progress tracking", "Assignment and grading systems"]
        },
        {
          title: "Virtual Classrooms & E-Learning",
          description: "Interactive online learning environments",
          features: ["Video conferencing integration", "Interactive whiteboards", "Multimedia content delivery"]
        },
        {
          title: "Student Information Systems",
          description: "Complete student lifecycle management",
          features: ["Enrollment management", "Academic records", "Communication platforms"]
        },
        {
          title: "Educational Analytics",
          description: "Data-driven educational insights",
          features: ["Learning analytics", "Performance dashboards", "Predictive modeling for student success"]
        }
      ]
    },
    advantages: {
      title: "The HiveRift Advantage",
      items: [
        {
          icon: createElement(Lightbulb, { className: "h-8 w-8 text-blue-400" }),
          title: "Educational Innovation",
          description: "Cutting-edge technology that enhances teaching and learning experiences."
        },
        {
          icon: createElement(Shield, { className: "h-8 w-8 text-blue-400" }),
          title: "Privacy & Security",
          description: "FERPA-compliant systems protecting sensitive student information."
        },
        {
          icon: createElement(Users, { className: "h-8 w-8 text-blue-400" }),
          title: "Community Building",
          description: "Platforms that foster collaboration between students, teachers, and parents."
        },
        {
          icon: createElement(TrendingUp, { className: "h-8 w-8 text-blue-400" }),
          title: "Measurable Outcomes",
          description: "Technology that demonstrates and improves educational effectiveness."
        }
      ]
    },
    cta: {
      headline: "Shape the Future of Education with HiveRift",
      subtext: "From virtual classrooms to learning analytics, HiveRift delivers technology solutions that make education more accessible, engaging, and effective.",
      ctaText: "📩 Talk to Our Experts",
      backgroundImageQuery: "education technology e-learning"
    }
  },
  "energy": {
    id: "energy",
    name: "Energy & Utilities",
    hero: {
      headline: "⚡ Powering the Future with Smart Energy Solutions",
      subtext: "HiveRift helps energy and utility companies modernize their infrastructure with smart grid technology, renewable energy management, and predictive maintenance systems. From power generation to distribution, we enable sustainable and efficient energy operations.",
      ctaText: "👉 Explore Our Solutions",
      imageQuery: "renewable energy smart grid"
    },
    whyChooseUs: {
      title: "Why Energy Companies Choose HiveRift",
      items: [
        {
          icon: createElement(Energy, { className: "h-8 w-8 text-blue-400" }),
          title: "Smart Grid Technology",
          description: "Advanced grid management and automation for optimal energy distribution."
        },
        {
          icon: createElement(Activity, { className: "h-8 w-8 text-blue-400" }),
          title: "Real-Time Monitoring",
          description: "Continuous monitoring of energy infrastructure for maximum efficiency."
        },
        {
          icon: createElement(TrendingUp, { className: "h-8 w-8 text-blue-400" }),
          title: "Sustainability Focus",
          description: "Technology solutions that support renewable energy and environmental goals."
        },
        {
          icon: createElement(Shield, { className: "h-8 w-8 text-blue-400" }),
          title: "Critical Infrastructure Protection",
          description: "Robust security measures protecting essential energy systems."
        }
      ]
    },
    services: {
      title: "Our Energy & Utilities Solutions",
      items: [
        {
          title: "Smart Grid Management",
          description: "Intelligent energy distribution",
          features: ["Grid automation systems", "Load balancing technology", "Outage management systems"]
        },
        {
          title: "Renewable Energy Integration",
          description: "Sustainable energy solutions",
          features: ["Solar and wind farm management", "Energy storage optimization", "Grid integration platforms"]
        },
        {
          title: "Asset Management & Maintenance",
          description: "Predictive maintenance systems",
          features: ["Equipment monitoring", "Predictive analytics", "Maintenance scheduling"]
        },
        {
          title: "Customer Engagement Platforms",
          description: "Enhanced utility customer experience",
          features: ["Smart meter integration", "Energy usage analytics", "Customer self-service portals"]
        }
      ]
    },
    advantages: {
      title: "The HiveRift Advantage",
      items: [
        {
          icon: createElement(Lightbulb, { className: "h-8 w-8 text-blue-400" }),
          title: "Innovation Leadership",
          description: "Cutting-edge technology driving the energy transformation."
        },
        {
          icon: createElement(Lock, { className: "h-8 w-8 text-blue-400" }),
          title: "Infrastructure Security",
          description: "Military-grade security protecting critical energy infrastructure."
        },
        {
          icon: createElement(Zap, { className: "h-8 w-8 text-blue-400" }),
          title: "Operational Efficiency",
          description: "Systems that optimize energy production, distribution, and consumption."
        },
        {
          icon: createElement(Globe, { className: "h-8 w-8 text-blue-400" }),
          title: "Sustainable Future",
          description: "Technology solutions supporting the transition to clean energy."
        }
      ]
    },
    cta: {
      headline: "Energize Your Operations with HiveRift",
      subtext: "From smart grids to renewable energy management, HiveRift delivers technology solutions that power a sustainable energy future.",
      ctaText: "📩 Talk to Our Experts",
      backgroundImageQuery: "smart grid renewable energy technology"
    }
  },
  "healthcare": {
    id: "healthcare",
    name: "Healthcare & Life Sciences",
    hero: {
      headline: "🏥 Advancing Healthcare Through Digital Innovation",
      subtext: "HiveRift empowers healthcare organizations with secure, compliant technology solutions that improve patient outcomes and operational efficiency. From electronic health records to telemedicine platforms and medical device integration, we're transforming healthcare delivery.",
      ctaText: "👉 Explore Our Solutions",
      imageQuery: "healthcare technology medical"
    },
    whyChooseUs: {
      title: "Why Healthcare Organizations Choose HiveRift",
      items: [
        {
          icon: createElement(Heart, { className: "h-8 w-8 text-blue-400" }),
          title: "Patient-Centric Care",
          description: "Technology solutions focused on improving patient outcomes and experiences."
        },
        {
          icon: createElement(Shield, { className: "h-8 w-8 text-blue-400" }),
          title: "HIPAA Compliance",
          description: "Secure, compliant systems protecting sensitive patient health information."
        },
        {
          icon: createElement(Activity, { className: "h-8 w-8 text-blue-400" }),
          title: "Real-Time Health Monitoring",
          description: "Continuous patient monitoring and alert systems for better care coordination."
        },
        {
          icon: createElement(BarChart3, { className: "h-8 w-8 text-blue-400" }),
          title: "Clinical Analytics",
          description: "Data-driven insights for evidence-based medicine and operational optimization."
        }
      ]
    },
    services: {
      title: "Our Healthcare Technology Solutions",
      items: [
        {
          title: "Electronic Health Records (EHR)",
          description: "Comprehensive patient data management",
          features: ["Digital patient records", "Clinical decision support", "Interoperability standards"]
        },
        {
          title: "Telemedicine & Remote Care",
          description: "Virtual healthcare delivery",
          features: ["Video consultation platforms", "Remote patient monitoring", "Mobile health applications"]
        },
        {
          title: "Medical Device Integration",
          description: "Connected healthcare devices",
          features: ["IoT medical device connectivity", "Real-time data collection", "Device management systems"]
        },
        {
          title: "Healthcare Analytics",
          description: "Clinical and operational insights",
          features: ["Population health analytics", "Predictive modeling", "Quality improvement dashboards"]
        }
      ]
    },
    advantages: {
      title: "The HiveRift Advantage",
      items: [
        {
          icon: createElement(Lightbulb, { className: "h-8 w-8 text-blue-400" }),
          title: "Healthcare Innovation",
          description: "Cutting-edge technology advancing medical care and patient outcomes."
        },
        {
          icon: createElement(Lock, { className: "h-8 w-8 text-blue-400" }),
          title: "Data Security",
          description: "Advanced security measures protecting sensitive healthcare information."
        },
        {
          icon: createElement(Users, { className: "h-8 w-8 text-blue-400" }),
          title: "Care Coordination",
          description: "Platforms that enhance collaboration among healthcare providers."
        },
        {
          icon: createElement(TrendingUp, { className: "h-8 w-8 text-blue-400" }),
          title: "Improved Outcomes",
          description: "Technology solutions that demonstrably improve patient care and satisfaction."
        }
      ]
    },
    cta: {
      headline: "Transform Healthcare Delivery with HiveRift",
      subtext: "From EHR systems to telemedicine platforms, HiveRift delivers secure, innovative technology solutions that improve healthcare outcomes.",
      ctaText: "📩 Talk to Our Experts",
      backgroundImageQuery: "healthcare technology medical innovation"
    }
  },
  "high-tech": {
    id: "high-tech",
    name: "High-Tech & Software",
    hero: {
      headline: "💻 Accelerating Innovation in High-Tech Industries",
      subtext: "HiveRift partners with high-tech companies to build next-generation software platforms, cloud-native applications, and AI-powered solutions. From startups to enterprise software companies, we help technology firms scale their innovations and reach global markets.",
      ctaText: "👉 Explore Our Solutions",
      imageQuery: "software development high tech"
    },
    whyChooseUs: {
      title: "Why High-Tech Companies Choose HiveRift",
      items: [
        {
          icon: createElement(Cpu, { className: "h-8 w-8 text-blue-400" }),
          title: "Technical Excellence",
          description: "Deep expertise in cutting-edge technologies and development methodologies."
        },
        {
          icon: createElement(Zap, { className: "h-8 w-8 text-blue-400" }),
          title: "Rapid Development",
          description: "Agile development practices that accelerate time-to-market for new products."
        },
        {
          icon: createElement(Globe, { className: "h-8 w-8 text-blue-400" }),
          title: "Scalable Architecture",
          description: "Cloud-native solutions designed for global scale and performance."
        },
        {
          icon: createElement(Lightbulb, { className: "h-8 w-8 text-blue-400" }),
          title: "Innovation Partnership",
          description: "Collaborative approach to turning innovative ideas into market-ready solutions."
        }
      ]
    },
    services: {
      title: "Our High-Tech Solutions",
      items: [
        {
          title: "Software Product Development",
          description: "End-to-end product engineering",
          features: ["Custom software development", "Product architecture design", "User experience optimization"]
        },
        {
          title: "Cloud-Native Applications",
          description: "Modern cloud applications",
          features: ["Microservices architecture", "Container orchestration", "Serverless computing"]
        },
        {
          title: "AI & Machine Learning Platforms",
          description: "Intelligent software solutions",
          features: ["Machine learning models", "Natural language processing", "Computer vision systems"]
        },
        {
          title: "DevOps & Automation",
          description: "Development operations excellence",
          features: ["CI/CD pipelines", "Infrastructure as code", "Automated testing frameworks"]
        }
      ]
    },
    advantages: {
      title: "The HiveRift Advantage",
      items: [
        {
          icon: createElement(Code, { className: "h-8 w-8 text-blue-400" }),
          title: "Code Quality",
          description: "Clean, maintainable code following industry best practices and standards."
        },
        {
          icon: createElement(Activity, { className: "h-8 w-8 text-blue-400" }),
          title: "Performance Optimization",
          description: "High-performance solutions optimized for speed, scalability, and efficiency."
        },
        {
          icon: createElement(Shield, { className: "h-8 w-8 text-blue-400" }),
          title: "Security by Design",
          description: "Built-in security measures protecting applications and user data."
        },
        {
          icon: createElement(TrendingUp, { className: "h-8 w-8 text-blue-400" }),
          title: "Market Success",
          description: "Proven track record of delivering solutions that succeed in competitive markets."
        }
      ]
    },
    cta: {
      headline: "Build the Future of Technology with HiveRift",
      subtext: "From software products to AI platforms, HiveRift delivers the technical expertise and innovation partnership you need to succeed in high-tech markets.",
      ctaText: "📩 Talk to Our Experts",
      backgroundImageQuery: "software development high tech innovation"
    }
  },
  "insurance": {
    id: "insurance",
    name: "Insurance & Risk Management",
    hero: {
      headline: "🛡️ Modernizing Insurance with Digital Solutions",
      subtext: "HiveRift helps insurance companies transform their operations with digital policy management, automated claims processing, and advanced risk analytics. From customer portals to fraud detection systems, we enable insurers to deliver better service while managing risk effectively.",
      ctaText: "👉 Explore Our Solutions",
      imageQuery: "insurance technology digital"
    },
    whyChooseUs: {
      title: "Why Insurance Companies Choose HiveRift",
      items: [
        {
          icon: createElement(Shield, { className: "h-8 w-8 text-blue-400" }),
          title: "Risk Intelligence",
          description: "Advanced analytics and AI for accurate risk assessment and pricing."
        },
        {
          icon: createElement(Users, { className: "h-8 w-8 text-blue-400" }),
          title: "Customer-Centric Platforms",
          description: "Digital experiences that simplify insurance processes for customers."
        },
        {
          icon: createElement(Zap, { className: "h-8 w-8 text-blue-400" }),
          title: "Process Automation",
          description: "Automated underwriting, claims processing, and policy management."
        },
        {
          icon: createElement(BarChart3, { className: "h-8 w-8 text-blue-400" }),
          title: "Data-Driven Insights",
          description: "Business intelligence for better decision making and competitive advantage."
        }
      ]
    },
    services: {
      title: "Our Insurance Technology Solutions",
      items: [
        {
          title: "Policy Management Systems",
          description: "Comprehensive policy lifecycle management",
          features: ["Digital policy administration", "Automated underwriting", "Renewal management systems"]
        },
        {
          title: "Claims Processing Automation",
          description: "Streamlined claims management",
          features: ["Digital claims intake", "Automated fraud detection", "Settlement processing systems"]
        },
        {
          title: "Customer Engagement Platforms",
          description: "Enhanced customer experience",
          features: ["Self-service portals", "Mobile applications", "Omnichannel communication"]
        },
        {
          title: "Risk Analytics & Modeling",
          description: "Advanced risk assessment",
          features: ["Predictive risk modeling", "Portfolio analytics", "Catastrophe modeling"]
        }
      ]
    },
    advantages: {
      title: "The HiveRift Advantage",
      items: [
        {
          icon: createElement(Lightbulb, { className: "h-8 w-8 text-blue-400" }),
          title: "Insurance Innovation",
          description: "Technology solutions that modernize traditional insurance processes."
        },
        {
          icon: createElement(Lock, { className: "h-8 w-8 text-blue-400" }),
          title: "Regulatory Compliance",
          description: "Systems designed to meet insurance industry regulations and standards."
        },
        {
          icon: createElement(TrendingUp, { className: "h-8 w-8 text-blue-400" }),
          title: "Operational Efficiency",
          description: "Automation that reduces costs and improves processing times."
        },
        {
          icon: createElement(Globe, { className: "h-8 w-8 text-blue-400" }),
          title: "Market Adaptability",
          description: "Flexible platforms that adapt to changing market conditions and customer needs."
        }
      ]
    },
    cta: {
      headline: "Transform Your Insurance Operations",
      subtext: "From digital policies to AI-powered claims processing, HiveRift delivers technology solutions that modernize insurance operations and improve customer satisfaction.",
      ctaText: "📩 Talk to Our Experts",
      backgroundImageQuery: "insurance technology digital transformation"
    }
  },
  "life-sciences": {
    id: "life-sciences",
    name: "Life Sciences & Pharmaceuticals",
    hero: {
      headline: "🧬 Advancing Life Sciences Through Technology",
      subtext: "HiveRift supports pharmaceutical and life sciences companies with specialized technology solutions for drug discovery, clinical trials, regulatory compliance, and supply chain management. From research to market, we help bring life-saving innovations to patients faster.",
      ctaText: "👉 Explore Our Solutions",
      imageQuery: "pharmaceutical research life sciences"
    },
    whyChooseUs: {
      title: "Why Life Sciences Companies Choose HiveRift",
      items: [
        {
          icon: createElement(Activity, { className: "h-8 w-8 text-blue-400" }),
          title: "Research Acceleration",
          description: "Technology solutions that speed up drug discovery and development processes."
        },
        {
          icon: createElement(Shield, { className: "h-8 w-8 text-blue-400" }),
          title: "Regulatory Compliance",
          description: "GxP-compliant systems meeting FDA, EMA, and other regulatory standards."
        },
        {
          icon: createElement(BarChart3, { className: "h-8 w-8 text-blue-400" }),
          title: "Clinical Data Management",
          description: "Secure, accurate management of clinical trial data and regulatory submissions."
        },
        {
          icon: createElement(Globe, { className: "h-8 w-8 text-blue-400" }),
          title: "Global Supply Chain",
          description: "End-to-end visibility and control over pharmaceutical supply chains."
        }
      ]
    },
    services: {
      title: "Our Life Sciences Solutions",
      items: [
        {
          title: "Clinical Trial Management",
          description: "Comprehensive clinical research platforms",
          features: ["Electronic data capture (EDC)", "Clinical trial management systems", "Patient recruitment platforms"]
        },
        {
          title: "Regulatory Information Management",
          description: "Compliance and submission systems",
          features: ["Regulatory submission management", "Document management systems", "Compliance tracking platforms"]
        },
        {
          title: "Laboratory Information Systems",
          description: "Research and quality control systems",
          features: ["LIMS implementation", "Sample tracking systems", "Quality management platforms"]
        },
        {
          title: "Supply Chain & Manufacturing",
          description: "Pharmaceutical operations management",
          features: ["Manufacturing execution systems", "Supply chain visibility", "Serialization and traceability"]
        }
      ]
    },
    advantages: {
      title: "The HiveRift Advantage",
      items: [
        {
          icon: createElement(Lightbulb, { className: "h-8 w-8 text-blue-400" }),
          title: "Scientific Innovation",
          description: "Technology solutions that accelerate scientific discovery and innovation."
        },
        {
          icon: createElement(Lock, { className: "h-8 w-8 text-blue-400" }),
          title: "Data Integrity",
          description: "Validated systems ensuring data integrity and regulatory compliance."
        },
        {
          icon: createElement(Users, { className: "h-8 w-8 text-blue-400" }),
          title: "Patient Focus",
          description: "Solutions that ultimately improve patient outcomes and safety."
        },
        {
          icon: createElement(TrendingUp, { className: "h-8 w-8 text-blue-400" }),
          title: "Time to Market",
          description: "Streamlined processes that reduce time from research to market approval."
        }
      ]
    },
    cta: {
      headline: "Accelerate Life Sciences Innovation",
      subtext: "From clinical trials to regulatory compliance, HiveRift delivers specialized technology solutions that advance life sciences research and bring treatments to market faster.",
      ctaText: "📩 Talk to Our Experts",
      backgroundImageQuery: "pharmaceutical research life sciences technology"
    }
  },
  "manufacturing": {
    id: "manufacturing",
    name: "Manufacturing & Industrial",
    hero: {
      headline: "🏭 Transforming Manufacturing with Industry 4.0",
      subtext: "HiveRift helps manufacturers embrace digital transformation with IoT-enabled production systems, predictive maintenance, and smart factory solutions. From automation to supply chain optimization, we enable manufacturers to improve efficiency, quality, and competitiveness.",
      ctaText: "👉 Explore Our Solutions",
      imageQuery: "smart manufacturing industry 4.0"
    },
    whyChooseUs: {
      title: "Why Manufacturers Choose HiveRift",
      items: [
        {
          icon: createElement(Factory, { className: "h-8 w-8 text-blue-400" }),
          title: "Smart Factory Solutions",
          description: "IoT-enabled manufacturing systems for real-time production monitoring and control."
        },
        {
          icon: createElement(Activity, { className: "h-8 w-8 text-blue-400" }),
          title: "Predictive Maintenance",
          description: "AI-powered systems that predict equipment failures before they occur."
        },
        {
          icon: createElement(BarChart3, { className: "h-8 w-8 text-blue-400" }),
          title: "Production Analytics",
          description: "Data-driven insights for optimizing manufacturing processes and quality."
        },
        {
          icon: createElement(Truck, { className: "h-8 w-8 text-blue-400" }),
          title: "Supply Chain Integration",
          description: "End-to-end visibility and coordination across manufacturing supply chains."
        }
      ]
    },
    services: {
      title: "Our Manufacturing Solutions",
      items: [
        {
          title: "Manufacturing Execution Systems (MES)",
          description: "Production floor management",
          features: ["Real-time production tracking", "Quality control systems", "Workflow optimization"]
        },
        {
          title: "Industrial IoT & Automation",
          description: "Connected manufacturing systems",
          features: ["Sensor integration", "Machine connectivity", "Automated data collection"]
        },
        {
          title: "Supply Chain Management",
          description: "End-to-end supply chain optimization",
          features: ["Inventory management", "Supplier collaboration", "Demand planning systems"]
        },
        {
          title: "Quality Management Systems",
          description: "Comprehensive quality control",
          features: ["Statistical process control", "Non-conformance tracking", "Compliance management"]
        }
      ]
    },
    advantages: {
      title: "The HiveRift Advantage",
      items: [
        {
          icon: createElement(Lightbulb, { className: "h-8 w-8 text-blue-400" }),
          title: "Industry 4.0 Leadership",
          description: "Cutting-edge technology driving the fourth industrial revolution."
        },
        {
          icon: createElement(Zap, { className: "h-8 w-8 text-blue-400" }),
          title: "Operational Excellence",
          description: "Systems that improve efficiency, reduce waste, and optimize production."
        },
        {
          icon: createElement(Shield, { className: "h-8 w-8 text-blue-400" }),
          title: "Quality Assurance",
          description: "Technology solutions that ensure consistent product quality and compliance."
        },
        {
          icon: createElement(TrendingUp, { className: "h-8 w-8 text-blue-400" }),
          title: "Competitive Advantage",
          description: "Digital transformation that improves competitiveness in global markets."
        }
      ]
    },
    cta: {
      headline: "Build Your Smart Factory with HiveRift",
      subtext: "From IoT integration to predictive analytics, HiveRift delivers Industry 4.0 solutions that transform manufacturing operations and drive competitive advantage.",
      ctaText: "📩 Talk to Our Experts",
      backgroundImageQuery: "smart manufacturing industry 4.0 technology"
    }
  },
  "public-services": {
    id: "public-services",
    name: "Public Services",
    hero: {
      headline: "🏛 Digitizing Public Services for Smarter Governance",
      subtext: "HiveRift empowers governments and public service organizations with secure and citizen-focused IT solutions. From e-governance platforms to smart city technologies, we help modernize services, improve transparency, and strengthen public trust.",
      ctaText: "👉 Explore Our Solutions",
      imageQuery: "e-governance smart city"
    },
    whyChooseUs: {
      title: "Why Public Service Organizations Choose HiveRift",
      items: [
        {
          icon: createElement(Users, { className: "h-8 w-8 text-blue-400" }),
          title: "Citizen-Centric",
          description: "Digital platforms for better engagement and enhanced public service delivery."
        },
        {
          icon: createElement(Shield, { className: "h-8 w-8 text-blue-400" }),
          title: "Secure & Compliant",
          description: "Protecting sensitive government data with advanced security measures."
        },
        {
          icon: createElement(BarChart3, { className: "h-8 w-8 text-blue-400" }),
          title: "Data-Driven Governance",
          description: "Insights for policy & decision-making that improve governance effectiveness."
        },
        {
          icon: createElement(Zap, { className: "h-8 w-8 text-blue-400" }),
          title: "Efficient Services",
          description: "Automation that reduces time & costs while improving service quality."
        }
      ]
    },
    services: {
      title: "Our IT Services for Public Services",
      items: [
        {
          title: "E-Governance Platforms",
          description: "Digital government services",
          features: ["Citizen self-service portals", "Online license, permit & application systems", "Digital payment solutions for taxes & utilities"]
        },
        {
          title: "Smart City & Infrastructure Solutions",
          description: "Intelligent urban management",
          features: ["IoT-enabled utilities & energy management", "Smart traffic, transport & waste systems", "Real-time monitoring for public safety"]
        },
        {
          title: "Citizen Experience Platforms",
          description: "Enhanced public engagement",
          features: ["Mobile apps for service requests & updates", "AI-powered chatbots for instant information", "Multi-language support for inclusivity"]
        },
        {
          title: "Data Analytics & AI for Governance",
          description: "Intelligent governance insights",
          features: ["Predictive analytics for policy planning", "Visualization dashboards for officials", "AI-driven fraud detection & compliance"]
        },
        {
          title: "Automation & Workflow Optimization",
          description: "Streamlined government operations",
          features: ["RPA for form processing & approvals", "Automated compliance & reporting", "Digital document & case management systems"]
        },
        {
          title: "Cloud & Infrastructure Services",
          description: "Scalable government technology",
          features: ["Cloud hosting for e-governance systems", "Scalable storage for large citizen databases", "Disaster recovery & continuity planning"]
        },
        {
          title: "Cybersecurity & Compliance",
          description: "Government-grade security",
          features: ["End-to-end encryption for sensitive data", "National & regional compliance standards", "Real-time threat monitoring for critical systems"]
        },
        {
          title: "24/7 IT Support & Maintenance",
          description: "Always-on government services",
          features: ["Continuous monitoring of government platforms", "Proactive updates & patch management", "Dedicated helpdesk for agencies & departments"]
        }
      ]
    },
    advantages: {
      title: "The HiveRift Advantage",
      items: [
        {
          icon: createElement(Lightbulb, { className: "h-8 w-8 text-blue-400" }),
          title: "Innovation in Governance",
          description: "Digital-first citizen services that transform public sector operations."
        },
        {
          icon: createElement(Lock, { className: "h-8 w-8 text-blue-400" }),
          title: "Security Assured",
          description: "Protecting national and regional data with highest security standards."
        },
        {
          icon: createElement(Zap, { className: "h-8 w-8 text-blue-400" }),
          title: "Faster Service Delivery",
          description: "Reduced processing times with automation and digital transformation."
        },
        {
          icon: createElement(Globe, { className: "h-8 w-8 text-blue-400" }),
          title: "Inclusive & Scalable",
          description: "From local councils to smart cities, serving all citizens effectively."
        }
      ]
    },
    cta: {
      headline: "Transform Public Services with HiveRift",
      subtext: "From e-governance to smart cities, HiveRift delivers IT solutions that enhance efficiency, transparency, and citizen trust.",
      ctaText: "📩 Talk to Our Experts",
      backgroundImageQuery: "e-governance smart city digital transformation"
    }
  },
  "retail": {
    id: "retail",
    name: "Retail",
    hero: {
      headline: "🛍 Reimagining Retail with Digital Innovation",
      subtext: "HiveRift helps retailers adapt to the digital-first economy with IT solutions that connect in-store and online experiences. From e-commerce platforms to AI-driven personalization and supply chain automation, we make retail smarter, faster, and customer-focused.",
      ctaText: "👉 Explore Our Solutions",
      imageQuery: "retail e-commerce digital"
    },
    whyChooseUs: {
      title: "Why Retailers Choose HiveRift",
      items: [
        {
          icon: createElement(ShoppingBag, { className: "h-8 w-8 text-blue-400" }),
          title: "Customer-Centric",
          description: "Seamless and personalized shopping journeys across all touchpoints."
        },
        {
          icon: createElement(BarChart3, { className: "h-8 w-8 text-blue-400" }),
          title: "Data-Driven Insights",
          description: "Smarter sales & inventory decisions through advanced analytics."
        },
        {
          icon: createElement(Shield, { className: "h-8 w-8 text-blue-400" }),
          title: "Secure & Scalable",
          description: "Safe transactions and scalable platforms built for growth."
        },
        {
          icon: createElement(Globe, { className: "h-8 w-8 text-blue-400" }),
          title: "Omnichannel Ready",
          description: "Bridging online, mobile, and physical stores seamlessly."
        }
      ]
    },
    services: {
      title: "Our IT Services for Retail",
      items: [
        {
          title: "E-Commerce & Digital Storefronts",
          description: "Comprehensive online retail solutions",
          features: ["Custom online store development", "Marketplace integrations (Amazon, Flipkart, Shopify, etc.)", "Secure and fast checkout systems"]
        },
        {
          title: "Omnichannel Retail Platforms",
          description: "Unified shopping experiences",
          features: ["Unified shopping experiences across web, mobile, and store", "Mobile POS & in-store digital kiosks", "Click-and-collect and delivery tracking integration"]
        },
        {
          title: "Customer Engagement Solutions",
          description: "Enhanced customer relationships",
          features: ["Loyalty and rewards program apps", "AI-driven personalized product recommendations", "24/7 chatbots and customer support automation"]
        },
        {
          title: "Data Analytics & AI in Retail",
          description: "Intelligent retail insights",
          features: ["Sales forecasting & demand planning", "Customer behavior & purchase pattern insights", "Predictive analytics for promotions and campaigns"]
        },
        {
          title: "Supply Chain & Inventory Management",
          description: "Optimized retail operations",
          features: ["Real-time inventory tracking", "Automated stock replenishment", "Vendor and logistics management platforms"]
        },
        {
          title: "Cloud & Infrastructure Services",
          description: "Scalable retail technology",
          features: ["Cloud hosting for retail apps and websites", "Scalable platforms to handle seasonal traffic spikes", "Disaster recovery & uptime assurance"]
        },
        {
          title: "Cybersecurity & Compliance",
          description: "Retail-grade security",
          features: ["PCI-DSS compliant payment security", "GDPR-compliant customer data handling", "Real-time fraud detection systems"]
        },
        {
          title: "24/7 IT Support & Maintenance",
          description: "Always-on retail support",
          features: ["Monitoring of retail platforms & apps", "Regular patches, upgrades & bug fixes", "Global helpdesk for staff and customer support"]
        }
      ]
    },
    advantages: {
      title: "The HiveRift Advantage",
      items: [
        {
          icon: createElement(Lightbulb, { className: "h-8 w-8 text-blue-400" }),
          title: "Retail Innovation",
          description: "AI, AR/VR & digital-first solutions that drive customer engagement."
        },
        {
          icon: createElement(Lock, { className: "h-8 w-8 text-blue-400" }),
          title: "Trusted & Secure",
          description: "Safe, compliant, and reliable platforms built for trust."
        },
        {
          icon: createElement(Zap, { className: "h-8 w-8 text-blue-400" }),
          title: "Operational Efficiency",
          description: "Faster sales cycles and optimized operations that improve profitability."
        },
        {
          icon: createElement(Globe, { className: "h-8 w-8 text-blue-400" }),
          title: "Scalable Growth",
          description: "Supporting startups, chains & global retailers with flexible solutions."
        }
      ]
    },
    cta: {
      headline: "Shape the Future of Retail with HiveRift",
      subtext: "From digital storefronts to personalized shopping journeys, HiveRift delivers IT solutions that redefine retail for the digital age.",
      ctaText: "📩 Talk to Our Experts",
      backgroundImageQuery: "retail digital transformation e-commerce"
    }
  },
  "travel": {
    id: "travel",
    name: "Travel & Logistics",
    hero: {
      headline: "🌍 Moving People & Goods with Smart IT Solutions",
      subtext: "HiveRift empowers travel and logistics companies with digital platforms and automation tools that optimize operations, reduce costs, and enhance customer journeys. From booking systems to real-time fleet tracking, we build technology that keeps the world moving.",
      ctaText: "👉 Explore Our Solutions",
      imageQuery: "travel logistics technology"
    },
    whyChooseUs: {
      title: "Why Travel & Logistics Companies Choose HiveRift",
      items: [
        {
          icon: createElement(Truck, { className: "h-8 w-8 text-blue-400" }),
          title: "Operational Efficiency",
          description: "Automating bookings & logistics workflows to reduce costs and delays."
        },
        {
          icon: createElement(Globe, { className: "h-8 w-8 text-blue-400" }),
          title: "Real-Time Tracking",
          description: "IoT-enabled fleet & shipment visibility for complete transparency."
        },
        {
          icon: createElement(Shield, { className: "h-8 w-8 text-blue-400" }),
          title: "Secure & Reliable",
          description: "Safe transactions & compliant systems that protect sensitive data."
        },
        {
          icon: createElement(Users, { className: "h-8 w-8 text-blue-400" }),
          title: "Customer-Centric",
          description: "Seamless booking and travel experiences that delight customers."
        }
      ]
    },
    services: {
      title: "Our IT Services for Travel & Logistics",
      items: [
        {
          title: "Booking & Reservation Platforms",
          description: "Comprehensive travel booking solutions",
          features: ["Custom travel booking portals for flights, hotels, and tours", "Mobile check-in & reservation apps", "Multi-currency payment & integration with global providers"]
        },
        {
          title: "Fleet & Logistics Management",
          description: "Smart transportation management",
          features: ["GPS-based fleet tracking & route optimization", "Fuel efficiency & vehicle health monitoring", "Automated scheduling and dispatch systems"]
        },
        {
          title: "Supply Chain & Warehouse Solutions",
          description: "End-to-end logistics optimization",
          features: ["Real-time inventory management", "End-to-end supply chain visibility", "Vendor & freight forwarding management systems"]
        },
        {
          title: "Customer Experience Platforms",
          description: "Enhanced travel & logistics experiences",
          features: ["Self-service portals for customers", "AI-powered chatbots for instant travel/shipping updates", "Personalized offers & loyalty programs"]
        },
        {
          title: "Data Analytics & AI in Travel & Logistics",
          description: "Intelligent operations insights",
          features: ["Predictive demand & capacity forecasting", "Real-time data dashboards for operations", "Customer trend & behavior insights"]
        },
        {
          title: "Automation & Workflow Optimization",
          description: "Streamlined travel & logistics processes",
          features: ["RPA for ticketing, invoicing & customs documentation", "Automated alerts for delays or delivery updates", "Paperless workflows for faster approvals"]
        },
        {
          title: "Cloud & Infrastructure Services",
          description: "Scalable travel & logistics technology",
          features: ["Scalable cloud hosting for booking & logistics apps", "Hybrid cloud environments for global operations", "Disaster recovery & continuity solutions"]
        },
        {
          title: "Cybersecurity & Compliance",
          description: "Travel & logistics security",
          features: ["PCI-DSS & GDPR compliant systems", "Secure digital payments & booking processes", "Threat detection and fraud prevention"]
        },
        {
          title: "24/7 IT Support & Maintenance",
          description: "Always-on travel & logistics support",
          features: ["Continuous monitoring of travel & logistics systems", "Quick issue resolution & proactive updates", "Dedicated helpdesk for staff and customers"]
        }
      ]
    },
    advantages: {
      title: "The HiveRift Advantage",
      items: [
        {
          icon: createElement(Lightbulb, { className: "h-8 w-8 text-blue-400" }),
          title: "Innovative Tech",
          description: "AI, IoT & automation for travel and logistics that drive efficiency."
        },
        {
          icon: createElement(Lock, { className: "h-8 w-8 text-blue-400" }),
          title: "Security First",
          description: "Safeguarding payments, bookings & shipments with enterprise-grade security."
        },
        {
          icon: createElement(Zap, { className: "h-8 w-8 text-blue-400" }),
          title: "Efficiency Boost",
          description: "Reduce delays, optimize routes & cut costs through smart automation."
        },
        {
          icon: createElement(Globe, { className: "h-8 w-8 text-blue-400" }),
          title: "Global Reach",
          description: "Supporting airlines, logistics providers & travel agencies worldwide."
        }
      ]
    },
    cta: {
      headline: "Drive Travel & Logistics Forward with HiveRift",
      subtext: "From digital bookings to real-time logistics, HiveRift delivers IT solutions that make travel smarter and logistics faster.",
      ctaText: "📩 Talk to Our Experts",
      backgroundImageQuery: "travel logistics digital transformation"
    }
  }
};