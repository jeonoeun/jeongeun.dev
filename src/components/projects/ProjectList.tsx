import { getDatabaseItems } from "@/lib/notion";

const ProjectList = async () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 gap-y-8">
      {projects.map((project: any, index: number) => (
        <div key={index}>
          <h3>{project.properties.Name?.title[0]?.plain_text}</h3>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
