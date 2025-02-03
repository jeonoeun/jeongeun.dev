import Image from "next/image";
import Link from "next/link";
import LogoImage from "@/assets/logo.png";
import { ExtractedPageProperties } from "@/types/notion";
import TagItem from "./TagItem";

const PostHeader = ({
  title,
  date,
  tags,
  coverImageUrl,
}: ExtractedPageProperties) => {
  return (
    <div className="flex flex-col items-start justify-center gap-4 p-4">
      {coverImageUrl && (
        <div className="relative w-full aspect-[16/9] rounded-md overflow-hidden">
          <Image
            src={coverImageUrl}
            alt={title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            objectFit="cover"
          />
        </div>
      )}
      <h1 className="text-[32px] font-bold lg:text-[40px]">{title}</h1>
      <div className="flex items-center gap-2">
        {tags?.map((tag) => (
          <TagItem key={tag.id} item={tag.name} />
        ))}
      </div>

      <div className="flex items-center text-[16px] gap-1 mt-6">
        <div className="flex items-center gap-1">
          <Link
            href="/"
            className="flex items-center justify-center rounded-full w-6 h-6 border hover:border-[#F86254] hover:shadow-[0_0_21px_0_#F86254] overflow-hidden duration-300"
          >
            <div className="w-6 h-6 rounded-full overflow-hidden">
              <Image src={LogoImage} alt="logo" />
            </div>
          </Link>
          <span className="font-semibold">이정은(@jeonoeun)</span>
        </div>
        <span>・</span>
        <span className="text-[#8B95A1]">{date}</span>
      </div>
    </div>
  );
};

export default PostHeader;
