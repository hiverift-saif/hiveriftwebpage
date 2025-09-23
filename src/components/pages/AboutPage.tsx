import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Users, Target, Award, Globe, Heart, Lightbulb } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { SEO } from "../SEO";

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const navigate = useNavigate();
  const values = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Mission-Driven",
      description:
        "We're committed to helping businesses achieve their goals through innovative technology solutions.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Collaborative",
      description:
        "We believe in the power of teamwork, both within our organization and with our clients.",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Excellence",
      description:
        "We strive for excellence in every project, delivering quality that exceeds expectations.",
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Global Perspective",
      description:
        "Our diverse team brings a global perspective to solve local and international challenges.",
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Client-Centric",
      description:
        "Our clients' success is our success. We build lasting partnerships based on trust and results.",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Innovation",
      description:
        "We stay ahead of technology trends to provide cutting-edge solutions for modern challenges.",
    },
  ];

  const milestones = [
    {
      year: "2022",
      event: "Company Founded",
      description:
        "KhatuShyam Technologies was established with a mission to deliver innovative IT and digital solutions tailored to modern business needs.",
    },
    {
      year: "2023",
      event: "500+ Projects Completed",
      description:
        "Within just a year, we achieved a remarkable milestone of completing over 500 successful projects across multiple industries.",
    },
    {
      year: "2024",
      event: "Global Reach",
      description:
        "We expanded our presence internationally, serving clients across different continents and building a strong global network.",
    },
    {
      year: "2025",
      event: "1000+ Projects & Merger with HiveRift",
      description:
        "By 2025, we proudly crossed 1000+ projects and merged with HiveRift, combining expertise and innovation to create a stronger, future-ready technology partner.",
    },
  ];

  return (
    <div className="py-20">
      {/* ---------- SEO ---------- */}
      <SEO
        title="About HiveRift | Innovative Technology Solutions"
        description="Learn about HiveRift, our mission, vision, core values, milestones, and team. We empower businesses with innovative technology solutions."
        keywords="HiveRift, About, Technology Solutions, IT Consulting, Software Development, Innovation, Core Values, Mission, Vision"
        image="https://hiverift.com/logo.svg"
      />

      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About HiveRift
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're a team of passionate professionals dedicated to transforming
            businesses through innovative technology solutions and strategic
            consulting.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1622675363311-3e1904dc1885?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVhbSUyMG1lZXRpbmclMjBvZmZpY2UlMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc1NjEyMDk4MHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Diverse team collaboration"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Our Story</h2>
            <p className="text-muted-foreground text-lg">
              Founded in 2022 as KhatuShyam Technologies, we set out with a
              clear mission: to empower businesses with innovative digital
              solutions that simplify operations and accelerate growth. Over
              time, our passion for technology and our commitment to client
              success led to the creation of HiveRift, a dynamic venture focused
              on bridging complex business challenges with next-generation IT
              strategies.
            </p>
            <p className="text-muted-foreground text-lg">
              Today, both ventures are fully integrated, operating as one
              unified powerhouse — HiveRift | KhatuShyam Technologies. Together,
              we bring unmatched expertise in software development, digital
              marketing, strategic consulting, and business operations.
            </p>
            <p className="text-muted-foreground text-lg">
              With thousands of clients across the globe, from ambitious
              startups to large enterprises, we are proud to be the trusted
              partner helping businesses embrace the digital era, unlock new
              opportunities, and achieve sustainable growth.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <Card className="p-8">
            <CardHeader>
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-lg">
                To empower businesses through streamlined, data-driven
                operations solutions supported by skilled development teams. We
                believe every business deserves to operate efficiently and
                effectively, regardless of size or industry.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8">
            <CardHeader>
              <CardTitle className="text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-lg">
                To be the leading consultancy that seamlessly integrates
                business strategy with technological innovation, creating a
                world where every business can thrive in the digital economy.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground text-lg">
              These values guide everything we do and shape how we work with our
              clients and each other.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="mx-auto mb-4">{value.icon}</div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Milestones */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-muted-foreground text-lg">
              Key milestones that have shaped HiveRift into the company we are
              today.
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-8 items-start">
                <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center font-bold flex-shrink-0">
                  {milestone.year}
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold mb-2">
                    {milestone.event}
                  </h4>
                  <p className="text-muted-foreground">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center bg-secondary/20 rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion
            for innovation and excellence. Explore career opportunities and
            become part of our growing team.
          </p>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => navigate("/career")}
          >
            View Career Opportunities
          </Button>
        </div>
      </div>
    </div>
  );
}
