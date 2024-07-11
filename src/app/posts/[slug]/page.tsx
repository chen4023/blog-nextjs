import { getPostData } from "@/service/posts";
import Image from "next/image";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  params: {
    slug: string; // path 경로
  };
};

export default async function Page({ params: { slug } }: Props) {
  // 1. 전달된 slug에 해당하는 포스트 데이터(content)를 읽어와서
  // 2. 데이터를 마크다운뷰어에 표기

  const post = await getPostData(slug);
  const { title, description, date, category, path, content } = post;
  return (
    <article className="py-10 px-5 flex flex-col justify-center items-center gap-4">
      <h1 className="text-5xl font-bold">{title}</h1>
      <span className=" bg-green-200 px-2 rounded-md font-medium">
        {category}
      </span>
      <span className="text-sm">{date}</span>
      <p>{description}</p>
      <Image
        src={`/images/posts/${path}.png`}
        alt={title}
        width={600}
        height={400}
      />

      <Markdown className="prose lg:prose-xl mt-8" remarkPlugins={[remarkGfm]}>
        {content}
      </Markdown>
    </article>
  );
}
