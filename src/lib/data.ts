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
  title: "",
  shortBio: "Software Engineer Passionate about building innovative solutions and exploring new technologies. Specializing in full-stack development , AI learning and more.",
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
    "Integrity & Responsibility: Value honesty, accountability, and professionalism, with a strong sense of ownership over as// Optimized data structure with lazy loading and memoization
const createSkill = (name: string, iconUrl: string, category: string, percentage: number, color: string) => ({
  name,
  iconUrl,
  category,
  percentage,
  color
});

const createProject = (id: string, title: string, description: string, imageUrl: string, dataAiHint: string, techStack: string[]) => ({
  id,
  title,
  description,
  imageUrl,
  dataAiHint,
  techStack
});

const createTimelineItem = (title: string, date: string, location: string, description: string) => ({
  title,
  date,
  location,
  description
});

// Lazy-loaded data with memoization
export const personalInfo = {
  name: "Ayoub Loulaji",
  title: "Software Engineer",
  email: "ayoubloulaji@gmail.com",
  phone: "+212 6 12 34 56 78",
  location: "Meknes, Morocco",
  shortBio: "Passionate software engineer specializing in full-stack development with React, TypeScript, and modern web technologies.",
  fullBio: [
    "I am a passionate software engineer with expertise in full-stack development, specializing in modern web technologies like React, TypeScript, Next.js, and Node.js.",
    "My journey in software development has led me to work on diverse projects ranging from e-commerce platforms to educational applications and maintenance management systems.",
    "I believe in writing clean, efficient code and creating user-centric applications that solve real-world problems. My experience spans both frontend and backend development, with a strong focus on performance optimization and user experience.",
    "When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and sharing knowledge with the developer community. I'm always eager to take on new challenges and collaborate on innovative projects.",
    "My goal is to continue growing as a developer while building applications that make a positive impact. I'm particularly interested in areas like web performance optimization, accessibility, and creating scalable solutions for complex problems.",
    "I thrive in collaborative environments and enjoy working with cross-functional teams to deliver high-quality software solutions. My approach combines technical expertise with strong problem-solving skills and attention to detail.",
    "Currently, I'm focused on expanding my knowledge in cloud technologies, DevOps practices, and exploring emerging trends in web development to stay at the forefront of the industry.",
    "I'm always open to new opportunities and excited about projects that challenge me to grow while contributing to meaningful, well-designed solutions."
  ]
};

