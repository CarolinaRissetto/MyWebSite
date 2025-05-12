
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Flower, Circle, CircleDot, Flower2 } from "lucide-react";

interface Job {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  location: string;
  iconType: "flower" | "flower2" | "circle" | "circleDot";
  iconColor: string;
  expanded?: boolean;
}

const Experience = () => {
  const [jobs, setJobs] = useState<Job[]>([
    {
      id: 1,
      title: "Full-Stack Developer | Founding Team",
      company: "Stealth Mode",
      period: "Feb 2025 – Present",
      location: "Full-time",
      iconType: "flower",
      iconColor: "#9b87f5",
      description: "Working on product in stealth. Contributions in dev, architecture, and strategy.",
      expanded: true
    },
    {
      id: 2,
      title: "Full-Stack Developer",
      company: "CAC Fácil",
      period: "Jun 2024 – Jan 2025",
      location: "Remote",
      iconType: "flower2",
      iconColor: "#F97316",
      description: "Built a platform for firearm license management using AWS, React, and Node. Highlights: CI/CD, AWS cost optimization, product ideation.",
      expanded: false
    },
    {
      id: 3,
      title: "Digital Transformation Lead",
      company: "Family Business",
      period: "May 2023 – May 2024",
      location: "On-site",
      iconType: "circleDot",
      iconColor: "#33C3F0",
      description: "Led digital transformation in a multi-sector business. Built sales platform and managed hiring.",
      expanded: false
    },
    {
      id: 4,
      title: "Backend Developer",
      company: "CWI Software",
      period: "Sep 2021 – Mar 2023",
      location: "Hybrid",
      iconType: "circle",
      iconColor: "#FDE1D3",
      description: "Backend developer in finance systems. Started as trainee. Tech: Java, Spring, Docker, Kafka, REST, Agile",
      expanded: false
    }
  ]);

  const toggleJob = (id: number) => {
    setJobs(jobs.map(job => 
      job.id === id ? { ...job, expanded: !job.expanded } : job
    ));
  };

  const renderIcon = (job: Job) => {
    const props = { size: 24, color: job.iconColor, strokeWidth: 1.5 };
    
    switch (job.iconType) {
      case "flower":
        return <Flower {...props} />;
      case "flower2":
        return <Flower2 {...props} />;
      case "circle":
        return <Circle {...props} />;
      case "circleDot":
        return <CircleDot {...props} />;
    }
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-theme-blue/5 via-transparent to-theme-purple/5 z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h2 className="section-heading">
          <span className="bg-clip-text text-transparent bg-skill-gradient animate-gradient-shift">
            My Experience
          </span>
        </h2>
        
        <div className="relative mx-auto max-w-3xl">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 left-0 md:left-24 w-px bg-gradient-to-b from-theme-blue via-theme-purple to-theme-orange"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            {jobs.map((job) => (
              <div key={job.id} className="relative pl-6 md:pl-32">
                {/* Timeline dot */}
                <div className="timeline-dot">
                  <span className="flex h-4 w-4 bg-white rounded-full" />
                </div>
                
                {/* Job card */}
                <div 
                  className={cn(
                    "bg-white rounded-lg p-5 shadow-md border-l-4 transition-all duration-300",
                    job.expanded ? "border-theme-purple" : "border-gray-300"
                  )}
                  onClick={() => toggleJob(job.id)}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between cursor-pointer">
                    <div className="flex items-center gap-3">
                      {renderIcon(job)}
                      <div>
                        <h3 className="font-semibold text-lg">{job.company}</h3>
                        <p className="text-sm text-gray-500">{job.period} · {job.location}</p>
                      </div>
                    </div>
                    <div className="ml-auto md:ml-0 mt-2 md:mt-0">
                      <button className="p-1 hover:bg-gray-100 rounded-full text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className={`w-5 h-5 transition-transform ${job.expanded ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  {/* Expandable content */}
                  <div className={cn(
                    "overflow-hidden transition-all duration-300",
                    job.expanded ? "max-h-96 mt-4" : "max-h-0"
                  )}>
                    <div className="pt-2 border-t">
                      <h4 className="font-medium">{job.title}</h4>
                      <p className="mt-2 text-gray-600">{job.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
