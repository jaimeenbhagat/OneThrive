
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  MapPin, Mail, Phone, Send, Instagram, Linkedin, Twitter, Facebook 
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [formState, setFormState] = useState("idle");
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState("submitting");
    
    // Simulate form submission
    setTimeout(() => {
      setFormState("success");
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
        variant: "default"
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        message: ""
      });
    }, 1500);
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 }
    }
  };
  
  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 10,
        delay: 0.2
      }
    }
  };
  
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" }
  ];
  
  const contactDetails = [
    { 
      icon: MapPin, 
      title: "Our Location", 
      details: "Mumbai, India",
      animation: "animate-float" 
    },
    { 
      icon: Mail, 
      title: "Email Us", 
      details: "hello@onethrive.in",
      animation: "animate-pulse-green" 
    },
    { 
      icon: Phone, 
      title: "Call Us", 
      details: "+91-XXXXXXXXXX",
      animation: "animate-glow" 
    }
  ];
  
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900/30 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-onethrive-green text-xl font-medium mb-2"
          >
            Contact Us
          </motion.h2>
          
          <motion.h3 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to <span className="text-gradient animate-text-shimmer">Thrive Together?</span>
          </motion.h3>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-300"
          >
            We'd love to hear from you and explore how we can enhance your team's engagement.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h4 
              variants={itemVariants}
              className="text-2xl font-bold mb-6"
            >
              Get in touch
            </motion.h4>
            
            <div className="space-y-6 mb-8">
              {contactDetails.map((item, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-4"
                >
                  <div className={`p-3 rounded-full bg-onethrive-green/10 ${item.animation}`}>
                    <item.icon className="h-6 w-6 text-onethrive-green" />
                  </div>
                  <div>
                    <h5 className="text-lg font-medium text-white">{item.title}</h5>
                    <p className="text-gray-400">{item.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-bold mb-4">Follow us</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center 
                            hover:bg-onethrive-green/20 transition-colors duration-300 group"
                  >
                    <social.icon className="h-5 w-5 text-gray-400 group-hover:text-onethrive-green transition-colors duration-300" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className="bg-gray-900/20 p-1 rounded-lg"
          >
            <div className="bg-black p-6 md:p-8 rounded-lg neon-border">
              <h4 className="text-2xl font-bold mb-6">Send us a message</h4>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">
                    Your Name
                  </label>
                  <motion.div
                    whileFocus={{ scale: 1.01 }}
                    className="relative"
                  >
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md 
                               focus:outline-none focus:ring-2 focus:ring-onethrive-green/50 
                               focus:border-onethrive-green transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </motion.div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">
                    Email Address
                  </label>
                  <motion.div
                    whileFocus={{ scale: 1.01 }}
                    className="relative"
                  >
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md 
                               focus:outline-none focus:ring-2 focus:ring-onethrive-green/50 
                               focus:border-onethrive-green transition-all duration-300"
                      placeholder="john@company.com"
                    />
                  </motion.div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-gray-300">
                    Company Name
                  </label>
                  <motion.div
                    whileFocus={{ scale: 1.01 }}
                    className="relative"
                  >
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md 
                               focus:outline-none focus:ring-2 focus:ring-onethrive-green/50 
                               focus:border-onethrive-green transition-all duration-300"
                      placeholder="Your Company Ltd."
                    />
                  </motion.div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <motion.div
                    whileFocus={{ scale: 1.01 }}
                    className="relative"
                  >
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md 
                               focus:outline-none focus:ring-2 focus:ring-onethrive-green/50 
                               focus:border-onethrive-green transition-all duration-300 resize-none"
                      placeholder="Tell us about your team and what you're looking for..."
                    />
                  </motion.div>
                </div>
                
                <motion.button
                  type="submit"
                  disabled={formState === "submitting"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-md font-medium flex items-center justify-center gap-2
                           transition-all duration-300 ${
                             formState === "submitting"
                               ? "bg-gray-700 text-gray-300 cursor-not-allowed"
                               : "bg-onethrive-green text-black hover:bg-onethrive-green/90"
                           }`}
                >
                  {formState === "submitting" ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
