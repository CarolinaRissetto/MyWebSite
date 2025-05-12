
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-8 w-64 h-64 rounded-full bg-theme-yellow/20 filter blur-3xl"></div>
      <div className="absolute bottom-10 right-8 w-80 h-80 rounded-full bg-theme-blue/20 filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">
          <span className="bg-clip-text text-transparent bg-pink-gradient animate-gradient-shift">
            About Me
          </span>
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/3">
            <div className="relative">
              <div className="absolute inset-0 bg-orange-gradient rounded-lg blur-lg opacity-60 animate-pulse-soft"></div>
              <div className="relative overflow-hidden rounded-lg bg-white p-6 shadow-lg">
                <div className="flex justify-center mb-4">
                  <img 
                    src="/lovable-uploads/c5ae4e91-b671-4cce-9199-56426c64f6de.png" 
                    alt="Developer with pug" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <div className="relative">
              <div className="absolute inset-0 bg-green-gradient rounded-lg blur-lg opacity-60 -rotate-1"></div>
              <div className="relative bg-white/90 backdrop-blur p-6 md:p-8 rounded-lg shadow-lg">
                <p className="text-lg leading-relaxed mb-4">
                  I'm not only experienced in software development but also in product research and sales. I know how to brew a great coffee and wear many hats in a tech company — bringing a broad understanding of what makes a product truly work.
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  <span className="px-3 py-1 bg-theme-purple/10 text-theme-purple rounded-full text-sm">Problem Solver</span>
                  <span className="px-3 py-1 bg-theme-blue/10 text-theme-blue rounded-full text-sm">Creative Thinker</span>
                  <span className="px-3 py-1 bg-theme-pink/10 text-theme-pink rounded-full text-sm">Team Player</span>
                  <span className="px-3 py-1 bg-theme-orange/10 text-theme-orange rounded-full text-sm">Lifelong Learner</span>
                  <span className="px-3 py-1 bg-theme-green/10 text-theme-green rounded-full text-sm">Coffee Enthusiast</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
