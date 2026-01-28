import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Eye, Send } from 'lucide-react';
import { personalInfo } from '@/lib/data';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { ClientImage } from '@/components/shared/ClientImage';
import { TypewriterText } from '@/components/shared/TypewriterText';
import { AboutPage, SkillsPage, ProjectsPage, ResumePage, ContactPage } from './PageComponents';

export default function Home() {
  return (
    <>
      <div id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
        <SectionWrapper className="flex items-center justify-center h-screen py-2">
          <div className="container mx-auto relative">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  <span className="text-slate-400 text-2xl sm:text-3xl md:text-4xl block mb-4">
                    Hi, I'm
                  </span>
                  <span className="text-gray-900 dark:text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                    Ayoub{' '}
                  </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 drop-shadow-[0_0_30px_rgba(6,182,212,0.5)] animate-gradient bg-[length:200%_auto]">
                    Loulaji
                  </span>
                </h1>
              </div>

              <div className="relative max-w-4xl mx-auto mb-12 group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-1000" />
                <div className="cursor-target relative bg-slate-900/80 backdrop-blur-sm border border-cyan-500/40 rounded-lg shadow-[0_0_50px_rgba(6,182,212,0.2)] overflow-hidden">
                  <div className="bg-gradient-to-r from-slate-800 to-slate-900 px-4 py-3 flex items-center gap-2 border-b border-cyan-500/20">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.6)]" />
                      <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                    </div>
                    <span className="text-cyan-400 text-sm font-mono ml-4">~/portfolio</span>
                  </div>
                  <div className="p-8 font-mono text-base space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-cyan-400 font-bold text-lg">$</span>
                      <span className="text-white font-semibold">whoami</span>
                    </div>
                    <div className="flex items-start gap-3 pl-6">
                      <span className="text-cyan-500">&gt;</span>
                      <span className="text-slate-300 leading-relaxed">{personalInfo.shortBio}</span>
                    </div>
                    <div className="flex items-start gap-3 mt-6">
                      <span className="text-cyan-400 font-bold text-lg">$</span>
                      <span className="text-white font-semibold">cat skills.txt</span>
                    </div>
                    <div className="flex items-start gap-3 pl-6">
                      <span className="text-cyan-500">&gt;</span>
                      <span className="text-slate-300">React, TypeScript, Next.js, Node.js, Python, C++</span>
                    </div>
                    <div className="flex items-start gap-3 mt-6">
                      <span className="text-cyan-400 font-bold text-lg">$</span>
                      <span className="text-white font-semibold">./run passion_projects --all</span>
                    </div>
                    <div className="flex items-start gap-3 pl-6">
                      <span className="text-cyan-500">&gt;</span>
                      <span className="text-slate-300">Building the future, one commit at a time...</span>
                    </div>
                    <div className="flex items-start gap-3 pl-6 mt-2">
                      <span className="text-cyan-400 animate-pulse text-xl font-bold">▊</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button asChild size="lg" className="cursor-target bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold text-base shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] transition-all duration-300 border-0 px-8 py-6">
                  <Link href="https://github.com/zoldyck1?tab=repositories" target="_blank" rel="noopener noreferrer">
                    View Projects <Eye className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="cursor-target border-2 border-cyan-400 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-300 hover:text-white font-bold text-base shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-300 px-8 py-6">
                  <Link href="/#contact">
                    Get In Touch <Send className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
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