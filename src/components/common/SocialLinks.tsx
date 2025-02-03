import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoMailUnread,
  IoDocumentText,
} from "react-icons/io5";
import { FaHashnode } from "react-icons/fa6";
import Link from "next/link";

export const socialLinks = [
  {
    href: "https://github.com/jeonoeun",
    icon: <IoLogoGithub />,
    title: "Github",
  },

  {
    href: "https://jeongeun.hashnode.dev/",
    icon: <FaHashnode />,
    title: "Hashnode",
  },
  { href: "/", icon: <IoLogoLinkedin />, title: "LinkedIn" },
  { href: "/", icon: <IoMailUnread />, title: "Email" },
  { href: "/", icon: <IoDocumentText />, title: "Resume" },
];

const SocialLinks = ({ viewType }: { viewType: string }) => {
  return (
    <div
      className={`flex items-center gap-3 ${
        viewType === "icon" ? "text-lg" : "text-13"
      }`}
    >
      {socialLinks.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          target="_blank"
          className="hover:opacity-70 duration-150"
        >
          {viewType === "icon" ? link.icon : link.title}
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
