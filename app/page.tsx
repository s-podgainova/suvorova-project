import { AboutSection } from "@/components/AboutSection/AboutSection";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { ProjectsList } from "@/components/ProjectsList/ProjectsList";
import { Container } from "@/shared/components/Container/Container";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Container>
        <ProjectsList />
        <AboutSection/>
      </Container>
    </main>
  );
}
