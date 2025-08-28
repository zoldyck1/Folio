import type { LucideIcon } from 'lucide-react';
import { Code, Smartphone, Database, Cloud, Briefcase, Brain, Settings, Palette, Zap } from 'lucide-react';

export interface Skill {
  name: string;
  icon: LucideIcon;
  category: 'Language' | 'Framework/library' | 'Tool' | 'Database' | 'Other';
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
  name: "Ayoub Loulaji",
  title: "Software Engineer & Programmer ",
  shortBio: "Passionate about building innovative solutions and exploring new technologies. Specializing in full-stack development and AI applications.",
  longBio: "A motivated Software Engineer graduate with a strong academic foundation in software development, algorithms, and systems design. During my studies in Computer engineering, I developed practical skills in web development, C++, databases, and the software development lifecycle. I'm curious by nature, eager to learn new technologies, and enjoy solving real-world problems through code. I thrive in collaborative environments and am always ready to take on new challenges to grow as a developer.",
  photoUrl: "/images/pro-main.png",
  photoAiHint: "professional portrait",
  email: "a.loulaji@edu.umi.ac.ma",
  linkedin: "https://www.linkedin.com/in/ayoub-l-4b0389239/",
  github: "https://github.com/zoldyck1",
  instagram: "https://www.instagram.com/11___liebert/",
  resumeUrl: "/resume.pdf",
  education: "Software Engineer Specialist / FSM",


