import { deteleComment } from "@/app/lib/actions";
import { CallbackCommentsItems, Comments } from "../lib/definitions";

export default function CardComments({
  postId,
  items,
  updateItems,
}: {
  postId: String;
  items: Comments;
  updateItems: CallbackCommentsItems;
}) {
  const handleDelete = async (id: String) => {
    const response = await deteleComment(postId, id);
    updateItems(response);
  };

  return (
    <div>
      {items.map((item, i) => (
        <div key={i} className="bg-slate-200 p-3 mt-3 border rounded-lg">
          <div className="flex justify-between items-center">
            <span
              className="bg-gray-400 border rounded-2xl"
              style={{
                width: "50px",
                height: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              {item.picture && (
                <img
                  src={item.picture}
                  alt="My Image"
                  width={100}
                  height={100}
                />
              )}
              {!item.picture && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-activity"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              )}
            </span>
            <button onClick={() => handleDelete(item._id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-activity"
              >
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
            </button>
          </div>
          <p className="my-3">{item.content}</p>
        </div>
      ))}
      {/* </ul> */}
    </div>
  );
}
