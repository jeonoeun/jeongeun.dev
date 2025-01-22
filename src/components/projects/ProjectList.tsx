import { extractPageProperties, getDatabaseItems } from "@/lib/notion";
import Card from "./Card";

const ProjectList = async ({ type }: { type: string }) => {
  const data = await getDatabaseItems();

  const projects = data.filter((project: any) => {
    if (!("properties" in project)) return false; // properties가 없으면 필터링 제외

    if (type === "featured") {
      return project.properties.Featured?.checkbox === true;
    } else {
      return project.properties.Type?.select?.name === type;
    }
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 gap-y-8 py-5">
      {projects.map((project: any) => {
        const { title, slug, description, date, type, coverImageUrl } =
          extractPageProperties(project);

        return (
          <Card
            key={project.id}
            title={title}
            slug={slug}
            des={description}
            lastUpdated={date}
            type={type}
            cover={coverImageUrl}
          />
        );
      })}
    </div>
  );
};

export default ProjectList;
