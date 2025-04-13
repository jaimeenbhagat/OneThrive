
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { ChevronDown } from "lucide-react";

// Particles animation for background effect
const Particles = ({ count = 200 }) => {
  const particles = useRef<Array<{
    x: number;
    y: number;
    radius: number;
    color: string;
    velocity: {
      x: number;
      y: number;
    }
  }>>([]);
  
  useEffect(() => {
    const canvas = document.getElementById('particles') as HTMLCanvasElement;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    canvas.width = width;
    canvas.height = height;
    
    // Create particles
    for (let i = 0; i < count; i++) {
      particles.current.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 1,
        color: `rgba(0, 255, 133, ${Math.random() * 0.5 + 0.1})`,
        velocity: {
          x: (Math.random() - 0.5) * 0.5,
          y: (Math.random() - 0.5) * 0.5
        }
      });
    }
    
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, width, height);
      
      particles.current.forEach(particle => {
        // Update position
        particle.x += particle.velocity.x;
        particle.y += particle.velocity.y;
        
        // Wrap around screen
        if (particle.x < 0) particle.x = width;
        if (particle.x > width) particle.x = 0;
        if (particle.y < 0) particle.y = height;
        if (particle.y > height) particle.y = 0;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });
    };
    
    animate();
    
    // Handle resize
    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [count]);
  
  return (
    <canvas 
      id="particles" 
      className="absolute inset-0 pointer-events-none z-[1]"
    />
  );
};

// Pulsing Sphere component (CSS-based instead of Three.js)
const PulsingSphere = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center opacity-70">
      <div className="absolute w-[400px] h-[400px] rounded-full bg-onethrive-green/30 blur-xl animate-pulse-slow"></div>
      <div className="absolute w-[300px] h-[300px] rounded-full bg-onethrive-green/40 blur-lg animate-pulse"></div>
      <div className="absolute w-[200px] h-[200px] rounded-full bg-onethrive-green/50 blur-md animate-pulse-fast"></div>
    </div>
  );
};

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 20
      }
    }
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Animated Particles Background */}
      <Particles />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-black z-[2]" />
      
      {/* Pulsing sphere animation (CSS-based replacement for Three.js) */}
      <div className="absolute top-0 right-0 w-full h-full md:w-3/5 z-[1]">
        <PulsingSphere />
      </div>
      
      {/* Hero content */}
      <div className="container mx-auto px-6 z-[3] relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-onethrive-green text-xl md:text-2xl mb-4 font-medium"
          >
            Employee Engagement Reimagined
          </motion.h2>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
          >
            Power Your Company's <span className="text-gradient animate-text-shimmer">Team Spirit</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 mb-8"
          >
            Transforming workplace dynamics through immersive and creative team experiences
            designed to foster connection, collaboration, and culture.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="neon-btn text-lg font-medium animate-pulse-green"
            >
              Let's Thrive Together
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white border border-white/20 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-md hover:bg-white/10 transition-all duration-300 text-lg font-medium"
            >
              See Our Services
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll down indicator */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 1.5,
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse" 
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-[3]"
      >
        <Link to="about" smooth duration={500} className="cursor-pointer">
          <ChevronDown className="h-10 w-10 text-onethrive-green animate-bounce" />
        </Link>
      </motion.div>
    </section>
  );
};

export default HeroSection;
