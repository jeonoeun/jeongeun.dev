import Card from "@/components/Card";
import CardGrid from "@/components/CardGrid";
import Layout from "@/components/Layout";
import PageTitle from "@/components/PageTitle";
import SectionTitle from "@/components/SectionTitle";
import Tag from "@/components/Tag";
import { getBlogPosts, getPostTags } from "@/lib/blog";
import { extractPageProperties } from "@/utils/notion";
import Link from "next/link";

interface Props {
  searchParams: Promise<Record<string, string>>;
}

export default async function Page(props: Props) {
  const searchParams = await props.searchParams;
  const selectedTag = searchParams.tag ?? "All";

  const posts = await getBlogPosts();
  const filteredPosts =
    selectedTag === "All"
      ? posts
      : posts.filter((post) =>
          post.properties?.Tags?.multi_select.some(
            (tag) => tag.name === selectedTag
          )
        );

  const tags = ["All", ...(await getPostTags())];

  return (
    <Layout>
      <div className="flex flex-col gap-16">
        <PageTitle title={`블로그`} />

        <div>
          <SectionTitle>Tags</SectionTitle>
          <ul className="flex items-center flex-wrap">
            {tags.map((tag, idx) => (
              <li key={idx} className="mr-1.5 mb-3">
                <Tag name={tag} href={`/blog?tag=${tag}`} />
              </li>
            ))}
          </ul>
        </div>

        <div>
          <SectionTitle>
            {selectedTag} ({filteredPosts.length})
          </SectionTitle>
          <CardGrid>
            {filteredPosts.map((post) => {
              const { title, slug, coverImageUrl, date, type } =
                extractPageProperties(post);

              return (
                <li key={post.id}>
                  <Link href={`/blog/${slug}`}>
                    <Card
                      title={title}
                      slug={slug}
                      date={date}
                      type={type}
                      coverImageUrl={coverImageUrl}
                    />
                  </Link>
                </li>
              );
            })}
          </CardGrid>
        </div>
      </div>
    </Layout>
  );
}
