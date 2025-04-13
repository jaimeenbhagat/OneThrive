import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Instagram, Linkedin, Twitter, Facebook, Heart } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  const links = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Services", to: "services" },
    { name: "Process", to: "process" },
    { name: "FAQs", to: "faqs" },
    { name: "Contact", to: "contact" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
  };

  return (
    <footer className="relative pt-16 pb-8 bg-black overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-25"></div>

      {/* Animated gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-onethrive-green to-transparent animate-[shimmer_2s_infinite]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16"
        >
          {/* Column 1: Logo & Description */}
          <motion.div variants={itemVariants} className="space-y-6">
            <Link to="hero" smooth duration={500} className="cursor-pointer">
              <h2 className="text-2xl font-bold text-gradient animate-text-shimmer">
                OneThrive
              </h2>
            </Link>
            <p className="text-gray-400">
              Transforming workplace dynamics through immersive and creative
              team experiences designed to foster connection, collaboration, and
              culture.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center 
                          hover:bg-onethrive-green/20 transition-colors duration-300 group"
                >
                  <social.icon className="h-5 w-5 text-gray-400 group-hover:text-onethrive-green transition-colors duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    spy
                    smooth
                    duration={500}
                    offset={-80}
                    className="text-gray-400 hover:text-onethrive-green transition-colors duration-300 cursor-pointer inline-block"
                  >
                    <span className="relative group">
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-onethrive-green group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Services */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-lg font-bold text-white">Services</h3>
            <ul className="space-y-3">
              {[
                "Team Building",
                "Wellness Programs",
                "Creative Workshops",
                "Sports Tournaments",
                "Offsite Retreats",
              ].map((service, index) => (
                <li key={index}>
                  <Link
                    to="services"
                    spy
                    smooth
                    duration={500}
                    offset={-80}
                    className="text-gray-400 hover:text-onethrive-green transition-colors duration-300 cursor-pointer inline-block"
                  >
                    <span className="relative group">
                      {service}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-onethrive-green group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-lg font-bold text-white">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li>📍 Mumbai, India</li>
              <li>📧 hello@onethrive.in</li>
              <li>📱 +91-XXXXXXXXXX</li>
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="neon-btn"
            >
              Let's Thrive Together
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="pt-8 border-t border-gray-800 flex justify-center items-center"
        >
          <p className="text-gray-500 text-sm text-center flex items-center gap-1">
            © {year} OneThrive. All rights reserved. Made by Jaimeen Bhagat
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
