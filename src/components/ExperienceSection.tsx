import React from "react";
import { Timeline } from "@/components/ui/timeline";
import ExperienceCard from "./ExperienceCard";

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
  const timelineData = experienceData.map((job) => ({
    title: job.period, // Stays sticky on the left side
    content: <ExperienceCard {...job} />,
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