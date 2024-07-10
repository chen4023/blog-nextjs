"use client";
import { Post } from "@/service/posts";
import { useState } from "react";
import Card from "./Card";
import Categories from "./Categories";

type Props = {
  posts: Post[];
  categories: string[];
};

const ALL_POSTS = "All Posts";

export default function FilterablePosts({ posts, categories }: Props) {
  const [selected, setSelected] = useState(ALL_POSTS);
  const filtered =
    selected === ALL_POSTS
      ? posts
      : posts.filter((post) => post.category === selected);

  return (
    <section className="flex justify-around">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {filtered.map((post) => (
          <li key={post.path}>
            <Card post={post} />
          </li>
        ))}
      </ul>
      <Categories
        categories={[ALL_POSTS, ...categories]}
        onClick={(selected) => setSelected(selected)}
      />
    </section>
  );
}
