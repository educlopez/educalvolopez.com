import PostPreview from '../components/post-preview'
import PrimaryButton from './button';
export default function MoreStories({ posts }) {
  return (
    <section className="relative mx-auto my-20 max-w-7xl">
      <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter text-black md:text-7xl dark:text-white">
        More Stories
      </h2>
      <div className="grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            tags={post.tags}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
      <PrimaryButton href={"/blog"}>
        Ver más
      </PrimaryButton>
    </section>
  );
}
