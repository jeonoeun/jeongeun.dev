import Link from "next/link";

interface TagItemProps {
  item: string;
  selectedTag?: string;
}

const TagItem = ({ item, selectedTag }: TagItemProps) => {
  return (
    <Link
      href={`/blog?tag=${item}`}
      className={`border px-[10px] py-1 rounded-full text-[14px] font-medium mr-[6px] mb-[8px]   hover:bg-background-tag duration-300 ${
        selectedTag === item
          ? "bg-background-selected border-background-selected text-white hover:bg-background-selected hover:border-background-selected hover:text-white"
          : "bg-background-table text-text-secondary"
      }`}
    >
      {item}
    </Link>
  );
};

export default TagItem;
