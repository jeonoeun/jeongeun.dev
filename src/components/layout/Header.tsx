"use client";

import Image from "next/image";
import Link from "next/link";
import LogoImage from "@/assets/logo.png";
import { usePathname } from "next/navigation";

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
        <Link
          href="/"
          className="flex items-center justify-center rounded-full border hover:border-primary hover:shadow-[0_0_21px_0_#F86254] overflow-hidden duration-300"
        >
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <Image
              src={LogoImage}
              alt=""
              className="hover:scale-105 duration-300"
            />
          </div>
        </Link>
        <nav>
          <ul className="flex items-center text-[14px]">
            <li>
              <Link
                href="/"
                className={`rounded px-6 py-2 duration-150 hover:text-primary ${
                  pathname === "/" ? "text-primary " : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className={`rounded px-6 py-2 duration-150 hover:text-primary ${
                  pathname.includes("/projects") ? "text-primary" : ""
                }`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={`rounded px-6 py-2 duration-150 hover:text-primary ${
                  pathname.includes("/blog") ? "text-primary" : ""
                }`}
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
