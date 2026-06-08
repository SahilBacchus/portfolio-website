"use client";

import React from "react";
import {
  SiPython,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiFastapi,
  SiPytorch,
  SiTensorflow,
  SiDocker,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiLangchain,
} from "react-icons/si";
import { FaJava, FaAws, FaBrain, FaMicrochip } from "react-icons/fa";
import { cn } from "@/lib/utils";

const skillsData = [
  {
    category: "Languages",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Java", icon: FaJava },
      { name: "C/C++", icon: null },
      { name: "RISC-V Assembly", icon: null },
    ],
  },
  {
    category: "Web",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "FastAPI", icon: SiFastapi },
    ],
  },
  {
    category: "AI & ML",
    skills: [
      { name: "PyTorch", icon: SiPytorch },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "LangChain", icon: SiLangchain },
      { name: "LangGraph", icon: FaBrain },
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: FaAws },
      { name: "Docker", icon: SiDocker },
      { name: "Git", icon: SiGit },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
    ],
  },
  {
    category: "Embedded",
    skills: [
      { name: "FPGA", icon: FaMicrochip },
      { name: "Embedded C", icon: null },
    ],
  },
];

export default function TechStack() {
  return (
    <section className="w-full bg-background py-16 text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Tech Stack
          </h2>
        </div>
        {/* Skills */}
        <div className="space-y-8">
          {skillsData.map((group) => (
            <div
              key={group.category}
              className="grid gap-2 md:grid-cols-[180px_1fr]"
            >
              <div>
                <h3 className="font-semibold text-muted-foreground">
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className={cn(
                        "flex items-center gap-2 rounded-full",
                        "border border-border",
                        "bg-card px-4 py-2",
                        "transition-all duration-200",
                        "hover:border-primary/40 hover:bg-accent",
                      )}
                    >
                      {Icon && (
                        <Icon className="h-4 w-4 shrink-0 text-primary" />
                      )}

                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
