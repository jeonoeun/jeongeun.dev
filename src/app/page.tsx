import Footer from "@/components/layout/Footer";
import ScrollingSection from "@/components/home/ScrollingSection";
import ProjectList from "@/components/projects/ProjectList";
import Link from "next/link";
import { IoChevronForward } from "react-icons/io5";
import PostTableList from "@/components/blog/PostTableList";

export default function Home() {
  return (
    <>
      <ScrollingSection />
      <div className="relative z-20 bg-white">
        <div className="max-w-[900px] mx-auto px-4 py-14 flex flex-col gap-14">
          <div>
            <div className="flex items-center justify-between pb-2">
              <h2 className="text-3xl font-bold">Featured Projects</h2>
              <Link
                href="/projects"
                className="flex items-center gap-1 text-[#F86254]"
              >
                <span>더 보기</span>
                <IoChevronForward />
              </Link>
            </div>
            <ProjectList type="featured" />
          </div>

          <div>
            <div className="flex items-center justify-between pb-2">
              <h2 className="text-3xl font-bold">Recent Posts</h2>
              <Link
                href="/blog"
                className="flex items-center gap-1 text-[#F86254]"
              >
                <span>더 보기</span>
                <IoChevronForward />
              </Link>
            </div>
            <PostTableList listType="recent" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
