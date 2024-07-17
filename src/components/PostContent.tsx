import { getPostData, PostData } from "@/service/posts";
import MarkdownViewer from "@/components/MarkdownViewer";
import { AiTwotoneCalendar } from "react-icons/ai";

export default async function PostContent({ post }: { post: PostData }) {
  const { date, title, description, category, content } = post;
  return (
    <div>
      <section className="flex flex-col p-8">
        <div className="flex items-center self-end text-sky-500">
          <AiTwotoneCalendar />
          <p className="font-semibold ml-1">{date.toString()}</p>
        </div>
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-xl font-bold">{description}</p>
        <div className="w-60 border-2 border-sky-600 mt-1"></div>
        <span className="bg-blue-300 mt-3 px-2 py-0.5 w-fit text-gray-600 rounded-md font-medium">
          {category}
        </span>
        <MarkdownViewer content={content} />
      </section>
    </div>
  );
}
