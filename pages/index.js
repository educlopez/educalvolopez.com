import Head from 'next/head';
import Layout, { siteTitle, name } from '../components/layout';
import Image from 'next/image';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import { getCurrentTime } from '../components/currentTime';
import SectionService from '../components/sectionService';
import SpotifyPlaying from '../components/spotifyPlaying';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/*<div className="header-background"></div>*/}
      <div className="flex flex-col my-32 space-y-10 md:flex-row md:space-x-96 md:space-y-0">
        <div className="flex-1 text-center md:text-left">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-3xl font-normal tracking-tight text-black dark:text-white sm:text-5xl md:text-4xl">
              <span className="block xl:inline">Diseñando web / apps</span>
            </h1>
            <p className="mt-3 text-base text-black dark:text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-1xl lg:mx-0">
              Especializado en diseño web, UI, UX y Maquetación.
            </p>
            {/*<div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="">
                <a
                  href="#"
                  className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white border border-transparent rounded-md bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10"
                >
                  Get started
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="flex items-center justify-center w-full px-8 py-3 text-base font-medium border border-transparent rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 md:py-4 md:text-lg md:px-10"
                >
                  Live demo
                </a>
              </div>
            </div>*/}
          </div>
        </div>
        <div className="flex-1 text-center md:text-right">
          <SpotifyPlaying />
          <p className="mt-6 text-black dark:text-white text-md-end text-sm-start">
            Madrid, España
            <br></br>
            {getCurrentTime()} UTC+2
            <br></br>
            <span className="text-gray-400">(en la oficina hasta las 6pm)</span>
          </p>
        </div>
      </div>
      <section>
        <h2 className="my-16 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Blog
        </h2>
        <div className="flex flex-col items-stretch content-center md:flex-row">
          {allPostsData.map(({ id, date, title, img, fragment }) => (
            <Link href={`/posts/${id}`} key={id}>
              <a className="flex-1">
                <div className="overflow-hidden duration-500 transform bg-white rounded-md shadow-lg cursor-pointer dark:bg-gray-900 ring-1 ring-black dark:ring-gray-600 ring-opacity-5 w-80 hover:shadow-xl hover:scale-105">
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
      <SectionService />
    </Layout>
  );
}
