import { deteleComment } from "@/app/lib/actions";
import { useState } from "react";

export default function CardComments({ postId, items, updateItems }) {
  const handleDelete = async (id: String) => {
    const response = await deteleComment(postId, id);
    updateItems(response);
  };

  
  return (
    <div>
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            {item.content}
            <button onClick={() => handleDelete(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
