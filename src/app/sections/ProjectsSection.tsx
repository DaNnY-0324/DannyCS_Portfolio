'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';
import { SiPython, SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiHtml5, SiCss3, SiJavascript, SiTypescript } from 'react-icons/si';
import { BsRobot } from 'react-icons/bs';
import { IoFastFoodOutline } from 'react-icons/io5';
import { MdSecurity, MdOutlineSchool, MdOutlineSupport } from 'react-icons/md';

// Project data
const projects = [
  {
    title: 'Cybersecurity Threat Detector',
    description: 'A cybersecurity tool that detects and analyzes potential threats in real-time using advanced algorithms and machine learning.',
    tags: ['Python', 'Machine Learning', 'Security'],
    github: 'https://github.com/DaNnY-0324/Cybersecurity-Threat-Detector',
    demo: null,
    image: '/images/projects/cybersecurity.jpg'
  },
  {
    title: 'AI Flashcard SaaS',
    description: 'A SaaS application that uses AI to generate and manage flashcards for effective learning and studying.',
    tags: ['Next.js', 'React', 'AI', 'SaaS'],
    github: 'https://github.com/DaNnY-0324/AI-Flashcard-SaaS',
    demo: null,
    image: '/images/projects/flashcard.jpg'
  },
  {
    title: 'AI-RMP',
    description: 'An AI-powered Rate My Professor alternative that provides insights and recommendations for students.',
    tags: ['React', 'Node.js', 'AI', 'Education'],
    github: 'https://github.com/DaNnY-0324/AI-RMP',
    demo: null,
    image: '/images/projects/ai-rmp.jpg'
  },
  {
    title: 'GP Valor Support Page',
    description: 'A support page for GP Valor with documentation, FAQs, and customer service features.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Support'],
    github: 'https://github.com/DaNnY-0324/GP-Valor-Support-Page',
    demo: null,
    image: '/images/projects/gp-valor.jpg'
  },
  {
    title: 'Pantry Management App',
    description: 'An application to manage pantry inventory, track expiration dates, and suggest recipes based on available ingredients.',
    tags: ['React', 'Node.js', 'MongoDB', 'Food'],
    github: 'https://github.com/DaNnY-0324/Pantry-Management-App',
    demo: null,
    image: '/images/projects/pantry.jpg'
  },
  {
    title: 'AI Chat Service',
    description: 'A chat service powered by AI that provides intelligent responses and assistance to users.',
    tags: ['React', 'Node.js', 'AI', 'Chat'],
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
            aria-label="View GitHub Repository"
          >
            <FiGithub size={22} />
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
