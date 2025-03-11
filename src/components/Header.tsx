"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MdOutlineMenu,
  MdOutlineKeyboardDoubleArrowLeft,
} from "react-icons/md";
import profile from "../../public/images/profile.png";
import Sidebar from "./Sidebar";
import DarkModeToggle from "./DarkModeToggle";
import SearchBar from "./SearchBar";

const nav = [
  { name: "블로그", href: "/blog" },
  { name: "시리즈", href: "/series" },
  { name: "프로젝트", href: "/projects" },
  { name: "소개", href: "/about" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-[var(--border-color)] bg-[var(--bg-color)]">
      <div className="relative max-w-[1200px] h-[65px] mx-auto flex items-center justify-between px-4">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="relative w-[37px] aspect-[1/1] rounded-full overflow-hidden bg-[#EBEBEB]">
              <Image
                src={profile}
                alt=""
                fill
                className="object-cover hover:scale-105 transition duration-150"
              />
            </div>
          </div>
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex md:hidden items-center justify-center text-[22px] p-1 rounded-[4px] hover:bg-[var(--hover-bg-color)] transition duration-300 cursor-pointer"
        >
          {isOpen ? <MdOutlineKeyboardDoubleArrowLeft /> : <MdOutlineMenu />}
        </button>

        <div className="hidden md:flex items-center gap-2">
          <nav>
            <ul className="flex items-center text-[14px]">
              {nav.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="inline-block h-full px-3 py-1.5 mr-2 rounded-[8px] hover:bg-[var(--hover-bg-color)] tracking-wide"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <SearchBar />
          <DarkModeToggle />
        </div>
      </div>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}
