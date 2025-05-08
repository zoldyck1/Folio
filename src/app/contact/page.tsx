import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { ContactForm } from '@/components/contact/ContactForm';
import { personalInfo } from '@/lib/data';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <SectionWrapper id="contact" title="Get in Touch" subtitle="I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="animate-slide-up-fade">
          <h3 className="text-2xl font-semibold mb-6">Contact Details</h3>
          <div className="space-y-4 text-muted-foreground">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <a href={`mailto:${personalInfo.email}`} className="hover:text-primary transition-colors">
                {personalInfo.email}
              </a>
            </div>
            {/* Optional: Add phone or location if desired */}
            {/* <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary" />
              <span>+1 234 567 8900</span>
            </div> */}
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Based in Ifran and Meknes, Fès-Meknès Region, Morocco (GMT+1)</span>
            </div>
          </div>
          <h3 className="text-2xl font-semibold mt-10 mb-6">Connect Online</h3>
          <div className="flex space-x-6">
            <Link href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub Profile">
              <Github className="h-8 w-8" />
            </Link>
            <Link href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn Profile">
              <Linkedin className="h-8 w-8" />
            </Link>
          </div>
        </div>
        <div className="animate-slide-up-fade [animation-delay:200ms]">
          <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
          <ContactForm />
        </div>
      </div>
    </SectionWrapper>
  );
}
