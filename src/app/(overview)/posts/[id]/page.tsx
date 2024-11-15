"use client";
import { useRouter, useParams } from "next/navigation";
// import { useRouter } from "next/router";
import { Suspense, useEffect, useState } from "react";
import { Metadata } from "next";
import { deletePost, getPost, updatePost } from "@/app/lib/actions";
import Link from "next/link";
import CommentForm from "@/app/ui/comment-form";
import CardComments from "@/app/ui/card-comments";
import CardPost from "@/app/ui/card-post";

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
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const fetchPost = async () => {
    const data = await getPost(params.id);
    setPost(data);
    setIsLoading(false);
    console.log(data);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <>
      <Link href={`${params.id}/update`}>update</Link>
      {isLoading ? <p>Loading...</p> : <CardPost post={post[0]} />}

      <div>
        <CommentForm />
      </div>

      <div>
        <h3>All comments</h3>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <CardComments datas={post[0].comments} />
        )}
      </div>
    </>
  );
}
