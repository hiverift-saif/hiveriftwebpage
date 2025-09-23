import { Button } from "./ui/button";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HeroSectionProps {
  onNavigate?: (page: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps = {}) {
  const navigate = useNavigate(); // ✅ hook for navigation

  // ✅ Proper function for scroll
  const scrollToNext = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          <motion.div
            className="space-y-8 w-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Heading */}
            <div className="space-y-6">
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Your Ultimate Solution
                <br />
                <motion.span
                  className="bg-gradient-to-r from-blue-400 via-blue-300 to-white bg-clip-text text-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  for Business Growth.
                </motion.span>
              </motion.h1>

              <motion.p
                className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                We provide tailored solutions to business challenges, ensuring
                seamless execution and driving success across all aspects of
                operations.
              </motion.p>
            </div>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              {/* Services Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
  size="lg"
  onClick={() => navigate("/services")}
>
  OUR SERVICES
</Button>
              </motion.div>

              {/* Booking Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
               <Button
  variant="outline"
  size="lg"
  onClick={() => navigate("/booking")} // <-- correct
>
  BOOK CONSULTATION
</Button>
              </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              className="flex items-center justify-center gap-3 text-gray-300 cursor-pointer group mt-16"
              onClick={scrollToNext}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              whileHover={{ y: -5 }}
            >
              <span className="text-sm tracking-wider">SCROLL TO DISCOVER</span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ChevronDown className="h-5 w-5 group-hover:text-white transition-colors" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
