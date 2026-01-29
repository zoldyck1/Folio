import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import dynamic from 'next/dynamic';
import './globals.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { Toaster } from "@/components/ui/toaster";
import { NoSSR, ScrollToTopButton, TargetCursor } from '@/components/providers/ClientComponents';
import Antigravity from '@/components/shared/Antigravity';

// Dynamic imports for better performance
const Header = dynamic(() => import('@/components/layout/Header').then(mod => ({ default: mod.Header })), {
  ssr: true
});

const Footer = dynamic(() => import('@/components/layout/Footer').then(mod => ({ default: mod.Footer })), {
  ssr: true
});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  title: 'DevFolio - Ayoub Loulaji PortFolio',
  description: 'My professional portfolio-website.',
  keywords: ['portfolio', 'developer', 'react', 'nextjs', 'typescript'],
  authors: [{ name: 'Ayoub Loulaji' }],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
            <Antigravity
              count={150}
              magnetRadius={8}
              ringRadius={12}
              waveSpeed={0.9}
              waveAmplitude={1}
              particleSize={1.5}
              lerpSpeed={0.15}
              color="#64748b"
              autoAnimate={false}
              particleVariance={1}
              rotationSpeed={0}
              depthFactor={1}
              pulseSpeed={3}
              particleShape="tetrahedron"
              fieldStrength={10}
            />
          </div>
          <div className="flex flex-col min-h-screen relative z-10" suppressHydrationWarning>
            <Header />
            <main className="flex-grow" suppressHydrationWarning>{children}</main>
            <Footer />
            <ScrollToTopButton />
          </div>
          <Toaster />
          <TargetCursor 
            spinDuration={2.1}
            hideDefaultCursor
            parallaxOn
            hoverDuration={0.2}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
