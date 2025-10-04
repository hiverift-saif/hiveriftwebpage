import { Button } from "./ui/button";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
=======
>>>>>>> b28797d (addres changes)

interface HeroSectionProps {
  onNavigate?: (page: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps = {}) {
<<<<<<< HEAD
  const navigate = useNavigate(); // ✅ hook for navigation

  // ✅ Proper function for scroll
  const scrollToNext = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
=======
  const scrollToNext = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
>>>>>>> b28797d (addres changes)
    }
  };

  return (
<<<<<<< HEAD
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          <motion.div
=======
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          <motion.div 
>>>>>>> b28797d (addres changes)
            className="space-y-8 w-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
<<<<<<< HEAD
            {/* Heading */}
            <div className="space-y-6">
              <motion.h1
=======
            <div className="space-y-6">
              <motion.h1 
>>>>>>> b28797d (addres changes)
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Your Ultimate Solution
                <br />
<<<<<<< HEAD
                <motion.span
=======
                <motion.span 
>>>>>>> b28797d (addres changes)
                  className="bg-gradient-to-r from-blue-400 via-blue-300 to-white bg-clip-text text-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  for Business Growth.
                </motion.span>
              </motion.h1>
<<<<<<< HEAD

              <motion.p
=======
              
              <motion.p 
>>>>>>> b28797d (addres changes)
                className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
<<<<<<< HEAD
                We provide tailored solutions to business challenges, ensuring
                seamless execution and driving success across all aspects of
                operations.
              </motion.p>
            </div>

            {/* Buttons */}
            <motion.div
=======
                We provide tailored solutions to business challenges, ensuring seamless execution and driving success across all aspects of operations.
              </motion.p>
            </div>
            
            <motion.div 
>>>>>>> b28797d (addres changes)
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
<<<<<<< HEAD
              {/* Services Button */}
=======
>>>>>>> b28797d (addres changes)
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
<<<<<<< HEAD
                <Button
  size="lg"
  onClick={() => navigate("/services")}
>
  OUR SERVICES
</Button>
              </motion.div>

              {/* Booking Button */}
=======
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-white to-gray-200 text-black hover:from-gray-200 hover:to-white font-medium px-8 py-3 shadow-xl hover:shadow-white/20 transition-all duration-300"
                  onClick={() => onNavigate?.('services')}
                >
                  OUR SERVICES
                </Button>
              </motion.div>
              
>>>>>>> b28797d (addres changes)
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
<<<<<<< HEAD
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
=======
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-white/30 text-white hover:bg-white hover:text-black backdrop-blur-sm bg-white/5 px-8 py-3 transition-all duration-300"
                  onClick={() => onNavigate?.('booking')}
                >
                  BOOK CONSULTATION
                </Button>
              </motion.div>
            </motion.div>

            {/* Elegant scroll indicator */}
            <motion.div 
>>>>>>> b28797d (addres changes)
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
<<<<<<< HEAD
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
=======
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
>>>>>>> b28797d (addres changes)
              >
                <ChevronDown className="h-5 w-5 group-hover:text-white transition-colors" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> b28797d (addres changes)
