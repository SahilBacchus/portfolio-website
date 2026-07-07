import React from "react";
import { Timeline } from "@/components/ui/timeline";
import ExperienceCard from "./ExperienceCard";

// EXPERIENCE DATA: Centralized source of truth for timeline entries
const experienceData = [
  {
    period: "Jun 2026 – Present",
    role: "Software Developer",
    company: "BES Engineering",
    location: "Calgary, Alberta",
    logo: "/images/beseng-logo.png",
    url: "https://www.beseng.ca",
    highlights: [
      "Architected and deployed a production Next.js web application using TypeScript and React Server Components, developing reusable frontend components, backend serverless workflows, and deployment configurations.",
      "Engineered a secure lead generation pipeline integrating Cloudflare Turnstile, server-side Zod validation, and transactional email APIs to ensure reliable user input processing while preventing automated spam with zero friction."
    ],
    skills: [
      "Next.js",
      "TypeScript",
      "React",
      "Zod",
      "Cloudflare",
    ]
  },
  {
    period: "Oct 2022 – Jun 2026",
    role: "Financial Analyst",
    company: "BES Engineering",
    location: "Calgary, Alberta",
    logo: "/images/beseng-logo.png",
    url: "https://www.beseng.ca",
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
    period: "Oct 2022 – Jun 2026",
    role: "Junior Electrical Designer",
    company: "BES Engineering",
    location: "Calgary, Alberta",
    logo: "/images/beseng-logo.png",
    url: "https://www.beseng.ca",
    highlights: [
      "Collaborated with senior engineers to create and markup electrical drawings for midstream oil & gas infrastructure, including single-line diagrams, motor schematics, PLC layouts, and control panels for low-voltage power systems.",
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