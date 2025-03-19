'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import CodeRainBackground from '../components/CodeRainBackground';
import CircuitBoardBackground from '../components/CircuitBoardBackground';
import { useTheme } from '../context/ThemeContext';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  return (
    <section id="home" className="relative min-h-screen flex items-center" ref={sectionRef}>
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[var(--background)] via-[var(--background)] to-[var(--primary)] opacity-10 dark:opacity-5"></div>
      
      {/* Conditional Background based on theme */}
      {theme === 'dark' ? (
        <CodeRainBackground />
      ) : (
        <CircuitBoardBackground />
      )}
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-[var(--primary)] opacity-5 blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-[var(--primary)] opacity-5 blur-3xl"></div>

      <div className="container mx-auto z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl md:text-2xl font-medium text-[var(--primary)] drop-shadow-sm">
              Hello, I'm
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-4 text-[var(--foreground)] drop-shadow-md">
              Danny Andrew Nguyen
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-xl md:text-2xl mb-8 text-[var(--foreground)] opacity-80 drop-shadow-sm">
              Computer Science Student at Georgia State University
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#contact" className="btn-primary">
              Contact Me
            </a>
            <a href="#projects" className="btn-outline">
              View Projects
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex mt-8 space-x-4"
          >
            <a 
              href="https://github.com/DaNnY-0324" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
            >
              <FiGithub size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/dannyswe/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
            >
              <FiLinkedin size={24} />
            </a>
            <a 
              href="mailto:dannynguyen032@gmail.com" 
              className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
            >
              <FiMail size={24} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
      >
        <div className="w-6 h-10 border-2 border-[var(--foreground)] rounded-full flex justify-center shadow-md">
          <div className="w-1 h-2 bg-[var(--primary)] rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
}
