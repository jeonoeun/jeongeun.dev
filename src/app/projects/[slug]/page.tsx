import { getPageBySlug, getPageData } from "@/lib/notion";
import Renderer from "@/components/projects/Renderer";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import { extractPageProperties } from "@/utils/notion";
import { getProjectItems } from "@/lib/project";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const projects = await getProjectItems();

  return projects.map((project) => ({
    slug: project.properties?.Slug?.rich_text[0]?.plain_text,
  }));
}

const ProjectDetail = async ({ params }: Props) => {
  const project = await getPageBySlug(params.slug, "project");

  if (!project) {
    return (
      <>
        <Header isScrolled={true} />
        <main className="my-[65px] text-center">
          <p>프로젝트를 찾을 수 없어요.</p>
          <Link href="/projects" className="text-[#F86254] underline">
            목록으로 돌아가기
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  const recordMap = await getPageData(project.id);
  const { title, type, date } = extractPageProperties(project);

  return (
    <>
      <Header isScrolled={true} />
      <main className="my-[65px] text-[#37352F]">
        <div className="w-full flex justify-center items-center">
          <div className="w-[720px] max-w-[720px] p-4 pt-9">
            <Link href="/projects" className="flex items-center gap-1 mb-12">
              <IoArrowBack />
              <span>목록으로</span>
            </Link>

            <div className="flex flex-col items-center justify-center gap-2">
              <h1 className="text-[40px] font-bold">{title}</h1>
              <p className="text-[#8B95A1]">
                {type}・{date.slice(0, 7)}
              </p>
            </div>
          </div>
        </div>

        <Renderer recordMap={recordMap} rootPageId={project.id} />
      </main>
      <Footer />
    </>
  );
};

export default ProjectDetail;
