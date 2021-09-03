import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';
import Image from 'next/image';
import Link from 'next/link';
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function SectionLastPost(allPostsData) {
  return (
    <section>
      <h2 className="mb-4 text-white">Blog</h2>
      <div className="flex flex-row items-stretch content-center">
        {allPostsData.map(({ id, date, title, img, fragment }) => (
          <Link href={`/posts/${id}`} key={id}>
            <a className="flex-1">
              <div className="overflow-hidden duration-500 transform bg-white rounded-md shadow-lg cursor-pointer dark:bg-black w-80 hover:shadow-xl hover:scale-105">
                <Image
                  priority
                  src={img}
                  alt={title}
                  height={200}
                  width={400}
                  className="block"
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    shimmer(200, 400)
                  )}`}
                />
                <div className="p-4">
                  <h5 className="mt-1 text-xl font-semibold leading-none text-black capitalize truncate dark:text-white">
                    {title}
                  </h5>
                  <p className="mt-1 text-base font-medium tracking-wide text-black dark:text-white">
                    {fragment}
                  </p>
                  <p className="text-sm font-semibold text-black dark:text-white">
                    <Date dateString={date} />
                  </p>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
}
