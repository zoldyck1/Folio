import type { LucideIcon } from 'lucide-react';
import { Code, Smartphone, Database, Cloud, Briefcase, Brain, Settings, Palette, Zap } from 'lucide-react';

export interface Skill {
  name: string;
  icon: LucideIcon;
  category: 'Language' | 'Framework' | 'Tool' | 'Database' | 'Other';
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
  name: "Alex Johnson",
  title: "Programmer & Computer Science Specialist",
  shortBio: "Passionate about building innovative solutions and exploring new technologies. Specializing in full-stack development and AI applications.",
  longBio: "With a solid foundation in computer science and years of hands-on experience, I thrive on transforming complex problems into elegant, efficient, and user-friendly software. My journey in tech has been driven by a relentless curiosity and a desire to make a tangible impact. I'm always eager to learn, adapt, and collaborate on challenging projects.",
  photoUrl: "https://picsum.photos/seed/devfolio-alex/400/400",
  photoAiHint: "professional portrait",
  email: "alex.johnson.dev@example.com",
  linkedin: "https://www.linkedin.com/in/alexjohnsondev",
  github: "https://www.github.com/alexjohnsondev",
  resumeUrl: "/resume-alex-johnson.pdf", 
  education: "M.S. in Computer Science, Stanford University (2020)\nB.S. in Software Engineering, MIT (2018)",
  coreCompetencies: [
    "Full-Stack Web Development",
    "Machine Learning & AI",
    "Cloud Computing (AWS, Azure)",
    "Agile Methodologies & DevOps",
    "Database Design & Management",
    "Problem Solving & Algorithm Design"
  ],
  professionalValues: [
    "Continuous Learning",
    "Collaboration & Teamwork",
    "Quality & Excellence",
    "User-Centric Design",
    "Integrity & Professionalism"
  ]
};

export const skills: Skill[] = [
  { name: "JavaScript", icon: Code, category: "Language" },
  { name: "TypeScript", icon: Code, category: "Language" },
  { name: "Python", icon: Code, category: "Language" },
  { name: "Java", icon: Code, category: "Language" },
  { name: "React", icon: Smartphone, category: "Framework" },
  { name: "Next.js", icon: Smartphone, category: "Framework" },
  { name: "Node.js", icon: Settings, category: "Framework" },
  { name: "Express.js", icon: Settings, category: "Framework" },
  { name: "Spring Boot", icon: Settings, category: "Framework" },
  { name: "Django", icon: Settings, category: "Framework" },
  { name: "SQL", icon: Database, category: "Database" },
  { name: "MongoDB", icon: Database, category: "Database" },
  { name: "PostgreSQL", icon: Database, category: "Database" },
  { name: "Docker", icon: Briefcase, category: "Tool" },
  { name: "Git", icon: Briefcase, category: "Tool" },
  { name: "AWS", icon: Cloud, category: "Tool" },
  { name: "TensorFlow", icon: Brain, category: "Tool" },
  { name: "PyTorch", icon: Brain, category: "Tool" },
  { name: "Figma", icon: Palette, category: "Tool" },
  { name: "REST APIs", icon: Zap, category: "Other" },
  { name: "GraphQL", icon: Zap, category: "Other" },
];

export const projects: Project[] = [
  {
    id: "project-1",
    title: "AI-Powered Task Manager",
    description: "An intelligent task management application that uses NLP to categorize and prioritize tasks automatically.",
    imageUrl: "https://picsum.photos/seed/project1/600/400",
    dataAiHint: "task manager app",
    techStack: ["Next.js", "TypeScript", "Python", "Flask", "PostgreSQL", "AWS"],
    githubUrl: "https://github.com/alexjohnsondev/ai-task-manager",
    demoUrl: "https://ai-task-manager.example.com",
  },
  {
    id: "project-2",
    title: "E-commerce Analytics Dashboard",
    description: "A comprehensive dashboard for e-commerce businesses to track sales, customer behavior, and inventory.",
    imageUrl: "https://picsum.photos/seed/project2/600/400",
    dataAiHint: "analytics dashboard",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Chart.js"],
    githubUrl: "https://github.com/alexjohnsondev/ecommerce-dashboard",
  },
  {
    id: "project-3",
    title: "Real-time Collaborative Editor",
    description: "A web-based editor that allows multiple users to edit documents simultaneously, similar to Google Docs.",
    imageUrl: "https://picsum.photos/seed/project3/600/400",
    dataAiHint: "collaborative editor",
    techStack: ["Vue.js", "Firebase", "WebSockets", "TypeScript"],
    demoUrl: "https://collab-editor.example.com",
  },
  {
    id: "project-4",
    title: "Personal Finance Tracker",
    description: "A mobile-friendly PWA to manage personal budgets, expenses, and investments with visual reports.",
    imageUrl: "https://picsum.photos/seed/project4/600/400",
    dataAiHint: "finance app",
    techStack: ["React Native", "Node.js", "SQLite", "PWA"],
    githubUrl: "https://github.com/alexjohnsondev/finance-tracker",
  },
];

export const timeline = [
  { year: "2014", event: "Started B.S. in Software Engineering at MIT." },
  { year: "2017", event: "Internship at Tech Solutions Inc. as Junior Developer." },
  { year: "2018", event: "Graduated from MIT. Started M.S. in Computer Science at Stanford." },
  { year: "2019", event: "Research Assistant at Stanford AI Lab, focusing on NLP." },
  { year: "2020", event: "Graduated from Stanford. Joined Innovate Corp as Software Engineer." },
  { year: "2022", event: "Promoted to Senior Software Engineer at Innovate Corp." },
  { year: "Present", event: "Leading projects in AI and full-stack development." },
];
