import { Container } from "@/components/ui/Container/Container";
import { TextSplitSection } from "@/components/ui/TextSplitSection/TextSplitSection";

import { ProjectsList } from "./ProjectsList/ProjectsList";

export const ProjectsSection = () => {
  return (
    <section>
      <Container>
        <TextSplitSection heading="Проекты" />
        <ProjectsList />
      </Container>
    </section>
  );
};
