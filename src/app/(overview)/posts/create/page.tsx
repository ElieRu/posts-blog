"use client";

import { createPost } from "@/app/lib/actions";
import { FormState, PostForm } from "@/app/lib/definitions";
import PostFormComponent from "@/app/ui/post-form";
import Link from "next/link";

export default function Page() {


  return (
    <div className="px-16 my-5">
      <div className="flex justify-between">
        <div className="w-1/2">
          <h1 className="text-3xl">Create New Post</h1> 
        </div>
        <Link className="w-1/2"
          className="bg-[#7e22ce] text-[#ffffff]  text-sm  p-3 rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform"
          href={`/posts`}
        >
          Back
        </Link>
      </div>

      <div className="my-4">
        <PostFormComponent />
      </div>
    </div>
  );
}
