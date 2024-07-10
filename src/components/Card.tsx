import Image from "next/image";
import { Post } from "@/service/posts";

export default function Card({ post }: { post: Post }) {
  const { title, description, date, category, path } = post;
  return (
    <div className="border border-transparent shadow-lg rounded-md">
      <Image
        src={`/images/posts/${path}.png`}
        alt="postImg"
        width={300}
        height={300}
        className="rounded-t-md"
      />
      <div className="p-3">
        <p className="text-sm text-right">{date}1</p>
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold">{title}</h1>
          <p className="text-sm">{description}</p>
          <p className="text-sm bg-green-100 px-2 rounded-sm mt-2">
            {category}
          </p>
        </div>
      </div>
    </div>
  );
}
