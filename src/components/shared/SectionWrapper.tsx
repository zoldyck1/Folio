import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  title?: string;
  subtitle?: string;
}

export function SectionWrapper({ children, className, id, title, subtitle }: SectionWrapperProps) {
  return (
    <section id={id} className={cn('content-section animate-slide-up-fade', className)} suppressHydrationWarning>
      <div className="container mx-auto" suppressHydrationWarning>
        {title && (
          <div className="mb-12 text-center" suppressHydrationWarning>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-4 text-lg text-muted-foreground">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
