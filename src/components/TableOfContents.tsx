import { ExtendedRecordMap } from "notion-types";

export default function TableOfContents({
  recordMap,
}: {
  recordMap: ExtendedRecordMap;
}) {
  const tocItems = extractTableOfContents(recordMap);

  if (!tocItems.length) {
    return null;
  }

  return (
    <div className="hidden lg:block w-[240px] min-w-[240px] max-w-[240px] sticky top-0 self-start text-[14px] pt-32">
      <p className="font-semibold pb-2">목차</p>
      <ul>
        {tocItems.map((item) => (
          <li
            key={item.id}
            className={`hover:bg-[var(--hover-bg-color)] transition duration-300 rounded-[4px] text-[#A09F9C] hover:text-[#37352F] ${
              item.type === "header"
                ? "pl-0"
                : item.type === "sub_header"
                ? "pl-3"
                : "pl-6"
            }`}
          >
            <a href={`#${item.id}`} className="inline-block w-full p-1.5">
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

const extractTableOfContents = (recordMap: ExtendedRecordMap) => {
  if (!recordMap?.block) {
    return [];
  }

  return Object.values(recordMap.block)
    .map(({ value }) => {
      if (!value || !value.id || !value.type) return null;

      if (["header", "sub_header", "sub_sub_header"].includes(value.type)) {
        return {
          id: value.id.replace(/-/g, ""),
          type: value.type as "header" | "sub_header" | "sub_sub_header",
          text: value.properties?.title?.[0]?.[0] || "(제목 없음)",
        };
      }
      return null;
    })
    .filter(
      (
        item
      ): item is {
        id: string;
        type: "header" | "sub_header" | "sub_sub_header";
        text: string;
      } => item !== null
    );
};
