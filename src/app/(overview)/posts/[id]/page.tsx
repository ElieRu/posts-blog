"use client";
import { useRouter, useParams } from "next/navigation";
// import { useRouter } from "next/router";
import { Suspense, useEffect, useState } from "react";
import { Metadata } from "next";
import { deletePost, getPost, updatePost } from "@/app/lib/actions";
import Link from "next/link";
import CommentForm from "@/app/ui/comment-form";

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

  return (
    <>
      <Link href={`${params.id}/update`}>update</Link>
      <Suspense fallback={<p>wait...</p>}>
      <ul>
        <li>Post title: {post.title}</li>
          <li>Post content: {post.content}</li>
          <li>Post type: {post.type}</li>
      </ul>        
      <div>
        <CommentForm />
      </div>
      </Suspense>
    </>
  );
}
