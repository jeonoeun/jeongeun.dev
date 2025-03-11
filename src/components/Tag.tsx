import Link from "next/link";

interface TagProps {
  name: string;
  href: string;
}

export default function Tag({ name, href }: TagProps) {
  return (
    <Link
      href={href}
      className="border rounded-full text-[#6B7280] hover:bg-gray-100 transition duration-300 px-3 py-1.5 inline-block text-[14px]"
    >
      {name}
    </Link>
  );
}
