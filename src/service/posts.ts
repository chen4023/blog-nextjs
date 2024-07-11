import path from "path";
import { promises as fs, readFile } from "fs";

export type Post = {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
};
// 기존 데이터와 합침
export type PostData = Post & {
  content: string;
};

export function getFeaturedPosts(): Promise<Post[]> {
  return getPosts().then((posts) => posts.filter((post) => post.featured));
}

export function getNonFeaturedPosts(): Promise<Post[]> {
  return getPosts().then((posts) => posts.filter((post) => !post.featured));
}

export async function getPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  const data = await fs.readFile(filePath, "utf-8");
  const posts: Post[] = JSON.parse(data);

  // 날짜를 최신순으로 정렬
  posts.sort((a, b) => (a.date > b.date ? -1 : 1));

  return posts;
}

export async function getPostData(fileName: string): Promise<PostData> {
  // slug로 받아온 fileName값 전달
  const filePath = path.join(process.cwd(), "data", "posts", `${fileName}.md`);
  const metadata = await getPosts().then(
    (posts) => posts.find((post) => post.path === fileName) // posts.json 내 metadata
  );
  if (!metadata)
    throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없음`);
  const content = await fs.readFile(filePath, "utf-8"); // data/posts 컨텐츠 데이터
  return { ...metadata, content };
}
