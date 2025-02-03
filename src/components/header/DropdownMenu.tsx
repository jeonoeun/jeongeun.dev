import Link from "next/link";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { MdNightlight } from "react-icons/md";
import { MdArrowRightAlt } from "react-icons/md";
import { socialLinks } from "../common/SocialLinks";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const dropdownMenu = [
  { title: "Home", link: "/" },
  { title: "Projects", link: "/projects" },
  { title: "Blog", link: "/blog" },
];

const DropdownMenu = ({ pathname }: { pathname: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="relative h-full" ref={menuRef}>
      <button
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
        className="text-xl w-full h-full flex items-center justify-center text-text-darkGray group"
      >
        <IoEllipsisHorizontal />
      </button>
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="fixed top-0 left-0 w-full h-screen inset-0 bg-black bg-opacity-40 z-30"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="absolute top-full right-0 bg-[#f4f4f4] border rounded-xl -mt-4 overflow-hidden shadow-2xl z-50"
            >
              <div className="min-w-[200px] text-14">
                <div>
                  <div className="px-3 font-bold">
                    <p className="px-3 pt-4">메뉴</p>
                  </div>
                  <ul className="p-3 border-b cursor-pointer">
                    {dropdownMenu.map((menu) => (
                      <li
                        key={menu.title}
                        className="px-2 py-2 hover:bg-background-tag rounded"
                      >
                        <Link
                          href={menu.link}
                          className={`flex items-center gap-2 ${
                            pathname === menu.link ? "text-primary" : ""
                          }`}
                        >
                          <MdArrowRightAlt />
                          <span>{menu.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-3 py-2 border-b">
                  <button className="w-full flex items-center gap-1 px-3 py-2 hover:bg-background-tag rounded">
                    <MdNightlight />
                    <span>다크모드</span>
                  </button>
                </div>
                <div>
                  <div className="px-3 font-bold">
                    <p className="px-3 pt-4">소셜</p>
                  </div>
                  <ul className="p-3 border-b cursor-pointer">
                    {socialLinks.map((link, index) => (
                      <li
                        key={index}
                        className="px-2 py-2 hover:bg-background-tag rounded group"
                      >
                        <Link
                          href={link.href}
                          target="_blank"
                          className="flex items-center gap-2"
                        >
                          {link.icon}
                          <span>{link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropdownMenu;
