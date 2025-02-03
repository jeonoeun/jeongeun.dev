import { getPostTags } from "@/lib/blog";
import TagItem from "./TagItem";

const TagList = async ({ selectedTag }: { selectedTag: string }) => {
  const tags = ["All", ...(await getPostTags())];

  return (
    <div className="lg:border-l">
      <div className="mx-auto max-w-[700px] lg:pl-5 lg:pt-[10px] lg:w-[300px] lg:min-w-[300px]">
        <h5 className="font-semibold text-sm mb-4 hidden lg:block">Tags</h5>
        <div className="flex justify-start items-center flex-wrap">
          {tags.map((item) => (
            <TagItem key={item} item={item} selectedTag={selectedTag} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TagList;
