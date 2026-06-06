import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackGround";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import CodingProfilesSection from "../components/CodingProfilesSection";
import { SkillsSection } from "../components/SkillsSection";
import GitHubStatsSection from "../components/GitHubStatsSection";
import OpenToWorkSection from "../components/OpenToWorkSection";
import { CertificateSection } from "../components/CertificateSection";
import { ProjectsSection } from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <StarBackground />

      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <CodingProfilesSection />
        <GitHubStatsSection />
         <CertificateSection />
        <ProjectsSection />
        <OpenToWorkSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};