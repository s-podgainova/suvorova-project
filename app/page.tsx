import { HeroSection } from "@/components/sections/HeroSection/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection/ProjectsSection";

export default function Home() {
  return (
    <main className="page">
      <HeroSection />
      <ProjectsSection />
    </main>
  );
}
