"use client";

import { createPost } from "@/app/lib/actions";
import { Form, FormState } from "@/app/lib/definitions";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Page() {
  const [form, setForm] = useState<Form>({
    name: ''
  });
  const [disable, setDisable] = useState(false);

  const handleSubmit = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    event.preventDefault();
    setDisable(true);
    const fetchCreate = async () => {
      const createdPost = await createPost(form);
      //   setPosts(createdPost);
      setDisable(false);
      setForm({ ...form, name: "" });
    };
    fetchCreate();
  };

  return (
    <>
      <div>
        create new post <Link href={`/posts`}>Back</Link>
      </div>
      <Link href={`/posts`}></Link>
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
    </>
  );
}
