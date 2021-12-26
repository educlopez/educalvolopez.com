import Head from 'next/head';
import Link from 'next/link';
import MyNav from './mainNav';
import MyFooter from './mainFooter';
import KbarMenu from './kbarMenu';

import { ChevronLeftIcon } from '@heroicons/react/solid';

export const name = 'Eduardo Calvo';

export const siteTitle = 'Eduardo Calvo - Portfolio';

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap"
          rel="stylesheet"
        />{' '}
      </Head>
      <div className="bg-white dark:bg-gray-900 bg-custom-gradient">
        <KbarMenu />
        <main className="container mx-auto">
          {home ? <MyNav home /> : <MyNav />}
          {children}
          {!home && (
            <div className="flex justify-center my-10">
              <Link href="/">
                <a
                  type="button"
                  className="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  <ChevronLeftIcon
                    className="w-5 h-5 mr-3 -ml-1"
                    aria-hidden="true"
                  />
                  Volver
                </a>
              </Link>
            </div>
          )}
        </main>
        <MyFooter />
      </div>
      <script src="/js/custom.js"></script>
    </div>
  );
}
