import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { personalInfo } from '@/lib/data';
import { Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <SectionWrapper id="contact" title="Get in Touch" subtitle="I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.">
      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto items-start">
        {/* Personal Info */}
        <div className="space-y-8 animate-slide-up-fade">
          <h3 className="text-2xl font-semibold mb-6">Contact Details</h3>
          <div className="space-y-4 text-muted-foreground">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <a href={`mailto:${personalInfo.email}`} className="hover:text-primary transition-colors">
                {personalInfo.email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Based in Ifran and Meknes, Fès-Meknès Region, Morocco (GMT+1)</span>
            </div>
          </div>
        </div>
        {/* Contact Form */}
        <div className="animate-slide-up-fade [animation-delay:200ms]">
          <h1 className="text-center text-gray-400 text-2xl font-bold mb-8">Send Me a Message</h1>
          <form id="contactForm" action="https://formspree.io/f/xldgyywr" method="POST" className="space-y-6">
            <div className="form-group">
              <label htmlFor="name" className="block mb-2">Full Name:</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                placeholder="Johan Liebert"
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="block mb-2">Email:</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                placeholder="example@gmail.com"
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone" className="block mb-2">Phone Number:</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                placeholder="06 06 06 06 06"
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject" className="block mb-2">Subject:</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                required 
                placeholder="Your subject here"
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="block mb-2">Message:</label>
              <textarea 
                id="message" 
                name="message" 
                required 
                placeholder="Your message here..."
                className="w-full p-2 border rounded-md h-32"
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors"
            >
              <strong>Send Message</strong>
            </button>
          </form>
          <div id="formMessage" className="mt-4 text-center"></div>
        </div>
      </div>
    </SectionWrapper>
  );
}
