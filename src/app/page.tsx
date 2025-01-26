"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchAllPosts } from "./lib/datas";
import CardItemsPost from "./ui/card-items-post";
import Loading from "./(overview)/posts/loading";
import { Posts } from "./lib/definitions";

export default function Page() {
  const [posts, setPosts] = useState<Posts>([]);
  const getAllPosts = async () => {
    setPosts(await fetchAllPosts());
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  const updateItems = (posts: Posts): Posts => {
    setPosts(posts); 
    return posts
  };

  const [search, setSearch] = useState('');

  return (
    <div className="px-16 my-6">
      <Loading></Loading>
      <div className="my-4">
        <CardItemsPost
          items={posts}
          updateItems={updateItems}
          search={search}  
        />
      </div>
    </div>
  );
}
