"use client";

import dynamic from 'next/dynamic';

export const AboutPage = dynamic(() => import('./about/page'), {
  loading: () => <div className="h-96 bg-muted animate-pulse rounded-lg" />,
  ssr: false
});

export const SkillsPage = dynamic(() => import('./skills/page'), {
  loading: () => <div className="h-96 bg-muted animate-pulse rounded-lg" />,
  ssr: false
});

export const ProjectsPage = dynamic(() => import('./projects/page'), {
  loading: () => <div className="h-96 bg-muted animate-pulse rounded-lg" />,
  ssr: false
});

export const ResumePage = dynamic(() => import('./resume/page'), {
  loading: () => <div className="h-96 bg-muted animate-pulse rounded-lg" />,
  ssr: false
});

export const ContactPage = dynamic(() => import('./contact/page'), {
  loading: () => <div className="h-96 bg-muted animate-pulse rounded-lg" />,
  ssr: false
});