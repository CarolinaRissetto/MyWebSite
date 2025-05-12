
import React from "react";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="hero" className="min-h-screen pt-20 flex items-center relative overflow-hidden">
      <div className="wave-container">
        <div className="wave wave-1"></div>
        <div className="wave wave-2"></div>
        <div className="wave wave-3"></div>
      </div>
      
      {/* Animated blobs */}
      <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-theme-blue bg-blob animate-float opacity-20"></div>
      <div className="absolute bottom-[10%] right-[15%] w-80 h-80 bg-theme-pink bg-blob animate-float opacity-20" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-[40%] right-[25%] w-48 h-48 bg-theme-orange bg-blob animate-float opacity-20" style={{ animationDelay: "4s" }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-center">
            <span className="bg-clip-text text-transparent bg-hero-gradient animate-gradient-shift">
              Hello, welcome!
            </span>
            <br />
            <span className="mt-2 inline-block">
              I'm a Full Stack Developer.
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 mb-8 text-center">
            Building digital solutions from backend to frontend.
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <button 
              onClick={scrollToContact}
              className="px-8 py-3 border-2 border-theme-purple text-theme-purple rounded-full hover:bg-theme-purple/10 transition-all"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
