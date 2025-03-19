'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="about" className="section bg-[var(--card)] relative" ref={sectionRef}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-lg border-4 border-[var(--primary)]">
              {/* Replace with your actual image */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] opacity-20"></div>
              <div className="w-full h-full flex items-center justify-center text-xl font-medium">
                Photo Pending...
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[var(--primary)] opacity-20 rounded-full"></div>
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-[var(--secondary)] opacity-20 rounded-full"></div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Danny Andrew Nguyen</h3>
            <p className="text-lg mb-6">
              I'm a Computer Science student at Georgia State University with a passion for building innovative web applications and solving complex problems through code.
            </p>
            <p className="mb-6">
              My journey in technology started with a curiosity about how digital systems work, which led me to pursue a degree in Computer Science. Throughout my academic career, I've developed a strong foundation in programming principles, algorithms, and software development methodologies.
            </p>
            <p className="mb-6">
              I specialize in full-stack development using modern technologies like React, Next.js, Node.js, and various database systems. I'm particularly interested in creating intuitive user interfaces and optimizing application performance.
            </p>
            <p>
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and continuously expanding my knowledge in the ever-evolving tech landscape.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold mb-2">Education</h4>
                <p>Computer Science</p>
                <p>Georgia State University</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Location</h4>
                <p>Atlanta, Georgia</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
