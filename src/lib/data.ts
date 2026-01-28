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
  title: "Software Engineer",
  shortBio: "Software Engineer Passionate about building innovative solutions and exploring new technologies. Specializing in full-stack development, AI learning and more.",
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
    "Full Stack Development: Strong experience building and maintaining scalable web applications using React, Next.js, Node.js, Express, and MongoDB. Comfortable working across the full stack, from responsive UI development to backend logic and API integration.",
    "Frontend Engineering: Skilled in creating modern, responsive, and accessible user interfaces, with attention to performance, component reusability, and clean architecture",
    "Backend Development: Experience designing RESTful APIs, handling authentication, managing server-side logic, and optimizing application performance.",
    "Object-Oriented Programming & Algorithms: Solid foundation in Java and C++, with good understanding of OOP principles, data structures, and algorithmic problem-solving, focusing on readable, efficient, and memory-safe code.",
    "Machine Learning Fundamentals: Understanding of supervised learning concepts with practical exposure to Python-based ML libraries and data preprocessing workflows.",
    "Problem Solving: Strong analytical mindset with the ability to break down complex problems into structured, logical solutions."
  ],
  professionalValues: [
    "Continuous Learning & Growth: Highly motivated to learn new technologies, improve existing skills, and adapt quickly in fast-evolving development environments.",
    "Team Collaboration: Comfortable working within collaborative teams, communicating ideas clearly, and contributing positively to shared goals.",
    "Commitment to Quality: Dedicated to writing clean, maintainable code and delivering reliable solutions that meet both technical and business requirements.",
    "User-Centered Mindset: Strong focus on usability and user experience, ensuring applications are intuitive, accessible, and practical",
    "Integrity & Responsibility: Value honesty, accountability, and professionalism, with a strong sense of ownership over projects and deliverables."
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
  { name: "MySQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", category: "Database/APIs", percentage: 65, color: '#4479A1' },
  { name: "PostgreSQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", category: "Database/APIs", percentage: 88, color: '#336791' },
  { name: "MongoDB", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", category: "Database/APIs", percentage: 30, color: '#47A248' },
  { name: "Git", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", category: "Tools", percentage: 70, color: '#F05032' },
  { name: "GitHub", iconUrl: "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png", category: "Tools", percentage: 75, color: '#e64fa2ff' },
  { name: "VSCode", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", category: "Tools", percentage: 90, color: '#007ACC' }
];

export const projects = [
  {
    id: "project-1",
    title: "E-commerce platform with full options",
    description: "Modern e-commerce platform developed with React, TypeScript, and Vite, specialized in selling anime and philosophy-related products (t-shirts, hoodies, accessories). The platform integrates a Supabase authentication system, a complete admin panel for managing products and orders, as well as an advanced shopping cart with filtering by category and price",
    imageUrl: "/images/Axiom shop project.png",
    dataAiHint: "E-commerce WebSite",
    techStack: ["Next.js", "Node.js", "React", "TypeScript", "PostgreSQL", "Firebase"]
  },
  {
    id: "project-2",
    title: "Future CS",
    description: "Computer science app is the study of compulation and information. It is a board field that includes everythings from the theoretical foundations of computing to the practical applications of computers.",
    imageUrl: "/images/Futurecs.jpg",
    dataAiHint: "Learning WebSite",
    techStack: ["React", "Node.js", "Firebase", "TypeScript"]
  },
  {
    id: "project-3",
    title: "InPhiLo",
    description: "At inphilo, we're obsessed with philosophy and logic! We've curated a comprehensive collection of essential texts, from ancient Greek thinkers to modern-day logicians, all available for free download.",
    imageUrl: "/images/Inphilo Project.png",
    dataAiHint: "library Website",
    techStack: ["React", "Firebase", "TypeScript", "PostgreSQL"]
  },
  {
    id: "project-4",
    title: "Computer science for beginner",
    description: "in Computer Science you can learn the foundation of modern technology, encompassing the study of computation , automation , and information.",
    imageUrl: "/images/cs.jpg",
    dataAiHint: "learning Website",
    techStack: ["Next.js", "Node.js", "Flask", "Python", "TypeScript"]
  },
  {
    id: "project-5",
    title: "WordWave",
    description: "WordWave is a modern digital library platform built with React, TypeScript, and Supabase. It provides users with a seamless experience to discover, download, and read books across multiple genres.",
    imageUrl: "/images/word.jpg",
    dataAiHint: "task manager app",
    techStack: ["React", "TypeScript", "Firebase", "PostgreSQL"]
  },
  {
    id: "project-6",
    title: "YSM - Maintenance Management System",
    description: "Modern web application for maintenance management developed with React, TypeScript, and Supabase to optimize hotel operations. The platform offers distinct interfaces for customers (reporting issues from their room), supervisors (analytical dashboard and request management), and technicians (tracking interventions).",
    imageUrl: "/images/Yosmartenance project.png",
    dataAiHint: "Maintenance Management System",
    techStack: ["Node.js", "Flask", "React", "TypeScript", "PostgreSQL", "Firebase"]
  }
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
  }
];
