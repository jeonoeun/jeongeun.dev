import { getPageBySlug, getPageData } from "@/lib/notion";
import Renderer from "@/components/projects/Renderer";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { extractPageProperties } from "@/utils/notion";
import { getProjectItems } from "@/lib/project";
import ProjectDetailHeader from "@/components/projects/ProjectDetailHeader";
import MainLayout from "@/components/layout/MainLayout";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const revalidate = 3600;

export async function generateStaticParams() {
  const projects = await getProjectItems();

  return projects.map((project) => ({
    params: { slug: project.properties?.Slug?.rich_text[0]?.plain_text },
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;

  const project = await getPageBySlug(slug, "project");

  if (!project) return notFound();

  const { title, description, coverImageUrl, tags } =
    extractPageProperties(project);

  return {
    title: title,
    description: description ?? "",
    openGraph: {
      title: title,
      description: description ?? "",
      images: coverImageUrl ? [coverImageUrl] : [],
      tags: tags ? tags.map((tag) => tag.name) : [],
    },
  };
}

const ProjectDetail = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;
  const project = await getPageBySlug(slug, "project");

  if (!project) return notFound();

  const recordMap = await getPageData(project.id);
  const projectHeaderData = extractPageProperties(project);

  return (
    <>
      <Header isScrolled={true} />
      <MainLayout maxWidth="720">
        <ProjectDetailHeader {...projectHeaderData} />
        <Renderer recordMap={recordMap} rootPageId={project.id} />
      </MainLayout>
      <Footer />
    </>
  );
};

export default ProjectDetail;
