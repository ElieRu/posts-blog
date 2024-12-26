"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchAllPosts } from "./lib/datas";
import CardItemsPost from "./ui/card-items-post";
import Loading from "./(overview)/posts/loading";

export default function Page() {
  const [posts, setPosts] = useState([]);
  const getAllPosts = async () => {
    setPosts(await fetchAllPosts());
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  const [search, setSearch] = useState("");

  return (
    <div className="px-16 my-6">

      <Loading></Loading>

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
