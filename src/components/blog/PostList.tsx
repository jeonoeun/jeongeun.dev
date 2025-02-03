import { getBlogPosts } from "@/lib/blog";
import { extractPageProperties } from "@/utils/notion";
import Image from "next/image";
import Link from "next/link";

const PostList = async ({ selectedTag }: { selectedTag?: string }) => {
  const posts = await getBlogPosts();
  const filteredPosts =
    selectedTag === "All"
      ? posts
      : posts.filter((post) =>
          post.properties?.Tags?.multi_select.some(
            (tag) => tag.name === selectedTag
          )
        );

  return (
    <>
      <div className="mx-auto mt-12 pt-[10px] max-w-[700px] pr-2 lg:pr-5 lg:mt-0">
        <div className="flex items-center justify-between">
          <div className="font-semibold text-sm">
            {selectedTag} ({filteredPosts.length})
          </div>
        </div>
        <ul className="flex flex-col justify-start items-start mx-auto lg:items-start">
          {filteredPosts.map((post) => {
            const { title, slug, description, coverImageUrl, date } =
              extractPageProperties(post);

            return (
              <li key={post.id} className="py-6">
                <Link href={`/blog/${slug}`} className="flex items-start gap-4">
                  <div className="relative w-[100px] max-w-[100px] min-w-[100px] h-[69px] rounded-md overflow-hidden lg:w-[130px] lg:max-w-[130px] lg:min-w-[130px] lg:h-[90px]">
                    {coverImageUrl && (
                      <Image
                        src={coverImageUrl}
                        alt={title}
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        objectFit="cover"
                        className="hover:scale-110 duration-300"
                      />
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="font-semibold text-black text-15 lg:text-base">
                      {title}
                    </h4>
                    <p className="text-14 lg:text-15 mb-3 text-text-secondary">
                      {description}
                    </p>
                    <div className="flex items-center gap-[6px] text-[12px] text-[#4e5968] lg:text-[13px]">
                      <span>{date}</span>
                      <span>·</span>
                      <span>이정은(@jeonoeun)</span>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default PostList;
