import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import mvpImage from "figma:asset/d9df6ce26cd67c81355269ce8e8eb0e82cf9e5d6.png";
import virtualAssistantImage from "figma:asset/d1edb5675a34d7b5838e52bf7da07ce59ad0ab82.png";

export function ServicesSection() {
  const navigate = useNavigate();

  const services = [
    {
      image:
        "https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
      title: "Custom Website Design & Development",
      description:
        "Tailored web solutions that reflect your brand and drive business growth.",
      serviceId: "web-development",
    },
    {
      image: mvpImage,
      title: "MVP Development & Testing",
      description:
        "Rapid prototyping and testing for business applications including POS systems, accounting software, and other business solutions to validate your ideas efficiently.",
      serviceId: "mvp-development",
    },
    {
      image:
        "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
      title: "UI/UX Design & Prototyping",
      description:
        "User-centered design that creates exceptional digital experiences.",
      serviceId: "ui-ux-design",
    },
    {
      image:
        "https://images.unsplash.com/photo-1625296276188-1d149bdaf560?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
      title: "Ongoing Software & Website Maintenance",
      description:
        "Reliable maintenance services to keep your digital assets running smoothly.",
      serviceId: "maintenance-support",
    },
    {
      image:
        "https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
      title: "Blockchain Solutions & Decentralized Applications",
      description:
        "Cutting-edge blockchain technology for secure and transparent solutions.",
      serviceId: "blockchain-solutions",
    },
    {
      image:
        "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
      title: "Digital App Development Services",
      description:
        "Native and cross-platform mobile applications that engage users.",
      serviceId: "mobile-app-development",
    },
    {
      image:
        "https://images.unsplash.com/photo-1565688527174-775059ac429c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
      title: "Operations Consultancy Services",
      description:
        "Strategic guidance to optimize your business operations and processes.",
      serviceId: "operations-consultancy",
    },
    {
      image: virtualAssistantImage,
      title: "Virtual Assistant & Administrative Support",
      description:
        "Professional support services to handle your administrative tasks.",
      serviceId: "virtual-assistant",
    },
    {
      image:
        "https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
      title: "Digital Marketing",
      description:
        "Data-driven marketing strategies to grow your online presence.",
      serviceId: "digital-marketing",
    },
  ];

  const handleNavigate = (serviceId: string) => {
    navigate(`/service/${serviceId}`);
  };

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm text-blue-400 uppercase tracking-wider mb-2">
            Comprehensive Digital Solutions
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Your Partner In Digital Success
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 bg-gray-800 border-gray-700 hover:bg-gray-750 group"
            >
              <CardHeader>
                <div className="mb-4 overflow-hidden rounded-lg">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-lg text-white">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-300 mb-4">
                  {service.description}
                </CardDescription>
                <Button
                  variant="outline"
                  className="w-full border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-colors duration-300 group-hover:border-blue-300"
                  onClick={() => handleNavigate(service.serviceId)}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
