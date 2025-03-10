import { MdOutlineKeyboardCommandKey, MdOutlineSearch } from "react-icons/md";

export default function SearchBar() {
  return (
    <div className="border rounded-[8px] flex items-center justify-between gap-6 px-2 h-[37px] text-[#A3A4A4] text-[13px]">
      <div className="flex items-center gap-1.5">
        <span className="text-[16px]">
          <MdOutlineSearch />
        </span>
        <span>Search Posts and Projects...</span>
      </div>
      <div className="flex items-center gap-0.5">
        <div className="border flex items-center justify-center w-[18px] h-[18px] rounded-[4px] bg-white dark:bg-[#292929]">
          <MdOutlineKeyboardCommandKey />
        </div>
        <div className="border flex items-center justify-center w-[18px] h-[18px] rounded-[4px] bg-white dark:bg-[#292929]">
          <span>K</span>
        </div>
      </div>
    </div>
  );
}
