import React from "react";
import { AlignJustify } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import Image from "next/image";
import { Logo } from "./logo";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 border-b bg-background/80 backdrop-blur-sm py-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex h-14 items-center justify-between">
          <a href="/" className="text-md flex items-center">
            <Logo />
          </a>

          <div className="ml-auto flex h-full items-center">
            <a href="/signin" className="mr-6 text-sm">
              Log in
            </a>

            <a
              href="/signup"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-9 px-4 py-2 mr-6 text-sm"
            >
              Sign up
            </a>
            <ModeToggle />
          </div>

          <button className="ml-6 md:hidden">
            <span className="sr-only">Toggle menu</span>
            <AlignJustify className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
