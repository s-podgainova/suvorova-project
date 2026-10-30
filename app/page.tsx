import { HeroSection } from "@/components/sections/HeroSection/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection/ProjectsSection";
import { Container } from "@/components/ui/Container/Container";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Container>        
        <ProjectsSection />
      </Container>
    </main>
  );
}
