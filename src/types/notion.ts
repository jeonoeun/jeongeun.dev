export interface ExtractedPageProperties {
  title: string;
  slug?: string;
  description?: string | null;
  tags?: { name: string; id: string }[];
  date?: string;
  type?: string;
  demoUrl?: string;
  githubUrl?: string;
  coverImageUrl: string | null;
  iconElement?: string | null | undefined;
}

export interface NotionProperty {
  Date?: { date: { start: string } };
  Slug?: {
    rich_text: { plain_text: string }[];
  };
  Description?: {
    rich_text: { plain_text: string }[];
  };
  Tags?: {
    multi_select: { name: string; id: string }[];
  };
  Type?: {
    select: { name: string };
  };
  Name?: {
    title: { plain_text: string }[];
  };
  URL?: { url: string };
  Github?: { url: string };
}

export interface NotionPage {
  id: string;
  cover?: {
    file?: { url: string };
    external?: { url: string };
    type: string;
  } | null;
  icon?:
    | {
        emoji?: string;
        custom_emoji?: { url: string };
        type: string;
      }
    | null
    | undefined;
  properties?: NotionProperty;
}

export interface NotionQueryBody {
  filter?: {
    property: string;
    rich_text?: {
      equals: string;
    };
    select?: {
      equals: string;
    };
  };
  sorts?: {
    property: string;
    direction: "ascending" | "descending";
  }[];
}
