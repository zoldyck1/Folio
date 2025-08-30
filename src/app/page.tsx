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
import { TypewriterText } from '@/components/shared/TypewriterText';


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
                  <TypewriterText text={personalInfo.name} speed={100} />
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
                  <div className="relative group cursor-pointer w-[280px] h-[280px] mt-20 transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-2">
                    <div className="absolute inset-0 rounded-full border-2 border-primary group-hover:border-primary/80 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-500"></div>
                    <div className="absolute top-2 right-8 text-primary text-lg group-hover:rotate-180 group-hover:scale-125 transition-all duration-500">✦</div>
                    <div className="absolute bottom-8 left-2 text-primary/60 text-sm transform -rotate-45 group-hover:translate-x-1 group-hover:text-primary transition-all duration-500">////</div>
                    <div className="absolute top-8 left-2 text-primary/40 text-lg group-hover:rotate-90 group-hover:text-primary transition-all duration-500">+</div>
                    <div className="absolute inset-4 rounded-full overflow-hidden group-hover:shadow-2xl group-hover:shadow-primary/10 transition-all duration-500">
                      <ClientImage
                        src={personalInfo.photoUrl}
                        alt={personalInfo.name}
                        width={250}
                        height={250}
                        priority={true}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 shadow-2xl"
                        data-ai-hint={personalInfo.photoAiHint}
                      />
                    </div>
                  </div>
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

