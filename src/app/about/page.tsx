import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { personalInfo, timeline } from '@/lib/data';
import { CheckCircle, Briefcase, GraduationCap, Star } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <SectionWrapper id="about" title="About Me" subtitle="My journey in technology and beyond.">
      <div className="grid md:grid-cols-5 gap-12 items-start">
        <div className="md:col-span-2 animate-slide-up-fade [animation-delay:200ms]">
            <Image
              src={personalInfo.photoUrl}
              alt={personalInfo.name}
              width={350}
              height={350}
              className="rounded-lg shadow-xl object-cover aspect-square mx-auto border-4 border-primary/10"
              data-ai-hint={personalInfo.photoAiHint}
            />
        </div>
        <div className="md:col-span-3 space-y-6 animate-slide-up-fade">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {personalInfo.longBio}
          </p>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold flex items-center">
              <GraduationCap className="mr-2 h-6 w-6 text-primary" />
              Education
            </h3>
            <p className="whitespace-pre-line text-muted-foreground">{personalInfo.education}</p>
          </div>
        </div>
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-12">
        <div className="animate-slide-up-fade [animation-delay:400ms]">
          <h3 className="text-2xl font-semibold mb-4 flex items-center">
            <Briefcase className="mr-2 h-6 w-6 text-primary" />
            Core Competencies
          </h3>
          <ul className="space-y-2">
            {personalInfo.coreCompetencies.map((competency, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 shrink-0" />
                <span className="text-muted-foreground">{competency}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-slide-up-fade [animation-delay:600ms]">
          <h3 className="text-2xl font-semibold mb-4 flex items-center">
            <Star className="mr-2 h-6 w-6 text-primary" />
            Professional Values
          </h3>
          <ul className="space-y-2">
            {personalInfo.professionalValues.map((value, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 shrink-0" />
                <span className="text-muted-foreground">{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-16 animate-slide-up-fade [animation-delay:800ms]">
        <h3 className="text-2xl font-semibold mb-8 text-center md:text-left">Career Milestones</h3>
        <div className="relative pl-6 border-l-2 border-primary/50">
          {timeline.map((item, index) => (
            <div key={index} className="mb-8 ml-4">
              <div className="absolute -left-[11px] mt-1.5 h-5 w-5 rounded-full bg-primary border-2 border-background"></div>
              <time className="text-sm font-semibold uppercase text-primary">{item.year}</time>
              <p className="mt-1 text-muted-foreground">{item.event}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