  coreCompetencies: [
    "Full Stack Developer with extensive experience in building scalable web applications from front to back. Proficient in modern technologies including React, Next.js, Node.js, Express, and MongoDB. Skilled in crafting responsive UIs, optimizing backend performance, and integrating secure APIs.",
    "Machine Learning (supervised learning, Python libraries)",
    "C++: Proficient in object-oriented programming (OOP), data structures, and algorithms, with a focus on writing clean, efficient, and memory-safe code.",
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
  { name: "React", icon: Smartphone, category: "Framework/library", percentage: 75, color: '#61DAFB' }, // Cyan
  { name: "Next.js", icon: Smartphone, category: "Framework/library", percentage: 70, color: '#000000' }, // Black
  { name: "Node.js", icon: Settings, category: "Framework/library", percentage: 60, color: '#68A063' }, // Sage Green
  { name: "Vue.js", icon: Settings, category: "Framework/library", percentage: 70, color: '#1d20bfff' }, // Turquoise
  { name: "Express.js", icon: Settings, category: "Framework/library", percentage: 55, color: '#40E0D0' }, // Turquoise
  { name: "Django", icon: Settings, category: "Framework/library", percentage: 40, color: '#0C4B33' }, // Dark Green

  { name: "SQLbasics", icon: Database, category: "Database", percentage: 65, color: '#FFD700' }, // Gold
  { name: "SQLite", icon: Database, category: "Database", percentage: 60, color: '#c47705ff' }, // Gold
  { name: "PostgreSQL", icon: Database, category: "Database", percentage: 88, color: '#095005ff' }, // Gold
  { name: "MongoDB", icon: Database, category: "Database", percentage: 30, color: '#7af97cff' }, // Forest Green

  { name: "Docker", icon: Briefcase, category: "Tool", percentage: 30, color: '#2496ED' }, // Dodger Blue
  { name: "Git", icon: Briefcase, category: "Tool", percentage: 70, color: '#F05032' }, // Red-Orange
  { name: "VScode", icon: Brain, category: "Tool", percentage: 90, color: '#009ed3ff' }, // Orange
  { name: "PyTorch", icon: Brain, category: "Tool", percentage: 30, color: '#EE4C2C' }, // Bright Red
  { name: "Vercel", icon: Brain, category: "Tool", percentage: 90, color: '#827c7aff' }, // Bright Red
  { name: "Jupyter Notebook", icon: Brain, category: "Tool", percentage: 60, color: '#a57363ff' }, // Bright Red

];

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Boutique -full options- E-commerce ",
    description: "E-commerce moderne développé avec React, TypeScript et Vite, spécialisé dans la vente de produits anime et philosophiques (t-shirts, hoodies, accessoires). La plateforme intègre un système d'authentification Supabase, un panneau d'administration complet pour la gestion des produits et commandes, ainsi qu'un panier d'achat sophistiqué avec filtrage par catégories et prix... ",
    imageUrl: "https://res.cloudinary.com/dalpnjdav/image/upload/v1753656826/axiom_project_piilwu.jpg",
    dataAiHint: "E-commerce WebSite",
    techStack: ["Next.js", "Node.js", "Flask", "React", "TypeScript", "PostgreSQL", "Firebase"],
  },

  {
    id: "project-2",
    title: "Future CS",
    description: "Computer science is the study of compulation and information. It is a board field that includes everythings from the theoretical foundations of computing to the practical applications of computers.",
    imageUrl: "/images/Futurecs.jpg",
    dataAiHint: "Learning WebSite",
    techStack: ["React", "Node.js", "Firebase", "TypeScript",],
  },
  {
    id: "project-3",
    title: "InPhiLo",
    description: "At zoldyck1.github.io/inphilo, we're obsessed with philosophy and logic! We've curated a comprehensive collection of essential texts, from ancient Greek thinkers to modern-day logicians, all available for free download. ",
    imageUrl: "/images/inphilo.jpg",
    dataAiHint: "library Website",
    techStack: ["React", "Firebase", "TypeScript", "PostgreSQL"],
  },
  {
    id: "project-4",
    title: "Computer science for beginner",
    description: "Computer Science is the foundation of modern technology, encompassing the study of computation , automation , and information. ",
    imageUrl: "/images/cs.jpg",
    dataAiHint: "learning Website",
    techStack: ["Next.js", "Node.js", "Flask", "Python", "TypeScript"],
  },
  {
    id: "project-5",
    title: "WordWave",
    description: "WordWave is a modern digital library platform built with React, TypeScript, and Supabase. It provides users with a seamless experience to discover, download, and read books across multiple genres.",
    imageUrl: "/images/word.jpg",
    dataAiHint: "task manager app",
    techStack: ["React", "TypeScript", "Firebase", "PostgreSQL"],

  },
  {
    id: "project-6",
    title: "YSM - Système de Gestion de Maintenance Hôtelière",
    description: "Application web moderne de gestion de maintenance développée avec React, TypeScript et Supabase pour optimiser les opérations hôtelières. La plateforme offre des interfaces distinctes pour les clients (signalement de problèmes depuis leur chambre), les superviseurs (tableau de bord analytique et gestion des demandes) et les techniciens (suivi des interventions)...",
    imageUrl: "https://res.cloudinary.com/dalpnjdav/image/upload/v1753656826/YOSMARTENANCE_proj_s2bbn6.jpg",
    dataAiHint: "gestion de maintenance website",
    techStack: ["Node.js", "Flask", "React", "TypeScript", "PostgreSQL", "Firebase"],
  },
];

export const timeline = [
  {
    title: "Baccalaureate",
    date: "2020 - 2021",
    location: "Ifrane , Fès-Meknès Region, Morocco",
    description: "Baccalaureate 1"
  },
  {
    title: "Baccalaureate",
    date: "2021 - 2022",
    location: "Ifrane , Fès-Meknès Region, Morocco",
    description: "Baccalaureate 2"
  },
  {
    title: "Self development",
    date: "2021 - present",
    location: "Univers",
    description: "I work as a front-end developer using React and related tools, and occasionally handle full-stack tasks by integrating APIs and managing simple back-end functionality."
  },
  {
    title: "Software engineering Specialist",
    date: "2022 - present",
    location: "Meknes , Fès-Meknès Region, Morocco",
    description: ""
  },
];
