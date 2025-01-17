import Image from "next/image";
import Link from "next/link";
import LogoImage from "@/assets/logo.png";

const Header = ({ isScrolled }: { isScrolled: boolean }) => {
  return (
    <header
      className={`fixed top-0 left-0 w-full h-[65px] z-50 transition-colors duration-300 ${
        isScrolled
          ? "text-black bg-[rgba(255,255,255,0.8)] backdrop-blur-md backdrop-saturate-180"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-[900px] h-full mx-auto px-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center justify-center rounded-full border border-[#000000] hover:border-[#F86254] hover:shadow-[0_0_21px_0_#F86254] overflow-hidden duration-300"
        >
          <div className="w-8 h-8 rounded-full overflow-hidden bg-[#f5f4ff]">
            <Image src={LogoImage} alt="" />
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
