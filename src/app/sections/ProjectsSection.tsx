'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';
import { SiPython, SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiHtml5, SiCss3, SiJavascript, SiTypescript, SiDocker } from 'react-icons/si';
import { BsRobot } from 'react-icons/bs';
import { IoFastFoodOutline } from 'react-icons/io5';
import { MdSecurity, MdOutlineSchool, MdOutlineSupport } from 'react-icons/md';

// Project data
const projects = [
  {
    title: 'AI-CyberSecurity Threat Detector',
    description: 'Python-based personal threat detection system using FastAPI and React with PostgreSQL backend, focused on identifying anomalous network traffic in real-time with web-based dashboards.',
    tags: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Docker', 'TypeScript'],
    github: 'https://github.com/DaNnY-0324/AI-CyberSecurity-Threat-Detector',
    demo: null,
    image: '/images/projects/cybersecurity.jpg'
  },
  {
    title: 'CyberGuard with Docker',
    description: 'Kali Linux, Docker Scout, Nmap, Wireshark containerized cybersecurity platform. Built a container-based cybersecurity testing and penetration testing environment.',
    tags: ['Kali Linux', 'Docker Container', 'Nmap', 'Wireshark'],
    github: 'https://www.docker.com/',
    demo: null,
    image: '/images/projects/cyberguard.jpg',
    isDocker: true
  },
  {
    title: 'TryHackMe CTF Labs',
    description: 'Splunk, Wireshark, CyberChef, Linux, VirtualBox security analysis and incident response lab. Simulated malicious attack scenarios and documented findings.',
    tags: ['Splunk', 'Wireshark', 'CyberChef', 'Linux', 'VirtualBox'],
    github: 'https://tryhackme.com/',
    demo: null,
    image: '/images/projects/tryhackme.jpg',
    isTryHackMe: true
  },
  {
    title: 'AI Flashcard SaaS',
    description: 'A SaaS application that uses AI to generate and manage flashcards for effective learning and studying with secure authentication.',
    tags: ['Next.js', 'React', 'AI', 'SaaS', 'Authentication'],
    github: 'https://github.com/DaNnY-0324/AI-Flashcard-SaaS',
    demo: null,
    image: '/images/projects/flashcard.jpg'
  },
  {
    title: 'AI-RMP',
    description: 'An AI-powered Rate My Professor alternative with secure data handling and user authentication for student insights.',
    tags: ['React', 'Node.js', 'AI', 'Authentication'],
    github: 'https://github.com/DaNnY-0324/AI-RMP',
    demo: null,
    image: '/images/projects/ai-rmp.jpg'
  },
  {
    title: 'AI Chat Service',
    description: 'A secure chat service powered by AI with encrypted communications and user authentication for intelligent assistance.',
    tags: ['React', 'Node.js', 'AI', 'Encryption'],
    github: 'https://github.com/DaNnY-0324/AI-Chat-Service',
    demo: null,
    image: '/images/projects/ai-chat.jpg'
  },
];

// Helper function to get icon for each tech stack/language
const getTagIcon = (tag: string) => {
  switch (tag.toLowerCase()) {
    case 'python':
      return <SiPython className="mr-1" />;
    case 'machine learning':
    case 'ai':
      return <BsRobot className="mr-1" />;
    case 'security':
      return <MdSecurity className="mr-1" />;
    case 'next.js':
      return <SiNextdotjs className="mr-1" />;
    case 'react':
      return <SiReact className="mr-1" />;
    case 'node.js':
      return <SiNodedotjs className="mr-1" />;
    case 'mongodb':
      return <SiMongodb className="mr-1" />;
    case 'html':
      return <SiHtml5 className="mr-1" />;
    case 'css':
      return <SiCss3 className="mr-1" />;
    case 'javascript':
      return <SiJavascript className="mr-1" />;
    case 'typescript':
      return <SiTypescript className="mr-1" />;
    case 'education':
      return <MdOutlineSchool className="mr-1" />;
    case 'support':
      return <MdOutlineSupport className="mr-1" />;
    case 'food':
      return <IoFastFoodOutline className="mr-1" />;
    case 'saas':
      return <FiCode className="mr-1" />;
    default:
      return <FiCode className="mr-1" />;
  }
};

// Project card component
const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="card overflow-hidden group"
    >
      {/* Project Image */}
      <div className="h-48 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
        <div className="w-full h-full flex items-center justify-center text-xl font-bold tracking-wide text-[var(--foreground)]">
          {project.title}
        </div>
        
        {/* Overlay with links */}
        <div className="absolute inset-0 bg-[var(--background)] bg-opacity-90 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm border-2 border-[var(--primary)] border-opacity-0 group-hover:border-opacity-25">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-[var(--card)] text-[var(--foreground)] hover:text-[var(--primary)] hover:scale-110 transition-all shadow-md border border-[var(--border)]"
            aria-label={project.isDocker ? "View Docker" : project.isTryHackMe ? "View TryHackMe" : "View GitHub Repository"}
          >
            {project.isDocker ? (
              <SiDocker size={22} />
            ) : project.isTryHackMe ? (
              <div className="w-[22px] h-[22px] bg-green-500 rounded flex items-center justify-center text-white font-bold text-xs">T</div>
            ) : (
              <FiGithub size={22} />
            )}
          </a>
          {project.demo && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[var(--card)] text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
            >
              <FiExternalLink size={20} />
            </a>
          )}
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-[var(--foreground)] opacity-80 mb-4">
          {project.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag, idx) => (
            <span 
              key={idx}
              className="px-3 py-1 bg-[var(--primary)] bg-opacity-10 dark:text-white text-black rounded-full text-sm border border-[var(--primary)] border-opacity-20 flex items-center"
            >
              {getTagIcon(tag)}
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="projects" className="section bg-[var(--card)] border-t border-b border-[var(--border)]" ref={sectionRef}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="section-title">My Projects</h2>
          <p className="text-center max-w-2xl mx-auto text-[var(--foreground)] opacity-80">
            Here are some of the projects I've worked on. Check out my GitHub for more!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a 
            href="https://github.com/DaNnY-0324" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center shadow-lg hover:shadow-xl transition-shadow"
          >
            <FiGithub className="mr-2" />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
