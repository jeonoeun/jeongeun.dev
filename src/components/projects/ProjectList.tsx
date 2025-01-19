import { getDatabaseItems } from "@/lib/notion";
import Card from "./Card";

const ProjectList = async () => {
  const projects = await getDatabaseItems();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 gap-y-8">
      {projects.map((project: any, index: number) => {
        const title =
          project.properties.Name?.title[0]?.plain_text || "Untitled";
        const slug =
          project.properties.Slug.rich_text[0].plain_text || "No Slug";
        const des =
          project.properties.Description?.rich_text?.[0]?.plain_text ||
          "No description";
        const lastUpdated = project.properties.Date?.date?.start || "No date";
        const type = project.properties.Type?.select?.name || "No category";
        const cover = project.cover;
        let coverImageUrl = "No cover available";
        if (cover) {
          if (cover.type === "external") {
            coverImageUrl = cover.external.url; // 외부 링크 커버
          } else if (cover.type === "file") {
            coverImageUrl = cover.file.url; // 내부 파일 커버
          }
        }

        return (
          <Card
            key={index}
            title={title}
            slug={slug}
            des={des}
            lastUpdated={lastUpdated}
            type={type}
            cover={coverImageUrl}
          />
        );
      })}
    </div>
  );
};

export default ProjectList;
