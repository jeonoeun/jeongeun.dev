import { ExtractedPageProperties, NotionPage } from "@/types/notion";

const getIconElement = (icon: NotionPage["icon"]) => {
  if (!icon) return null;
  if (icon.type === "emoji") return icon.emoji;
  if (icon.type === "custom_emoji") return icon.custom_emoji?.url;
};

const getNotionCoverUrl = (cover: NotionPage["cover"]) => {
  if (!cover) return null;
  if (cover.type === "external") return cover.external?.url || null;
  if (cover.type === "file") return cover.file?.url || null;
};

const getPublishedImageUrl = (notionCoverUrl: string, projectId: string) => {
  const encodedUrl = encodeURIComponent(notionCoverUrl.split("?")[0]);
  return `https://www.notion.so/image/${encodedUrl}?table=block&id=${projectId}&cache=v2`;
};

export const extractPageProperties = (
  item: NotionPage
): ExtractedPageProperties => {
  const title = item.properties?.Name?.title[0]?.plain_text || "Untitled";
  const slug = item.properties?.Slug?.rich_text[0]?.plain_text || "No Slug";
  const description = item.properties?.Description?.rich_text[0]?.plain_text;
  const tags = item.properties?.Tags?.multi_select || [];
  const created = item.properties?.Date?.date?.start || "No date";
  const type = item.properties?.Type?.select?.name || "No type";

  const iconElement = getIconElement(item.icon);
  const notionCoverUrl = getNotionCoverUrl(item.cover);

  const coverImageUrl = notionCoverUrl
    ? getPublishedImageUrl(notionCoverUrl, item.id)
    : null;

  const date = `${created.slice(0, 4)}년 ${created.slice(
    5,
    7
  )}월 ${created.slice(8, 10)}월`;

  const demoUrl = item.properties?.URL?.url || "";
  const githubUrl = item.properties?.Github?.url || "";

  return {
    title,
    slug,
    description,
    tags,
    date,
    type,
    coverImageUrl,
    iconElement,
    demoUrl,
    githubUrl,
  };
};
