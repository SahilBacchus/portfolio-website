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
import ContactSection from "@/components/ContactSection";


export default function Home() {
  return (
      <>
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <TechStack />
        <ProjectsSection />
        <ContactSection />



      </>



  );
}
