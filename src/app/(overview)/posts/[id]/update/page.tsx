"use client";
import { getPost, updatePost } from "@/app/lib/actions";
import PostFormComponent from "@/app/ui/post-form";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page({
  params,
}: {
  params: { id: String; name: String };
}) {
  return (
    <div className="px-16 my-6">
      <div className="mt-3 flex justify-between items-center">
        <Link className="text-[#7e22ce] underline" href={`/posts`}>
          All Posts
        </Link>

        <Link
          className="bg-[#7e22ce] text-[#ffffff]  text-sm  p-3 rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform"
          href={`/posts/${params.id}`}
        >
          Return Back
        </Link>
      </div>

      <PostFormComponent postId={params.id}></PostFormComponent>
    </div>
  );
}
