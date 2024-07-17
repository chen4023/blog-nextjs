import PostContent from "@/components/PostContent";
import Image from "next/image";
import { getPostData } from "@/service/posts";
import AdjacentPostCard from "@/components/AdjacentPostCard";

type Props = {
  params: {
    slug: string; // path 경로
  };
};

export default async function Page({ params: { slug } }: Props) {
  // 1. 전달된 slug에 해당하는 포스트 데이터(content)를 읽어와서
  // 2. 데이터를 마크다운뷰어에 표기
  const post = await getPostData(slug);
  const { title, path, next, prev } = post;

  return (
    <article className="rounded-2xl overflow-hidden shadow-lg m-4 bg-gray-100">
      <Image
        className="max-h-[500px] w-full h-1/5"
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <PostContent post={post} />
      <section className="flex shadow-md">
        {prev && <AdjacentPostCard post={prev} type="prev" />}
        {next && <AdjacentPostCard post={next} type="next" />}
      </section>
    </article>
  );
}
