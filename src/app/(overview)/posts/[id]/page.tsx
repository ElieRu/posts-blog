"use client";
import { useRouter, useParams } from "next/navigation";
// import { useRouter } from "next/router";
import { Suspense, useEffect, useState } from "react";
import { Metadata } from "next";
import { deletePost, getPost, updatePost } from "@/app/lib/actions";
import Link from "next/link";

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
  useEffect(() => {
    fetchPost();
  }, []);

  const handleDelete = (id: String) => {
    const fetchDelete = async () => {
      await deletePost(params.id);
    };
    fetchDelete();
  };

  return (
    <>
      <button onClick={() => handleDelete(post._id)}>Delete</button>
      <Link href={`${params.id}/update`}>update</Link>
      <Suspense fallback={<p>wait...</p>}>
        <p>Post name: {post.name}</p>
      </Suspense>
    </>
  );
}
