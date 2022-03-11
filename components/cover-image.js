import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

export default function CoverImage({ title, src, slug, height, width }) {
  const image = (
    <Image
      priority
      src={src}
      alt={`Cover Image for ${title}`}
      className="object-cover w-full h-48"
      layout="responsive"
      width={width}
      height={height}
    />
  );
  return (
    <div>
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
