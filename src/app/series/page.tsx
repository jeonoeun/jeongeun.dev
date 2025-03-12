import CardGrid from "@/components/CardGrid";
import Layout from "@/components/Layout";
import PageTitle from "@/components/PageTitle";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { series } from "@/data/series";

export default function Page() {
  return (
    <Layout>
      <div className="flex flex-col gap-16">
        <PageTitle title={"시리즈"} />
        <CardGrid>
          {series.map((s) => (
            <li key={s.id}>
              <Link href={`/series/${s.slug}`}>
                <Card {...s} />
              </Link>
            </li>
          ))}
        </CardGrid>
      </div>
    </Layout>
  );
}

interface CardProps {
  id: number;
  title: string;
  coverImage: StaticImageData;
  description: string;
  slug: string;
}

const Card = ({ title, coverImage, description }: CardProps) => {
  return (
    <>
      <div className="relative w-full aspect-[278/171] rounded-[8px] overflow-hidden mb-5">
        <Image
          src={coverImage}
          alt={title}
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
        <span className="absolute bottom-4 right-4 bg-black/30 border border-black/10 px-1.5 rounded-[4px] text-white text-[15px]">
          {"+10"}
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="text-[20px] font-semibold">{title}</div>
        </div>
        <div className="text-[14px] text-[#A09F9C]">{description}</div>
      </div>
    </>
  );
};
