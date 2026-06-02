import Image from "next/image";
import SocialLinks from '@/components/SocialLinks'
import Avatar from "@/components/Avatar";
import ProfileCard from '@/components/ProfileCard';
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";


export default function Home() {
  return (
      <>
        <AboutSection />
        <ExperienceSection />

        
        {/* Dummy content to check the timeline scroll animation*/}
        <AboutSection />
        <AboutSection />
        <AboutSection />


      </>



  );
}
