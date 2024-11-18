import Link from "next/link";
import { deletePost } from "../lib/actions";

export default function CardItemsPost({ items, updateItems }) {

    const handleDelete = (id: String) => {
        const fetchDelete = async () => {
          const response = await deletePost(id);
          updateItems(response);
          console.log(response);
        };
        fetchDelete();
      };

  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>
          <Link href={`posts/${item._id}`}>{item.title}</Link>
          <button onClick={() => handleDelete(item._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
