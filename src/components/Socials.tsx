import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoMailUnread,
  IoDocumentText,
} from "react-icons/io5";
import { FaHashnode } from "react-icons/fa6";

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

export default function Socials() {
  return (
    <ul className="flex items-center gap-3 text-[16px] md:text-[18px]">
      {socials.map((social) => (
        <li key={social.name}>{social.icon}</li>
      ))}
    </ul>
  );
}
