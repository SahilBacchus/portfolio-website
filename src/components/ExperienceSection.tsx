import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Badge } from "@/components/ui/badge";

// EXPERIENCE DATA: Centralized source of truth for timeline entries
const experienceData = [
  {
    period: "October 2022 - Present",
    role: "Financial Analyst",
    company: "2012762 Alberta Ltd",
    location: "Calgary, Alberta",
    highlights: [
      "Spearheaded creation of an XGBoost market predictor trained on 60M+ data points to optimize limit order pricing.",
      "Managed a diversified equity portfolio, identifying short-term market mispricing opportunities during periods of elevated volatility.",
      "Identified tax-saving opportunities resulting in annual savings exceeding $10,000.",
      "Automated portfolio allocation workflows with custom software, reducing manual processing time by over 65%."
    ],
    skills: [
      "Python",
      "XGBoost",
      "Portfolio Management",
      "Data Analysis",
      "Automation"
    ]
  },
  {
    period: "October 2022 - Present",
    role: "Junior Electrical Designer",
    company: "2012762 Alberta Ltd",
    location: "Calgary, Alberta",
    highlights: [
      "Collaborated with senior engineers to develop and markup electrical drawings including single-line diagrams, motor schematics, PLC layouts, and control panels for 480V power systems.",
      "Performed grounding studies using ETAP for 4.16 kV systems, calculating grounding requirements to mitigate electrical shock hazards.",
      "Executed fugitive emission studies for gas process facilities to determine hazardous area classifications and compliance requirements."
    ],
    skills: [
      "ETAP",
      "Electrical Design",
      "Single Line Diagrams", 
      "Bluebeam"
    ]
  }
];

export default function ExperienceSection() {
  // Transform the data into the structure
  // expected by Aceternity's Timeline component ({title, content})
  const timelineData = experienceData.map((job, index) => ({
    title: job.period, // Stays sticky on the left side
    content: (
      <div key={index} className="group relative pr-4">
        {/* Job Header */}
        <div className="mb-4">
          <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight">
            {job.role} <span className="text-primary">@ {job.company}</span>
          </h3>
          <p className="text-xs md:text-sm font-medium text-muted-foreground mt-1">
            {job.location}
          </p>
        </div>

        {/* Bullet Points of Experience Highlights */}
        <ul className="space-y-3 text-muted-foreground text-sm md:text-base leading-relaxed list-none pl-0">
          {job.highlights.map((bullet, idx) => (
            <li key={idx} className="flex items-start">
              {/* Minimal geometric dot instead of generic bullet */}
              <span className="text-primary mr-3 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        {/* SKILL TAGS: Technologies and tools used in the role */}
        <div className="mt-6 flex flex-wrap gap-2">
          {job.skills.map((skill, idx) => (
            <Badge 
              key={idx} 
              variant="secondary" 
              className="px-2.5 py-0.5 text-xs font-medium border border-border/40 hover:border-primary/50 transition-colors duration-200"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    ),
  }));

  return (
    <section className="w-full bg-background text-foreground py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl tracking-tight">
            Work Experience
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            A track record of using code, data, and engineering principles to deliver measurable business impact.
          </p>
        </div>

        {/* Core Aceternity Timeline Component */}
        <Timeline data={timelineData} />
      </div>
    </section>
  );
}
