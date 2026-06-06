import Image from "next/image";
import SocialLinks from '@/components/SocialLinks'
import Avatar from "@/components/Avatar";
import ProfileCard from '@/components/ProfileCard';
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsCard from "@/components/ProjectsCard";
import ProjectsSection from "@/components/ProjectsSection";


export default function Home() {
  return (
      <>
        <AboutSection />
        <ExperienceSection />

      <div className="mx-auto max-w-md px-4">
        <ProjectsCard
          title="AI Task Breakdown"
          description="Full-stack app using Gemini to decompose project descriptions into structured Kanban tasks, with a conversational interface for natural language modifications."
          technologies={["Next.js", "FastAPI", "Supabase", "Gemini"]}
          githubUrl="https://github.com/SahilBacchus/ai-task-breakdown"
          liveUrl="https://ai-task-breakdown-frontend.vercel.app/"
          imageSrc="/images/ai-task-breakdown-image.png"
        />
      </div>

      <ProjectsSection />

      {/* Dummy content to check the project section scroll animation */}
      <ExperienceSection />
      <ExperienceSection />


      </>



  );
}
