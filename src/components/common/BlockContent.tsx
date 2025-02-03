import Link from "next/link";
import { IoChevronForward } from "react-icons/io5";

const BlockContent = ({
  children,
  blockTitle,
  blockLink,
}: {
  children: React.ReactNode;
  blockTitle: string;
  blockLink: string;
}) => {
  return (
    <div className="mb-12">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">{blockTitle}</h2>
        <Link
          href={blockLink}
          className="flex items-center gap-1 text-primary text-14"
        >
          <span>더 보기</span>
          <IoChevronForward />
        </Link>
      </div>
      {children}
    </div>
  );
};

export default BlockContent;
