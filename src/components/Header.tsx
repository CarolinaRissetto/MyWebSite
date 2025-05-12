
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  onNavClick: (section: string) => void;
}

const Header = ({ onNavClick }: HeaderProps) => {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      // Determine active section
      const sections = ["hero", "about", "skills", "experience", "contact"];
      let currentSection = "hero";
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If section top is near the top of the viewport
          if (rect.top <= 150) {
            currentSection = section;
          }
        }
      });
      
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled, activeSection]);

  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled ? "py-2 bg-white/90 shadow-md backdrop-blur-sm" : "py-4 bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-xl font-bold">
          <span className="bg-clip-text text-transparent bg-hero-gradient animate-gradient-shift">
            &nbsp;
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => onNavClick(item.id)}
              className={cn(
                "text-sm font-medium relative px-1 py-1 transition-all",
                activeSection === item.id 
                  ? "text-theme-purple" 
                  : "text-gray-600 hover:text-theme-blue"
              )}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-hero-gradient rounded-full animate-pulse-soft" />
              )}
            </button>
          ))}
        </nav>
        
        <div className="md:hidden">
          <button className="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
