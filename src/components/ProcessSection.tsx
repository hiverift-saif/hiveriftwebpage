import { ImageWithFallback } from "./figma/ImageWithFallback";
import { MessageSquare, Lightbulb, Code, Rocket } from "lucide-react";

export function ProcessSection() {
  const steps = [
    {
      title: "Initial Consultation",
      description: "We begin with a thorough understanding of your needs and objectives, discussing your vision and requirements in detail.",
      number: "01"
    },
    {
      title: "Strategic Development",
      description: "Our team crafts a customized strategy, outlining the approach and technologies that will best meet your business goals.",
      number: "02"
    },
    {
      title: "Implementation and Development",
      description: "We execute the plan, focusing on quality coding, design, and development to bring your project to life.",
      number: "03"
    },
    {
      title: "Testing and Launch",
      description: "After thorough testing to ensure functionality and performance, we launch your solution, providing ongoing support for a seamless transition.",
      number: "04"
    }
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Streamlined Process</h2>
          <p className="text-gray-300 text-lg">The Best Steps in Our IT Approach</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center group">
              <div className="bg-gray-900 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-blue-400">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-400 text-black rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  {step.number}
                </div>
                
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-blue-400/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-400">{step.number}</span>
                  </div>
                </div>
                
                <h4 className="font-semibold mb-3 text-white">{step.title}</h4>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}