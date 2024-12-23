import { useEffect, useState } from "react";
import { PostForm } from "../lib/definitions";
import { createPost, getPost, updatePost } from "../lib/actions";

export default function PostFormComponent({ postId }) {
  const [form, setForm] = useState({
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
        placeholder="Title"
        type="text"
        name="title"
        className="mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />

      <textarea
        name="content"
        value={form.content}
        className="mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4"
        style={{ resize: "none" }}
        placeholder="Content"
        rows={5}
        onChange={(e) => setForm({ ...form, content: e.target.value })}
      ></textarea>

      <select
        value={form.type}
        className="mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4"
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
        {postId ? "Update This Post" : "Submit"}
      </button>
    </form>
  );
}
