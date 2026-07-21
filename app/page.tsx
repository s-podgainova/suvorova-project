import { AboutSection } from "@/components/AboutSection/AboutSection";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { Container } from "@/shared/components/Container/Container";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Container>
        <AboutSection/>
      </Container>
    </main>
  );
}
