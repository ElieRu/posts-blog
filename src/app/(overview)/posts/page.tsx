"use client";

import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import Loading from "./loading";
import { fetchPosts } from "@/app/lib/datas";
import { deletePost } from "@/app/lib/actions";

function Page() {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    setPosts(await fetchPosts());
  };
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <h3>Lits of posts</h3>
        <Link href={`/posts/create`}>New post</Link>
        <ul>
          {posts.map((post, i) => (
            <li key={i}>
              <Link href={`posts/${post._id}`}>{post.name}</Link>
            </li>
          ))}
        </ul>
      </Suspense>
    </div>
  );
}

export default Page;
