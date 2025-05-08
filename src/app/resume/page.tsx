import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { personalInfo } from '@/lib/data';
import Link from 'next/link';

export default function ResumePage() {
  return (
    <SectionWrapper id="resume" title="My Resume/CV" subtitle="Download my professional background or view it below.">
      <div className="text-center mb-8 animate-slide-up-fade">
        <Button asChild size="lg">
          <Link href={personalInfo.resumeUrl} download target="_blank">
            Download Resume <Download className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>

      <div className="animate-slide-up-fade [animation-delay:200ms] aspect-[8.5/11] w-full max-w-4xl mx-auto shadow-xl rounded-lg overflow-hidden border">
         {/* Fallback if PDF is not viewable or for accessibility */}
        <div className="p-8 bg-card h-full flex flex-col items-center justify-center">
            <p className="text-muted-foreground mb-4 text-center">
              The resume is available for download. If you encounter issues viewing it here, please use the download button.
            </p>
            <iframe
              src={`${personalInfo.resumeUrl}#toolbar=0&navpanes=0&scrollbar=0`}
              title="Resume Preview"
              className="w-full h-full border-0"
              // sandbox attribute for security if the PDF source is external or untrusted
              // sandbox="allow-scripts allow-same-origin" 
            >
              <p className="text-center">Your browser does not support iframes. Please <Link href={personalInfo.resumeUrl} className="text-primary hover:underline">download the resume</Link> to view.</p>
            </iframe>
        </div>
      </div>
      <p className="text-xs text-muted-foreground text-center mt-4">
        Note: PDF preview might not be available on all browsers or devices. Download is recommended for the best experience.
      </p>
    </SectionWrapper>
  );
}
