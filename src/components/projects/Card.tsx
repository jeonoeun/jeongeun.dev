import Image from "next/image";
import Link from "next/link";

type CardProps = {
  title: string;
  slug: string;
  des: string;
  lastUpdated: string;
  type: string;
  cover: string;
};

const Card = ({ title, slug, des, lastUpdated, type, cover }: CardProps) => {
  return (
    <div>
      <Link href={`/projects/${slug}`}>
        <div className="relative w-full h-[191px] rounded-md mb-4 overflow-hidden">
          <Image
            src={cover}
            alt={title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            objectFit="cover"
            className="hover:scale-105 duration-300"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between text-[11px]">
            <span className="border px-2 py-1 rounded">{type}</span>
            <span>{lastUpdated}</span>
          </div>
          <p className="font-bold text-lg">{title}</p>
          <p className="text-sm">{des}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
