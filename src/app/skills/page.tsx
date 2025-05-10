"use client";

import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { skills, type Skill } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

export default function SkillsPage() {
  const skillCategories = Array.from(new Set(skills.map(skill => skill.category)));
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <SectionWrapper id="skills" title="My Skillset" subtitle="Technologies and tools I work with.">
      <div ref={sectionRef} className="space-y-12" suppressHydrationWarning>
        {skillCategories.map((category, catIndex) => (
          <div key={category} className={`animate-slide-up-fade`} style={{ animationDelay: `${catIndex * 150}ms` }} suppressHydrationWarning>
            <h3 className="text-2xl font-semibold mb-6 text-primary">{category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6" suppressHydrationWarning>
              {skills
                .filter(skill => skill.category === category)
                .map((skill, skillIndex) => (
                  <Card
                    key={skill.name}
                    className="text-center hover:shadow-lg transition-shadow duration-300"
                  >
                    <CardHeader className="pb-2">
                      <skill.icon className="h-10 w-10 mx-auto text-primary mb-2" />
                      <CardTitle className="text-base font-medium">{skill.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <SkillBar skill={skill} animate={visible} />
                    </CardContent>
                  </Card>
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
  const color = skill.color || '#ccc'; // Fallback color

  useEffect(() => {
    if (animate) {
      setWidth(skill.percentage || 0);
    } else {
      setWidth(0);
    }
  }, [skill.percentage, animate]);

  return (
    <div className="space-y-2" suppressHydrationWarning>
      <p className="text-sm text-muted-foreground text-right">{skill.percentage}%</p>
      <div className="h-2 w-full bg-muted rounded-full overflow-hidden" suppressHydrationWarning>
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%`, backgroundColor: color }}
          suppressHydrationWarning
        ></div>
      </div>
    </div>
  );
}
