import Card from "@/components/Card";
import CardGrid from "@/components/CardGrid";
import Layout from "@/components/Layout";
import PageTitle from "@/components/PageTitle";
import { getProjectItems } from "@/lib/project";
import { extractPageProperties } from "@/utils/notion";
import Link from "next/link";

export default async function Page() {
  const projects = await getProjectItems();

  return (
    <Layout>
      <div className="flex flex-col gap-16">
        <PageTitle title={"프로젝트"} />
        <CardGrid>
          {projects.map((project) => {
            const {
              title,
              slug,
              description,
              coverImageUrl,
              demoUrl,
              githubUrl,
            } = extractPageProperties(project);

            return (
              <li key={project.id}>
                <Link href={`/projects/${slug}`}>
                  <Card
                    title={title}
                    slug={slug}
                    description={description}
                    coverImageUrl={coverImageUrl}
                    demoUrl={demoUrl}
                    githubUrl={githubUrl}
                  />
                </Link>
              </li>
            );
          })}
        </CardGrid>
      </div>
    </Layout>
  );
}
