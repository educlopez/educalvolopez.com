import Link from 'next/link'
import clsx from 'clsx'
import { ChevronsRight } from 'lucide-react'

export function Card({ as: Component = 'div', className, children }) {
  return (
    <Component
      className={clsx(className, 'group relative flex flex-col items-start')}
    >
      <div className="p-2 transition-transform duration-700 group-hover:scale-105">
        {children}
      </div>
    </Component>
  )
}

Card.Link = function CardLink({ children, ...props }) {
  return (
    <>
      <div className="absolute z-0 transition scale-95 shadow opacity-100 -inset-y-6 -inset-x-4 group-hover:shadow-lg sm:-inset-x-6 rounded-2xl box-gen" />
      <Link {...props}>
        <span className="absolute z-20 block -inset-y-6 -inset-x-4 sm:-inset-x-6 sm:rounded-2xl" />
        <span className="relative z-10">{children}</span>
      </Link>
    </>
  )
}

Card.Title = function CardTitle({
  as: Component = 'h2',
  href,
  target,
  children,
  rel,
}) {
  return (
    <Component className="text-base font-semibold tracking-tight body-primary">
      {href ? (
        <Card.Link href={href} target={target} rel={rel}>
          {children}
        </Card.Link>
      ) : (
        children
      )}
    </Component>
  )
}

Card.Description = function CardDescription({ children }) {
  return <p className="relative z-10 mt-2 text-sm body-secondary">{children}</p>
}

Card.Cta = function CardCta({ children }) {
  return (
    <div
      aria-hidden="true"
      className="relative z-10 flex items-center mt-4 text-sm font-medium text-indigo-600 dark:text-indigo-400"
    >
      {children}
      <ChevronsRight className="w-3 h-3 ml-1 stroke-current" />
    </div>
  )
}

Card.Eyebrow = function CardEyebrow({
  as: Component = 'p',
  decorate = false,
  className,
  children,
  ...props
}) {
  return (
    <Component
      className={clsx(
        className,
        'relative z-10 order-first mb-3 flex items-center text-sm body-secondary',
        decorate && 'pl-3.5'
      )}
      {...props}
    >
      {decorate && (
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span className="h-4 w-0.5 rounded-full bg-neutral-900 dark:bg-white" />
        </span>
      )}
      {children}
    </Component>
  )
}
