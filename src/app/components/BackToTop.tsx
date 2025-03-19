'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 p-3 rounded-full bg-[var(--primary)] text-white shadow-lg hover:bg-[var(--secondary)] transition-colors duration-300 border-2 border-white dark:border-gray-800"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <FiArrowUp size={20} />
          <span className="sr-only">Back to top</span>
          
          {/* Animated ripple effect */}
          <motion.span
            className="absolute inset-0 rounded-full bg-white"
            initial={{ opacity: 0.3, scale: 0.8 }}
            animate={{ 
              opacity: 0,
              scale: 1.5,
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop',
            }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
