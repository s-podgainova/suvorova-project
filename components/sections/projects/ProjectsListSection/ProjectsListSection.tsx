import { ProjectsList } from "@/components/sections/projects/ProjectsList/ProjectsList";
import { Container } from "@/components/ui/Container/Container";
import { TextSplitSection } from "@/components/ui/TextSplitSection/TextSplitSection";

export const ProjectsListSection = () => {
  return (
    <section>
      <Container>
        <TextSplitSection />
        <ProjectsList />
      </Container>
    </section>
  );
};
