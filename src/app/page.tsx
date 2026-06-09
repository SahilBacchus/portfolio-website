import Image from "next/image";
import SocialLinks from '@/components/SocialLinks'
import Avatar from "@/components/Avatar";
import ProfileCard from '@/components/ProfileCard';
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsCard from "@/components/ProjectsCard";
import ProjectsSection from "@/components/ProjectsSection";
import TechStack from "@/components/TechStack";
import EducationSection from "@/components/EducationSection";


export default function Home() {
  return (
      <>
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <TechStack />
        <ProjectsSection />

        {/* Dummy content to check the project section scroll animation */}
        <div className="h-64"></div>


      </>



  );
}
