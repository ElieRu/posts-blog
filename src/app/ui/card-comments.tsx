import { deteleComment } from "@/app/lib/actions";
import { useState } from "react";

export default function CardComments({ postId, datas }) {
  const [posts, setPosts] = useState(datas);
  const handleDelete = async (id: String) => {
    const response = await deteleComment(postId, id);
    setPosts(response);
  };

  return (
    <div>
      <ul>
        {posts.map((comment, i) => (
          <li key={i}>
            {comment.content}
            <button onClick={() => handleDelete(comment._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
