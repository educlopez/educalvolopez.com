import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  tags,
}) {
  return (
    <div className="grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
      <div className="flex flex-col overflow-hidden duration-500 transform bg-white rounded-lg shadow-lg cursor-pointer bg-opacity-70 dark:bg-opacity-70 dark:bg-gray-900 ring-1 ring-black dark:ring-gray-600 ring-opacity-5 w-80 hover:shadow-xl hover:scale-105">
        <div className="z-10">
          <div className="flex-shrink-0">
            <CoverImage
              slug={slug}
              title={title}
              src={coverImage}
              height={278}
              width={556}
            />
          </div>
          <div className="flex flex-col justify-between flex-1 p-6">
            <div className="flex-1">
              <div className="inline-block">
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-pink-100 text-pink-800">
                  {tags}
                </span>
              </div>
              <div className="block mt-3">
                <Link as={`/posts/${slug}`} href="/posts/[slug]">
                  <a className="text-xl font-semibold text-gray-900 line-clamp-2 dark:text-white">
                    {title}
                  </a>
                </Link>
                <p className="mt-3 text-base text-gray-500 line-clamp-3 dark:text-white">
                  {excerpt}
                </p>
              </div>
              <div className="flex items-center mt-4">
                <div className="flex-shrink-0">
                  <Avatar name={author.name} picture={author.picture} />
                </div>
              </div>
              <div className="text-sm mt-4 text-black dark:text-white">
                <DateFormatter dateString={date} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

