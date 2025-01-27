import { NotionPage } from "@/types/notion";
import { projectDatabaseId, queryNotionDatabase } from "./notion";

export const getProjectItems = async (): Promise<NotionPage[]> => {
  return queryNotionDatabase(projectDatabaseId!, {
    sorts: [{ property: "Date", direction: "descending" }],
  });
};
