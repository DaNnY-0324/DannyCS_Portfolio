'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

// Experience data
const experiences = [
  {
    title: 'Software Developer Intern',
    company: 'Govt Portal',
    location: 'Alpharetta, GA',
    period: 'July 2024 - January 2025',
    description: [
      'Developed and secured POS and municipal management software, implementing encryption and authentication best practices to protect sensitive transactions from cyber threats',
      'Conducted security audits and log monitoring to identify unauthorized access attempts, reducing vulnerabilities.',
      'Assisted in drafting security policies and best practices for data protection and compliance based on GDPR, NIST frameworks.',
      'Engineered targeted finance-sector email campaigns via Zoho, increasing engagement by 20%'
    ]
  },
  {
    title: 'Software Engineer Fellowship',
    company: 'HeadStarter',
    location: 'Remote',
    period: 'July 2024 - Sept 2024',
    description: [
      'Built & scaled 5+ AI-powered applications using React.js, Next.js, and Firebase',
      'Developed an AI-driven customer support assistant leveraging OpenAI, Pinecone & Llama 3.1, reducing query response time by 50%',
      'Optimized backend analytics pipelines, enhancing data processing efficiency by 80%'
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
