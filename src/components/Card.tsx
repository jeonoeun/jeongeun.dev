import { ExtractedPageProperties } from "@/types/notion";
import Image from "next/image";
import Link from "next/link";
import { IoLogoGithub } from "react-icons/io5";
import { LuExternalLink } from "react-icons/lu";
import { MdOutlineAccessTimeFilled } from "react-icons/md";

const Card = ({
  title,
  description,
  date,
  type,
  coverImageUrl,
  demoUrl,
  githubUrl,
}: ExtractedPageProperties) => {
  return (
    <div>
      <div className="relative w-full aspect-[278/171] rounded-[8px] overflow-hidden mb-5">
        {coverImageUrl && (
          <Image
            src={coverImageUrl}
            alt={title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            objectFit="cover"
          />
        )}
      </div>
      <div className="flex flex-col gap-2">
        {type && <div className="text-[14px] text-[#00C9C2]">{type}</div>}
        <div className="flex items-center justify-between">
          <div className="text-[20px] font-semibold">{title}</div>

          <div className="flex items-center text-[17px] gap-2">
            {!!githubUrl && (
              <Link
                href={githubUrl}
                target="_blank"
                className="flex items-center justify-center"
              >
                <IoLogoGithub />
              </Link>
            )}
            {!!demoUrl && (
              <Link
                href={demoUrl}
                target="_blank"
                className="flex items-center justify-center"
              >
                <LuExternalLink />
              </Link>
            )}
          </div>
        </div>
        {description && (
          <div className="text-[14px] text-[#A09F9C]">{description}</div>
        )}
        {date && (
          <div className="flex items-center gap-1 text-[13px] text-[#A09F9C]">
            <span>{date}</span>
            <span>{"・"}</span>
            <div className="flex items-center gap-0.5">
              <MdOutlineAccessTimeFilled />
              <span>{"18분"}</span>
            </div>
            <span>{"・"}</span>
            <span>{"1 comment"}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
