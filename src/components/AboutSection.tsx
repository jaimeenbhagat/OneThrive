
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, Heart, Zap, Sparkles, Trophy } from "lucide-react";

const AboutSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180, opacity: 0 },
    visible: {
      scale: 1, 
      rotate: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        duration: 0.6
      }
    },
    hover: { 
      scale: 1.2,
      rotate: 5,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  // Icons with their descriptions
  const icons = [
    { icon: Users, text: "Teamwork" },
    { icon: Heart, text: "Wellness" },
    { icon: Zap, text: "Energy" },
    { icon: Sparkles, text: "Creativity" },
    { icon: Trophy, text: "Success" }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-onethrive-green text-xl font-medium mb-2"
          >
            About Us
          </motion.h2>
          
          <motion.h3 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-8"
          >
            More Than Just <span className="text-gradient animate-text-shimmer">Fun and Games</span>
          </motion.h3>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed"
          >
            At <span className="text-onethrive-green font-medium">OneThrive</span>, we believe employee engagement is more than just fun—it's fundamental. 
            We design meaningful team-building experiences to drive connection, collaboration, and culture.
          </motion.p>
          
          {/* Floating icons row */}
          <motion.div 
            variants={containerVariants}
            className="flex flex-wrap justify-center gap-12 mb-12"
          >
            {icons.map((item, index) => (
              <motion.div
                key={index}
                variants={iconVariants}
                whileHover="hover"
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center mb-3 border border-onethrive-green/30 shadow-lg">
                  <item.icon className="h-8 w-8 text-onethrive-green animate-float" />
                </div>
                <span className="text-gray-300">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-300 mb-8"
          >
            Our team of experts crafts engaging activities that transform how your employees connect,
            communicate, and collaborate—building a stronger workplace culture one experience at a time.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="inline-block"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="neon-btn"
            >
              Learn More About Our Approach
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
