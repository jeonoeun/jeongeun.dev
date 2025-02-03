import BlogContents from "@/components/blog/BlogContents";
import PageTitle from "@/components/common/PageTitle";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import MainLayout from "@/components/layout/MainLayout";

interface Props {
  searchParams: Promise<Record<string, string>>;
}

const Blog = async (props: Props) => {
  const searchParams = await props.searchParams;
  const selectedTag = searchParams.tag ?? "All";

  return (
    <>
      <Header isScrolled={true} />
      <MainLayout maxWidth="1100">
        <div className="p-4">
          <PageTitle title="Blog" />
          <p className="text-sm pt-8 text-center">
            ✷ 개발을 공부하며 학습한 내용과 경험을 기록한 포스트를 정리한
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
        </div>
      </MainLayout>
      <Footer />
    </>
  );
};

export default Blog;
