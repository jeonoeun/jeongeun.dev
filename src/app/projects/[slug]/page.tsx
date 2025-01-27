import { getDataBySlug, getPageData } from "@/lib/notion";
import Renderer from "@/components/projects/Renderer";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { extractPageProperties } from "@/utils/notion";

const ProjectDetail = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const project: PageObjectResponse | undefined = await getDataBySlug(slug);

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
