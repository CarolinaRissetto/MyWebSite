
import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface Skill {
  name: string;
  icon: string;
}

interface SkillCategory {
  title: string;
  color: string;
  skills: Skill[];
}

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Frontend");
  
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend",
      color: "from-blue-400 to-purple-500",
      skills: [
        { name: "React", icon: "⚛️" },
        { name: "TypeScript", icon: "TS" },
        { name: "JavaScript", icon: "JS" },
        { name: "HTML/CSS", icon: "🌐" },
        { name: "Tailwind", icon: "🎨" },
        { name: "Next.js", icon: "▲" }
      ]
    },
    {
      title: "Backend",
      color: "from-green-400 to-teal-500",
      skills: [
        { name: "Node.js", icon: "🟢" },
        { name: "Express", icon: "🚂" },
        { name: "Java", icon: "☕" },
        { name: "Spring", icon: "🍃" },
        { name: "REST APIs", icon: "🔄" },
        { name: "GraphQL", icon: "◼️" }
      ]
    },
    {
      title: "Databases",
      color: "from-yellow-400 to-orange-500",
      skills: [
        { name: "MongoDB", icon: "🍃" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "MySQL", icon: "🐬" },
        { name: "Redis", icon: "🔴" },
        { name: "Firebase", icon: "🔥" }
      ]
    },
    {
      title: "DevOps",
      color: "from-red-400 to-pink-500",
      skills: [
        { name: "AWS", icon: "☁️" },
        { name: "Docker", icon: "🐳" },
        { name: "CI/CD", icon: "🔄" },
        { name: "Git", icon: "📊" },
        { name: "Kubernetes", icon: "⎈" }
      ]
    },
    {
      title: "Other",
      color: "from-indigo-400 to-purple-500",
      skills: [
        { name: "Agile", icon: "🏃" },
        { name: "UX/UI", icon: "🎨" },
        { name: "Testing", icon: "🧪" },
        { name: "Product Management", icon: "📝" },
        { name: "Communication", icon: "💬" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">
          <span className="bg-clip-text text-transparent bg-orange-gradient animate-gradient-shift">
            My Skills
          </span>
        </h2>
        
        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {skillCategories.map(category => (
            <button
              key={category.title}
              className={cn(
                "px-4 py-2 rounded-full transition-all duration-300",
                activeCategory === category.title
                  ? `bg-gradient-to-r ${category.color} text-white shadow-md`
                  : "bg-white text-gray-600 hover:bg-gray-100"
              )}
              onClick={() => setActiveCategory(category.title)}
            >
              {category.title}
            </button>
          ))}
        </div>
        
        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
          {skillCategories
            .find(category => category.title === activeCategory)
            ?.skills.map((skill, index) => (
              <div
                key={skill.name}
                className="skill-card bg-white"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-gradient-to-r from-theme-blue to-theme-purple rounded-full text-white text-xl md:text-2xl mb-3 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-110">
                  {skill.icon}
                </div>
                <span className="font-medium">{skill.name}</span>
              </div>
            ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="mb-4 text-lg text-gray-600">
            Always learning and expanding my knowledge
          </p>
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-md">
            <span className="animate-pulse-soft text-theme-purple mr-2">🚀</span>
            <span className="text-gray-600">Continuously evolving skillset</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
