"use client";
import { getPost, updatePost } from "@/app/lib/actions";
import PostFormComponent from "@/app/ui/post-form";
import { useEffect, useState } from "react";

export default function Page({
  params
}: {
  params: { id: String; name: String };
}) {
  const [disable, setDisable] = useState(false);
  const [post, setPost] = useState({});
  const [form, setForm] = useState({ name: "" });

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
    setDisable(false);
  };

  return (
    <div>
      <h1>Update post</h1>
      <PostFormComponent postId={params.id}></PostFormComponent>
    </div>
  );
}
