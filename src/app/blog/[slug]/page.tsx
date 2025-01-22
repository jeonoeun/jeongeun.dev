import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Renderer from "@/components/projects/Renderer";
import {
  extractPageProperties,
  getPageData,
  getPostBySlug,
} from "@/lib/notion";
import Image from "next/image";
import Link from "next/link";
import LogoImage from "@/assets/logo.png";

const Post = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  if (!post) return null;

  const recordMap = await getPageData(post.id);
  const { title, date, tags, coverImageUrl } = extractPageProperties(post);

  return (
    <>
      <Header isScrolled={true} />
      {post && (
        <main className="my-[65px] text-[#37352F]">
          <div className="w-full flex justify-center items-center">
            <div className="w-[720px] max-w-[720px] p-4 pt-9">
              <div className="flex flex-col items-start justify-center gap-4">
                {coverImageUrl !== "" && (
                  <div className="relative w-full aspect-[16/9] rounded-md overflow-hidden">
                    <Image
                      src={coverImageUrl}
                      alt={title}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      objectFit="cover"
                    />
                  </div>
                )}
                <h1 className="text-[40px] font-bold">{title}</h1>
                <div className="flex items-center gap-2">
                  {tags.map((tag: { id: string; name: string }) => (
                    <span
                      key={tag.id}
                      className="border px-[10px] py-1 rounded-full text-[13px] font-medium text-[#4E5968] bg-[#F2F4F6]"
                    >
                      #{tag.name}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-[16px] gap-1 mt-6">
                  <div className="flex items-center gap-1">
                    <Link
                      href="/"
                      className="flex items-center justify-center rounded-full w-6 h-6 border hover:border-[#F86254] hover:shadow-[0_0_21px_0_#F86254] overflow-hidden duration-300"
                    >
                      <div className="w-6 h-6 rounded-full overflow-hidden">
                        <Image src={LogoImage} alt="logo" />
                      </div>
                    </Link>
                    <span className="font-semibold">이정은(@jeonoeun)</span>
                  </div>
                  <span>・</span>
                  <span className="text-[#8B95A1]">{date}</span>
                </div>
              </div>
            </div>
          </div>

          <Renderer recordMap={recordMap} rootPageId={post.id} />
        </main>
      )}
      <Footer />
    </>
  );
};

export default Post;
