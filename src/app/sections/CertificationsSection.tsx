'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiAward, FiCalendar, FiExternalLink } from 'react-icons/fi';
import { SiUdemy } from 'react-icons/si';
import { FaCode } from 'react-icons/fa';
import { BsMicrosoft } from 'react-icons/bs';

// Certification data
const inProgressCertifications = [
  {
    title: 'CompTIA Security+',
    issuer: 'CompTIA',
    date: 'In Progress',
    credentialId: 'Expected 2025',
    credentialURL: '',
    description: 'Currently preparing for CompTIA Security+ certification to validate baseline cybersecurity skills and knowledge in network security, compliance, operational security, threats and vulnerabilities.',
    image: '/images/Security_Plus_Cert.png'
  },
  {
    title: 'CompTIA Network+',
    issuer: 'CompTIA',
    date: 'In Progress',
    credentialId: 'Expected 2025',
    credentialURL: '',
    description: 'Working towards CompTIA Network+ certification to demonstrate networking fundamentals, network implementations, network operations, and network security concepts.',
    image: '/images/Network_Plus_Cert.png'
  }
];

const completedCertifications = [
  {
    title: 'Microsoft Azure Fundamentals',
    issuer: 'Microsoft',
    date: 'September 2024',
    credentialId: '2BA43001B7F3E48D',
    credentialURL: '',
    description: 'Successfully earned the Microsoft Azure Fundamentals Certification, demonstrating a solid understanding of core cloud concepts, Azure services, and solutions.',
    image: '/images/Azure_Cert.png'
  },
  {
    title: 'Google Fundamentals of Cybersecurity',
    issuer: 'Google',
    date: 'April 2025',
    credentialId: '',
    credentialURL: '',
    description: 'Completed Google\'s comprehensive cybersecurity fundamentals course covering Linux, Python, SIEMs, Splunk, SQL, GIPR, NIST, CISSP, and Identity and Access Management (IAM).',
    image: '/images/Google_Cyber_Cert.png'
  },
  {
    title: 'CodePath Intermediate Cybersecurity',
    issuer: 'CodePath',
    date: 'May 2025',
    credentialId: '277557',
    credentialURL: '',
    description: 'Advanced cybersecurity certification covering Splunk, Wireshark, NIST, SOAR, Playbooks, and MITRE ATT&CK framework for threat analysis and incident response.',
    image: '/images/CodePath_Intermediate_Cyber.png'
  },
  {
    title: 'CodePath Introduction to Cybersecurity',
    issuer: 'CodePath',
    date: 'November 2024',
    credentialId: '252535',
    credentialURL: '',
    description: 'Foundational cybersecurity course exploring threat analysis, system vulnerabilities, and defensive strategies through hands-on labs and practical exercises.',
    image: '/images/CYB101_Cert.png'
  },
  {
    title: 'IBM Linux Commands and Shell Scripting',
    issuer: 'IBM',
    date: 'June 2025',
    credentialId: 'LAMW8IITH7Y7',
    credentialURL: '',
    description: 'Hands-on introduction to Linux Commands and Shell Scripting through IBM on Coursera, providing deep dive into Linux system administration.',
    image: '/images/IBM_Linux_Cert.png'
  },
  {
    title: 'AT&T Technology Academy',
    issuer: 'AT&T',
    date: 'June 2025',
    credentialId: '',
    credentialURL: '',
    description: 'Completed AT&T Technology Academy program focusing on telecommunications technology and network infrastructure.',
    image: '/images/ATT_Tech_Academy.png'
  },
  {
    title: 'CodePath Intermediate Technical Interview Prep',
    issuer: 'CodePath',
    date: 'May 2025',
    credentialId: '81067',
    credentialURL: '',
    description: 'Advanced technical interview preparation covering data structures, algorithms, and Python programming language for software engineering roles.',
    image: '/images/CodePath_Interview_Prep.png'
  },
  {
    title: 'CodePath Intermediate Web Development',
    issuer: 'CodePath',
    date: 'November 2024',
    credentialId: '252534',
    credentialURL: '',
    description: 'Comprehensive web development course covering Node.js, JavaScript, CSS, HTML, Supabase, React Native, and full-stack development practices.',
    image: '/images/WD101_Cert.png'
  },
  {
    title: 'The Complete JavaScript Course 2024',
    issuer: 'Udemy',
    date: 'July 2024',
    credentialId: 'UC-6fba0729-87dc-4bfd-ab6c-b29c69aea48f',
    credentialURL: 'https://www.udemy.com/certificate/UC-6fba0729-87dc-4bfd-ab6c-b29c69aea48f/',
    description: 'Comprehensive 68.5-hour JavaScript course providing deep dive into JavaScript fundamentals, React Native, and modern web development practices.',
    image: '/images/JavaScript_Cert.png'
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
    case 'google':
      return (
        <div className="w-6 h-6 bg-white rounded-full p-0.5 flex items-center justify-center">
          <Image
            src="/images/google_icon.png"
            alt="Google"
            width={20}
            height={20}
            className="rounded-full"
          />
        </div>
      );
    case 'ibm':
      return (
        <div className="w-6 h-6 bg-white rounded p-0.5 flex items-center justify-center">
          <Image
            src="/images/ibm_logo.png"
            alt="IBM"
            width={20}
            height={20}
            className="rounded"
          />
        </div>
      );
    case 'at&t':
      return (
        <div className="w-6 h-6 bg-white rounded-full p-0.5 flex items-center justify-center">
          <Image
            src="/images/at&t_logo.jpeg"
            alt="AT&T"
            width={20}
            height={20}
            className="rounded-full"
          />
        </div>
      );
    case 'comptia':
      return (
        <div className="w-6 h-6 bg-white rounded p-0.5 flex items-center justify-center">
          <Image
            src="/images/comptia_logo.webp"
            alt="CompTIA"
            width={20}
            height={20}
            className="rounded"
          />
        </div>
      );
    default:
      return <FiAward size={24} className="text-[var(--primary)]" />;
  }
};

// Certification card component with flip animation
const CertificationCard = ({ certification, index }: { certification: typeof completedCertifications[0], index: number }) => {
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

        {/* In Progress Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold mb-6 text-center text-[var(--primary)]">In Progress</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {inProgressCertifications.map((certification, index) => (
              <CertificationCard key={certification.title} certification={certification} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Completed Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center text-[var(--primary)]">Completed</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedCertifications.map((certification, index) => (
              <CertificationCard key={certification.title} certification={certification} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
