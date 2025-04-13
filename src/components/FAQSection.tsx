
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQ = ({ question, answer, isOpen, toggleOpen, index }) => {
  const itemVariants = {
    closed: { opacity: 0, height: 0 },
    open: { opacity: 1, height: "auto" }
  };
  
  const iconVariants = {
    closed: { rotate: 0 },
    open: { rotate: 180 }
  };
  
  const delayFactor = 0.1;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0, 
        transition: { delay: index * delayFactor } 
      }}
      className="border-b border-gray-800"
    >
      <motion.button
        className="w-full py-5 flex items-center justify-between text-left focus:outline-none group"
        onClick={toggleOpen}
        whileTap={{ scale: 0.98 }}
      >
        <h3 className="text-lg md:text-xl font-medium group-hover:text-onethrive-green transition-colors">
          {question}
        </h3>
        <motion.div
          variants={iconVariants}
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="h-5 w-5 text-onethrive-green" />
        </motion.div>
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={itemVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="pb-5 pr-10 text-gray-400">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "What makes OneThrive different?",
      answer: "We tailor each experience to your team's needs, using data-backed strategies and a personalized approach that creates meaningful connections and measurable results."
    },
    {
      question: "Can you support remote teams?",
      answer: "Absolutely! We specialize in virtual team engagement and have developed innovative approaches to connect distributed teams across multiple locations and time zones."
    },
    {
      question: "What types of employee engagement activities do you offer?",
      answer: "We offer Team Building games, Creative Workshops, Wellness Programs, CSR initiatives, Offsites, Sports & Entertainment events, and custom engagement solutions tailored to your organization's needs."
    },
    {
      question: "How do you customize your programs to suit our company culture?",
      answer: "Our process begins with a consultation to understand your unique challenges and objectives. We then design a tailored program that aligns perfectly with your company culture."
    },
    {
      question: "What is the typical duration of an engagement activity?",
      answer: "Activities can range from a few hours to full-day events, depending on your needs and the program selected."
    },
    {
      question: "How do you measure the success of your programs?",
      answer: "We utilize feedback surveys, performance metrics, and post-event evaluations to measure impact and ensure continuous improvement."
    },
    {
      question: "What is the process for booking an event?",
      answer: "Simply contact us via the Request a Quote page or give us a call. We'll schedule a consultation to discuss your needs and craft a personalized proposal."
    },
    {
      question: "How do we get started?",
      answer: "Just hit the \"Let's Thrive Together\" button to talk with us! We'll guide you through the entire process from initial consultation to event execution."
    }
  ];
  
  const [openIndex, setOpenIndex] = useState(null);
  
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section id="faqs" className="py-20 relative bg-black overflow-hidden">
      {/* Animated background with subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-onethrive-green text-xl font-medium mb-2">
            Frequently Asked Questions
          </h2>
          
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Got <span className="text-gradient animate-text-shimmer">Questions?</span>
          </h3>
          
          <p className="text-lg text-gray-300">
            We've got answers to help you understand how we can transform your team dynamics.
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto rounded-lg bg-gray-900/20 p-1">
          <motion.div 
            className="bg-black rounded-lg divide-y divide-gray-800 overflow-hidden neon-border p-10"
          >
            {faqs.map((faq, index) => (
              <FAQ
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                toggleOpen={() => toggleFAQ(index)}
                index={index}
              />
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-6">
            Still have questions? We're here to help!
          </p>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="neon-btn"
          >
            Contact Our Team
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
