import Link from "next/link";

import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoMailUnread,
  IoDocumentText,
} from "react-icons/io5";
import { FaHashnode } from "react-icons/fa6";

const socialLinks = [
  {
    href: "https://github.com/jeonoeun",
    icon: <IoLogoGithub />,
    title: "Github",
  },
  { href: "/", icon: <IoLogoLinkedin />, title: "Linkedin" },
  { href: "/", icon: <FaHashnode />, title: "Hashnode" },
  { href: "/", icon: <IoDocumentText />, title: "Resume" },
  { href: "/", icon: <IoMailUnread />, title: "Contact" },
];

const Footer = () => {
  return (
    <footer className="w-full h-[130px] text-[13px]">
      <div className="max-w-[1024px] h-full mx-auto px-4">
        <div className="flex flex-col items-center justify-center h-full gap-3 md:flex-row">
          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <Link key={index} href={link.href} target="_blank">
                {link.title}
              </Link>
            ))}
          </div>
          <div>ⓒ 2025 Jeongeun Lee. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
