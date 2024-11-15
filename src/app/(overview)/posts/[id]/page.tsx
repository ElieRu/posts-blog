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
  const [posts, setPosts] = useState(null);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchPost = async () => {
    const data = await getPost(params.id);
    setPosts(data);
    setComments(data[0].comments);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  // const newList = (comments) => {
  //   setComments(comments);    
  //   // console.log(comments);    
  // }

  return (
    <>
      <Link href={`${params.id}/update`}>update</Link> <br />
      <Link href={`/posts`}>back</Link>
      {isLoading ? <p>Loading...</p> : <CardPost post={posts[0]} />}

      <div>
        <CommentForm postId={params.id} updateItems={(comments) => setComments(comments)} />
      </div>

      <div>
        <h3>All comments</h3>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <CardComments postId={params.id} datas={comments} />
        )}
      </div>
    </>
  );
}
