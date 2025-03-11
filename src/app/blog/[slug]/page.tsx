import Comment from "@/components/Comment";
import Header from "@/components/Header";
import Renderer from "@/components/Renderer";
import TableOfContents from "@/components/TableOfContents";
import Tag from "@/components/Tag";
import { getPageBySlug, getPageData } from "@/lib/notion";
import { extractPageProperties } from "@/utils/notion";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MdOutlineAccessTimeFilled } from "react-icons/md";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const post = await getPageBySlug(slug, "post");

  if (!post) return notFound();

  const recordMap = await getPageData(post.id);
  const postData = extractPageProperties(post);

  return (
    <div>
      <Header />
      <main>
        <div className="max-w-[1200px] mx-auto mt-[65px] py-16">
          <div className="lg:flex lg:justify-center lg:gap-20">
            <div className="max-w-[720px] mx-auto lg:mx-0 overflow-hidden">
              <div className="px-4">
                <div className="flex flex-col gap-4 mb-[30px] text-[14px] md:text-base">
                  <Link href={`/series/${slug}`} className="text-[#00C9C2]">
                    {postData.type}
                  </Link>
                  <h1 className="font-bold text-[32px] md:text-[44px] leading-[1.3] mb-1">
                    {postData.title}
                  </h1>
                  <div className="flex items-center gap-1 text-[#A09F9C]">
                    <span>{postData.date}</span>
                    <span>{"・"}</span>
                    <div className="flex items-center gap-0.5">
                      <MdOutlineAccessTimeFilled />
                      <span>{"18분"}</span>
                    </div>
                    <span>{"・"}</span>
                    <span>{"1 comment"}</span>
                  </div>
                </div>

                {postData.coverImageUrl && (
                  <div className="relative w-full aspect-[900/550] rounded-2xl overflow-hidden">
                    <Image
                      src={postData.coverImageUrl}
                      alt={postData.title}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                )}
              </div>

              <Renderer recordMap={recordMap} rootPageId={post.id} />

              <ul className="w-full px-4 flex items-center flex-wrap mt-6">
                {postData.tags?.map((tag) => (
                  <li key={tag.id} className="mr-1.5 mb-3">
                    <Tag name={tag.name} href={`/blog?tag=${tag.name}`} />
                  </li>
                ))}
              </ul>

              <Comment />
            </div>

            <TableOfContents recordMap={recordMap} />
          </div>
        </div>
      </main>
    </div>
  );
}
