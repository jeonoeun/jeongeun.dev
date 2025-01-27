import { getDatabaseItems } from "@/lib/notion";
import Card from "./Card";
import { extractPageProperties } from "@/utils/notion";

const ProjectList = async ({ type }: { type: string }) => {
  const data = await getDatabaseItems();

  const projects = data.filter((project) => {
    if (type === "featured") {
      return project.properties?.Featured?.checkbox === true;
    } else {
      return project.properties?.Type?.select?.name === type;
    }
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 gap-y-8 py-5">
      {projects.map((project) => {
        const { title, slug, description, date, type, coverImageUrl } =
          extractPageProperties(project);

        return (
          <Card
            key={project.id}
            title={title}
            slug={slug}
            description={description}
            date={date.slice(0, 7)}
            type={type}
            coverImageUrl={coverImageUrl}
          />
        );
      })}
    </div>
  );
};

export default ProjectList;
