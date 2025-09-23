import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CheckCircle, Users, TrendingUp, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";
interface AboutSectionProps {
  onNavigate?: (page: string) => void;
}

export function AboutSection({ onNavigate }: AboutSectionProps) {
   const navigate = useNavigate();
  const features = [
    {
      title: "Tailored Solutions for Every Business",
      description: "We understand that every business is unique. Our approach is personalized, with solutions crafted to meet your specific operational needs and growth objectives."
    },
    {
      title: "Experienced Professionals",
      description: "Our team of operations consultants and developers brings extensive experience across various industries, ensuring top-quality service and effective problem-solving."
    },
    {
      title: "Focus on Efficiency and Cost-Savings",
      description: "Our strategies focus on eliminating waste, improving productivity, and reducing costs, helping your business achieve more with less."
    },
    {
      title: "Data-Driven and Results-Oriented",
      description: "With a strong focus on performance metrics and data-driven decision-making, we provide insights that align with your long-term goals, allowing for sustained improvements."
    }
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1709803857154-d20ee16ff763?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0ZWFtJTIwbWVldGluZyUyMGJvYXJkcm9vbSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTgwMjA1MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Corporate team meeting in professional boardroom"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-sm text-blue-400 uppercase tracking-wider mb-2">About Us</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">Who We Are</h3>
            </div>
            
            <p className="text-gray-300 text-lg">
              HiveRift is dedicated to helping businesses streamline their operations and achieve sustainable growth. Our team is a blend of seasoned consultants and developers with expertise across various industries. We focus on providing solutions that are not only efficient but also adaptable to your evolving needs.
            </p>
            
            <p className="text-gray-300 text-lg">
              From improving day-to-day operations to supporting strategic initiatives, we empower you to focus on what truly matters: growing your business.
            </p>
            
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">Our Mission</h4>
              <p className="text-gray-300">
                To empower businesses through streamlined, data-driven operations solutions that are supported by skilled development teams. We believe that every business deserves to operate efficiently and effectively, no matter the size.
              </p>
            </div>
            
             <Button
      variant="outline"
      className="border-white text-white hover:bg-white hover:text-black"
      onClick={() => navigate("/about")}
    >
      Read More
    </Button>
          </div>
        </div>

        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">Why Choose Us?</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4 p-6 bg-gray-800 rounded-lg border border-gray-700 hover:bg-gray-700 transition-colors">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-sm">{index + 1}</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-white">{feature.title}</h4>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}