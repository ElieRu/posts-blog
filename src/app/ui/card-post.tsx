export default function CardPost({ post }) {
  return (
    <div style={{ width: "50%" }}>
      {/* <div className="relative text-gray-400 mt-1">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
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
              <circle cx="10.5" cy="10.5" r="7.5"></circle>
              <line x1="21" y1="21" x2="15.8" y2="15.8"></line>
            </svg>
          </span>
          <input
            type="search"
            name="name"
            id="name"
            className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4"
            placeholder="Search"
            autocomplete="off"
            value={search}
            onChange={(e) => onChange(e.target.value)}
          />
        </div> */}

      <h1 className="mb-4 text-3xl">Post Description</h1>
      <div className="my-2">
        <p className="text-sm text-gray-400">Title</p>
        <p className="capitalize">{post.title}</p>
      </div>
      <div className="my-2">
        <p className="text-sm text-gray-400">Type</p>
        <p className="capitalize">{post.type}</p>
      </div>
      <div className="my-2">
        <p className="text-sm text-gray-400">Content</p>
        <p className="capitalize">{post.content}</p>
      </div>
    </div>
  );
}
