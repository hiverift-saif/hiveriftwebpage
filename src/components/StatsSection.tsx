import { motion } from "motion/react";

export function StatsSection() {
  const stats = [
    {
      number: "500+",
      label: "Projects Completed",
      icon: "📊"
    },
    {
      number: "95%",
      label: "Client Satisfaction",
      icon: "⭐"
    },
    {
      number: "8+",
      label: "Years of Experience",
      icon: "🚀"
    },
    {
      number: "50+",
      label: "Talented Members",
      icon: "👥"
    }
  ];

  return (
    <section id="stats" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center space-y-4 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                y: -5
              }}
            >
              <motion.div 
                className="text-4xl mb-3"
                whileHover={{ 
                  scale: 1.2,
                  rotate: [0, -10, 10, 0]
                }}
                transition={{ duration: 0.3 }}
              >
                {stat.icon}
              </motion.div>
              
              <motion.div 
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1 + 0.3,
                  type: "spring",
                  stiffness: 200
                }}
              >
                {stat.number}
              </motion.div>
              
              <motion.div 
                className="text-sm md:text-base text-gray-300 group-hover:text-white transition-colors duration-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
              >
                {stat.label}
              </motion.div>
              
              {/* Elegant hover glow */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-b from-blue-400/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ margin: '-1rem' }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}