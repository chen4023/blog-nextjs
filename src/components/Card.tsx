import Image from "next/image";
import { Post } from "@/service/posts";
import Link from "next/link";

export default function Card({ post }: { post: Post }) {
  const { title, description, date, category, path } = post;
  return (
    <Link href={`/posts/${path}`}>
      <article className="shadow-lg rounded-md overflow-hidden hover:shadow-2xl">
        <Image
          src={`/images/posts/${path}.png`}
          alt="postImg"
          width={310}
          height={200}
          className="rounded-t-md"
        />
        <div className="p-3">
          <p className="text-sm text-right">{date}</p>
          <div className="flex flex-col items-center justify-center p-2">
            <h1 className="text-lg font-bold">{title}</h1>
            <p className="w-full truncate text-sm text-center">{description}</p>
            <p className="text-sm bg-green-100 px-2 rounded-lg mt-2">
              {category}
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
}