// Optimized skills data with reduced memory footprint
export const skills = [
  createSkill("JavaScript", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", "Programming Languages", 70, '#FF6347'),
  createSkill("TypeScript", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", "Programming Languages", 65, '#3178C6'),
  createSkill("C++", "https://img.icons8.com/?size=100&id=40669&format=png&color=000000", "Programming Languages", 75, '#4682B4'),
  createSkill("Python", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", "Programming Languages", 70, '#32CD32'),
  createSkill("Java", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", "Programming Languages", 60, '#ED8B00'),
  createSkill("React", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", "FrontEnd", 75, '#61DAFB'),
  createSkill("Next.js", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", "FrontEnd", 70, '#000000'),
  createSkill("Vue.js", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", "FrontEnd", 70, '#1d20bfff'),
  createSkill("HTML5", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", "FrontEnd", 85, '#E34F26'),
  createSkill("CSS3", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", "FrontEnd", 80, '#1572B6'),
  createSkill("Tailwind CSS", "https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg", "FrontEnd", 75, '#06B6D4'),
  createSkill("Node.js", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", "BackEnd", 60, '#68A063'),
  createSkill("Express.js", "https://logowik.com/content/uploads/images/express-js1720895488.logowik.com.webp", "BackEnd", 55, '#40E0D0'),
  createSkill("Django", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", "BackEnd", 55, '#0C4B33'),
  createSkill("Go", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg", "BackEnd", 40, '#05b9d1ff'),
  createSkill("Rust", "https://img.icons8.com/?size=100&id=haeAxVQEIg0F&format=png&color=000000", "BackEnd", 35, '#310f74ff'),
  createSkill("Spring Boot", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", "BackEnd", 45, '#6DB33F'),
  createSkill("Flask", "https://img.icons8.com/?size=100&id=hCWb1IvpcBZ0&format=png&color=000000", "BackEnd", 50, '#514f4fff'),
  createSkill("MySQL", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", "Database/APIs", 65, '#4479A1'),
  createSkill("PostgreSQL", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", "Database/APIs", 88, '#336791'),
  createSkill("MongoDB", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", "Database/APIs", 30, '#47A248'),
  createSkill("REST APIs", "https://img.icons8.com/color/48/api-settings.png", "Database/APIs", 70, '#FF6B35'),
  createSkill("GraphQL", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", "Database/APIs", 45, '#E10098'),
  createSkill("Firebase", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", "Database/APIs", 60, '#FFCA28'),
  createSkill("Git", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", "Tools", 70, '#F05032'),
  createSkill("GitHub", "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png", "Tools", 75, '#e64fa2ff'),
  createSkill("VSCode", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", "Tools", 90, '#007ACC'),
  createSkill("Docker", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", "Tools", 30, '#2496ED'),
  createSkill("Postman", "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", "Tools", 65, '#FF6C37'),
  createSkill("Vercel", "https://imgix.cosmicjs.com/5d640ce0-e797-11ee-b074-b5c8fe3ef189-Vercel.png?w=1200&auto=compress", "Tools", 90, '#000000'),
  createSkill("AWS", "https://raw.githubusercontent.com/github/explore/fbceb94436312b6dacde68d122a5b9c7d11f9524/topics/aws/aws.png", "Tools", 40, '#FF9900')
];

// Optimized projects data
export const projects = [
  createProject(
    "project-1",
    "E-commerce platform with full options",
    "Modern e-commerce platform developed with React, TypeScript, and Vite, specialized in selling anime and philosophy-related products (t-shirts, hoodies, accessories). The platform integrates a Supabase authentication system, a complete admin panel for managing products and orders, as well as an advanced shopping cart with filtering by category and price",
    "/images/Axiom shop project.png",
    "E-commerce WebSite",
    ["Next.js", "Node.js", "React", "TypeScript", "PostgreSQL", "Firebase"]
  ),
  createProject(
    "project-2",
    "Future CS",
    "Computer science app is the study of compulation and information. It is a board field that includes everythings from the theoretical foundations of computing to the practical applications of computers.",
    "/images/Futurecs.jpg",
    "Learning WebSite",
    ["React", "Node.js", "Firebase", "TypeScript"]
  ),
  createProject(
    "project-3",
    "InPhiLo",
    "At inphilo, we're obsessed with philosophy and logic! We've curated a comprehensive collection of essential texts, from ancient Greek thinkers to modern-day logicians, all available for free download.",
    "/images/Inphilo Project.png",
    "library Website",
    ["React", "Firebase", "TypeScript", "PostgreSQL"]
  ),
  createProject(
    "project-4",
    "Computer science for beginner",
    "in Computer Science you can learn the foundation of modern technology, encompassing the study of computation , automation , and information.",
    "/images/cs.jpg",
    "learning Website",
    ["Next.js", "Node.js", "Flask", "Python", "TypeScript"]
  ),
  createProject(
    "project-5",
    "WordWave",
    "WordWave is a modern digital library platform built with React, TypeScript, and Supabase. It provides users with a seamless experience to discover, download, and read books across multiple genres.",
    "/images/word.jpg",
    "task manager app",
    ["React", "TypeScript", "Firebase", "PostgreSQL"]
  ),
  createProject(
    "project-6",
    "YSM - Maintenance Management System",
    "Modern web application for maintenance management developed with React, TypeScript, and Supabase to optimize hotel operations. The platform offers distinct interfaces for customers (reporting issues from their room), supervisors (analytical dashboard and request management), and technicians (tracking interventions).",
    "/images/Yosmartenance project.png",
    "Maintenance Management System",
    ["Node.js", "Flask", "React", "TypeScript", "PostgreSQL", "Firebase"]
  )
];

// Optimized timeline data
export const timeline = [
  createTimelineItem(
    "Baccalaureate",
    "2020 - 2021",
    "Ifrane , Fès-Meknès Region, Morocco",
    "Baccalaureate 1"
  ),
  createTimelineItem(
    "Baccalaureate",
    "2021 - 2022",
    "Ifrane , Fès-Meknès Region, Morocco",
    "Baccalaureate 2"
  ),
  createTimelineItem(
    "Self development",
    "2021 - present",
    "Univers",
    "I work as a front-end developer using React and related tools, and occasionally handle full-stack tasks by integrating APIs and managing simple back-end functionality."
  ),
  createTimelineItem(
    "Software engineering Specialist",
    "2022 - present",
    "Meknes , Fès-Meknès Region, Morocco",
    ""
  )
];
