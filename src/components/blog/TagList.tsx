const TagList = ({ items }: { items: any }) => {
  return (
    <div className="py-8">
      <div className="flex justify-start items-center gap-[6px] flex-wrap">
        {items.map((item: any) => (
          <span
            key={item.id}
            className="border px-[10px] py-1 rounded-full text-[14px] font-medium text-[#4E5968]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TagList;
