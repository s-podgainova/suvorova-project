import { IntroSection } from "@/components/sections/IntroSection/IntroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection/ProjectsSection";

export default function Home() {
  return (
    <main className="page">
      <IntroSection />
      <ProjectsSection />
    </main>
  );
}
