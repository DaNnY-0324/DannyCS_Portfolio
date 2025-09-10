'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

// Experience data
const experiences = [
  {
    title: 'Vice President',
    company: 'ISSA Georgia State University Student Chapter',
    location: 'Atlanta, Georgia',
    period: 'June 2025 - Present',
    description: [
      'Assist the President in planning and executing chapter initiatives, workshops, and cybersecurity awareness events, leading to increased member engagement and participation',
      'Mentor and onboard new members by connecting them with study groups, technical resources, and professional opportunities, resulting in improved member retention and skill development',
      'Collaborate with executive board members and strengthen partnerships with industry professionals, enhancing the chapter\'s visibility and networking opportunities'
    ]
  },
  {
    title: 'Cybersecurity',
    company: 'CodaPath',
    location: 'Alpharetta, Georgia',
    period: 'January 2025 - April 2025',
    description: [
      'Simulated and responded to security incidents, including phishing, DoS, DLL injection, and macro-based malware using Splunk, Wireshark, and audit pattern analysis in MITRE ATT&CK, NIST, T1055, T1003, and documenting findings',
      'Applied NIST/SANS incident response frameworks to design and evaluate detection logic across user lifecycle activities and identity-based attack scenarios',
      'Analyzed malicious dashboards and network traffic in Splunk, identifying attack patterns and defense anomaly-based security incidents'
    ]
  },
  {
    title: 'Software Developer Intern',
    company: 'Govt Portal',
    location: 'Alpharetta, Georgia',
    period: 'July 2024 - January 2025',
    description: [
      'Designed and implemented a secure QR code check-in system for front-desk clerks to authenticate and log users, reducing unauthorized access risks and improving security workflows',
      'Developed secure authentication and authorization systems using PHP, enhancing user access control for municipal and government-partnered sites',
      'Researched and implemented security best practices for MySQL, improving database performance, load balancing, and security for 10+ government and partnered sites'
    ]
  },
  {
    title: 'Software Engineer',
    company: 'Headstarter',
    location: 'Remote',
    period: 'July 2024 - September 2024',
    description: [
      'Collaborated in a 4-person team to design and deploy secure full-stack web apps using React.js, FastAPI, and Supabase, with a focus on user access control and reliability',
      'Led integration of Firebase, Supabase, and Vercel authentication, and contributed full-stack features in agile sprints, including secure dashboards and user APIs',
      'Simulated 5 malicious attack scenarios - brute force, phishing, and malware execution - to operate and investigate for artifacts and security indicators of compromise'
    ]
  }
];

// Experience card component
const ExperienceCard = ({ experience, index }: { experience: typeof experiences[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      {index < experiences.length - 1 && (
        <div className="absolute left-3 top-3 bottom-0 w-0.5 bg-[var(--border)]"></div>
      )}
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-3 w-6 h-6 rounded-full bg-[var(--primary)] flex items-center justify-center">
        <div className="w-3 h-3 rounded-full bg-white"></div>
      </div>
      
      {/* Content */}
      <div className="card p-6">
        <h3 className="text-xl font-bold mb-1">{experience.title}</h3>
        <h4 className="text-lg font-medium text-[var(--primary)] mb-3">{experience.company}</h4>
        
        <div className="flex flex-wrap gap-4 mb-4 text-sm text-[var(--foreground)] opacity-80">
          <div className="flex items-center">
            <FiCalendar className="mr-1" />
            {experience.period}
          </div>
          <div className="flex items-center">
            <FiMapPin className="mr-1" />
            {experience.location}
          </div>
        </div>
        
        <ul className="list-disc pl-5 space-y-2">
          {experience.description.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="experience" className="section" ref={sectionRef}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="section-title">Work Experience</h2>
          <p className="text-center max-w-2xl mx-auto text-[var(--foreground)] opacity-80">
            My professional journey and roles I've taken on throughout my career.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.title} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
