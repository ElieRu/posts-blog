import { useState } from "react";

export default function CommentForm() {
    const [form, setForm] = useState({
        content: ''
    });

    const [disable, setDisable] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setDisable(true);        
    }

    return (
        <form onSubmit={handleSubmit}>
          <textarea placeholder="Comment" value={form.content} onChange={(e) => setForm(e.target.value)}></textarea><br />
          <button disabled={disable} type="submit">Add comment</button>
        </form>
    )
}