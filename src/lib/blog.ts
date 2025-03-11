import { NotionPage } from "@/types/notion";
import { blogDatabaseId, notionClient, queryNotionDatabase } from "./notion";

export const getBlogPosts = async (): Promise<NotionPage[]> => {
  return queryNotionDatabase(blogDatabaseId!);
};

export const getPostTags = async (): Promise<string[]> => {
  const res = await notionClient.databases.query({
    database_id: blogDatabaseId!,
  });

  const tags = res.results.flatMap((page) => {
    if ("properties" in page) {
      const tagsProperty = page.properties.Tags;
      if (
        tagsProperty?.type === "multi_select" &&
        Array.isArray(tagsProperty.multi_select)
      ) {
        return tagsProperty.multi_select.map((tag) => tag.name);
      }
    }
    return [];
  });

  const uniqueTags = [...new Set(tags)];
  return uniqueTags;
};
