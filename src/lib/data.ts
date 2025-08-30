import type { LucideIcon } from 'lucide-react';
import { Code, Smartphone, Database, Cloud, Briefcase, Brain, Settings, Palette, Zap } from 'lucide-react';

export interface Skill {
  name: string;
  icon?: LucideIcon;
  iconUrl?: string;
  category: 'Programming Languages' | 'FrontEnd' | 'BackEnd' | 'Database/APIs' | 'Tools';
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
  email: "ayoubl.zoldyck@gmail.com",
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
  { name: "JavaScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", category: "Programming Languages", percentage: 70, color: '#FF6347' },
  { name: "TypeScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", category: "Programming Languages", percentage: 65, color: '#3178C6' },
  { name: "C++", iconUrl: "https://img.icons8.com/?size=100&id=40669&format=png&color=000000", category: "Programming Languages", percentage: 75, color: '#4682B4' },
  { name: "Python", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", category: "Programming Languages", percentage: 70, color: '#32CD32' },
  { name: "Java", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", category: "Programming Languages", percentage: 60, color: '#ED8B00' },
  { name: "React", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "FrontEnd", percentage: 75, color: '#61DAFB' },
  { name: "Next.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", category: "FrontEnd", percentage: 70, color: '#000000' },
  { name: "Vue.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", category: "FrontEnd", percentage: 70, color: '#1d20bfff' },
  { name: "HTML5", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", category: "FrontEnd", percentage: 85, color: '#E34F26' },
  { name: "CSS3", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", category: "FrontEnd", percentage: 80, color: '#1572B6' },
  { name: "Tailwind CSS", iconUrl: "https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg", category: "FrontEnd", percentage: 75, color: '#06B6D4' },
  { name: "Node.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "BackEnd", percentage: 60, color: '#68A063' },
  { name: "Express.js", iconUrl: "https://logowik.com/content/uploads/images/express-js1720895488.logowik.com.webp", category: "BackEnd", percentage: 55, color: '#40E0D0' },
  { name: "Django", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", category: "BackEnd", percentage: 55, color: '#0C4B33' },
  { name: "Go", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg", category: "BackEnd", percentage: 40, color: '#05b9d1ff' },
  { name: "Rust", iconUrl: "https://img.icons8.com/?size=100&id=haeAxVQEIg0F&format=png&color=000000", category: "BackEnd", percentage: 35, color: '#310f74ff' },
  { name: "Spring Boot", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", category: "BackEnd", percentage: 45, color: '#6DB33F' },
  { name: "Flask", iconUrl: "https://img.icons8.com/?size=100&id=hCWb1IvpcBZ0&format=png&color=000000", category: "BackEnd", percentage: 50, color: '#514f4fff' },

  { name: "MySQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", category: "Database/APIs", percentage: 65, color: '#4479A1' },
  { name: "PostgreSQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", category: "Database/APIs", percentage: 88, color: '#336791' },
  { name: "MongoDB", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", category: "Database/APIs", percentage: 30, color: '#47A248' },
  { name: "REST APIs", iconUrl: "https://img.icons8.com/color/48/api-settings.png", category: "Database/APIs", percentage: 70, color: '#FF6B35' },
  { name: "GraphQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", category: "Database/APIs", percentage: 45, color: '#E10098' },
  { name: "Firebase", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", category: "Database/APIs", percentage: 60, color: '#FFCA28' },

  { name: "Git", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", category: "Tools", percentage: 70, color: '#F05032' },
  { name: "GitHub", iconUrl: "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png", category: "Tools", percentage: 75, color: '#e64fa2ff' },
  { name: "VSCode", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", category: "Tools", percentage: 90, color: '#007ACC' },
  { name: "Docker", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", category: "Tools", percentage: 30, color: '#2496ED' },
  { name: "Postman", iconUrl: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", category: "Tools", percentage: 65, color: '#FF6C37' },
  { name: "Vercel", iconUrl: "https://imgix.cosmicjs.com/5d640ce0-e797-11ee-b074-b5c8fe3ef189-Vercel.png?w=1200&auto=compress", category: "Tools", percentage: 90, color: '#000000' },
  { name: "AWS", iconUrl: "https://raw.githubusercontent.com/github/explore/fbceb94436312b6dacde68d122a5b9c7d11f9524/topics/aws/aws.png", category: "Tools", percentage: 40, color: '#FF9900' }

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
