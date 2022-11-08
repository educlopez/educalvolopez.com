import Link from 'next/link'

import { Container } from '@/components/Container'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-amber-500 dark:hover:text-amber-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="pt-10 pb-16 border-t border-zinc-100 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 text-sm font-medium text-slate-800 dark:text-slate-200">
                <NavLink href="/about">About</NavLink>
                <NavLink href="/proyectos">Proyectos</NavLink>
                <NavLink href="/recomendaciones">Recomendaciones</NavLink>
              </div>
              <p className="text-sm text-slate-400 dark:text-slate-500">
                &copy; {new Date().getFullYear()} Eduardo Calvo. All rights
                reserved.
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
