"use client";

import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import Loading from "./loading";
import { fetchPosts } from "@/app/lib/datas";
import { deletePost } from "@/app/lib/actions";

export default function Page() {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    setPosts(await fetchPosts());
  };
  useEffect(() => {
    getPosts();
  }, []);

  const handleDelete = (id: String) => {
    const fetchDelete = async () => {
      await deletePost(id);
    };
    fetchDelete();
  };

  return (
    <div>
      <h3>Lits of posts</h3>
      <Link href={`/posts/create`}>New post</Link>
      <Suspense fallback={<p>Loading...</p>}>
        <ul>
          {posts.map((post, i) => (
            <li key={i}>
              <Link href={`posts/${post._id}`}>{post.title}</Link>
              <button onClick={() => handleDelete(post._id)}>Delete</button>
            </li>
          ))}
        </ul>
      </Suspense>
    </div>
  );
}

