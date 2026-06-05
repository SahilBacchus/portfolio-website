"use client";

import { BentoGrid } from "@/components/ui/bento-grid";
import ProjectsCard from "@/components/ProjectsCard";

const projectsData = [
  {
    title: "AI Task Breakdown",
    description: "Full-stack app using Gemini to decompose project descriptions into structured Kanban tasks with conversational modification.",
    technologies: ["Next.js", "FastAPI", "Supabase", "Gemini"],
    githubUrl: "https://github.com/SahilBacchus/ai-task-breakdown",
    liveUrl: "https://ai-task-breakdown-frontend.vercel.app/",
    imageSrc: "/images/ai-task-breakdown-image.png",
    className: "lg:col-span-2 lg:row-span-2", // Large, dominant anchor card (Top Left)
    highlights: [
      "🧠 Gemini-powered task decomposition into Kanban boards",
      "💬 Natural language chat interface for task editing",
      "📊 ~20% improvement in LLM output correctness via embedding validation",
      "👥 Led 5-person Agile team as PM + lead developer",
    ],
  },
  {
    title: "StockBrief – Multi-Agent LLM Analyzer",
    description: "Multi-agent LLM pipeline coordinating market data, SEC filings, and news into structured equity research briefs.",
    technologies: ["LangChain", "LangGraph", "Ollama"],
    githubUrl: "https://github.com",
    className: "lg:col-span-1 lg:row-span-2", // Tall sidebar card (Top Right)
    highlights: [
      "🤖 Multi-agent LangGraph orchestration system",
      "📄 Automates SEC + news + market data synthesis",
      "⚡ ~80% reduction in manual research time",
    ],
  },
  {
    title: "Edge Vision CNN",
    description: "Edge-optimized CNN achieving high accuracy with reduced latency using depthwise separable convolutions.",
    technologies: ["PyTorch", "FastAPI", "Docker", "AWS"],
    githubUrl: "https://github.com",
    className: "lg:col-span-1 lg:row-span-1", // Standard square card (Middle Left)
    highlights: [
      "🧬 MobileNet-style depthwise separable CNN",
      "📈 >91% CIFAR-10 accuracy",
      "🚀 ~6x inference speed improvement",
      "🐳 Dockerized FastAPI deployed on AWS EC2",
    ],
  },
  {
    title: "Machine Learning in Assembly",
    description: "ML algorithms implemented from scratch in RISC-V assembly for deep understanding of fundamentals.",
    technologies: ["Python", "C", "RISC-V Assembly"],
    githubUrl: "https://github.com",
    className: "lg:col-span-2 lg:row-span-1", // Wide horizontal card (Middle Right)
    highlights: [
      "🧮 Linear regression, gradient descent, perceptron in assembly",
      "📚 Jupyter notebooks connecting math → implementation",
      "🧪 Breast cancer classification with 92% accuracy",
    ],
  },
  {
    title: "Study Buddy – Pomodoro Timer",
    description: "Embedded productivity device with gamified breaks designed for focus and accessibility.",
    technologies: ["MicroPython", "Embedded Systems"],
    className: "lg:col-span-2 lg:row-span-1", // Wide horizontal card (Bottom Left)
    highlights: [
      "🍅 Pomodoro timer + Space Invaders-style break game",
      "🧠 Designed for neurodiverse students",
      "🧪 Usability tested with 10+ users",
      "🔧 Led software + embedded hardware integration",
    ],
  },
];



export default function ProjectsSection() {
  return (
    <section className="w-full bg-background text-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            From full-stack applications to embedded systems and ML pipelines – here’s what I’ve been building.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <BentoGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-6">
          {projectsData.map((project, idx) => (
            <ProjectsCard key={idx} {...project} />
          ))}

        </BentoGrid>
      </div>
    </section>
  );
}