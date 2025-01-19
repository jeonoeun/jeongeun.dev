import { getDataBySlug, getPageData } from "@/lib/notion";
import Renderer from "@/components/projects/Renderer";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

const ProjectDetail = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const project = await getDataBySlug(slug);
  const recordMap = await getPageData(project.id);

  const title = project.properties.Name.title[0].plain_text;
  const des =
    project.properties.Description?.rich_text?.[0]?.plain_text ||
    "No description";
  const lastUpdated = project.properties.Date.date.start;
  const type = project.properties.Type?.select?.name || "No category";

  return (
    <>
      <Header isScrolled={true} />
      {project && (
        <main className="my-[65px] text-[#37352F]">
          <div className="w-full flex justify-center items-center">
            <div className="w-[720px] max-w-[720px] px-4 mt-5">
              <Link href="/" className="flex items-center gap-1 mb-10">
                <IoArrowBack />
                <span>목록으로</span>
              </Link>
              <div className="flex flex-col items-center justify-center gap-2">
                <h1 className="text-3xl font-bold">{title}</h1>
                <p>
                  {type} / {lastUpdated}
                </p>
              </div>
            </div>
          </div>

          <Renderer recordMap={recordMap} rootPageId={project.id} />
        </main>
      )}
      <Footer />
    </>
  );
};

export default ProjectDetail;
