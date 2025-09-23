import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { HRContactForm } from "../HRContactForm";
import { 
  ArrowLeft,
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
  Award,
  CheckCircle,
  Target,
  Briefcase,
  Star,
  ChevronRight,
  Phone,
  Mail,
  Calendar
} from "lucide-react";
import { useState } from "react";

interface JobDetailPageProps {
  jobId: string;
  onNavigate: (page: string) => void;
}

export function JobDetailPage({ jobId, onNavigate }: JobDetailPageProps) {
  const [showHRForm, setShowHRForm] = useState(false);
  const [formType, setFormType] = useState<"contact" | "resume">("resume");

  const handleApplyNow = () => {
    setFormType("resume");
    setShowHRForm(true);
  };

  const handleContactHR = () => {
    setFormType("contact");
    setShowHRForm(true);
  };

  // Job data mapping
  const jobData: { [key: string]: any } = {
    "senior-full-stack-developer": {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "New Delhi, India",
      type: "Full-time",
      experience: "5+ years",
      description: "Join our engineering team to build scalable web applications using modern technologies like React, Node.js, and AWS.",
      requirements: ["5+ years experience", "React/Node.js expertise", "AWS knowledge", "Team collaboration"],
      posted: "2 days ago",
      responsibilities: [
        "Design and develop scalable web applications using React, Node.js, and modern frameworks",
        "Collaborate with cross-functional teams to define, design, and ship new features",
        "Optimize applications for maximum speed and scalability",
        "Implement security and data protection measures",
        "Write clean, maintainable, and well-documented code",
        "Mentor junior developers and participate in code reviews",
        "Stay updated with emerging technologies and industry best practices",
        "Participate in architecture decisions and technical planning"
      ],
      qualifications: [
        "Bachelor's degree in Computer Science or related field",
        "5+ years of experience in full-stack development",
        "Proficiency in React, Node.js, JavaScript/TypeScript",
        "Experience with cloud platforms (AWS, Azure, or GCP)",
        "Knowledge of database systems (SQL and NoSQL)",
        "Understanding of RESTful APIs and microservices architecture",
        "Experience with version control systems (Git)",
        "Strong problem-solving and communication skills"
      ],
      preferredSkills: [
        "Experience with containerization (Docker, Kubernetes)",
        "Knowledge of CI/CD pipelines",
        "Familiarity with Agile/Scrum methodologies",
        "Experience with testing frameworks",
        "Understanding of DevOps practices",
        "Knowledge of mobile app development"
      ]
    },
    "ui-ux-designer": {
      title: "UI/UX Designer",
      department: "Design",
      location: "New Delhi, India",
      type: "Full-time",
      experience: "3+ years",
      description: "Create exceptional user experiences and beautiful interfaces for our clients' digital products.",
      requirements: ["3+ years experience", "Figma proficiency", "Design systems", "User research"],
      posted: "1 week ago",
      responsibilities: [
        "Design intuitive and visually appealing user interfaces for web and mobile applications",
        "Conduct user research and usability testing to inform design decisions",
        "Create wireframes, prototypes, and high-fidelity mockups",
        "Develop and maintain design systems and style guides",
        "Collaborate with developers to ensure design implementation",
        "Present design concepts to stakeholders and clients",
        "Stay current with design trends and best practices",
        "Participate in design reviews and provide constructive feedback"
      ],
      qualifications: [
        "Bachelor's degree in Design, HCI, or related field",
        "3+ years of experience in UI/UX design",
        "Proficiency in Figma, Sketch, or similar design tools",
        "Strong portfolio demonstrating design process and outcomes",
        "Understanding of user-centered design principles",
        "Experience with prototyping tools and techniques",
        "Knowledge of HTML/CSS basics",
        "Excellent communication and presentation skills"
      ],
      preferredSkills: [
        "Experience with design systems and component libraries",
        "Knowledge of accessibility standards (WCAG)",
        "Familiarity with front-end frameworks",
        "Motion graphics and animation skills",
        "Experience with user research methodologies",
        "Understanding of business and marketing principles"
      ]
    }
    // Add more job data as needed
  };

  const currentJob = jobData[jobId] || jobData["senior-full-stack-developer"];

  const companyHighlights = [
    {
      icon: <Building2 className="h-8 w-8 text-primary" />,
      title: "Modern Office Environment",
      description: "State-of-the-art office space in the heart of New Delhi with cutting-edge technology and collaborative workspaces."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Expert Team",
      description: "Work alongside industry veterans and talented professionals who are passionate about innovation and excellence."
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Impactful Projects",
      description: "Contribute to transformative digital solutions that help businesses across industries achieve their goals."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Career Growth",
      description: "Clear advancement paths with mentorship programs and opportunities to lead innovative projects."
    }
  ];

  const benefits = [
    {
      icon: <Heart className="h-8 w-8 text-blue-400" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, dental, vision, and wellness programs for you and your family."
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-green-400" />,
      title: "Learning & Development",
      description: "Annual learning budget for courses, conferences, certifications, and professional development."
    },
    {
      icon: <Coffee className="h-8 w-8 text-yellow-400" />,
      title: "Work-Life Balance",
      description: "Flexible work arrangements, generous PTO, and a culture that values personal time."
    },
    {
      icon: <Award className="h-8 w-8 text-purple-400" />,
      title: "Recognition & Rewards",
      description: "Performance-based bonuses, achievement recognition, and career advancement opportunities."
    },
    {
      icon: <Zap className="h-8 w-8 text-orange-400" />,
      title: "Innovation Culture",
      description: "Freedom to experiment with new technologies and contribute to cutting-edge solutions."
    },
    {
      icon: <Shield className="h-8 w-8 text-cyan-400" />,
      title: "Job Security",
      description: "Stable employment with a growing company that values long-term employee relationships."
    }
  ];

  const cultureValues = [
    {
      title: "Innovation First",
      description: "We encourage creative thinking and provide the resources to turn ideas into reality.",
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: "Collaborative Spirit",
      description: "We believe in the power of teamwork and cross-functional collaboration.",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Continuous Learning",
      description: "We invest in our people's growth and encourage lifelong learning.",
      icon: <GraduationCap className="h-6 w-6" />
    },
    {
      title: "Quality Excellence",
      description: "We maintain the highest standards in everything we deliver.",
      icon: <Star className="h-6 w-6" />
    }
  ];

  const companyStats = [
    { number: "500+", label: "Projects Delivered" },
    { number: "100+", label: "Happy Clients" },
    { number: "50+", label: "Team Members" },
    { number: "7+", label: "Years Experience" }
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Back Navigation */}
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => onNavigate("/career")}
            className="text-primary hover:text-primary/80"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Careers
          </Button>
        </div>

        {/* Job Header */}
        <div className="mb-12">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{currentJob.title}</h1>
                <div className="flex flex-wrap gap-3 mb-4">
                  <Badge variant="secondary" className="text-lg px-4 py-2">{currentJob.department}</Badge>
                  <Badge variant="outline" className="flex items-center gap-2 text-lg px-4 py-2">
                    <MapPin className="h-4 w-4" />
                    {currentJob.location}
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-2 text-lg px-4 py-2">
                    <Clock className="h-4 w-4" />
                    {currentJob.type}
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-2 text-lg px-4 py-2">
                    <Briefcase className="h-4 w-4" />
                    {currentJob.experience}
                  </Badge>
                </div>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {currentJob.description}
                </p>
                <p className="text-sm text-muted-foreground mt-2">Posted {currentJob.posted}</p>
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card className="p-6 bg-primary/5 border-primary/20">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl">Ready to Apply?</CardTitle>
                  <CardDescription>
                    Join our team and make an impact
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button onClick={handleApplyNow} className="w-full" size="lg">
                    Apply Now
                  </Button>
                  <Button onClick={handleContactHR} variant="outline" className="w-full" size="lg">
                    Contact HR
                  </Button>
                  <div className="pt-4 border-t border-primary/20">
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-primary">
                        <Phone className="h-4 w-4" />
                        <span>+91 8814930229</span>
                      </div>
                      <div className="flex items-center gap-2 text-primary">
                        <Mail className="h-4 w-4" />
                        <span>hr@hiverift.com</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>We'll respond to your application promptly</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Company Hero Image */}
        <div className="mb-16">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBjb2RpbmclMjBodW1hbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU4MDk4MTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="HiveRift technology development team"
            className="rounded-lg shadow-elegant w-full h-[500px] object-cover"
          />
        </div>

        {/* Company Overview */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About HiveRift</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              HiveRift is a leading digital transformation company specializing in innovative solutions that help businesses 
              thrive in the digital age. Since our founding, we've been at the forefront of technology, delivering 
              cutting-edge solutions across industries worldwide.
            </p>
          </div>

          {/* Company Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {companyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Company Highlights */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyHighlights.map((highlight, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    {highlight.icon}
                  </div>
                  <CardTitle className="text-lg">{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Job Details Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Key Responsibilities */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Key Responsibilities</h3>
              <div className="space-y-4">
                {currentJob.responsibilities.map((responsibility: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-muted-foreground">{responsibility}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Required Qualifications */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Required Qualifications</h3>
              <div className="space-y-4">
                {currentJob.qualifications.map((qualification: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <ChevronRight className="h-5 w-5 text-primary mt-0.5" />
                    </div>
                    <p className="text-muted-foreground">{qualification}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Preferred Skills */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Preferred Skills</h3>
              <div className="space-y-4">
                {currentJob.preferredSkills.map((skill: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <Star className="h-5 w-5 text-yellow-400 mt-0.5" />
                    </div>
                    <p className="text-muted-foreground">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Our Culture */}
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-xl">Our Culture</CardTitle>
                <CardDescription>
                  What makes HiveRift special
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {cultureValues.map((value, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{value.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{value.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Apply */}
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl">Quick Apply</CardTitle>
                <CardDescription>
                  Send us your resume and we'll get back to you soon
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={handleApplyNow} className="w-full mb-3" size="lg">
                  Apply Now
                </Button>
                <Button onClick={handleContactHR} variant="outline" className="w-full" size="lg">
                  Ask Questions
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Benefits & Perks */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Benefits & Perks</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe in taking care of our team with comprehensive benefits and a supportive work environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Office Environment */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Technology Environment</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience a cutting-edge development environment with modern technology and collaborative innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1637073849667-91120a924221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbXdvcmt8ZW58MXx8fHwxNzU4MDk4MTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Software development teamwork"
              className="rounded-lg shadow-lg w-full h-[300px] object-cover"
            />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1632910121591-29e2484c0259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc1ODA5ODEzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Programming team collaboration"
              className="rounded-lg shadow-lg w-full h-[300px] object-cover"
            />
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Team?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Take the next step in your career and become part of a team that's shaping the future of digital innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleApplyNow} size="lg" className="px-8 py-3">
              Apply for this Position
            </Button>
            <Button onClick={handleContactHR} variant="outline" size="lg" className="px-8 py-3">
              Contact HR Team
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