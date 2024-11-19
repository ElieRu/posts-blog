import { useState } from "react";
import { createComment } from "../lib/actions";
import { FormComment } from "../lib/definitions";

export default function CommentForm({ postId, updateItems }) {
  const [form, setForm] = useState<FormComment>({
    content: "",
  });

  const [error, setError] = useState(false);

  const [disable, setDisable] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisable(true);
    setError(false);
    const response = await createComment(postId, form);
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
        <textarea
          placeholder="Comment"
          value={form.content}
          onChange={(e) => setForm(e.target.value)}
        ></textarea>
        <br />
        {error && <p>Invalid form</p>}
        <button disabled={disable} type="submit">
          Add comment
        </button>
      </form>
    </>
  );
}
