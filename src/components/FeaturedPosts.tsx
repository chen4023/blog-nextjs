import { getFeaturedPosts } from "@/service/posts";
import Card from "@/components/Card";

export default async function FeaturedPosts() {
  //featured가 true인 포스트만 포스팅
  const posts = await getFeaturedPosts();
  return (
    <div>
      <h1 className="text-lg font-bold">Featured Posts</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {posts.map((post, index) => (
          <li key={index}>
            <Card post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
}
