import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'

export default function PostHeader({ title, coverImage, date, author, tags }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="inline-block mb-12">
        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-pink-100 text-pink-800">
          {tags}
        </span>
      </div>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div>

      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} height={620} width={1240} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-6 text-lg text-black dark:text-white">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
}
