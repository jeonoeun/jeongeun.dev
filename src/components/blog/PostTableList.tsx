import { getBlogPosts } from "@/lib/blog";
import { extractPageProperties } from "@/utils/notion";
import Image from "next/image";
import Link from "next/link";
import TagItem from "./TagItem";

const PostTableList = async () => {
  const posts = await getBlogPosts();

  return (
    <div className="py-5">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b bg-background-table">
            <th scope="col" className="p-4 hidden w-0 sm:block">
              Date
            </th>
            <th scope="col" className="p-4">
              Name
            </th>
            <th scope="col" className="p-4 hidden w-0 md:block">
              Tags
            </th>
          </tr>
        </thead>
        <tbody>
          {posts
            .filter((e, index) => index < 10)
            .map((post) => {
              const { title, slug, tags, date, iconElement } =
                extractPageProperties(post);

              return (
                <tr
                  key={post.id}
                  className="hover:bg-background-table duration-300 border-b"
                >
                  <td className="p-4 py-5 hidden sm:block">{date}</td>
                  <td className="p-4 py-5 font-medium">
                    <Link
                      href={`/blog/${slug}`}
                      className="flex items-center gap-2"
                    >
                      <span className="flex-shrink-0">
                        {iconElement?.includes("http") ? (
                          <Image
                            src={iconElement}
                            alt={title}
                            width={18}
                            height={20}
                            objectFit="cover"
                          />
                        ) : (
                          <span className="text-[18px]">{iconElement}</span>
                        )}
                      </span>
                      <span>{title}</span>
                    </Link>
                  </td>
                  <td className="p-4 py-5 hidden md:block">
                    {tags?.slice(0, 1).map((tag) => (
                      <TagItem key={tag.id} item={tag.name} />
                    ))}
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
