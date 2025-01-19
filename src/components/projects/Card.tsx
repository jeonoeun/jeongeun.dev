import { Project } from "@/data/projects";
import Link from "next/link";

const Card = ({ project }: { project: Project }) => {
  return (
    <div>
      <Link href={`projects/${project.slug}`}>
        <div className="bg-black w-full h-[191px] rounded-md mb-4" />
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between text-[11px]">
            <span className="border px-2 py-1 rounded">{project.type}</span>
            <span>{project.lastUpdated}</span>
          </div>
          <p className="font-bold text-lg">{project.title}</p>
          <p className="text-sm">{project.des}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
