import { Client } from "@notionhq/client";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionAPI } from "notion-client";
import { cache } from "react";

export const notionClient = new Client({
  auth: "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",
});

const notion = new NotionAPI();

export const getDatabaseItems = async () => {
  const databaseId = "17e9a40ab81180acb618ff481ea1d1e8";

  const res = await notionClient.databases.query({
    database_id: databaseId!,
    sorts: [
      {
        property: "Date",
        direction: "descending",
      },
    ],
  });

  return res.results;
};

export const getDataBySlug = cache(async (slug: string) => {
  const databaseId = "17e9a40ab81180acb618ff481ea1d1e8";

  const res = await notionClient.databases.query({
    database_id: databaseId!,
    filter: {
      property: "Slug",
      rich_text: {
        equals: slug,
      },
    },
  });

  if (res.results.length === 0) {
    throw new Error(`No page found for slug: ${slug}`);
  }

  return res.results[0] as PageObjectResponse | undefined;
});

export const getPageData = async (pageId: string) => {
  return await notion.getPage(pageId);
};

export const getBlogPosts = async () => {
  const databaseId = "1809a40ab81180eb9bdaf0b7384cb795";

  const res = await notionClient.databases.query({
    database_id: databaseId!,
    filter: {
      property: "Status",
      select: {
        equals: "published",
      },
    },
    sorts: [
      {
        property: "Date",
        direction: "descending",
      },
    ],
  });

  return res.results;
};

export const getPostBySlug = cache(async (slug: string) => {
  const databaseId = "1809a40ab81180eb9bdaf0b7384cb795";

  const res = await notionClient.databases.query({
    database_id: databaseId!,
    filter: {
      property: "Slug",
      rich_text: {
        equals: slug,
      },
    },
  });

  if (res.results.length === 0) {
    throw new Error(`No page found for slug: ${slug}`);
  }

  return res.results[0] as PageObjectResponse | undefined;
});

export const getPostTags = async () => {
  const databaseId = "1809a40ab81180eb9bdaf0b7384cb795";

  const res = await notionClient.databases.query({ database_id: databaseId });

  const tags = res.results.flatMap((page: any) => {
    return (
      page.properties?.Tags?.multi_select?.map((tag: any) => tag.name) || []
    );
  });

  const uniqueTags = [...new Set(tags)];
  return uniqueTags;
};

export const extractPageProperties = (item: any) => {
  const title = item.properties.Name?.title[0]?.plain_text || "Untitled";
  const slug = item.properties.Slug?.rich_text[0]?.plain_text || "No Slug";
  const description =
    item.properties.Description?.rich_text[0]?.plain_text || "No description";
  const tags = item.properties.Tags?.multi_select || [];
  const date = item.properties.Date?.date?.start || "No date";
  const type = item.properties.Type?.select?.name || "No type";

  const cover = item.cover;
  let coverImageUrl = "No cover available";
  if (cover) {
    if (cover.type === "external" && cover.external?.url) {
      coverImageUrl = cover.external.url;
    } else if (cover.type === "file" && cover.file?.url) {
      coverImageUrl = cover.file.url;
    }
  }

  return { title, slug, description, tags, date, type, coverImageUrl };
};
