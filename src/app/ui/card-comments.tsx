export default function CardComments({ datas }) {
  const handleDelete = (id: String) => {
    console.log(id);
  };
  return (
    <div>
      <ul>
        {datas.map((comment, i) => (
          <li key={i}>
            {comment.content}
            <button onClick={() => handleDelete(comment._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
