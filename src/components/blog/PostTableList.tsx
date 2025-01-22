import { extractPageProperties, getBlogPosts } from "@/lib/notion";
import Image from "next/image";
import Link from "next/link";

const PostTableList = async ({ listType }: { listType: string }) => {
  const data = await getBlogPosts();
  const posts = listType === "recent" ? data.slice(0, 10) : data;

  return (
    <div className="py-5">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b bg-[#F9F9F9]">
            <th scope="col" className="p-4">
              Date
            </th>
            <th scope="col" className="p-4">
              Name
            </th>
            <th scope="col" className="p-4 hidden w-0 sm:block">
              Tags
            </th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post: any) => {
            const { title, slug, tags, date } = extractPageProperties(post);

            // 아이콘 처리
            let iconElement = null;
            if (post.icon?.type === "emoji") {
              iconElement = (
                <span className="text-[14px]">{post.icon.emoji}</span>
              );
            } else if (
              post.icon?.type === "custom_emoji" &&
              post.icon.custom_emoji?.url
            ) {
              iconElement = (
                <Image
                  src={post.icon.custom_emoji.url}
                  alt={post.title}
                  width={18}
                  height={20}
                  objectFit="cover"
                />
              );
            }

            return (
              <tr
                key={post.id}
                className="hover:bg-[#F9F9F9] duration-300 border-b"
              >
                <td className="p-4">{date}</td>
                <td className="p-4 font-medium">
                  <Link
                    href={`/blog/${slug}`}
                    className="flex items-center gap-2"
                  >
                    <span>{iconElement}</span>
                    <span>{title}</span>
                  </Link>
                </td>
                <td className="p-4 hidden sm:block">
                  <div className="flex items-center gap-[6px]">
                    {tags.slice(0, 2).map((tag: any) => (
                      <span
                        key={tag.id}
                        className="border px-[10px] py-1 rounded-full text-[13px] font-medium text-[#4E5968] text-nowrap "
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PostTableList;
