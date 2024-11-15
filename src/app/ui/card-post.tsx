export default function CardPost({ post }) {
  return (
    <div>
      <ul>
        <li>Post title: {post.title}</li>
        <li>Post content: {post.content}</li>
        <li>Post type: {post.type}</li>
      </ul>
    </div>
  );
}
