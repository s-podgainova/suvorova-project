import { AboutSection } from "@/components/sections/AboutSection/AboutSection";
import { HeroSection } from "@/components/sections/HeroSection/HeroSection";
import { Container } from "@/components/ui/Container/Container";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Container>
        <AboutSection />
      </Container>
    </main>
  );
}
