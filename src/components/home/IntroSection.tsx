import Link from "next/link";

import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoMailUnread,
  IoDocumentText,
} from "react-icons/io5";
import { FaHashnode } from "react-icons/fa6";
import Layout from "../layout/Layout";

const socialLinks = [
  { href: "https://github.com/jeonoeun", icon: <IoLogoGithub /> },
  { href: "/", icon: <IoLogoLinkedin /> },
  { href: "/", icon: <FaHashnode /> },
  { href: "/", icon: <IoDocumentText /> },
  { href: "/", icon: <IoMailUnread /> },
];

const IntroSection = () => {
  return (
    <div className="sticky top-0 z-10 bg-[#2DC26B] font-lato">
      <Layout>
        <div className="pt-[80px] text-white">
          <div className="pt-32 pb-16">
            <p className="font-black text-5xl mb-4 flex flex-col gap-4 md:flex-row">
              <span>Hello, I&apos;m</span>
              <span>Jeongeun! 👋</span>
            </p>
            <p className="text-lg mb-10 font-light">
              Front-end Developer & Front-end Developer
            </p>
            <p className="mb-20 leading-loose">
              <strong>Keep looking. Don&apos;t settle.</strong> 안주하지 않고
              항상 더 나은 길을 고민하고 탐색하는 개발자를 꿈꾸고 있어요.
              끊임없이 배우고 도전하며, 세상을 조금 더 편리하고 아름답게 만드는
              개발을 지향합니다. 재사용성과 유지보수성을 고려한 직관적이고
              효율적인 컴포넌트 기반 개발에 관심이 많으며, 이를 위해 최신
              프론트엔드 트렌드와 기술을 꾸준히 학습하고 적용하려 노력하고
              있어요.
            </p>
            <div className="flex items-center text-xl gap-3">
              {socialLinks.map((link, index) => (
                <Link key={index} href={link.href} target="_blank">
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default IntroSection;