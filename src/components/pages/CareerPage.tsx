import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { HRContactForm } from "../HRContactForm";
import { SEO } from "../SEO";  
import { 
  MapPin, 
  Clock, 
  Users, 
  Heart, 
  Building2, 
  Globe,
  GraduationCap,
  Coffee,
  Zap,
  Shield,
  TrendingUp,
  Award
} from "lucide-react";
import { useState } from "react";

interface CareerPageProps {
  onNavigate: (page: string) => void;
}

export function CareerPage({ onNavigate }: CareerPageProps) {
  const [showHRForm, setShowHRForm] = useState(false);
  const [formType, setFormType] = useState<"contact" | "resume">("contact");

  const handleContactHR = () => {
    setFormType("contact");
    setShowHRForm(true);
  };

  const handleSendResume = () => {
    setFormType("resume");
    setShowHRForm(true);
  };

 const handleLearnMore = (positionTitle: string) => {
  const jobId = positionTitle.toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '-');
  onNavigate(`/job/${jobId}`);  // ✅ Correct route
};


  const openPositions = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "New Delhi, India",
      type: "Full-time",
      description: "Join our engineering team to build scalable web applications using modern technologies like React, Node.js, and AWS.",
      requirements: ["5+ years experience", "React/Node.js expertise", "AWS knowledge", "Team collaboration"],
      posted: "2 days ago"
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "New Delhi, India",
      type: "Full-time",
      description: "Create exceptional user experiences and beautiful interfaces for our clients' digital products.",
      requirements: ["3+ years experience", "Figma proficiency", "Design systems", "User research"],
      posted: "1 week ago"
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "New Delhi, India",
      type: "Full-time",
      description: "Build and maintain CI/CD pipelines, manage cloud infrastructure, and ensure system reliability.",
      requirements: ["Docker/Kubernetes", "AWS/GCP experience", "CI/CD pipelines", "Monitoring tools"],
      posted: "3 days ago"
    },
    {
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "New Delhi, India",
      type: "Full-time",
      description: "Drive growth through digital marketing campaigns, SEO optimization, and content strategy.",
      requirements: ["2+ years experience", "Google Ads/Analytics", "SEO knowledge", "Content creation"],
      posted: "5 days ago"
    },
    {
      title: "Business Development Manager",
      department: "Sales",
      location: "New Delhi, India",
      type: "Full-time",
      description: "Identify new business opportunities and build relationships with potential clients.",
      requirements: ["3+ years B2B sales", "Tech industry experience", "CRM proficiency", "Communication skills"],
      posted: "1 week ago"
    },
    {
      title: "Junior Developer",
      department: "Engineering",
      location: "New Delhi, India",
      type: "Full-time",
      description: "Start your career in software development working on exciting projects with mentorship from senior developers.",
      requirements: ["CS degree or bootcamp", "JavaScript knowledge", "Git experience", "Eagerness to learn"],
      posted: "4 days ago"
    }
  ];

  const benefits = [
    {
      icon: <Building2 className="h-8 w-8 text-primary" />,
      title: "Modern Office Environment",
      description: "State-of-the-art office space in the heart of New Delhi with all amenities"
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, dental, vision, and wellness programs"
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      title: "Learning & Development",
      description: "Annual learning budget for courses, conferences, and professional development"
    },
    {
      icon: <Coffee className="h-8 w-8 text-primary" />,
      title: "Flexible PTO",
      description: "Generous paid time off and flexible work arrangements"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Competitive Benefits",
      description: "Market-competitive compensation with performance bonuses and benefits"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Amazing Team",
      description: "Work with talented, passionate people who care about their craft"
    }
  ];

  const cultureValues = [
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Innovation",
      description: "We encourage creative thinking and aren't afraid to try new approaches"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Transparency",
      description: "Open communication and honest feedback help us grow together"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Growth Mindset",
      description: "We invest in personal and professional development for everyone"
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Diversity & Inclusion",
      description: "We celebrate differences and create an inclusive environment for all"
    }
  ];

  return (
    <div className="py-20">

       <SEO
        title="Careers | Join Our Team at HiveRift Technologies"
        description="Explore career opportunities at HiveRift Technologies. Join a dynamic team working on web development, AI, cloud, and digital innovation. Apply today!"
        keywords="HiveRift careers, tech jobs in India, full stack developer jobs, UI/UX jobs, DevOps jobs, digital marketing jobs, business development careers"
        image="https://hiverift.com/logo.svg"
        url="https://hiverift.com/"
      />

      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Build the future of digital innovation with a team that values creativity, collaboration, and continuous growth.
          </p>
        </div>

        {/* Company Culture Image */}
        <div className="mb-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1585143042060-77fd3b53905a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwY29tcHV0ZXIlMjBwcm9ncmFtbWluZ3xlbnwxfHx8fDE3NTgwOTgxMTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Technology and programming development"
            className="rounded-lg shadow-lg w-full h-[400px] object-cover"
          />
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Work at HiveRift?</h2>
            <p className="text-muted-foreground text-lg">
              We believe in creating an environment where our team can do their best work and grow their careers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Culture & Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Culture & Values</h2>
            <p className="text-muted-foreground text-lg">
              These values guide how we work together and with our clients every day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cultureValues.map((value, index) => (
              <Card key={index} className="p-6 text-center">
                <CardHeader>
                  <div className="mx-auto mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
            <p className="text-muted-foreground text-lg">
              Find your next opportunity to make an impact and grow your career with us.
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2">{position.title}</CardTitle>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">{position.department}</Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {position.location}
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {position.type}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Posted {position.posted}
                    </div>
                  </div>
                  <CardDescription className="text-base mt-4">
                    {position.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Requirements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex gap-4">
                      <Button className="flex-1" onClick={handleSendResume}>Apply Now</Button>
                      <Button variant="outline" onClick={() => handleLearnMore(position.title)}>Learn More</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="bg-secondary/20 rounded-lg p-12 mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Our Hiring Process</h2>
            <p className="text-muted-foreground text-lg">
              We've designed our process to be transparent and respectful of your time.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold mx-auto mb-4">
                1
              </div>
              <h4 className="font-semibold mb-2">Application</h4>
              <p className="text-muted-foreground text-sm">
                Submit your application with resume and cover letter
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold mx-auto mb-4">
                2
              </div>
              <h4 className="font-semibold mb-2">Phone Screen</h4>
              <p className="text-muted-foreground text-sm">
                Brief conversation with our talent team (30 minutes)
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold mx-auto mb-4">
                3
              </div>
              <h4 className="font-semibold mb-2">Technical Interview</h4>
              <p className="text-muted-foreground text-sm">
                Technical discussion and practical exercise
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold mx-auto mb-4">
                4
              </div>
              <h4 className="font-semibold mb-2">Final Interview</h4>
              <p className="text-muted-foreground text-sm">
                Meet the team and discuss culture fit
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-primary text-primary-foreground rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Don't See the Right Role?</h2>
          <p className="text-lg mb-8 opacity-90">
            We're always interested in connecting with talented individuals. Send us your resume and let us know how you'd like to contribute.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" onClick={handleSendResume}>
              Send Resume
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" onClick={handleContactHR}>
              Contact HR
            </Button>
          </div>
        </div>

        {/* HR Contact Form Modal */}
        <HRContactForm
          isOpen={showHRForm}
          onClose={() => setShowHRForm(false)}
          formType={formType}
        />
      </div>
    </div>
  );
}