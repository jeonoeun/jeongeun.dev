import Link from "next/link";

const Header = ({ isScrolled }: { isScrolled: boolean }) => {
  return (
    <header
      className={`fixed top-0 left-0 w-full h-[80px] z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white text-black" : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-[1024px] h-full mx-auto px-4">
        <div className="flex items-center justify-between h-full">
          <h1 className="font-black text-lg">
            <Link href="/">Jeongeun.dev</Link>
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
