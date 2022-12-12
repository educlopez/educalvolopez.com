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
        <div className="pt-10 pb-16 border-t border-zinc-100/30 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 text-sm font-medium text-slate-800 dark:text-slate-200">
                <NavLink href="/about">About</NavLink>
                <NavLink href="/proyectos">Proyectos</NavLink>
                <NavLink href="/recomendaciones">Recomendaciones</NavLink>
              </div>
              <span className="inline-flex items-center px-2 py-0 ml-2 text-xs font-semibold border rounded-md pointer-events-auto sm:hidden bg-white/20 dark:bg-slate-900/50 border-zinc-200 dark:border-zinc-700/40 backdrop-blur text-slate-900 dark:text-slate-100">
              <svg className="mr-1.5 h-2 w-2 text-lime-400" fill="currentColor" viewBox="0 0 8 8">
                <circle cx="4" cy="4" r="3" />
              </svg>
              Disponible para nuevos proyectos
            </span>
              <p className="text-sm text-center text-slate-400 dark:text-slate-500 sm:text-left">
                &copy; {new Date().getFullYear()} Eduardo Calvo. Todos los derechos reservados.
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
