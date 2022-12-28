import { useEffect, useRef } from 'react';
import { Analytics } from '@vercel/analytics/react';
import CommandMenu from '@/components/CommandBar';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

import '@/styles/tailwind.css';
import 'focus-visible';

function usePrevious(value) {
  let ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export default function App({ Component, pageProps, router }) {
  let previousPathname = usePrevious(router.pathname);

  return (
    <>
      <div className="relative">
        <Header />
        <main>
          <CommandMenu />
          <Component previousPathname={previousPathname} {...pageProps} />
          <Analytics />
        </main>
        <Footer />
      </div>
    </>
  );
}
