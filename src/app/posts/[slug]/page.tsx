import MarkdownViewer from "@/components/MarkdownViewer";
import { getPostData } from "@/service/posts";
import Image from "next/image";

import { AiTwotoneCalendar } from "react-icons/ai";

type Props = {
  params: {
    slug: string; // path 경로
  };
};

export default async function Page({ params: { slug } }: Props) {
  // 1. 전달된 slug에 해당하는 포스트 데이터(content)를 읽어와서
  // 2. 데이터를 마크다운뷰어에 표기

  const { title, description, date, path, content } = await getPostData(slug);
  return (
    <article className="rounded-2xl overflow-hidden shadow-lg m-4 bg-gray-100">
      <Image
        className="max-h-[500px] w-full h-1/5"
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <section className="flex flex-col p-4">
        <div className="flex items-center self-end text-sky-500">
          <AiTwotoneCalendar />
          <p className="font-semibold ml-1">{date.toString()}</p>
        </div>
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-xl font-bold">{description}</p>
        <div className="w-48 border-2 border-sky-600 mt-1"></div>
        {/* <span className=" bg-green-200 px-2 rounded-md font-medium">
          {category}
        </span> */}
        <MarkdownViewer content={content} />
      </section>
    </article>
  );
}
