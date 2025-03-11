import Comment from "@/components/Comment";
import Header from "@/components/Header";
import Renderer from "@/components/Renderer";
import TableOfContents from "@/components/TableOfContents";
import { getPageBySlug, getPageData } from "@/lib/notion";
import { extractPageProperties } from "@/utils/notion";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { IoLogoGithub } from "react-icons/io5";
import { LuExternalLink } from "react-icons/lu";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const project = await getPageBySlug(slug, "project");

  if (!project) return notFound();

  const recordMap = await getPageData(project.id);
  const projectData = extractPageProperties(project);

  return (
    <div>
      <Header />
      <main>
        <div className="max-w-[1200px] mx-auto mt-[65px] py-16">
          <div className="lg:flex lg:justify-center lg:gap-20">
            <div className="max-w-[720px] mx-auto lg:mx-0 overflow-hidden">
              <div className="px-4">
                <div className="flex flex-col gap-4 mb-[30px] text-[14px] md:text-base">
                  <h1 className="font-bold text-[32px] md:text-[44px] leading-[1.3] mb-1">
                    {projectData.title}
                  </h1>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-0.5 text-[#A09F9C]">
                      <span>{"개인"}</span>
                      <span>{"・"}</span>
                      <span>{projectData.type}</span>
                      <span>{"・"}</span>
                      <span>{projectData?.date?.slice(0, 9)}</span>
                    </div>
                    <div className="flex items-center text-[17px] md:text-[20px] gap-2">
                      {!!projectData.githubUrl && (
                        <Link
                          href={projectData.githubUrl}
                          target="_blank"
                          className="flex items-center justify-center"
                        >
                          <IoLogoGithub />
                        </Link>
                      )}
                      {!!projectData.demoUrl && (
                        <Link
                          href={projectData.demoUrl}
                          target="_blank"
                          className="flex items-center justify-center"
                        >
                          <LuExternalLink />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>

                {projectData.coverImageUrl && (
                  <div className="relative w-full aspect-[900/550] rounded-2xl overflow-hidden">
                    <Image
                      src={projectData.coverImageUrl}
                      alt={projectData.title}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                )}
              </div>

              <Renderer recordMap={recordMap} rootPageId={project.id} />

              <Comment />
            </div>

            <TableOfContents recordMap={recordMap} />
          </div>
        </div>
      </main>
    </div>
  );
}
