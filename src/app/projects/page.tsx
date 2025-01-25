import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ProjectList from "@/components/projects/ProjectList";

const types = [
  {
    title: "Featured Projects",
    des: "프로젝트의 기획부터 디자인, 개발까지 직접 완성해 본 개인 프로젝트들입니다. Next.js, React, TypeScript 등의 기술 스택을 사용해 반응형 웹을 중심으로 구현하면서, 사용자 경험을 최적화하고, 다양한 디바이스에서 일관된 성능과 디자인을 제공하는 것에 집중했습니다.",
    type: "개인 프로젝트",
  },
  {
    title: "Laboratory & Ideas",
    des: "개발을 공부하며 학습한 내용을 연습하고, 새로운 아이디어를 직접 구현해보기 위해 제작한 미니 프로젝트들입니다.",
    type: "Laboratory",
  },
  {
    title: "Web Publishing",
    des: "2022년에 국비지원 웹 퍼블리싱 수업을 통해 HTML과 CSS의 기본 원리를 학습하며, 한 주에 하나씩 완성해 본 사이트들입니다. Figma로 기존 웹사이트를 새롭게 디자인하여 와이어프레임화한 뒤, 이를 토대로 웹 퍼블리싱 작업을 진행했습니다. 당시에 구현 기간과 개발 지식의 한계로 인해 웹 접근성(WCAG)과 반응형 웹 등 구현하지 못해 아쉬웠던 부분들은, 현재 리팩토링을 진행하며 보완하고 있습니다.",
  },
];

const Projects = () => {
  return (
    <>
      <Header isScrolled={true} />
      <main className="my-[65px] text-[#37352F] max-w-[900px] mx-auto px-4 pt-12">
        <h1 className="font-medium text-5xl text-center font-lato pb-20">
          Projects
        </h1>
        <div className="flex flex-col gap-12">
          {types.map((item) => (
            <div key={item.title}>
              <h2 className="text-[22px] font-bold pb-3">{item.title}</h2>
              <p className="text-[14px] leading-6">{item.des}</p>
              <ProjectList type={item.type ? item.type : item.title} />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Projects;
