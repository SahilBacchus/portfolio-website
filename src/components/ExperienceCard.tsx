import React from "react";
import { Badge } from "@/components/ui/badge";

interface ExperienceCardProps {
  role: string;
  company: string;
  location: string;
  highlights: string[];
  skills: string[];
}

export default function ExperienceCard({
  role,
  company,
  location,
  highlights,
  skills,
}: ExperienceCardProps) {
  return (
    <div className="group relative pr-4">
      {/* Job Header */}
      <div className="mb-4">
        <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight">
          {role} <span className="text-primary">@ {company}</span>
        </h3>
        <p className="text-xs md:text-sm font-medium text-muted-foreground mt-1">
          {location}
        </p>
      </div>

      {/* Bullet Points of Experience Highlights */}
      <ul className="space-y-3 text-muted-foreground text-sm md:text-base leading-relaxed list-none pl-0">
        {highlights.map((bullet, idx) => (
          <li key={idx} className="flex items-start">
            {/* Minimal geometric dot instead of generic bullet */}
            <span className="text-primary mr-3 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      {/* SKILL TAGS: Technologies and tools used in the role */}
      <div className="mt-6 flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
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
  );
}