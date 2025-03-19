'use client';

import Link from 'next/link';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--card)] py-12 relative">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          {/* Scroll to top button */}
          <motion.button
            onClick={scrollToTop}
            className="absolute -top-6 left-1/2 transform -translate-x-1/2 p-3 rounded-full bg-[var(--primary)] text-white shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiArrowUp size={20} />
          </motion.button>

          {/* Logo */}
          <Link href="#home" className="text-2xl font-bold mb-6">
            Danny<span className="text-[var(--primary)]">Nguyen</span>
          </Link>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 mb-8">
            <Link href="#home" className="hover:text-[var(--primary)] transition-colors">
              Home
            </Link>
            <Link href="#about" className="hover:text-[var(--primary)] transition-colors">
              About
            </Link>
            <Link href="#skills" className="hover:text-[var(--primary)] transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="hover:text-[var(--primary)] transition-colors">
              Projects
            </Link>
            <Link href="#experience" className="hover:text-[var(--primary)] transition-colors">
              Experience
            </Link>
            <Link href="#certifications" className="hover:text-[var(--primary)] transition-colors">
              Certifications
            </Link>
            <Link href="#contact" className="hover:text-[var(--primary)] transition-colors">
              Contact
            </Link>
          </nav>

          {/* Social links */}
          <div className="flex space-x-6 mb-8">
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
          </div>

          {/* Copyright */}
          <div className="text-center text-[var(--foreground)] opacity-60">
            <p>© {currentYear} Danny Andrew Nguyen. All rights reserved.</p>
            <p className="mt-2 text-sm">
              Built with Next.js, Tailwind CSS, Framer Motion, and Three.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
