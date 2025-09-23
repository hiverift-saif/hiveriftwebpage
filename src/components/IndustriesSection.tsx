"use client";

import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function IndustriesSection() {
  const navigate = useNavigate();

  const industries = [
    { name: "Banking", route: "/industry/banking" },
    { name: "Capital Markets", route: "/industry/capital-markets" },
    { name: "Communications, Media, and Information Services", route: "/industry/communications" },
    { name: "Consumer Packaged Goods and Distribution", route: "/industry/consumer-goods" },
    { name: "Education", route: "/industry/education" },
    { name: "Energy, Resources, and Utilities", route: "/industry/energy" },
    { name: "Healthcare", route: "/industry/healthcare" },
    { name: "High Tech", route: "/industry/high-tech" },
    { name: "Insurance", route: "/industry/insurance" },
    { name: "Life Sciences", route: "/industry/life-sciences" },
    { name: "Manufacturing", route: "/industry/manufacturing" },
    { name: "Public Services", route: "/industry/public-services" },
    { name: "Retail", route: "/industry/retail" },
    { name: "Travel and Logistics", route: "/industry/travel" }
  ];

  const handleIndustryClick = (route: string) => {
    navigate(route); // navigate using React Router
  };

  return (
    <section className="py-20 bg-black relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-blue-400">&</span>
            <span className="text-white ml-2">Industries</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From Your Industry to Innovation — See the Transformation.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="group cursor-pointer"
                onClick={() => handleIndustryClick(industry.route)}
              >
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 h-full transition-all duration-300 hover:bg-gray-800/70 hover:border-blue-400/30 hover:shadow-lg hover:shadow-blue-400/10">
                  <div className="flex items-center justify-between mb-3">
                    <Badge
                      variant="outline"
                      className="text-blue-400 border-blue-400/50 bg-blue-400/10 group-hover:bg-blue-400/20 transition-colors"
                    >
                      Industry
                    </Badge>
                    <motion.div
                      className="text-blue-400 opacity-60 group-hover:opacity-100 group-hover:text-blue-300"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                  <h3 className="text-white font-semibold text-lg group-hover:text-blue-100 transition-colors">
                    {industry.name}
                  </h3>
                  <div className="mt-4 h-1 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400/5 rounded-full blur-2xl"
          animate={{ x: [0, 50, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-white/3 rounded-full blur-2xl"
          animate={{ x: [0, -40, 0], y: [0, 40, 0], scale: [1, 0.9, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </motion.div>
    </section>
  );
}
