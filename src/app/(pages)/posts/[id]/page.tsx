"use client";
import { useRouter, useParams } from "next/navigation";
// import { useRouter } from "next/router";
import { Suspense, useEffect, useState } from "react";
import { Metadata } from "next";

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

  const [post, setPost] = useState({});
  const fetchPost = async () => {
    try {
      const res = await fetch(`/api/posts/${params.id}`, {
        method: 'get'
      });
      setPost(await res.json());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const [form, setForm] = useState({name: ''})
  const [disable, setDisable] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setDisable(true)
    try {
      const res = await fetch(`/api/posts/${post._id}`, {
        method: 'put',
        body: JSON.stringify(form)
      })
      setPost(await res.json());
      setForm({
        name: ''
      });
      setDisable(false);
  } catch (error) {
      console.log(error);
    }    
  }

  return (
    <>
      <Suspense fallback={<p>wait...</p>}>
        <div>
          <p>Post name: {post.name}</p>
          <form method="get" onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="name" 
              placeholder="update" 
              value={form.name} 
              onChange={(e) => setForm({...form, name: e.target.value})} 
            />
            <button type="submit" disabled={disable}>update</button>
          </form>
        </div>
      </Suspense>
    </>
  )
}
