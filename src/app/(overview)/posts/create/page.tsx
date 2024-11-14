"use client";

import { createPost } from "@/app/lib/actions";
import { FormState, PostForm } from "@/app/lib/definitions";
import PostFormComponent from "@/app/ui/post-form";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div>
        create new post <Link href={`/posts`}>Back</Link>
      </div>
      <Link href={`/posts`}></Link>
      <div>
        <PostFormComponent />
      </div>
    </>
  );
}
