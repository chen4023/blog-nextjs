import CarouselPosts from "@/components/CarouselPosts";
import FeaturedPosts from "@/components/FeaturedPosts";
import Profile from "@/components/Profile";

export default async function Home() {
  return (
    <section className="flex flex-col justify-center items-center px-3">
      <Profile />
      <FeaturedPosts />
      <CarouselPosts />
    </section>
  );
}
