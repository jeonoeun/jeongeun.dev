import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
import { getBlogPosts } from "@/lib/blog";
import { extractPageProperties } from "@/utils/notion";
import Card from "@/components/Card";
import { series } from "@/data/series";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const matched = series.find((s) => s.slug === slug);

  const posts = await getBlogPosts();

  const filteredPosts = posts.filter(
    (post) => post.properties?.Type?.select?.name === slug
  );

  return (
    <Layout>
      <div>
        <div className="relative w-full flex flex-col md:flex-row">
          <div className="mb-[50px] md:h-screen md:sticky top-[130px] md:self-start md:border-r border-[var(--border-color)] md:pr-8">
            <div className="md:max-w-[260px] md:min-w-[260px]">
              {matched?.coverImage && (
                <div className="relative w-full aspect-[278/171] rounded-[8px] overflow-hidden mb-5">
                  <Image
                    src={matched.coverImage}
                    alt={"title"}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    objectFit="cover"
                  />
                </div>
              )}
              <h1 className="font-bold text-2xl mb-4">{matched?.title}</h1>
              <p className="text-[#A09F9C] text-[14px]">
                {matched?.description}
              </p>
            </div>
          </div>
          <div className="md:ml-[50px]">
            <ul className="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-[30px] gap-[50px]">
              {filteredPosts.map((post) => {
                const { title, slug, coverImageUrl, date, type } =
                  extractPageProperties(post);

                return (
                  <li key={post.id}>
                    <Link href={`/blog/${slug}`}>
                      <Card
                        title={title}
                        date={date}
                        type={type}
                        coverImageUrl={coverImageUrl}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
