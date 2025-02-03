import Footer from "@/components/layout/Footer";
import ScrollingSection from "@/components/home/ScrollingSection";
import ProjectList from "@/components/projects/ProjectList";
import PostTableList from "@/components/blog/PostTableList";
import BlockContent from "@/components/common/BlockContent";

export default function Home() {
  return (
    <>
      <ScrollingSection />
      <div className="relative z-20 bg-white text-text-primary">
        <div className="max-w-900 mx-auto px-4 py-12">
          <BlockContent blockTitle="Featured Projects" blockLink="/projects">
            <ProjectList type="featured" />
          </BlockContent>
          <BlockContent blockTitle="Recent Posts" blockLink="/blog">
            <PostTableList />
          </BlockContent>
        </div>
      </div>
      <Footer />
    </>
  );
}
