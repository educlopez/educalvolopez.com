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
            <a
              href="#"
              className="inline-flex items-center p-2 mt-3 bg-white rounded-lg bg-opacity-5"
            >
              <span className="mr-2 text-xs text-black dark:text-white">
                Comandos&nbsp;
              </span>
              <kbd className="inline-flex items-center px-2 py-1 pb-2 mr-2 text-xs font-medium text-gray-600 bg-gray-200 border-2 border-b-2 border-gray-600 rounded-lg shadow-sm retro-btn-shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-50">
                ⌘
              </kbd>
              <kbd className="inline-flex items-center px-2 py-1 pb-2 text-xs font-medium text-gray-600 bg-gray-200 border-2 border-b-2 border-gray-600 rounded-lg shadow-sm retro-btn-shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-50">
                k
              </kbd>
            </a>
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
      <section className="relative mx-auto max-w-7xl">
        <div class="text-center">
          <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            From the blog
          </h2>
          <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4 dark:text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            libero labore natus atque, ducimus sed.
          </p>
        </div>
        <div className="grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
          {allPostsData.map(
            ({ id, date, title, img, fragment, author, tags, authorimg }) => (
              <Link href={`/posts/${id}`} key={id}>
                <a className="grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
                  <div className="flex flex-col overflow-hidden duration-500 transform bg-white rounded-lg shadow-lg cursor-pointer bg-opacity-70 dark:bg-opacity-70 dark:bg-gray-900 ring-1 ring-black dark:ring-gray-600 ring-opacity-5 w-80 hover:shadow-xl hover:scale-105">
                    <div className="flex-shrink-0">
                      <Image
                        priority
                        src={img}
                        alt={title}
                        height={200}
                        width={400}
                        className="object-cover w-full h-48"
                        placeholder="blur"
                        blurDataURL={`data:image/svg+xml;base64,${toBase64(
                          shimmer(200, 400)
                        )}`}
                      />
                    </div>
                    <div className="flex flex-col justify-between flex-1 p-6">
                      <div className="flex-1">
                        <a href="#" class="inline-block">
                          <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-pink-100 text-pink-800">
                            {tags}
                          </span>
                        </a>
                        <a href="#" className="block mt-3">
                          <p className="text-xl font-semibold text-gray-900 line-clamp-2 dark:text-white">
                            {title}
                          </p>
                          <p className="mt-3 text-base text-gray-500 line-clamp-3 dark:text-white">
                            {fragment}
                          </p>
                        </a>
                      </div>
                      <div className="flex items-center mt-6">
                        <div className="flex-shrink-0">
                          <a href="#">
                            <span className="sr-only">Brenna Goyette</span>
                            <Image
                              priority
                              src={authorimg}
                              alt={title}
                              height={40}
                              width={40}
                              className="w-10 h-10 rounded-full"
                              placeholder="blur"
                              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                                shimmer(200, 400)
                              )}`}
                            />
                          </a>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            <a href="#" className="hover:underline">
                              {author}
                            </a>
                          </p>
                          <div className="flex space-x-1 text-sm text-gray-500 dark:text-white">
                            <time datetime="2020-03-10">
                              <Date dateString={date} />
                            </time>
                            <span aria-hidden="true">·</span>
                            <span>4 min read</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            )
          )}
        </div>
      </section>
      <SectionService />
    </Layout>
  );
}
