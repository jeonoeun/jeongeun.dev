"use client";

import { usePathname } from "next/navigation";
import DropdownMenu from "../header/DropdownMenu";
import Nav from "../header/Nav";
import MainLogo from "../header/MainLogo";

const Header = ({ isScrolled }: { isScrolled: boolean }) => {
  const pathname = usePathname();

  return (
    <header
      className={`fixed top-0 left-0 w-full h-header z-50 transition-colors duration-300 font-medium text-[15px] text-text-gray ${
        isScrolled
          ? "bg-background-overlay backdrop-blur-md backdrop-saturate-180 border-b"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-1500 h-full mx-auto px-4 flex items-center justify-between">
        <MainLogo />
        <Nav pathname={pathname} />
        <DropdownMenu pathname={pathname} />
      </div>
    </header>
  );
};

export default Header;
