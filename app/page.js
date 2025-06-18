import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Navbar/>
      <div className="container mt-24 mx-auto px-8 py-8">
        <HeroSection></HeroSection> 
        <AboutSection></AboutSection>
        <ProjectsSection></ProjectsSection>
        <EmailSection> </EmailSection>
      </div>
    </main>
  );
}
