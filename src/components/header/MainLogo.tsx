import Image from "next/image";
import Link from "next/link";
import LogoImage from "@/assets/logo.png";

const MainLogo = () => {
  return (
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
  );
};

export default MainLogo;
