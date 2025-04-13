
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Users, Heart, Palette, Trophy, Music, HeartHandshake, Mountain
} from "lucide-react";

// Service card component
const ServiceCard = ({ icon: Icon, title, description, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });
  
  const controls = useAnimation();
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  
  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      rotateY: 25,
      scale: 0.9
    },
    visible: { 
      opacity: 1,
      y: 0,
      rotateY: 0,
      scale: 1,
      transition: { 
        type: "spring",
        duration: 0.6,
        delay: index * 0.1,
        stiffness: 100
      }
    }
  };
  
  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      whileHover={{ translateY: -10, scale: 1.03 }}
      className="service-card group"
    >
      <div className="h-full flex flex-col">
        <div className="mb-4 relative">
          <div className="w-14 h-14 bg-onethrive-green/10 rounded-lg flex items-center justify-center 
                          group-hover:bg-onethrive-green/20 transition-all duration-500">
            <Icon className="h-8 w-8 text-onethrive-green" />
          </div>
          <motion.div 
            className="absolute -inset-1 rounded-lg bg-gradient-to-r from-onethrive-green/0 via-onethrive-green/20 to-onethrive-green/0 opacity-0 
                      group-hover:opacity-100 blur-xl transition-opacity duration-500"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
        
        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-onethrive-green transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-400 flex-grow">
          {description}
        </p>
        
        <div className="mt-4 pt-4 border-t border-gray-800 group-hover:border-gray-700 transition-colors duration-300">
          <motion.button 
            className="text-onethrive-green hover:text-white flex items-center gap-2 text-sm font-medium"
            whileTap={{ scale: 0.97 }}
          >
            <span>Learn More</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
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
      transition: { 
        duration: 0.6,
        when: "beforeChildren"
      }
    }
  };
  
  const services = [
    {
      icon: Users,
      title: "Team Building Games",
      description: "From problem-solving challenges to outdoor adventures, our interactive Team Building games strengthen communication, trust, and collaboration."
    },
    {
      icon: Heart,
      title: "Wellness Programs",
      description: "With a strong focus on physical and mental health, our wellness programs include Yoga Classes, Mindfulness Workshops, and Fitness Challenges."
    },
    {
      icon: Palette,
      title: "Creative Workshops",
      description: "Unlock your team's creative potential with our hands-on workshops like Canvas Painting or Clay Modelling, crafted to inspire fresh perspectives."
    },
    {
      icon: Trophy,
      title: "Sports Tournaments",
      description: "Foster a healthy competitive spirit with Company Sports Days, Office Olympics, and Friendly Tournaments that unite teams and promote camaraderie."
    },
    {
      icon: Music,
      title: "Entertainment Events",
      description: "Our live entertainment events provide fun and engaging ways for employees to bond and relax, promoting a healthy work-life balance."
    },
    {
      icon: HeartHandshake,
      title: "Corporate Social Responsibility",
      description: "Empower your workforce to give back with CSR programs for environmental sustainability and community outreach initiatives."
    },
    {
      icon: Mountain,
      title: "Offsite Retreats",
      description: "Our offsite retreats combine professional development with recreational activities, providing a refreshing change of scenery that fuels creativity."
    }
  ];
  
  return (
    <section id="services" className="py-20 relative bg-black overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-25" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={headerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-onethrive-green text-xl font-medium mb-2">
            Our Services
          </h2>
          
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Elevate Your <span className="text-gradient animate-text-shimmer">Team Experience</span>
          </h3>
          
          <p className="text-lg text-gray-300">
            From virtual games to on-site retreats, we offer comprehensive solutions 
            to enhance employee engagement and build stronger teams.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon} 
              title={service.title} 
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
