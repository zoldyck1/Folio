"use client";

import { useState, useMemo, useEffect } from 'react';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { projects as allProjects, skills } from '@/lib/data';
import type { Project } from '@/lib/data';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>(allProjects);
  const [selectedTech, setSelectedTech] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const techOptions = useMemo(() => {
    const allTech = new Set<string>();
    allProjects.forEach(project => {
      project.techStack.forEach(tech => allTech.add(tech));
    });
    return ['all', ...Array.from(allTech).sort()];
  }, []);

  useEffect(() => {
    let filteredProjects = allProjects;

    if (selectedTech !== 'all') {
      filteredProjects = filteredProjects.filter(project =>
        project.techStack.includes(selectedTech)
      );
    }

    if (searchTerm) {
      filteredProjects = filteredProjects.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setProjects(filteredProjects);
  }, [selectedTech, searchTerm]);

  if (!isMounted) {
     return (
      <SectionWrapper id="projects" title="My Projects" subtitle="A selection of my work.">
        <div className="mb-8 flex flex-col md:flex-row gap-4" suppressHydrationWarning>
          <div className="h-10 w-full md:w-64 bg-muted rounded-md animate-pulse" suppressHydrationWarning />
          <div className="h-10 w-full md:w-64 bg-muted rounded-md animate-pulse" suppressHydrationWarning />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" suppressHydrationWarning>
          {[1, 2, 3].map(i => (
            <div key={i} className="h-96 bg-muted rounded-lg animate-pulse" suppressHydrationWarning />
          ))}
        </div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="projects" title="My Projects" subtitle="A selection of my work, filterable by technology or search.">
      <div className="mb-6 md:mb-8 flex flex-col md:flex-row gap-3 md:gap-4 items-center" suppressHydrationWarning>
        <div className="relative w-full md:max-w-xs" suppressHydrationWarning>
          <Input 
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="cursor-target pl-9 md:pl-10 text-sm md:text-base"
          />
          <Search className="absolute left-2.5 md:left-3 top-1/2 -translate-y-1/2 h-4 w-4 md:h-5 md:w-5 text-muted-foreground" />
        </div>
        
        <Select value={selectedTech} onValueChange={setSelectedTech}>
          <SelectTrigger className="cursor-target w-full md:w-[200px] text-sm md:text-base">
            <SelectValue placeholder="Filter by tech" />
          </SelectTrigger>
          <SelectContent>
            {techOptions.map(tech => (
              <SelectItem key={tech} value={tech} className="text-sm md:text-base">
                {tech === 'all' ? 'All Technologies' : tech}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" suppressHydrationWarning>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground text-base md:text-lg py-12">
          No projects found matching your criteria. Try adjusting your filters.
        </p>
      )}
    </SectionWrapper>
  );
}
