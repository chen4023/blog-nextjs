import { getFeaturedPosts } from "@/service/posts";
import Card from "@/components/Card";

export default async function FeaturedPosts() {
  //featured가 true인 포스트만 포스팅
  const posts = await getFeaturedPosts();
  return (
    <div>
      <h1>Featured Posts</h1>
      <ul className="flex flex-wrap gap-2 justify-center mt-5">
        {posts.map((post, index) => (
          <li key={index}>
            <Card post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
}
