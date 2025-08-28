import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import Link from "next/link";
import { personalInfo } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t" suppressHydrationWarning>
      <div className="container flex flex-col items-center py-8 space-y-6" suppressHydrationWarning>
        {/* Social Links */}
        <div className="flex items-center justify-center gap-6" suppressHydrationWarning>
          <Link
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="group p-3 hover:bg-primary/10 rounded-full transition-colors"
          >
            <Github className="h-7 w-7 text-muted-foreground group-hover:text-primary transition-colors" />
          </Link>
          <Link
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="group p-3 hover:bg-primary/10 rounded-full transition-colors"
          >
            <Linkedin className="h-7 w-7 text-muted-foreground group-hover:text-primary transition-colors" />
          </Link>
          <Link
            href={personalInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="group p-3 hover:bg-primary/10 rounded-full transition-colors"
          >
            <Instagram className="h-7 w-7 text-muted-foreground group-hover:text-primary transition-colors" />
          </Link>
          <Link
            href={`mailto:${personalInfo.email}`}
            aria-label="Email"
            className="group p-3 hover:bg-primary/10 rounded-full transition-colors"
          >
            <Mail className="h-7 w-7 text-muted-foreground group-hover:text-primary transition-colors" />
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center" suppressHydrationWarning>
          <p className="text-sm text-muted-foreground">
            &copy; The philosopher AL. All rights reserved. 2021-2025
          </p>
        </div>
      </div>
    </footer>
  );
}
