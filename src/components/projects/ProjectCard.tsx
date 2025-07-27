import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import type { Project } from '@/lib/data';
import { ClientImage } from '@/components/shared/ClientImage';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Card className={`group overflow-hidden h-full flex flex-col animate-slide-up-fade hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
      style={{ animationDelay: `${index * 100}ms` }}
      suppressHydrationWarning
    >
      <div className="relative w-full h-48 sm:h-56 overflow-hidden" suppressHydrationWarning>
        <ClientImage
          src={project.imageUrl}
          alt={project.title}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="transition-transform duration-500 group-hover:scale-110"
          data-ai-hint={project.dataAiHint}
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <p className="text-white text-lg font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            View Details
          </p>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <CardDescription className="text-sm min-h-[40px]">{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="mb-4" suppressHydrationWarning>
          <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-2">Tech Stack</h4>
          <div className="flex flex-wrap gap-2" suppressHydrationWarning>
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="secondary" className="transition-colors duration-300 hover:bg-primary hover:text-white">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        {project.id === "project-3" && (
          <Button
            className="w-full mt-4 group/button text-foreground hover:text-foreground"
            variant="outline"
            asChild
          >
            <Link
              href="https://zoldyck1.github.io/inphilo/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              Visit Website
              <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
            </Link>
          </Button>
        )}
        {project.id === "project-1" && (
          <Button
            className="w-full mt-4 group/button text-foreground hover:text-foreground"
            variant="outline"
            asChild
          >
            <Link
              href="https://axiom-shop.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              Visit Axiom Shop
              <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
            </Link>
          </Button>
        )}
        {project.id === "project-6" && (
          <Button
            className="w-full mt-4 group/button text-foreground hover:text-foreground"
            variant="outline"
            asChild
          >
            <Link
              href="https://yusmartenance.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              Visit YSM Platform
              <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
            </Link>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
