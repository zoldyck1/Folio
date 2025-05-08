import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Eye, Send } from 'lucide-react';
import { personalInfo } from '@/lib/data';
import { SectionWrapper } from '@/components/shared/SectionWrapper';

export default function Home() {
  return (
    <SectionWrapper className="flex items-center min-h-[calc(100vh-4rem)] -mt-16 pt-16 md:pt-0"> {/* Adjust for header height */}
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up-fade space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Hi, I&apos;m <span className="text-primary">{personalInfo.name}</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              {personalInfo.title}
            </p>
            <p className="text-lg">
              {personalInfo.shortBio}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/projects">
                  View My Work <Eye className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">
                  Get in Touch <Send className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="animate-slide-up-fade [animation-delay:200ms] flex justify-center md:justify-end">
            <Image
              src={personalInfo.photoUrl}
              alt={personalInfo.name}
              width={400}
              height={400}
              priority
              className="rounded-full shadow-lg object-cover aspect-square border-4 border-primary/20"
              data-ai-hint={personalInfo.photoAiHint}
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
