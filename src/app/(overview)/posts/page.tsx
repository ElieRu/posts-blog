"use client";

import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import Loading from "./loading";
import { fetchPosts } from "@/app/lib/datas";
import { createPost, deletePost } from "@/app/lib/actions";

function Page() {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    setPosts(await fetchPosts());
  };
  useEffect(() => {
    getPosts();
  }, []);

  const handleDelete = (id) => {
    const fetchDelete = async () => {
      setPosts(await deletePost(id));
    };
    fetchDelete();
  };

  const [form, setForm] = useState({ name: "" });
  const [disable, setDisable] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setDisable(true);
    const fetchCreate = async () => {
      const createdPost = await createPost(form);
      setPosts(createdPost);
      setDisable(false);
      setForm({ ...form, name: "" });
    };
    fetchCreate();
  };

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <h3>Lits of posts</h3>
        <div>
          <form method="post" onSubmit={handleSubmit}>
            <input
              placeholder="new post"
              type="text"
              name="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <button disabled={disable} type="submit">
              submit
            </button>
          </form>
        </div>
        <ul>
          {posts.map((post, i) => (
            <li key={i}>
              <Link href={`posts/${post._id}`}>{post.name}</Link>
              <button onClick={() => handleDelete(post._id)}>Delete</button>
            </li>
          ))}
        </ul>
      </Suspense>
    </div>
  );
}

export default Page;
