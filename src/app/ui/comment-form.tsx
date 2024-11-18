import { useState } from "react";
import { createComment } from "../lib/actions";
import { FormComment } from "../lib/definitions";

export default function CommentForm({ postId, updateItems }) {
  const [form, setForm] = useState<FormComment>({
    content: "",
  });

  const [disable, setDisable] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisable(true);

    updateItems(await createComment(postId, form));

    setForm({ content: "" });
    setDisable(false);
  };

  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Comment"
          value={form.content}
          onChange={(e) => setForm(e.target.value)}
        ></textarea>
        <br />
        <button disabled={disable} type="submit">
          Add comment
        </button>
      </form>
    </>
  );
}
