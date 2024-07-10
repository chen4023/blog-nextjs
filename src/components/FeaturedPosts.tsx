import { getPosts } from "@/service/posts";
import Card from "@/components/Card";

export default async function FeaturedPosts() {
  const posts = await getPosts();
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
