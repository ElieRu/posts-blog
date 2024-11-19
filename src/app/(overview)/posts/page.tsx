"use client";

import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import Loading from "./loading";
import { fetchPosts } from "@/app/lib/datas";
import CardItemsPost from "@/app/ui/card-items-post";
import SearchBar from "@/app/ui/search-bar";

export default function Page() {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    setPosts(await fetchPosts());
  };
  useEffect(() => {
    getPosts();
  }, []);

  const [search, setSearch] = useState("");

  return (
    <div>
      <SearchBar search={search} onChange={setSearch} />
      <h3>Lits of posts</h3>
      <Link href={`/posts/create`}>New post</Link>
      <CardItemsPost
        items={posts}
        updateItems={(posts) => setPosts(posts)}
        search={search}
      />
    </div>
  );
}
