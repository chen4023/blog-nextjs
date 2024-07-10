import FeaturedPosts from "@/components/FeaturedPosts";
import Profile from "@/components/Profile";

export default async function Home() {
  return (
    <section className="flex flex-col justify-center items-center py-5 px-4">
      <Profile />
      <FeaturedPosts />
    </section>
  );
}
