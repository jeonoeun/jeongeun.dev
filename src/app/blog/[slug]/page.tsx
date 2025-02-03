import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Renderer from "@/components/projects/Renderer";
import { getPageBySlug, getPageData } from "@/lib/notion";
import Comment from "@/components/blog/Comment";
import { notFound } from "next/navigation";
import { getBlogPosts } from "@/lib/blog";
import PostHeader from "@/components/blog/PostHeader";
import { extractPageProperties } from "@/utils/notion";
import MainLayout from "@/components/layout/MainLayout";

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await getBlogPosts();

  return posts.map((post) => ({
    params: { slug: post.properties?.Slug?.rich_text[0]?.plain_text },
  }));
}

const Post = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const post = await getPageBySlug(slug, "post");

  if (!post) return notFound();

  const recordMap = await getPageData(post.id);
  const postData = extractPageProperties(post);

  return (
    <>
      <Header isScrolled={true} />
      <MainLayout maxWidth="720">
        <PostHeader {...postData} />
        <Renderer recordMap={recordMap} rootPageId={post.id} />
        <Comment />
      </MainLayout>
      <Footer />
    </>
  );
};

export default Post;
