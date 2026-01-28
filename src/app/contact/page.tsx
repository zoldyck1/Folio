import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { personalInfo } from '@/lib/data';
import { Mail, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <SectionWrapper id="contact" title="Get in Touch" subtitle="I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.">
      <div className="relative grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        
        <div className="relative space-y-8 animate-slide-up-fade bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-lg p-8">
          <h3 className="text-xl font-bold text-cyan-400 tracking-wider uppercase flex items-center gap-3">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            Contact Details
          </h3>
          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-slate-800/50 rounded-lg group-hover:bg-cyan-500/10 transition-colors">
                <Mail className="h-5 w-5 text-cyan-400" />
              </div>
              <a href={`mailto:${personalInfo.email}`} className="cursor-target text-slate-300 hover:text-cyan-400 transition-colors font-mono text-sm">
                {personalInfo.email}
              </a>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-slate-800/50 rounded-lg group-hover:bg-cyan-500/10 transition-colors">
                <MapPin className="h-5 w-5 text-cyan-400" />
              </div>
              <span className="text-slate-300 text-sm">Ifran & Meknes, Morocco (GMT+1)</span>
            </div>
          </div>
        </div>

        <div className="relative animate-slide-up-fade [animation-delay:200ms] bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-lg p-8">
          <h3 className="text-xl font-bold text-cyan-400 tracking-wider uppercase mb-6 flex items-center gap-3">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            Send Message
          </h3>
          <form id="contactForm" action="https://formspree.io/f/xldgyywr" method="POST" className="space-y-5">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-semibold text-slate-300">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                placeholder="Johan Liebert"
                className="cursor-target w-full p-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 placeholder:text-slate-500 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-all"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-semibold text-slate-300">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                placeholder="example@gmail.com"
                className="cursor-target w-full p-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 placeholder:text-slate-500 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-all"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-2 text-sm font-semibold text-slate-300">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                placeholder="06 06 06 06 06"
                className="cursor-target w-full p-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 placeholder:text-slate-500 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-all"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-semibold text-slate-300">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                required 
                placeholder="Your subject here"
                className="cursor-target w-full p-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 placeholder:text-slate-500 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-all"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-semibold text-slate-300">Message</label>
              <textarea 
                id="message" 
                name="message" 
                required 
                placeholder="Your message here..."
                className="cursor-target w-full p-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 placeholder:text-slate-500 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-all h-32 resize-none"
              ></textarea>
            </div>
            <button 
              type="submit"
              className="cursor-target w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-4 rounded-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 font-semibold flex items-center justify-center gap-2 group"
            >
              Send Message
              <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
}
