import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";
import { Logo } from "./logo";
// import { ThemeToggle } from "./theme-toggle";

export function Footer() {
  return (
    <footer className=" bg-background text-foreground border-t mt-[100px]">
      <div className="container mx-auto px-4 py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-8 md:mb-0">
            <Logo />
          </div>
          <div>
            <h3 className="text-primary text-base font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-primary text-base font-semibold mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/api"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  API
                </Link>
              </li>
              <li>
                <Link
                  href="/docs"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Community
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-primary text-base font-semibold mb-4">
              Connect
            </h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/devshowcase"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://twitter.com/devshowcase"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://linkedin.com/company/devshowcase"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-sm text-center text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} DevShowcase. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
