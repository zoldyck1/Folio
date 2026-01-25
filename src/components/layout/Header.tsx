"use client";
import Link from "next/link";
import { Menu, Code2 } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const { theme } = useTheme();
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <a
      href={href}
      className={cn(
        "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full",
        "hover:bg-primary/10 hover:text-primary hover:scale-105",
        "before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-primary/20 before:to-transparent",
        "before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100",
        pathname === href 
          ? "text-primary bg-primary/10 shadow-lg shadow-primary/20" 
          : "text-muted-foreground",
      )}
      onClick={() => setIsSheetOpen(false)}
    >
      <span className="relative z-10">{label}</span>
    </a>
  );

  if (!isMounted) {
    return (
      // Skeleton or minimal loader for SSR/initial client render to avoid hydration issues with Sheet/ThemeToggle
      <header className="sticky top-0 z-50 w-full bg-[#0a0f1c]/95 backdrop-blur-xl border-b border-gray-800/50" suppressHydrationWarning>
        <div className="container flex h-16 items-center justify-between" suppressHydrationWarning>
          <Link href="/" className="flex items-center gap-2">
            <Code2 className="h-6 w-6 text-cyan-400" />
            <span className="font-bold text-lg text-cyan-400">Ayoub</span>
          </Link>
          <div className="h-8 w-8 rounded-md bg-muted animate-pulse" suppressHydrationWarning /> {/* Placeholder for ThemeToggle */}
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-xl border-b border-border" suppressHydrationWarning>
      <div className="container flex h-16 items-center" suppressHydrationWarning>
        <Link href="/" className="mr-4 flex items-center gap-2">
          <Code2 className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg text-primary">AL</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium flex-1 justify-center" suppressHydrationWarning>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-muted-foreground hover:text-foreground transition-colors duration-200 py-2 group"
              onClick={() => setIsSheetOpen(false)}
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>
        <div className="flex items-center space-x-4" suppressHydrationWarning>
          <div className="hidden md:block" suppressHydrationWarning>
            <ThemeToggle />
          </div>
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-muted-foreground">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-border">
              <nav className="grid gap-6 text-lg font-medium mt-8" suppressHydrationWarning>
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                    onClick={() => setIsSheetOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="mt-4" suppressHydrationWarning>
                  <ThemeToggle />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
