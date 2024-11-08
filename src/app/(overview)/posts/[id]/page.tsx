"use client";
import { useRouter, useParams } from "next/navigation";
// import { useRouter } from "next/router";
import { Suspense, useEffect, useState } from "react";
import { Metadata } from "next";
import { getPost, updatePost } from "@/app/lib/actions";

// export const generateMetadata = ({params}: {params: {id: String}}): Metadata => {
//   return {
//     title: `Product : ${params.id}`
//   }
// }

export default function Page({
  params,
}: {
  params: { id: String; name: String };
}) {

  const [post, setPost] = useState({});
  const fetchPost = async () => {
    const selectedPost = await getPost(params.id);
    setPost(selectedPost);
  };
  fetchPost();

  const [form, setForm] = useState({name: ''})
  const [disable, setDisable] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setDisable(true)
    const updatedPost = await updatePost(params.id, form);
    setPost(updatedPost);
    setForm({...form, name: ''});
    setDisable(false);
  }

  return (
    <>
      <Suspense fallback={<p>wait...</p>}>
        <div>
          <p>Post name: {post.name}</p>
          <form method="get" onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="name" 
              placeholder="update" 
              value={form.name} 
              onChange={(e) => setForm({...form, name: e.target.value})} 
            />
            <button type="submit" disabled={disable}>update</button>
          </form>
        </div>
      </Suspense>
    </>
  )
}
