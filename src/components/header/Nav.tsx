import Link from "next/link";

const Nav = ({ pathname }: { pathname: string }) => {
  return (
    <nav className="hidden md:block">
      <ul className="flex items-center text-[14px]">
        <li>
          <Link
            href="/"
            className={`rounded px-6 py-2 duration-150 hover:text-primary ${
              pathname === "/" ? "text-primary " : ""
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className={`rounded px-6 py-2 duration-150 hover:text-primary ${
              pathname.includes("/projects") ? "text-primary" : ""
            }`}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            className={`rounded px-6 py-2 duration-150 hover:text-primary ${
              pathname.includes("/blog") ? "text-primary" : ""
            }`}
          >
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
