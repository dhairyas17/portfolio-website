import React from 'react';
import { Mail, Linkedin, Github, Twitter, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Mail, href: 'mailto:dhairya@example.com', label: 'Email' },
    { icon: Linkedin, href: 'https://linkedin.com/in/dhairya', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/dhairya', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com/dhairya', label: 'Twitter' },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white mt-24 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-6 text-center flex flex-col items-center space-y-4">
        
        {/* Back to top */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-gray-700 text-gray-400 hover:text-white hover:border-white transition-all text-xs"
        >
          <ArrowUp size={14} />
          Back to top
        </motion.button>

        {/* Social Icons */}
        <div className="flex justify-center space-x-5">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-100 font-light">
          © 2025 Dhairya Sharma. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
