import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { personalInfo } from '@/lib/data';
import Link from 'next/link';

export default function ResumePage() {
  return (
    <SectionWrapper id="resume" title="My Resume/CV" subtitle="Download my professional background.">
      <div className="text-center mb-8 animate-slide-up-fade">
        <Button asChild size="lg">
          <Link href={personalInfo.resumeUrl} download target="_blank">
            Download Resume <Download className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
