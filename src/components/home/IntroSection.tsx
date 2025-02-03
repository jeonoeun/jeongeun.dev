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
          <div className="pt-20 pb-16">
            <p className="font-black text-5xl mb-4 flex flex-col gap-4 md:flex-row">
              <span>Hello, I&apos;m</span>
              <span>Jeongeun! 🏄‍♀️</span>
            </p>
            <p className="text-lg mb-16 font-light">
              — Learner, Challenger, Front-end Developer
            </p>
            <div className="mb-20 leading-loose">
              <p className="font-bold mb-2">💡 이유 없는 코드는 없다.</p>
              <p>
                코드를 단순한 결과물로 보지 않고, 그 안에 담긴 의도와 목적을
                정확히 이해하는 개발자가 되고자 합니다. 재사용성과 유지보수성을
                고려한 컴포넌트 기반 개발을 선호하며, 웹 표준, 접근성, 아키텍처,
                테스트 등 더 나은 개발을 위한 요소들을 고려하고 적용하는 것을
                목표로 배우고, 적용하며, 꾸준히 성장하기 위해 노력하고 있습니다.
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
