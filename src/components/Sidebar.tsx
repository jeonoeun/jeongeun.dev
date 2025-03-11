import { motion } from "framer-motion";
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoMailUnread,
  IoDocumentText,
} from "react-icons/io5";
import profile from "../../public/images/profile.png";
import Image from "next/image";
import {
  MdOutlineKeyboardDoubleArrowRight,
  MdWebStories,
  MdBrandingWatermark,
} from "react-icons/md";
import { FaBlog } from "react-icons/fa";
import { FaHashnode } from "react-icons/fa6";
import { CgHello } from "react-icons/cg";
import Link from "next/link";
import SearchBar from "./SearchBar";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const sidebarVariants = {
  open: { x: 0 },
  closed: { x: "100%" },
};

const nav = [
  { name: "블로그", href: "/blog", icon: <FaBlog /> },
  { name: "시리즈", href: "/series", icon: <MdWebStories /> },
  { name: "프로젝트", href: "/projects", icon: <MdBrandingWatermark /> },
  { name: "소개", href: "/about", icon: <CgHello /> },
];

const socials = [
  { name: "GitHub", icon: <IoLogoGithub />, url: "https://github.com" },
  { name: "Hashnode", icon: <FaHashnode />, url: "https://hashnode.com" },
  {
    name: "LinkedIn",
    icon: <IoLogoLinkedin />,
    url: "https://linkedin.com",
  },
  {
    name: "Mail",
    icon: <IoMailUnread />,
    url: "",
  },
  {
    name: "Resume",
    icon: <IoDocumentText />,
    url: "",
  },
];

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  return (
    <>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="fixed top-0 left-0 w-full h-screen inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
        transition={{ ease: "easeInOut", duration: 0.3 }}
        className={`md:hidden fixed top-0 right-0 w-[300px] h-screen border-l border-[var(--border-color)] z-50 bg-[var(--bg-color)] ${
          isOpen ? "shadow-2xl" : ""
        }  rounded-tl-[16px]`}
      >
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <div className="relative w-[32px] aspect-[1/1] rounded-full overflow-hidden bg-[#EBEBEB]">
              <Image src={profile} alt="" fill className="object-cover" />
            </div>
            <div className="h-[32px] flex flex-col justify-between gap-0.5 leading-[14px]">
              <p className="font-semibold text-[14px]">Jeongeun Lee</p>
              <p className="text-[#71717A] text-[13px]">Front-end Developer</p>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex md:hidden items-center justify-center text-[22px] p-1 rounded-[4px] hover:bg-[var(--hover-bg-color)] transition duration-300 cursor-pointer"
          >
            <MdOutlineKeyboardDoubleArrowRight />
          </button>
        </div>
        <div className="p-4 pb-0">
          <SearchBar />
        </div>

        <div className="px-2 py-4 pt-2">
          <div className="p-2 text-[14px] leading-loose">
            <div className="border-b border-[var(--border-color)] pb-2">
              <div className="font-bold p-2 text-[12px] text-[#9198A1]">
                메뉴
              </div>
              <ul>
                {nav.map((n, idx) => (
                  <li key={idx}>
                    <Link
                      href={n.href}
                      className="flex items-center gap-2 rounded-[4px] hover:bg-[var(--hover-bg-color)] transition duration-300 px-2 py-1.5"
                    >
                      <span className="text-[#59636e]">{n.icon}</span>
                      <span>{n.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="py-2">
              <div className="font-bold p-2 text-[12px] text-[#9198A1]">
                소셜
              </div>
              <ul>
                {socials.map((social, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 rounded-[4px] hover:bg-[var(--hover-bg-color)] transition duration-300 px-2 py-1.5"
                  >
                    <span className="text-[#59636e]">{social.icon}</span>
                    <span>{social.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
