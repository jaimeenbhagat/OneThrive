
import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Search, PenTool, Rocket, MessageSquare, BarChart } from "lucide-react";

const ProcessStep = ({ number, title, description, icon: Icon, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false
  });
  
  const controls = useAnimation();
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);
  
  const variants = {
    hidden: { 
      opacity: 0, 
      x: index % 2 === 0 ? -50 : 50 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15,
        delay: index * 0.1
      }
    }
  };
  
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      className="relative flex flex-col md:flex-row items-center md:items-start gap-6 mb-16 last:mb-0"
    >
      {/* Step number with glowing effect */}
      <div className="flex-shrink-0">
        <motion.div 
          whileHover={{ scale: 1.1 }}
          className="w-16 h-16 rounded-full bg-onethrive-green/10 border border-onethrive-green flex items-center justify-center relative animate-pulse-green"
        >
          <span className="text-onethrive-green text-xl font-bold">{number}</span>
        </motion.div>
      </div>
      
      <div className="flex-1 md:pt-3">
        <div className="flex items-center gap-3 mb-3">
          <Icon className="w-5 h-5 text-onethrive-green" />
          <h3 className="text-xl md:text-2xl font-bold text-white">
            {title}
          </h3>
        </div>
        <p className="text-gray-300">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const ProcessSection = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ 
    target: targetRef,
    offset: ["start end", "end start"] 
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0.3, 1, 1, 0.3]);
  
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });
  
  const controls = useAnimation();
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);
  
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "We begin by understanding your team dynamics, challenges, and goals to create a tailored approach that addresses your specific needs.",
      icon: Search
    },
    {
      number: "02",
      title: "Planning",
      description: "Our experts design a customized engagement strategy with detailed activities, timeline, and expected outcomes aligned with your objectives.",
      icon: PenTool
    },
    {
      number: "03",
      title: "Execution",
      description: "We deliver engaging experiences with precision and creativity, ensuring every detail is carefully managed for maximum impact.",
      icon: Rocket
    },
    {
      number: "04",
      title: "Engagement",
      description: "Through guided facilitation, we ensure active participation and create meaningful moments that resonate with your team members.",
      icon: MessageSquare
    },
    {
      number: "05",
      title: "Evaluation",
      description: "We measure outcomes through feedback, surveys, and performance metrics to quantify success and identify future growth opportunities.",
      icon: BarChart
    }
  ];
  
  // Moving background gradient animation
  const gradientRef = useRef(null);
  
  useEffect(() => {
    if (!gradientRef.current) return;
    
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = clientX / window.innerWidth;
      const y = clientY / window.innerHeight;
      
      gradientRef.current.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(0, 255, 133, 0.15), transparent 50%)`;
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  
  return (
    <section id="process" className="py-20 relative overflow-hidden">
      {/* Interactive background gradient */}
      <div 
        ref={gradientRef} 
        className="absolute inset-0 bg-radial-gradient from-onethrive-green/10 to-transparent transition-all duration-500 ease-out"
      />
      
      {/* Moving side lines */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute top-0 bottom-0 left-[10%] w-px bg-gradient-to-b from-transparent via-onethrive-green/30 to-transparent"
      />
      <motion.div 
        style={{ y: y, opacity }}
        className="absolute top-0 bottom-0 right-[10%] w-px bg-gradient-to-b from-transparent via-onethrive-green/30 to-transparent"
      />
      
      <div ref={targetRef} className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={headerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-onethrive-green text-xl font-medium mb-2">
            Our Process
          </h2>
          
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            How We Help You <span className="text-gradient animate-text-shimmer">Thrive</span>
          </h3>
          
          <p className="text-lg text-gray-300">
            Our proven methodology ensures we deliver exceptional team experiences
            that create lasting impact and measurable results.
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical connection line */}
          <div className="absolute left-8 top-8 bottom-0 w-px bg-gradient-to-b from-onethrive-green/70 via-onethrive-green/50 to-transparent hidden md:block"></div>
          
          {/* Process steps */}
          {steps.map((step, index) => (
            <ProcessStep 
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
