import { useEffect, useState } from "react";
import { PostForm } from "../lib/definitions";
import { createPost, getPost, updatePost } from "../lib/actions";

export default function PostFormComponent({ postId }) {
  const [form, setForm] = useState<PostForm>({
    title: "",
    content: "",
    type: "",
  });

  const [disable, setDisable] = useState(false);
  const [error, setError] = useState(false);
  const fetchPost = async () => {
    if (postId) {
      const selectedPost = await getPost(postId);
      setForm(selectedPost[0]);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const handleSubmit = async (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    setDisable(true);
    setError(false);

    if (postId) {
      const response = await updatePost(postId, form);
      if (response.errors) {
        setError(true);
      }
    } else {
      const response = await createPost(form);
      if (response.errors) {
        setError(true);
      }
      setForm({
        ...form,
        title: "",
        content: "",
        type: "",
      });
    }
    setDisable(false);
  };

  return (
    <form method="post" onSubmit={handleSubmit}>
      <input
        placeholder="title"
        type="text"
        name="title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <br />
      <textarea
        name="content"
        value={form.content}
        onChange={(e) => setForm({ ...form, content: e.target.value })}
      ></textarea>
      <br />
      <select
        value={form.type}
        onChange={(e) => setForm({ ...form, type: e.target.value })}
      >
        <option value="Programming and Development">
          Programming and Development
        </option>
        <option value="Hardware Reviews">Hardware Reviews</option>
        <option value="Cybersecurity">Cybersecurity</option>
        <option value="Technology News and Trends">
          Technology News and Trends
        </option>
        <option value="Artificial Intelligence and Machine Learning">
          Artificial Intelligence and Machine Learning
        </option>
      </select>
      {error && <p>Invalid form</p>}
      <button disabled={disable} type="submit">
        {postId ? "update" : "submit"}
      </button>
    </form>
  );
}
