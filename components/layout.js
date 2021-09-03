import Head from 'next/head';
import Link from 'next/link';
import MyNav from './mainNav';
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
      <main className="container mx-auto">
        {home ? <MyNav home /> : <MyNav />}
        {children}
        {!home && (
          <Link href="/">
            <a
              type="button"
              className="w-auto px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in rounded-lg shadow-md bg-primary-600 hover:bg-primary-700 focus:ring-primary-500 focus:ring-offset-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
            >
              ← Volver
            </a>
          </Link>
        )}
      </main>

      <script src="/js/custom.js"></script>
    </div>
  );
}
