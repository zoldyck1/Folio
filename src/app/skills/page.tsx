"use client";

import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { skills, type Skill } from '@/lib/data';
import { useState, useEffect, useRef } from 'react';

export default function SkillsPage() {
  const skillCategories = Array.from(new Set(skills.map(skill => skill.category)));
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1, rootMargin: '50px 0px -50px 0px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <SectionWrapper id="skills" title="My Skillset" subtitle="Technologies and tools I work with.">
      <div ref={sectionRef} className="relative space-y-16">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        
        {skillCategories.map((category, catIndex) => (
          <div key={category} className="relative" style={{ animationDelay: `${catIndex * 100}ms` }}>
            <h3 className="text-xl font-bold mb-8 text-cyan-400 tracking-wider uppercase flex items-center gap-3">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              {category}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {skills.filter(s => s.category === category).map((skill) => (
                <div
                  key={skill.name}
                  className="cursor-target group relative bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-lg p-5 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img src={skill.iconUrl} alt={skill.name} className="h-12 w-12 object-contain" />
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-slate-200">{skill.name}</h4>
                      <span className="text-xs text-cyan-400 font-mono">{skill.percentage}%</span>
                    </div>
                  </div>
                  <SkillBar skill={skill} animate={visible} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

const SkillBar = ({ skill, animate }: { skill: Skill, animate: boolean }) => {
  const [width, setWidth] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (animate && !hasAnimated) {
      const timer = setTimeout(() => {
        setWidth(skill.percentage || 0);
        setHasAnimated(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [skill.percentage, animate, hasAnimated]);

  return (
    <div className="relative h-1.5 bg-slate-800/50 rounded-full overflow-hidden">
      <div
        className="absolute inset-y-0 left-0 rounded-full transition-all duration-1000 ease-out"
        style={{ 
          width: `${width}%`,
          background: `linear-gradient(90deg, ${skill.color}, rgba(6,182,212,0.8))`,
          boxShadow: `0 0 10px ${skill.color}40`
        }}
      />
    </div>
  );
}
