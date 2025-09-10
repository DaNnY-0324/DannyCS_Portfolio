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
            <div className="relative w-full max-w-sm mx-auto rounded-xl overflow-hidden shadow-lg">
              {/* Replace with your actual image */}
              <Image
                src="/images/Professional_Pic.png"
                alt="Danny Nguyen"
                width={400}
                height={500}
                className="w-full h-auto border-4 border-[var(--primary)] rounded-xl"
              />
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
              I'm a Computer Science student at Georgia State University specializing in Cybersecurity, with hands-on experience in threat detection, incident response, and security analysis.
            </p>
            <p className="mb-6">
              Currently serving as Vice President of the ISSA Georgia State University Student Chapter, I lead cybersecurity initiatives and workshops while building practical experience through roles at CodaPath, Govt Portal, and Headstarter. My expertise spans security tools like Splunk, Wireshark, and NIST frameworks.
            </p>
            <p className="mb-6">
              I specialize in developing AI-powered cybersecurity solutions, threat detection systems, and secure web applications. My projects include real-time threat analyzers and containerized security platforms using cutting-edge technologies like Docker, PostgreSQL, and machine learning frameworks.
            </p>
            <p>
              When I'm not analyzing security threats, I enjoy contributing to cybersecurity research, participating in CTF competitions, and staying current with the latest threat intelligence and security frameworks.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold mb-2">Education</h4>
                <p>Computer Science, Cyber Security</p>
                <p>Georgia State University</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Expected December 2026</p>
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
