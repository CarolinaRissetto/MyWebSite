
import React from "react";
import { Github, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-white border-t">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-500 mt-1">© {currentYear} All rights reserved.</p>
          </div>
          
          <div className="flex space-x-4">
            <a href="https://github.com/CarolinaRissetto" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-theme-purple hover:text-white transition-colors">
              <Github size={16} />
            </a>
            <a href="https://www.linkedin.com/in/carolina-rissetto/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-theme-blue hover:text-white transition-colors">
              <Linkedin size={16} />
            </a>
            <a href="https://www.instagram.com/carolina_rissetto/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-theme-pink hover:text-white transition-colors">
              <Instagram size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
