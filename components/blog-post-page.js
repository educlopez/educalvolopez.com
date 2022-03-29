export default function PostPge({ posts }) {
  return (
    <>
        {posts.map((post) => (
          <div key={post.title}>
            <p className="text-sm text-gray-500">
              <time>{post.date}</time>
            </p>
            <a href="#" className="block mt-2">
              <p className="text-xl font-semibold text-gray-900">
                {post.title}
              </p>
              <p className="mt-3 text-base text-gray-500">{post.excerpt}</p>
            </a>
            <div className="mt-3">
              <a
                href={post.slug}
                className="text-base font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Read full story
              </a>
            </div>
          </div>
        ))}
    </>
  );
}
