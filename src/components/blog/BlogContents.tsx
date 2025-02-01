import PostList from "./PostList";
import TagList from "./TagList";

const BlogContents = ({ selectedTag }: { selectedTag: string }) => {
  return (
    <div className="pt-8 w-full lg:pt-14">
      <div className="flex flex-col justify-center lg:justify-between lg:flex-row-reverse">
        <TagList selectedTag={selectedTag} />
        <PostList selectedTag={selectedTag} />
      </div>
    </div>
  );
};

export default BlogContents;
