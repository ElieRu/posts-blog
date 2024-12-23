"use client";

import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import Loading from "./loading";
import { fetchPosts } from "@/app/lib/datas";
import CardItemsPost from "@/app/ui/card-items-post";
import SearchBar from "@/app/ui/search-bar";

export default function Page() {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    setPosts(await fetchPosts());
  };
  useEffect(() => {
    getPosts();
  }, []);

  const [search, setSearch] = useState("");

  return (
    <div className="px-16 my-5">
      <div className="flex justify-between content-center items-center">
        <SearchBar search={search} onChange={setSearch} />
        <div>
          <Link
            href={`/posts/create`}
            className="bg-[#7e22ce] text-[#ffffff] w-full  text-sm  p-3 rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform"
          >
            New post
          </Link>
        </div>
      </div>

      <div className="my-4">
        <CardItemsPost
          items={posts}
          updateItems={(posts) => setPosts(posts)}
          search={search}
        />
      </div>
    </div>
  );
}
