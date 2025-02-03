import { ExtractedPageProperties } from "@/types/notion";

const ProjectDetailHeader = ({
  title,
  type,
  date,
}: ExtractedPageProperties) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-4">
      <h1 className="text-[40px] font-bold">{title}</h1>
      <p className="text-text-muted">
        {type}・{date.slice(0, 9)}
      </p>
    </div>
  );
};

export default ProjectDetailHeader;
