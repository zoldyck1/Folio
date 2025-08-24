import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { Toaster } from "@/components/ui/toaster";
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import NoSSR from '@/components/providers/NoSSR';
import ScrollToTopButton from '@/components/shared/ScrollToTopButton';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'DevFolio - Ayoub Loulaji PortFolio',
  description: 'A professional portfolio website.',
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
          <div className="flex flex-col min-h-screen" suppressHydrationWarning>
            <NoSSR>
              <Header />
              <main className="flex-grow" suppressHydrationWarning>{children}</main>
              <Footer />
            </NoSSR>
            <ScrollToTopButton />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
