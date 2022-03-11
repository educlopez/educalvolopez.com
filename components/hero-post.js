import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
import CoverImage from '../components/cover-image'
import Link from 'next/link'

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  tags,
}) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage
          title={title}
          src={coverImage}
          slug={slug}
          height={620}
          width={1240}
        />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <div className="inline-block">
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-pink-100 text-pink-800">
              {tags}
            </span>
          </div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight text-black dark:text-white">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg text-black dark:text-white">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4 text-black dark:text-white">
            {excerpt}
          </p>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </section>
  );
}

