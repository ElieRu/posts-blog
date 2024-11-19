"use client";
import { getPost, updatePost } from "@/app/lib/actions";
import PostFormComponent from "@/app/ui/post-form";
import { useEffect, useState } from "react";

export default function Page({
  params,
}: {
  params: { id: String; name: String };
}) {
  return (
    <div>
      <h1>Update post</h1>
      <PostFormComponent postId={params.id}></PostFormComponent>
    </div>
  );
}
