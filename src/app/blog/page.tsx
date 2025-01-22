import PostTableList from "@/components/Blog/PostTableList";
import TagList from "@/components/Blog/TagList";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { getPostTags } from "@/lib/notion";

const Blog = async () => {
  const tags = await getPostTags();

  return (
    <>
      <Header isScrolled={true} />
      <main className="my-[65px] text-[#37352F] max-w-[900px] mx-auto px-4 pt-12">
        <h1 className="font-medium text-5xl font-lato">Blog</h1>
        <p className="text-sm pt-8">
          ✷ 개발을 공부하며 학습한 내용과 경험을 기록한 포스트입니다. 공유하고
          싶은 기록은 다듬어서{" "}
          <a
            href="https://jeongeun.hashnode.dev/"
            target="_blank"
            className="underline text-[#00C9C2] hover:text-[#007571] duration-300 font-medium"
          >
            Hashnode
          </a>
          에 올리고 있어요.
        </p>
        <TagList items={tags} />
        <PostTableList listType="recent" />
      </main>
      <Footer />
    </>
  );
};

export default Blog;
