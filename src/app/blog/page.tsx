import BlogContents from "@/components/blog/BlogContents";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

type SearchParams = {
  searchParams: { [key: string]: string | undefined };
};

const Blog = ({ searchParams }: SearchParams) => {
  const selectedTag = searchParams.tag ?? "All";

  return (
    <>
      <Header isScrolled={true} />
      <main className="my-[65px] text-[#37352F] max-w-[1100px] mx-auto px-4 pt-12">
        <h1 className="font-medium text-5xl font-lato text-center">Blog</h1>
        <p className="text-sm pt-8 text-center">
          ✷ 개발을 공부하며 학습한 내용과 경험을 기록한 포스트를 담은
          블로그입니다. 공유하고 싶은 글은{" "}
          <a
            href="https://jeongeun.hashnode.dev/"
            target="_blank"
            className="underline text-[#00C9C2] hover:text-[#007571] duration-300 font-medium"
          >
            Hashnode
          </a>
          에 올리고 있어요.
        </p>
        <BlogContents selectedTag={selectedTag} />
      </main>
      <Footer />
    </>
  );
};

export default Blog;
