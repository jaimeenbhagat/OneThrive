
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const navLinks = [
    { name: "About Us", to: "about" },
    { name: "Services", to: "services" },
    { name: "Our Process", to: "process" },
    { name: "FAQs", to: "faqs" },
    { name: "Contact", to: "contact" },
  ];

  // Animation variants
  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
        scrolled 
          ? "bg-black/90 backdrop-blur-md border-b border-onethrive-green/20" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold"
        >
          <Link to="hero" smooth duration={500} className="cursor-pointer">
            <span className="text-gradient animate-text-shimmer font-extrabold">
              OneThrive
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div 
          variants={itemVariants} 
          className="hidden md:flex items-center space-x-8"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              spy
              smooth
              duration={500}
              offset={-80}
              className="text-white hover:text-onethrive-green transition-colors duration-300 cursor-pointer relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-onethrive-green group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="neon-btn animate-pulse-green"
          >
            Let's Thrive Together
          </motion.button>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.div 
          variants={itemVariants}
          className="md:hidden flex items-center"
        >
          <button onClick={toggleMobileMenu} className="text-white">
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-onethrive-green" />
            ) : (
              <Menu className="h-6 w-6 hover:text-onethrive-green transition-colors" />
            )}
          </button>
        </motion.div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-black/95 backdrop-blur-md border-t border-onethrive-green/20 mt-4"
        >
          <div className="flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy
                smooth
                duration={500}
                offset={-80}
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-onethrive-green px-6 py-3 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="px-6 py-4">
              <button className="neon-btn w-full">
                Let's Thrive Together
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
