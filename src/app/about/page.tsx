import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { personalInfo, timeline } from '@/lib/data';
import { CheckCircle, Briefcase, GraduationCap, Star, Code, Award } from 'lucide-react';
import { ClientImage } from '@/components/shared/ClientImage';

export default function AboutPage() {
  return (
    <SectionWrapper id="about" title="About Me" subtitle="My journey in technology and beyond.">
      <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-start" suppressHydrationWarning>
        <div className="hidden md:block md:col-span-2" suppressHydrationWarning>
          {personalInfo.photoUrl && (
            <div className="relative group flex justify-center">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-500 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000" />
                <div className="relative w-48 h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80 rounded-full overflow-hidden border-4 border-primary/20 bg-gradient-to-br from-primary/10 to-blue-500/10">
                  <ClientImage
                    src={personalInfo.photoUrl}
                    alt={personalInfo.name}
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    data-ai-hint={personalInfo.photoAiHint}
                  />
                </div>
                <div className="absolute bottom-2 right-2 lg:bottom-4 lg:right-4 flex items-center gap-2 bg-background/90 backdrop-blur-sm px-2 py-1.5 lg:px-3 lg:py-2 rounded-full border border-primary/20">
                  <div className="w-2 h-2 lg:w-3 lg:h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs lg:text-sm font-medium text-foreground">Available for work </span>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="col-span-full md:col-span-3 space-y-6 md:space-y-8" suppressHydrationWarning>
          <div className="relative p-4 md:p-6 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg">
            <div className="flex items-center mb-3 md:mb-4">
              <Code className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6 text-primary" />
              <h3 className="text-lg md:text-xl font-semibold text-foreground">Professional Overview</h3>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {personalInfo.longBio}
            </p>
          </div>

          <div className="relative p-4 md:p-6 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg">
            <div className="flex items-center mb-3 md:mb-4">
              <GraduationCap className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6 text-primary" />
              <h3 className="text-lg md:text-xl font-semibold text-foreground">Education</h3>
            </div>
            <p className="text-sm md:text-base text-muted-foreground">{personalInfo.education}</p>
          </div>
        </div>
      </div>

      <div className="mt-12 md:mt-16 grid md:grid-cols-2 gap-6 md:gap-8" suppressHydrationWarning>
        <div className="relative p-4 md:p-6 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg" suppressHydrationWarning>
          <div className="flex items-center mb-4 md:mb-6">
            <Briefcase className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6 text-primary" />
            <h3 className="text-lg md:text-xl font-semibold text-foreground">Core Competencies</h3>
          </div>
          <ul className="space-y-2 md:space-y-3">
            {personalInfo.coreCompetencies.map((competency, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-primary mr-2 md:mr-3 mt-0.5 md:mt-1 shrink-0" />
                <span className="text-sm md:text-base text-muted-foreground leading-relaxed">{competency}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative p-4 md:p-6 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg" suppressHydrationWarning>
          <div className="flex items-center mb-4 md:mb-6">
            <Star className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6 text-primary" />
            <h3 className="text-lg md:text-xl font-semibold text-foreground">Professional Values</h3>
          </div>
          <ul className="space-y-2 md:space-y-3">
            {personalInfo.professionalValues.map((value, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-primary mr-2 md:mr-3 mt-0.5 md:mt-1 shrink-0" />
                <span className="text-sm md:text-base text-muted-foreground leading-relaxed">{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 md:mt-16 relative p-4 md:p-6 bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg" suppressHydrationWarning>
        <div className="flex items-center mb-4 md:mb-6">
          <Award className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6 text-cyan-400" />
          <h3 className="text-lg md:text-xl font-semibold text-white">Experience & Education Timeline</h3>
        </div>
        <div className="relative pl-4 md:pl-6 border-l-2 border-cyan-500/50" suppressHydrationWarning>
          {timeline.map((item, index) => (
            <div key={index} className="mb-6 md:mb-8 ml-3 md:ml-4" suppressHydrationWarning>
              <div className="absolute -left-[9px] md:-left-[11px] mt-1.5 h-4 w-4 md:h-5 md:w-5 rounded-full border-2 md:border-4 border-cyan-400 bg-slate-900" suppressHydrationWarning />
              <div className="flex flex-col p-3 md:p-4 bg-slate-800/30 rounded-lg border border-cyan-500/10" suppressHydrationWarning>
                <h4 className="text-base md:text-lg font-medium text-white">{item.title}</h4>
                <span className="text-xs md:text-sm text-cyan-400 mb-1 md:mb-2">{item.date}</span>
                <span className="text-xs md:text-sm font-medium text-slate-300 mb-1 md:mb-2">{item.location}</span>
                <p className="text-xs md:text-sm text-slate-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
