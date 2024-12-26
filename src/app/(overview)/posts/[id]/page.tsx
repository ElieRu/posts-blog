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

export default function Page({
  params,
}: {
  params: { id: String; name: String };
}) {
  const [posts, setPosts] = useState([]);
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

  return (
    <div className="px-16 my-6">
      <div className="flex justify-between mb-8">
        <div className="mt-3 flex">
          <Link className="text-[#7e22ce] underline" href={`/posts`}>
            All Posts
          </Link>
        </div>

        <Link
          className="bg-[#7e22ce] text-[#ffffff]  text-sm  p-3 rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform"
          href={`${params.id}/update`}
        >
          Update
        </Link>
      </div>

      <div className="flex justify-between">
        {isLoading ? <p>Loading...</p> : <CardPost post={posts[0]} />}
        <div style={{ width: "45%" }}>
          <CommentForm
            postId={params.id}
            updateItems={(comments: SetStateAction<never[]>) => setComments(comments)}
          />
          <div className="mt-5">
            <h3 className="text-lg underline">All comments</h3>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              <CardComments
                postId={params.id}
                items={comments}
                updateItems={(comments: SetStateAction<never[]>) => setComments(comments)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
