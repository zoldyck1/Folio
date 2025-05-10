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
        "text-sm font-medium transition-colors hover:text-primary",
        pathname === href ? "text-primary" : "text-muted-foreground",
      )}
      onClick={() => setIsSheetOpen(false)}
    >
      {label}
    </a>
  );

  if (!isMounted) {
    return (
      // Skeleton or minimal loader for SSR/initial client render to avoid hydration issues with Sheet/ThemeToggle
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" suppressHydrationWarning>
        <div className="container flex h-16 items-center justify-between" suppressHydrationWarning>
          <Link href="/" className="flex items-center gap-2">
            <Code2 className={cn("h-6 w-6", theme === 'dark' ? 'text-white' : 'text-black')} />
            <span className="font-bold text-lg">Inphilo</span>
          </Link>
          <div className="h-8 w-8 rounded-md bg-muted animate-pulse" suppressHydrationWarning /> {/* Placeholder for ThemeToggle */}
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" suppressHydrationWarning>
      <div className="container flex h-16 items-center" suppressHydrationWarning>
        <Link href="/" className="mr-4 flex items-center gap-2">
          <Code2 className={cn("h-6 w-6", theme === 'dark' ? 'text-white' : 'text-black')} />
          <span className="font-bold text-lg">DevFolio</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium flex-1 justify-center" suppressHydrationWarning>
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4" suppressHydrationWarning>
          <div className="hidden md:block" suppressHydrationWarning>
            <ThemeToggle />
          </div>
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium mt-8" suppressHydrationWarning>
                {navItems.map((item) => (
                  <NavLink key={item.href} href={item.href} label={item.label} />
                ))}
                <div className="mt-4" suppressHydrationWarning>
                  <ThemeToggle />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
          {/* This empty div helps in positioning the sheet trigger button correctly when theme toggle is not visible on mobile nav initially */}
          <div className="block md:hidden" suppressHydrationWarning />
        </div>
      </div>
    </header>
  );
}
