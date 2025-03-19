'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  FiCode, FiDatabase, FiServer, FiLayout, 
  FiTool, FiGitBranch, FiCloud, FiPackage 
} from 'react-icons/fi';
import AnimatedSection from '../components/AnimatedSection';

// Skill categories with their respective skills and proficiency levels
const skillCategories = [
  {
    name: 'Frontend',
    icon: <FiLayout size={24} />,
    skills: [
      { name: 'React', proficiency: 90 },
      { name: 'Next.js', proficiency: 85 },
      { name: 'JavaScript', proficiency: 95 },
      { name: 'TypeScript', proficiency: 80 },
      { name: 'HTML5/CSS3', proficiency: 90 },
      { name: 'Tailwind CSS', proficiency: 85 },
      { name: 'Framer Motion', proficiency: 75 }
    ]
  },
  {
    name: 'Backend',
    icon: <FiServer size={24} />,
    skills: [
      { name: 'Node.js', proficiency: 85 },
      { name: 'Express', proficiency: 80 },
      { name: 'REST APIs', proficiency: 90 },
      { name: 'GraphQL', proficiency: 70 },
      { name: 'Authentication', proficiency: 85 },
      { name: 'Authorization', proficiency: 80 }
    ]
  },
  {
    name: 'Databases',
    icon: <FiDatabase size={24} />,
    skills: [
      { name: 'MongoDB', proficiency: 85 },
      { name: 'PostgreSQL', proficiency: 75 },
      { name: 'MySQL', proficiency: 80 },
      { name: 'Supabase', proficiency: 70 },
      { name: 'Firebase', proficiency: 75 }
    ]
  },
  {
    name: 'Programming Languages',
    icon: <FiCode size={24} />,
    skills: [
      { name: 'JavaScript', proficiency: 95 },
      { name: 'TypeScript', proficiency: 80 },
      { name: 'Python', proficiency: 75 },
      { name: 'Java', proficiency: 70 },
      { name: 'C++', proficiency: 65 },
      { name: 'SQL', proficiency: 80 }
    ]
  },
  {
    name: 'Tools & Methodologies',
    icon: <FiTool size={24} />,
    skills: [
      { name: 'Git/GitHub', proficiency: 90 },
      { name: 'VS Code', proficiency: 95 },
      { name: 'Agile/Scrum', proficiency: 85 },
      { name: 'Testing', proficiency: 75 },
      { name: 'CI/CD', proficiency: 70 }
    ]
  },
  {
    name: 'DevOps & Deployment',
    icon: <FiCloud size={24} />,
    skills: [
      { name: 'Vercel', proficiency: 85 },
      { name: 'Netlify', proficiency: 80 },
      { name: 'Docker', proficiency: 70 },
      { name: 'AWS', proficiency: 65 },
      { name: 'Heroku', proficiency: 75 }
    ]
  },
];

// Skill progress bar component
const SkillProgressBar = ({ skill, index }: { skill: { name: string, proficiency: number }, index: number }) => {
  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-xs font-semibold">{skill.proficiency}%</span>
      </div>
      <div className="w-full bg-[var(--background)] rounded-full h-2.5 overflow-hidden">
        <motion.div 
          className="h-full rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] shadow-sm"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.proficiency}%` }}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
};

// Skill card component
const SkillCard = ({ category, index }: { category: typeof skillCategories[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="card p-6 hover:shadow-lg transition-all duration-300 hover:border-[var(--primary)] hover:border-opacity-50"
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center mb-6">
        <div className="p-3 rounded-lg bg-[var(--primary)] bg-opacity-10 text-[var(--primary)] mr-4 shadow-inner border border-[var(--border)]">
          {category.icon}
        </div>
        <h3 className="text-xl font-bold">{category.name}</h3>
      </div>
      
      <div className="space-y-2">
        {category.skills.map((skill, idx) => (
          <SkillProgressBar key={idx} skill={skill} index={idx} />
        ))}
      </div>
    </motion.div>
  );
};

export default function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <section id="skills" className="section py-20" ref={sectionRef}>
      <div className="container">
        <AnimatedSection className="mb-16" direction="up">
          <h2 className="section-title">My Skills</h2>
          <p className="text-center max-w-2xl mx-auto text-[var(--foreground)] opacity-80">
            I've worked with a variety of technologies and frameworks. Here's a snapshot of my technical expertise.
          </p>
        </AnimatedSection>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ opacity, scale }}
        >
          {skillCategories.map((category, index) => (
            <SkillCard key={category.name} category={category} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
