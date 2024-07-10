import { getFeaturedPosts, getNonFeaturedPosts } from "@/service/posts";
import Card from "./Card";
import MultiCarousel from "./MultiCarousel";

export default async function CarouselPosts() {
  const posts = await getFeaturedPosts();
  return (
    <section className="my-5">
      <h2 className="text-xl font-bold">You May Like</h2>
      <MultiCarousel>
        {posts.map((post) => (
          <Card key={post.path} post={post} />
        ))}
      </MultiCarousel>
    </section>
  );
}
