import Link from "next/link";
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoMailUnread,
  IoDocumentText,
} from "react-icons/io5";
import { FaHashnode } from "react-icons/fa6";
import RadialGradientBackground from "./RadielGradientBackground";

const socialLinks = [
  { href: "https://github.com/jeonoeun", icon: <IoLogoGithub /> },
  {
    href: "https://jeongeun.hashnode.dev/",
    icon: <FaHashnode />,
    title: "Hashnode",
  },
  { href: "/", icon: <IoLogoLinkedin /> },
  { href: "/", icon: <IoMailUnread /> },
  { href: "/", icon: <IoDocumentText /> },
];

const IntroSection = () => {
  return (
    <RadialGradientBackground>
      <div className="max-w-[900px] mx-auto px-4 text-white">
        <div className="pt-[80px]">
          <div className="pt-32 pb-16">
            <p className="font-black text-5xl mb-4 flex flex-col gap-4 md:flex-row">
              <span>Hello, I&apos;m</span>
              <span>Jeongeun! 👋</span>
            </p>
            <p className="text-lg mb-16 font-light">
              — Learner, Challenger, Front-end Developer
            </p>
            <div className="mb-20 leading-loose">
              <p className="font-semibold text-lg mb-2">
                Keep looking. Don&apos;t settle.
              </p>
              <p>
                안주하지 않고 더 나은 길을 끊임없이 탐색하며, 세상을 조금 더
                편리하고 아름답게 만드는 개발자를 꿈꾸고 있습니다. 재사용성과
                유지보수성을 고려한 컴포넌트 기반 개발에 많으며, 최신 프론트엔드
                트렌드와 기술을 꾸준히 학습하고 적용하기 위해 노력하고 있습니다.
              </p>
            </div>
            <div className="flex items-center text-xl gap-3">
              {socialLinks.map((link, index) => (
                <Link key={index} href={link.href} target="_blank">
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </RadialGradientBackground>
  );
};

export default IntroSection;
