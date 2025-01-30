import { getPostTags } from "@/lib/blog";
import Link from "next/link";

const TagList = async ({ selectedTag }: { selectedTag: string }) => {
  const tags = ["All", ...(await getPostTags())];

  return (
    <div className="lg:border-l">
      <div className="mx-auto max-w-[700px] lg:pl-5 lg:pt-[10px] lg:w-[300px] lg:min-w-[300px]">
        <h5 className="font-semibold text-sm mb-4 hidden lg:block">Tags</h5>
        <div className="flex justify-start items-center flex-wrap">
          {tags.map((item, index) => (
            <Link
              key={index}
              href={`?tag=${item}`}
              className={`border px-[10px] py-1 rounded-full text-[14px] font-medium mr-[6px] mb-[8px] ${
                selectedTag === item
                  ? "bg-[#e8f3ff] border-[#e8f3ff] text-[#2272eb]"
                  : "text-[#4E5968]"
              }`}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TagList;
