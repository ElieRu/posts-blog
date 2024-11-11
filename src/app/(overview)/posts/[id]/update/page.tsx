"use client";
import { getPost, updatePost } from "@/app/lib/actions";
import { useEffect, useState } from "react";

export default function Page({
  params,
}: {
  params: { id: String; name: String };
}) {
  const [disable, setDisable] = useState(false);
  const [post, setPost] = useState({});
  const [form, setForm] = useState({name: ''});

  const fetchPost = async () => {
    const selectedPost = await getPost(params.id);
    // setPost(selectedPost);
    setForm(selectedPost);
  };

  useEffect(() => {
    fetchPost();
    // setForm({...form, data.name});
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisable(true);
    const updatedPost = await updatePost(params.id, form);
    setPost(updatedPost);
    setForm({ ...form, name: "" });
    setDisable(false);
  };

  return (
    <div>
      <form method="get" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="update"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <button type="submit" disabled={disable}>
          update
        </button>
      </form>
    </div>
  );
}
