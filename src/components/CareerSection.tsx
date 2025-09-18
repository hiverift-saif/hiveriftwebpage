import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ArrowRight, Users, TrendingUp, Target } from "lucide-react";

interface CareerSectionProps {
  onNavigate: (page: string) => void;
}

export function CareerSection({ onNavigate }: CareerSectionProps) {
  return (
    <section className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Join our team.</span>
              <br />
              <span className="gradient-text">Realize your potential.</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Be part of a dynamic team that's transforming businesses and shaping the future of innovation. 
              Your next career opportunity awaits.
            </p>
          </motion.div>

          {/* Feature highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-12"
          >
            <div className="text-center group">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/20 rounded-lg mb-4 group-hover:bg-blue-600/30 transition-colors"
              >
                <Users className="h-8 w-8 text-blue-400" />
              </motion.div>
              <h3 className="text-lg font-semibold text-white mb-2">Collaborative Culture</h3>
              <p className="text-gray-400">Work with talented professionals in a supportive environment</p>
            </div>

            <div className="text-center group">
              <motion.div
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/20 rounded-lg mb-4 group-hover:bg-blue-600/30 transition-colors"
              >
                <TrendingUp className="h-8 w-8 text-blue-400" />
              </motion.div>
              <h3 className="text-lg font-semibold text-white mb-2">Growth Opportunities</h3>
              <p className="text-gray-400">Continuous learning and career advancement paths</p>
            </div>

            <div className="text-center group">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/20 rounded-lg mb-4 group-hover:bg-blue-600/30 transition-colors"
              >
                <Target className="h-8 w-8 text-blue-400" />
              </motion.div>
              <h3 className="text-lg font-semibold text-white mb-2">Impactful Projects</h3>
              <p className="text-gray-400">Work on cutting-edge solutions that make a difference</p>
            </div>
          </motion.div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl p-8 backdrop-blur-sm"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Ready to Shape the Future?</h3>
              <p className="text-gray-300 text-lg">
                Explore exciting career opportunities at HiveRift and be part of our mission to transform businesses worldwide.
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  onClick={() => onNavigate("career")}
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg group"
                >
                  Explore HiveRift Careers
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Floating decorative elements */}
        <motion.div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="absolute top-1/3 left-1/6 w-20 h-20 bg-blue-400/5 rounded-full blur-xl"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/6 w-16 h-16 bg-white/3 rounded-full blur-xl"
            animate={{
              y: [0, 15, 0],
              x: [0, -15, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}