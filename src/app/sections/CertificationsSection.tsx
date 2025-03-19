'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiAward, FiCalendar, FiExternalLink } from 'react-icons/fi';
import { SiUdemy } from 'react-icons/si';
import { FaCode } from 'react-icons/fa';
import { BsMicrosoft } from 'react-icons/bs';

// Certification data
const certifications = [
  {
    title: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
    date: 'September 2024',
    credentialId: 'BED67B-42F53Z',
    credentialURL: '',
    description: 'Successfully earned the Microsoft Azure Fundamentals Certification, demonstrating a solid understanding of core cloud concepts, Azure services, and solutions. Excited to apply these skills to real-world cloud projects and further explore opportunities in cloud computing!',
    image: '/images/Azure_Cert.png'
  },
  {
    title: 'JavaScript Course 2024',
    issuer: 'Udemy',
    date: 'July 2024',
    credentialId: '6fba0729-87dc-4bfd-ab6c-b29c69aea48f',
    credentialURL: 'https://www.udemy.com/certificate/UC-6fba0729-87dc-4bfd-ab6c-b29c69aea48f/',
    description: 'Successfully completed the JavaScript Course 2024, demonstrating a solid understanding of core JavaScript concepts, syntax, and best practices. Excited to apply these skills to real-world web development projects and further explore opportunities in web development!',
    image: '/images/JavaScript_Cert.png'
  },
  {
    title: 'CodePath Intro to Cybersecurity',
    issuer: 'CodePath',
    date: 'Fall 2024',
    credentialId: '252535',
    credentialURL: '',
    description: 'Successfully completed the CodePath Intro to Cybersecurity course, demonstrating a solid understanding of core cybersecurity concepts, syntax, and best practices. Excited to apply these skills to real-world web development projects and further explore opportunities in web development!',
    image: '/images/CYB101_Cert.png'
  },
  {
    title: 'CodePath Intermediate Web Development',
    issuer: 'CodePath',
    date: 'Fall 2024',
    credentialId: '252535',
    credentialURL: '',
    description: 'Successfully completed the CodePath Intermediate Web Development course, demonstrating a solid understanding of core web development concepts, syntax, and best practices. Excited to apply these skills to real-world web development projects and further explore opportunities in web development!',
    image: '/images/WD101_Cert.png'
  }
];

// Helper function to get icon for each certification issuer
const getIssuerIcon = (issuer: string) => {
  switch (issuer.toLowerCase()) {
    case 'microsoft':
      return <BsMicrosoft size={24} className="text-[#00a4ef]" />;
    case 'udemy':
      return <SiUdemy size={24} className="text-[#a435f0]" />;
    case 'codepath':
      return <FaCode size={24} className="text-[#1abc9c]" />;
    default:
      return <FiAward size={24} className="text-[var(--primary)]" />;
  }
};

// Certification card component with flip animation
const CertificationCard = ({ certification, index }: { certification: typeof certifications[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flip-card h-80"
    >
      <div className="flip-card-inner relative w-full h-full">
        {/* Front of card (Certificate image) */}
        <div className="flip-card-front absolute w-full h-full">
          <div className="card w-full h-full p-6 flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-[var(--primary)] bg-opacity-10 flex items-center justify-center mb-4">
              {getIssuerIcon(certification.issuer)}
            </div>
            <h3 className="text-xl font-bold text-center mb-2">{certification.title}</h3>
            <p className="text-center text-[var(--foreground)] opacity-80 mb-4">
              {certification.issuer}
            </p>
            <div className="flex items-center text-sm text-[var(--foreground)] opacity-60">
              <FiCalendar className="mr-1" />
              {certification.date}
            </div>
            <p className="text-sm text-center mt-4 text-[var(--primary)]">
              Click to view credentials
            </p>
          </div>
        </div>
        
        {/* Back of card (Credential details) */}
        <div className="flip-card-back absolute w-full h-full">
          <div className="card w-full h-full p-6 flex flex-col">
            <h3 className="text-xl font-bold mb-4">Credential Details</h3>
            
            <div className="space-y-3 flex-grow">
              <div className="flex items-center">
                <p className="font-medium mr-2">Issuer:</p>
                <div className="flex items-center">
                  <span className="mr-2">
                    {React.cloneElement(getIssuerIcon(certification.issuer), { size: 16 })}
                  </span>
                  <span className="text-[var(--foreground)] opacity-80">{certification.issuer}</span>
                </div>
              </div>
              <div>
                <p className="font-medium">Credential ID:</p>
                <p className="text-[var(--foreground)] opacity-80">{certification.credentialId}</p>
              </div>
              <div>
                <p className="font-medium">Issued On:</p>
                <p className="text-[var(--foreground)] opacity-80">{certification.date}</p>
              </div>
              <div>
                <p className="font-medium">Description:</p>
                <p className="text-[var(--foreground)] opacity-80 text-sm">
                  {certification.description}
                </p>
              </div>
            </div>
            
            {certification.credentialURL && (
              <a 
                href={certification.credentialURL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary mt-4 text-center text-sm py-2"
              >
                <FiExternalLink className="mr-2" />
                Verify Credential
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function CertificationsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="certifications" className="section bg-[var(--card)]" ref={sectionRef}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="section-title">Certifications</h2>
          <p className="text-center max-w-2xl mx-auto text-[var(--foreground)] opacity-80">
            Professional certifications I've earned throughout my career. Hover over or tap a card to view credential details.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((certification, index) => (
            <CertificationCard key={certification.title} certification={certification} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
