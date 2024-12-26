import { useState } from "react";
import { createComment } from "../lib/actions";
import { FormComment } from "../lib/definitions";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function CommentForm({ postId, updateItems }) {
  const { user } = useUser();
  const [form, setForm] = useState<FormComment>({
    content: "",
  });

  const [error, setError] = useState(false);
  const [disable, setDisable] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisable(true);
    setError(false);
    const response = await createComment(
      postId,
      form,
      user?.sub,
      user?.picture
    );
    if (response.error) {
      updateItems(response.comments);
      setError(true);
    } else {
      updateItems(response);
    }
    setForm({ content: "" });
    setDisable(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="relative text-gray-400 mt-1">
          <textarea
            className="mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4"
            placeholder="Your comment"
            style={{ resize: "none" }}
            rows={5}
            value={form.content}
            onChange={(e) => setForm(e.target.value)}
          ></textarea>
        </div>

        {error && (
          <p className="bg-red-200 mb-2 text-gray  text-sm  p-2 rounded-lg ">
            Invalid form
          </p>
        )}

        <button
          disabled={disable}
          type="submit"
          className="bg-[#7e22ce] text-[#ffffff]  text-sm  p-3 rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform"
        >
          Add New Comment
        </button>
      </form>
    </>
  );
}
