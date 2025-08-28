import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Eye, Send } from 'lucide-react';
import { personalInfo } from '@/lib/data';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import AboutPage from './about/page';
import SkillsPage from './skills/page';
import ProjectsPage from './projects/page';
import ResumePage from './resume/page';
import ContactPage from './contact/page';
import { ClientImage } from '@/components/shared/ClientImage';


export default function Home() {
  return (
    <>
      <div id="home" suppressHydrationWarning>
        <SectionWrapper className="flex items-center min-h-[calc(100vh-4rem)] -mt-16 pt-16 md:pt-0"> {/* Adjust for header height */}
          <div className="container mx-auto" suppressHydrationWarning>
            <div className="grid md:grid-cols-2 gap-12 items-center" suppressHydrationWarning>
              <div className="animate-slide-up-fade space-y-6" suppressHydrationWarning>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                  Hi, I&apos;m{' '}
                  <span className="relative inline-block overflow-hidden">
                    <span className="text-primary animate-continuous-slide">
                      {personalInfo.name}
                    </span>
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  {personalInfo.title}
                </p>
                <p className="text-lg">
                  {personalInfo.shortBio}
                </p>
                <div className="flex flex-col sm:flex-row gap-4" suppressHydrationWarning>
                  <Button asChild size="lg">
                    <Link href="https://github.com/zoldyck1?tab=repositories" target="_blank" rel="noopener noreferrer">
                      View My Work <Eye className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-foreground hover:text-foreground">
                    <Link href="/#contact">
                      Get in Touch <Send className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="animate-slide-up-fade [animation-delay:200ms] flex justify-center md:justify-end" suppressHydrationWarning>
                {personalInfo.photoUrl && (
                  <ClientImage
                    src={personalInfo.photoUrl}
                    alt={personalInfo.name}
                    width={400}
                    height={400}
                    priority={true}
                    className="rounded-full shadow-lg object-cover aspect-square border-4 border-primary/20 mt-20"
                    data-ai-hint={personalInfo.photoAiHint}
                  />
                )}
              </div>
            </div>
          </div>
        </SectionWrapper>
      </div>
      <div id="about" suppressHydrationWarning>
        <AboutPage />
      </div>
      <div id="skills" suppressHydrationWarning>
        <SkillsPage />
      </div>
      <div id="projects" suppressHydrationWarning>
        <ProjectsPage />
      </div>
      <div id="resume" suppressHydrationWarning>
        <ResumePage />
      </div>
      <div id="contact" suppressHydrationWarning>
        <ContactPage />
      </div>
    </>
  );
}

