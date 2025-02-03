import { ExtractedPageProperties } from "@/types/notion";
import Image from "next/image";
import Link from "next/link";

const Card = ({
  title,
  slug,
  description,
  date,
  type,
  coverImageUrl,
}: ExtractedPageProperties) => {
  return (
    <div>
      <Link href={`/projects/${slug}`}>
        <div className="relative w-full h-[191px] rounded-md mb-4 overflow-hidden">
          {coverImageUrl && (
            <Image
              src={coverImageUrl}
              alt={title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              objectFit="cover"
              className="hover:scale-105 duration-300"
            />
          )}
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between text-11">
            <span className="border px-2 py-1 rounded">{type}</span>
            <span>{date}</span>
          </div>
          <p className="font-bold text-lg">{title}</p>
          {description && (
            <p className="text-13 text-text-secondary">{description}</p>
          )}
        </div>
      </Link>
    </div>
  );
};

export default Card;
