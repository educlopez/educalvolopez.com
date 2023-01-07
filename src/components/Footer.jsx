import Link from 'next/link';
import NowPlaying from '@/components/NowPlaying';
import { Container } from '@/components/Container';
function NavLink({ href, children, target, rel }) {
  return (
    <Link
      href={href}
      className="transition hover:text-amber-500 dark:hover:text-amber-400"
      target={target}
      rel={rel}
    >
      {children}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="pt-10 pb-16 border-t border-zinc-900/10 dark:border-white/10">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400 md:justify-start ">
                <NavLink href="/about">About</NavLink>
                <NavLink href="/articles">Blog</NavLink>
                <NavLink href="/proyectos">Proyectos</NavLink>
                <NavLink href="/recomendaciones">Recomendaciones</NavLink>
                <NavLink
                  href="https://shop.educalvolopez.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tienda
                </NavLink>
                <NavLink href="/rss/feed.xml">Rss</NavLink>
              </div>
              <span className="inline-flex items-center px-2 py-0 ml-2 text-xs font-semibold border rounded-md pointer-events-auto border-zinc-200 bg-white/10 text-zinc-900 backdrop-blur-sm dark:border-white/10 dark:bg-zinc-900/20 dark:text-zinc-100 dark:backdrop-blur sm:hidden">
                <svg
                  className="mr-1.5 h-2 w-2 text-lime-400"
                  fill="currentColor"
                  viewBox="0 0 8 8"
                >
                  <circle cx="4" cy="4" r="3" />
                </svg>
                Disponible para nuevos proyectos
              </span>
              <NowPlaying />
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  );
}
