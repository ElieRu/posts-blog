import { useState } from "react";
import { PostForm } from "../lib/definitions";
import { createPost } from "../lib/actions";

export default function PostFormComponent() {
  const [form, setForm] = useState<PostForm>({
    title: "title 1",
    content: "content 1",
    type: "",
  });

  const [disable, setDisable] = useState(false);

  const handleSubmit = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    setDisable(true);
    const fetchCreate = async () => {
      await createPost(form);
      setDisable(false);

      setForm({
        ...form,
        title: "",
        content: "",
        type: "",
      });
    };
    fetchCreate();
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
      <button disabled={disable} type="submit">
        submit
      </button>
    </form>
  );
}
