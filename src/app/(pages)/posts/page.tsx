"use client";

import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import Loading from "./loading";

export default function Page() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await fetch(`/api/posts`, {
        method: "get",
      });
      setPosts(await res.json());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = (id) => {
    const fetchDelete = async () => {
      try {
        const res = await fetch(`/api/posts/${id}`, {
          method: "delete",
        });

        setPosts(await res.json());
      } catch (error) {
        console.log(error);
      }
    };

    fetchDelete();
  };

  const [form, setForm] = useState({ name: "" });
  const [disable, setDisable] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisable(true);
    const fetchCreate = async () => {
      try {
        const create_post = await fetch(`/api/posts`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });
        setPosts(await create_post.json());
        setDisable(false);
        setForm({...form, name: ''});
      } catch (error) {
        console.log(error);
      }
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
            <button disabled={disable} type="submit">submit</button>
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
