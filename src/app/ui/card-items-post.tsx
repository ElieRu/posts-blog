import Link from "next/link";
import { deletePost } from "../lib/actions";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function CardItemsPost({ items, updateItems, search }) {
  const { user } = useUser();

  const handleDelete = (id: String) => {
    const fetchDelete = async () => {
      const response = await deletePost(id, user?.sub);
      updateItems(response);
    };
    fetchDelete();
  };

  return (
    <>
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-9 px-1 py-1 ">
        {items
          .filter((post) => {
            return search.toLowerCase() === ""
              ? post
              : post.title.includes(search);
          })
          .map((item, i) => (
            <div key={i} className="w-full rounded-xl">
              <div className="flex flex-col rounded-2xl bg-[#ffffff] shadow-xl">
                <div className="flex flex-col p-8">
                  <div className="flex justify-between">
                    <div className="text-xl font-bold text-[#374151] py-1 capitalize">
                      {item.title.length >= 20
                        ? item.title.slice(0, 20) + "..."
                        : item.title}
                    </div>
                    { window.location.href !== 'http://localhost:3000/' && <button onClick={() => handleDelete(item._id)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-activity"
                      >
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      </svg>
                    </button>}
                  </div>
                  <div className=" text-base">
                    <p className="text-[#374151] capitalize">
                      {item.content.length >= 100
                        ? item.content.slice(0, 90) + "..."
                        : item.content}
                    </p>
                  </div>
                  <div className="flex justify-end pt-6">
                    <Link
                      href={`posts/${item._id}`}
                      className="bg-[#7e22ce] text-[#ffffff] w-full text-center text-sm  p-3 rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform"
                    >
                      View more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
