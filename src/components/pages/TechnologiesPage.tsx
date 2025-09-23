import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { SEO } from "../SEO";
import { 
  Code2, 
  Database, 
  Cloud, 
  Shield, 
  Smartphone, 
  Monitor, 
  Palette,
  BarChart3,
  Zap,
  Layers
} from "lucide-react";

export function TechnologiesPage() {
  const techCategories = [
    {
      icon: <Monitor className="h-8 w-8 text-primary" />,
      title: "Frontend Development",
      description: "Modern frameworks and libraries for exceptional user experiences",
      technologies: [
        { name: "React", level: "Expert", description: "Component-based UI development" },
        { name: "Next.js", level: "Expert", description: "Full-stack React framework" },
        { name: "Vue.js", level: "Advanced", description: "Progressive JavaScript framework" },
        { name: "Angular", level: "Advanced", description: "Enterprise-grade applications" },
        { name: "TypeScript", level: "Expert", description: "Type-safe JavaScript development" },
        { name: "Tailwind CSS", level: "Expert", description: "Utility-first CSS framework" },
        { name: "Sass/SCSS", level: "Advanced", description: "CSS preprocessor" },
        { name: "Webpack", level: "Advanced", description: "Module bundling and optimization" }
      ]
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "Backend Development",
      description: "Robust server-side solutions and APIs",
      technologies: [
        { name: "Node.js", level: "Expert", description: "JavaScript runtime for server-side development" },
        { name: "Python", level: "Expert", description: "Django, Flask, FastAPI frameworks" },
        { name: "PHP", level: "Advanced", description: "Laravel, Symfony frameworks" },
        { name: "Java", level: "Advanced", description: "Spring Boot, enterprise applications" },
        { name: "C#", level: "Advanced", description: ".NET Core, ASP.NET applications" },
        { name: "Go", level: "Intermediate", description: "High-performance backend services" },
        { name: "Ruby", level: "Intermediate", description: "Ruby on Rails framework" },
        { name: "Rust", level: "Intermediate", description: "Systems programming and APIs" }
      ]
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "Database Technologies",
      description: "Scalable data storage and management solutions",
      technologies: [
        { name: "PostgreSQL", level: "Expert", description: "Advanced relational database" },
        { name: "MySQL", level: "Expert", description: "Popular relational database" },
        { name: "MongoDB", level: "Advanced", description: "NoSQL document database" },
        { name: "Redis", level: "Advanced", description: "In-memory data structure store" },
        { name: "Elasticsearch", level: "Advanced", description: "Search and analytics engine" },
        { name: "Firebase", level: "Advanced", description: "Real-time database platform" },
        { name: "Supabase", level: "Advanced", description: "Open source Firebase alternative" },
        { name: "DynamoDB", level: "Intermediate", description: "AWS NoSQL database" }
      ]
    },
    {
      icon: <Cloud className="h-8 w-8 text-primary" />,
      title: "Cloud & DevOps",
      description: "Scalable infrastructure and deployment solutions",
      technologies: [
        { name: "AWS", level: "Expert", description: "EC2, S3, Lambda, RDS, CloudFront" },
        { name: "Google Cloud", level: "Advanced", description: "Compute Engine, App Engine, BigQuery" },
        { name: "Microsoft Azure", level: "Advanced", description: "Virtual Machines, App Service, SQL Database" },
        { name: "Docker", level: "Expert", description: "Containerization and deployment" },
        { name: "Kubernetes", level: "Advanced", description: "Container orchestration" },
        { name: "Terraform", level: "Advanced", description: "Infrastructure as code" },
        { name: "Jenkins", level: "Advanced", description: "CI/CD automation" },
        { name: "GitHub Actions", level: "Expert", description: "Workflow automation" }
      ]
    },
    {
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      title: "Mobile Development",
      description: "Cross-platform and native mobile applications",
      technologies: [
        { name: "React Native", level: "Expert", description: "Cross-platform mobile development" },
        { name: "Flutter", level: "Advanced", description: "Google's UI toolkit for mobile" },
        { name: "Swift", level: "Advanced", description: "Native iOS development" },
        { name: "Kotlin", level: "Advanced", description: "Native Android development" },
        { name: "Ionic", level: "Intermediate", description: "Hybrid mobile app framework" },
        { name: "Xamarin", level: "Intermediate", description: "Microsoft's mobile platform" },
        { name: "Cordova", level: "Intermediate", description: "PhoneGap mobile development" },
        { name: "Expo", level: "Advanced", description: "React Native development platform" }
      ]
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Blockchain & Security",
      description: "Cutting-edge blockchain and security technologies",
      technologies: [
        { name: "Ethereum", level: "Advanced", description: "Smart contract development" },
        { name: "Solidity", level: "Advanced", description: "Smart contract programming language" },
        { name: "Web3.js", level: "Advanced", description: "Ethereum JavaScript API" },
        { name: "Hardhat", level: "Advanced", description: "Ethereum development environment" },
        { name: "IPFS", level: "Intermediate", description: "Distributed file system" },
        { name: "Polygon", level: "Intermediate", description: "Layer 2 scaling solution" },
        { name: "Chainlink", level: "Intermediate", description: "Decentralized oracle network" },
        { name: "OAuth 2.0", level: "Expert", description: "Authentication and authorization" }
      ]
    },
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: "Design & UX Tools",
      description: "Professional design and prototyping tools",
      technologies: [
        { name: "Figma", level: "Expert", description: "Collaborative design platform" },
        { name: "Adobe XD", level: "Advanced", description: "User experience design tool" },
        { name: "Sketch", level: "Advanced", description: "Digital design toolkit" },
        { name: "Adobe Photoshop", level: "Advanced", description: "Image editing and design" },
        { name: "Adobe Illustrator", level: "Advanced", description: "Vector graphics design" },
        { name: "Principle", level: "Intermediate", description: "Motion design and prototyping" },
        { name: "InVision", level: "Intermediate", description: "Digital product design platform" },
        { name: "Framer", level: "Intermediate", description: "Interactive design and prototyping" }
      ]
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Analytics & Marketing",
      description: "Data analytics and digital marketing tools",
      technologies: [
        { name: "Google Analytics", level: "Expert", description: "Web analytics and insights" },
        { name: "Google Ads", level: "Advanced", description: "Online advertising platform" },
        { name: "Facebook Ads", level: "Advanced", description: "Social media advertising" },
        { name: "Mailchimp", level: "Advanced", description: "Email marketing automation" },
        { name: "HubSpot", level: "Advanced", description: "CRM and marketing automation" },
        { name: "Tableau", level: "Intermediate", description: "Data visualization platform" },
        { name: "Power BI", level: "Intermediate", description: "Business analytics tool" },
        { name: "SEMrush", level: "Advanced", description: "SEO and marketing toolkit" }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "Advanced":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  return (
    <div className="py-20">

       {/* ✅ SEO Meta Tags for Technologies Page */}
      <SEO
        title="Technologies | HiveRift IT Solutions"
        description="Explore the cutting-edge technologies HiveRift uses, including frontend, backend, cloud, mobile, blockchain, and analytics tools for scalable and secure solutions."
        keywords="HiveRift, technologies, web development, backend, frontend, mobile apps, cloud, DevOps, blockchain, database, AI"
        image="https://hiverift.com/logo.svg"
        url="https://hiverift.com/"
      />

      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Technologies</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We leverage cutting-edge technologies and proven frameworks to deliver robust, scalable, and innovative solutions for your business.
          </p>
        </div>

        {/* Featured Technology Image */}
        <div className="mb-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1618044619888-009e412ff12a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwc3RhY2slMjBwcm9ncmFtbWluZyUyMGxhbmd1YWdlc3xlbnwxfHx8fDE3NTYxMjEwNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Technology stack and programming"
            className="rounded-lg shadow-lg w-full h-[400px] object-cover"
          />
        </div>

        {/* Technology Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          <Card className="p-6 text-center">
            <div className="mb-4 mx-auto">
              <Zap className="h-12 w-12 text-primary mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Modern & Fast</h3>
            <p className="text-muted-foreground">
              We use the latest technologies to ensure high performance and excellent user experience.
            </p>
          </Card>
          
          <Card className="p-6 text-center">
            <div className="mb-4 mx-auto">
              <Layers className="h-12 w-12 text-primary mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Scalable Solutions</h3>
            <p className="text-muted-foreground">
              Our technology choices support growth and can scale with your business needs.
            </p>
          </Card>
          
          <Card className="p-6 text-center">
            <div className="mb-4 mx-auto">
              <Shield className="h-12 w-12 text-primary mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
            <p className="text-muted-foreground">
              Security and reliability are built into every solution we create using industry best practices.
            </p>
          </Card>
        </div>

        {/* Technology Categories */}
        <div className="space-y-16">
          {techCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex items-center gap-4 mb-8">
                {category.icon}
                <div>
                  <h2 className="text-3xl font-bold">{category.title}</h2>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {category.technologies.map((tech, techIndex) => (
                  <Card key={techIndex} className="p-4 hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{tech.name}</CardTitle>
                        <Badge className={getLevelColor(tech.level)}>
                          {tech.level}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm">
                        {tech.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Approach */}
        <div className="mt-20 bg-secondary/20 rounded-lg p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Our Technology Approach</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              We carefully select technologies based on project requirements, scalability needs, and long-term maintainability to ensure the best outcomes for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="font-semibold mb-2">Right Tool for the Job</h4>
              <p className="text-muted-foreground text-sm">
                We choose technologies that best fit your project requirements and business goals.
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-2">Future-Proof Solutions</h4>
              <p className="text-muted-foreground text-sm">
                Our technology choices ensure your solution remains current and maintainable over time.
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-2">Continuous Learning</h4>
              <p className="text-muted-foreground text-sm">
                Our team stays current with emerging technologies to provide cutting-edge solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}