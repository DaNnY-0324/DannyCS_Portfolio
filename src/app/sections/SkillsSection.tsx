'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  FiCode, FiDatabase, FiServer, FiLayout, 
  FiTool, FiGitBranch, FiCloud, FiPackage 
} from 'react-icons/fi';
import { 
  SiReact, SiNextdotjs, SiJavascript, SiTypescript, 
  SiHtml5, SiCss3, SiTailwindcss, SiFramer,
  SiNodedotjs, SiExpress, SiGraphql,
  SiMongodb, SiPostgresql, SiMysql, SiSupabase, SiFirebase,
  SiPython, SiCplusplus,
  SiGit, SiGithub, SiJest,
  SiVercel, SiNetlify, SiDocker, SiHeroku
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { VscCode, VscAzure } from 'react-icons/vsc';
import AnimatedSection from '../components/AnimatedSection';

// Helper function to get icon for each skill category
const getCategoryIcon = (categoryName: string) => {
  const iconSize = 24;
  switch (categoryName.toLowerCase()) {
    case 'frontend':
      return <SiReact size={iconSize} className="text-[#61DAFB]" />;
    case 'backend':
      return <SiNodedotjs size={iconSize} className="text-[#339933]" />;
    case 'databases':
      return <SiMongodb size={iconSize} className="text-[#47A248]" />;
    case 'programming languages':
      return <SiJavascript size={iconSize} className="text-[#F7DF1E]" />;
    case 'tools & methodologies':
      return <SiGit size={iconSize} className="text-[#F05032]" />;
    case 'devops & deployment':
      return <SiDocker size={iconSize} className="text-[#2496ED]" />;
    default:
      return <FiCode size={iconSize} className="text-[var(--primary)]" />;
  }
};

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
    ]
  },
  {
    name: 'DevOps & Deployment',
    icon: <FiCloud size={24} />,
    skills: [
      { name: 'Vercel', proficiency: 85 },
      { name: 'Netlify', proficiency: 80 },
      { name: 'Docker', proficiency: 70 },
      { name: 'Azure', proficiency: 65 },
    ]
  },
];

// Helper function to get icon for each skill
const getSkillIcon = (skillName: string) => {
  const iconSize = 16;
  switch (skillName.toLowerCase()) {
    case 'react':
      return <SiReact size={iconSize} className="text-[#61DAFB]" />;
    case 'next.js':
      return <SiNextdotjs size={iconSize} className="text-[#000000] dark:text-white" />;
    case 'javascript':
      return <SiJavascript size={iconSize} className="text-[#F7DF1E]" />;
    case 'typescript':
      return <SiTypescript size={iconSize} className="text-[#3178C6]" />;
    case 'html5/css3':
      return <div className="flex"><SiHtml5 size={iconSize} className="text-[#E34F26] mr-1" /><SiCss3 size={iconSize} className="text-[#1572B6]" /></div>;
    case 'tailwind css':
      return <SiTailwindcss size={iconSize} className="text-[#06B6D4]" />;
    case 'framer motion':
      return <SiFramer size={iconSize} className="text-[#0055FF]" />;
    case 'node.js':
      return <SiNodedotjs size={iconSize} className="text-[#339933]" />;
    case 'express':
      return <SiExpress size={iconSize} className="text-[#000000] dark:text-white" />;
    case 'graphql':
      return <SiGraphql size={iconSize} className="text-[#E10098]" />;
    case 'mongodb':
      return <SiMongodb size={iconSize} className="text-[#47A248]" />;
    case 'postgresql':
      return <SiPostgresql size={iconSize} className="text-[#4169E1]" />;
    case 'mysql':
      return <SiMysql size={iconSize} className="text-[#4479A1]" />;
    case 'supabase':
      return <SiSupabase size={iconSize} className="text-[#3ECF8E]" />;
    case 'firebase':
      return <SiFirebase size={iconSize} className="text-[#FFCA28]" />;
    case 'python':
      return <SiPython size={iconSize} className="text-[#3776AB]" />;
    case 'java':
      return <DiJava size={iconSize} className="text-[#007396]" />;
    case 'c++':
      return <SiCplusplus size={iconSize} className="text-[#00599C]" />;
    case 'git/github':
      return <div className="flex"><SiGit size={iconSize} className="text-[#F05032] mr-1" /><SiGithub size={iconSize} className="text-[#181717] dark:text-white" /></div>;
    case 'vs code':
      return <VscCode size={iconSize} className="text-[#007ACC]" />;
    case 'testing':
      return <SiJest size={iconSize} className="text-[#C21325]" />;
    case 'vercel':
      return <SiVercel size={iconSize} className="text-[#000000] dark:text-white" />;
    case 'netlify':
      return <SiNetlify size={iconSize} className="text-[#00C7B7]" />;
    case 'docker':
      return <SiDocker size={iconSize} className="text-[#2496ED]" />;
    case 'azure':
      return <VscAzure size={iconSize} className="text-[#0078D4]" />;
    case 'heroku':
      return <SiHeroku size={iconSize} className="text-[#430098]" />;
    default:
      return null;
  }
};

// Skill progress bar component
const SkillProgressBar = ({ skill, index }: { skill: { name: string, proficiency: number }, index: number }) => {
  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-center">
          {getSkillIcon(skill.name) && (
            <span className="mr-2">{getSkillIcon(skill.name)}</span>
          )}
          <span className="text-sm font-medium">{skill.name}</span>
        </div>
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

// Get the highest proficiency skill from a category
const getHighestProficiencySkill = (skills: { name: string, proficiency: number }[]) => {
  return [...skills].sort((a, b) => b.proficiency - a.proficiency)[0];
};

// Skill card component
const SkillCard = ({ category, index }: { category: typeof skillCategories[0], index: number }) => {
  // Sort skills by proficiency (highest to lowest)
  const sortedSkills = [...category.skills].sort((a, b) => b.proficiency - a.proficiency);
  const highestSkill = sortedSkills.length > 0 ? sortedSkills[0] : null;
  
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
        <div className="p-3 rounded-lg bg-[var(--primary)] bg-opacity-10 mr-4 shadow-inner border border-[var(--border)]">
          {highestSkill && getSkillIcon(highestSkill.name) ? 
            getSkillIcon(highestSkill.name) : 
            getCategoryIcon(category.name)}
        </div>
        <div>
          <h3 className="text-xl font-bold">{category.name}</h3>
          {highestSkill && (
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Top skill: {highestSkill.name} ({highestSkill.proficiency}%)
            </p>
          )}
        </div>
      </div>
      
      <div className="space-y-2">
        {sortedSkills.map((skill, idx) => (
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
