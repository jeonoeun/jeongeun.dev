import Background from "@/components/Background";
import Card from "@/components/Card";
import CardGrid from "@/components/CardGrid";
import Layout from "@/components/Layout";
import Socials from "@/components/Socials";
import { getBlogPosts } from "@/lib/blog";
import { extractPageProperties } from "@/utils/notion";
import Link from "next/link";

export default async function Home() {
  const posts = await getBlogPosts();

  return (
    <Layout>
      <div className="flex flex-col gap-16">
        <Background>
          <div className="flex flex-col justify-between gap-20 p-8 md:p-14 text-white">
            <div className="tracking-wide">
              <h1 className="font-lato text-3xl md:text-5xl font-bold mb-2 leading-tight">
                Jeongeun Lee
              </h1>
              <div className="text-[14px] md:text-[16px]">
                — Learner, Challenger, Frontend Developer
              </div>
            </div>
            <Socials />
          </div>
        </Background>
        <div>
          <div className="font-bold text-[24px] mb-4">Recent Posts</div>
          <CardGrid>
            {posts.slice(0, 9).map((post) => {
              const { title, slug, coverImageUrl, date, type } =
                extractPageProperties(post);

              return (
                <li key={post.id}>
                  <Link href={`/blog/${slug}`}>
                    <Card
                      title={title}
                      slug={slug}
                      date={date}
                      type={type}
                      coverImageUrl={coverImageUrl}
                    />
                  </Link>
                </li>
              );
            })}
          </CardGrid>
        </div>
      </div>
    </Layout>
  );
}
