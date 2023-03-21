import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="h-full antialiased" lang="es">
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          href={`${process.env.NEXT_PUBLIC_SITE_URL}/rss/feed.xml`}
        />
        <link
          rel="alternate"
          type="application/feed+json"
          href={`${process.env.NEXT_PUBLIC_SITE_URL}/rss/feed.json`}
        />
        <meta name="robots" content="all" />
      </Head>
      <body className="flex flex-col h-full antialiased bg-white bg-top bg-no-repeat bg-lights-sun dark:bg-zinc-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
