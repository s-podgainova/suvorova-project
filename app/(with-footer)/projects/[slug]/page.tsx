import { ProjectGallery } from "@/components/projects/ProjectGallery/ProjectGallery";
import { AnimatedLink } from "@/components/ui/AnimatedLink/AnimatedLink";
import { Container } from "@/components/ui/Container/Container";
import { projects } from "@/data/projects/projectsData";

import styles from "./page.module.css";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  return (
    <main>
      <section className={styles.intro}>
        <Container>
          <div className={styles.introTop}>
            <h1>{project?.title}</h1>
            <AnimatedLink active={false} className={styles.allProjects} href="/projects">
              Все проекты
            </AnimatedLink>
          </div>
          <div>
            <p>Тип: {project?.type}</p>
            <p>Площадь: {project?.area}</p>
            <p>Локация: {project?.location}</p>
          </div>
        </Container>
      </section>
      <section className={styles.gallery}>
        <Container>
          <ProjectGallery images={project?.gallery ?? []} />
        </Container>
      </section>
    </main>
  );
}
