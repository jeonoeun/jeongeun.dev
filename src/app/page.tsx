import Footer from "@/components/layout/Footer";
import ScrollingSection from "@/components/home/ScrollingSection";
import ProjectList from "@/components/projects/ProjectList";

export default function Home() {
  return (
    <>
      <ScrollingSection />
      <div className="relative z-20 bg-white">
        <div className="max-w-[900px] mx-auto px-4 py-14">
          <ProjectList />
        </div>
      </div>
      <Footer />
    </>
  );
}
