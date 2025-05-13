import type { LucideIcon } from 'lucide-react';
import { Code, Smartphone, Database, Cloud, Briefcase, Brain, Settings, Palette, Zap } from 'lucide-react';

export interface Skill {
  name: string;
  icon: LucideIcon;
  category: 'Language' | 'Framework' | 'Tool' | 'Database' | 'Other';
  percentage?: number;
  color: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  dataAiHint?: string;
}

export const personalInfo = {
  name: "Johan liebert",
  title: "Programmer & Computer Engineering Specialist",
  shortBio: "Passionate about building innovative solutions and exploring new technologies. Specializing in full-stack development and AI applications.",
  longBio: "A motivated computer science graduate with a strong academic foundation in software development, algorithms, and systems design. During my studies in Computer engineering, I developed practical skills in web development, C++, databases, and the software development lifecycle. I'm curious by nature, eager to learn new technologies, and enjoy solving real-world problems through code. I thrive in collaborative environments and am always ready to take on new challenges to grow as a developer.",
  photoUrl: "/images/main.png",
  photoAiHint: "professional portrait",
  email: "ayoubl.zoldyck@gmail.com",
  linkedin: "https://www.linkedin.com/in/johan-liebert-4b0389239/",
  github: "https://github.com/zoldyck1",
  instagram: "https://www.instagram.com/11___liebert/",
  resumeUrl: "/resume.pdf",
  education: "Faculty of Sciences of Meknes / Moulay Ismail University",


  coreCompetencies: [
    "Web Development (HTML, CSS, JavaScript, basics of backend)",
    "Introductory Machine Learning (supervised learning, Python libraries)",
    "C++ Programming (OOP, data structures, algorithm implementation)",
    "Software Development Life Cycle & Agile Basics",
    "Relational Databases (SQL, normalization, ERDs)",
    "Problem Solving & Algorithm Fundamentals"
  ],
  professionalValues: [
    "Eagerness to Learn and Grow",
    "Team Collaboration",
    "Commitment to Quality",
    "Focus on Usability",
    "Honesty and Responsibility"
  ]                                
  
};

export const skills: Skill[] = [
  { name: "JavaScript", icon: Code, category: "Language", percentage: 70, color: '#FF6347' }, // Tomato
  { name: "C++", icon: Code, category: "Language", percentage: 75, color: '#4682B4' }, // Steel Blue
  { name: "C", icon: Code, category: "Language", percentage: 70, color: '#DC143C' }, // Crimson
  { name: "python", icon: Code, category: "Language", percentage: 70, color: '#32CD32' }, // Lime Green
  { name: "PHP", icon: Code, category: "Language", percentage: 50, color: '#9370DB' }, // Medium Purple
  { name: "React", icon: Smartphone, category: "Framework", percentage: 75, color: '#61DAFB' }, // Cyan
  { name: "Next.js", icon: Smartphone, category: "Framework", percentage: 70, color: '#000000' }, // Black
  { name: "Node.js", icon: Settings, category: "Framework", percentage: 60, color: '#68A063' }, // Sage Green
  { name: "Express.js", icon: Settings, category: "Framework", percentage: 55, color: '#40E0D0' }, // Turquoise
  { name: "Django", icon: Settings, category: "Framework", percentage: 30, color: '#0C4B33' }, // Dark Green
  { name: "SQL", icon: Database, category: "Database", percentage: 60, color: '#FFD700' }, // Gold
  { name: "MongoDB", icon: Database, category: "Database", percentage: 30, color: '#47A248' }, // Forest Green
  { name: "Docker", icon: Briefcase, category: "Tool", percentage: 30, color: '#2496ED' }, // Dodger Blue
  { name: "Git", icon: Briefcase, category: "Tool", percentage: 70, color: '#F05032' }, // Red-Orange
  { name: "TensorFlow", icon: Brain, category: "Tool", percentage: 30, color: '#FF6F00' }, // Orange
  { name: "PyTorch", icon: Brain, category: "Tool", percentage: 30, color: '#EE4C2C' }, // Bright Red
];

export const projects: Project[] = [
  {
    id: "project-1",
    title: "WordWave",
    description: "WordWave is a modern digital library platform built with React, TypeScript, and Supabase. It provides users with a seamless experience to discover, download, and read books across multiple genres.",
    imageUrl: "/images/word.jpg",
    dataAiHint: "task manager app",
    techStack: ["React", "TypeScript", "Firebase", "PostgreSQL"],

  },
  {
    id: "project-2",
    title: "Future CS",
    description: "Computer science is the study of compulation and information. It is a board field that includes everythings from the theoretical foundations of computing to the practical applications of computers.",
    imageUrl: "/images/Futurecs.jpg",
    dataAiHint: "Learning WebSite",
    techStack: ["React", "Node.js", "Firebase", "TypeScript", ],
  },
  {
    id: "project-3",
    title: "InPhiLo",
    description: "At zoldyck1.github.io/inphilo, we're obsessed with philosophy and logic! We've curated a comprehensive collection of essential texts, from ancient Greek thinkers to modern-day logicians, all available for free download. ",
    imageUrl: "/images/inphilo.jpg",
    dataAiHint: "E-commerce Website",
    techStack: ["React", "Firebase", "TypeScript", "PostgreSQL"],
  },
  {
    id: "project-4",
    title: "Computer science for beginner",
    description: "Computer Science is the foundation of modern technology, encompassing the study of computation , automation , and information. ",
    imageUrl: "/images/cs.jpg",
    dataAiHint: "learning Website",
    techStack: ["Next.js", "Node.js", "Flask", "Python" ,"TypeScript"],
  },
];

export const timeline = [
  { 
    title: "Baccalaureate",
    date: "2021 - 2022",
    location: "Ifrane , Fès-Meknès Region, Morocco",
    description: "Baccalaureate"
  },
  { 
    title: "Self development",
    date: "2021 - 2022",
    location: "Univers",
    description: "Worked on front-end development using React and assisted in API integration for web applications"
  },
  { 
    title: "Computer engineering Specialist",
    date: "2022 - now",
    location: "Meknes , Fès-Meknès Region, Morocco",
    description: ""
  },
];
