"use client";

import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import Loading from "./loading";
import { fetchPosts } from "@/app/lib/datas";
import { deletePost } from "@/app/lib/actions";
import CardItemsPost from "@/app/ui/card-items-post";

export default function Page() {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    setPosts(await fetchPosts());
  };
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <h3>Lits of posts</h3>
      <Link href={`/posts/create`}>New post</Link>
      {}
        <CardItemsPost items={posts} updateItems={(posts) => setPosts(posts)} />
    </div>
  );
}

