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

export async function getPageData(pageId: string) {
  return await notion.getPage(pageId);
}
