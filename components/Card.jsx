import Link from 'next/link'
import { ChevronsRight } from 'lucide-react'

import { cn } from '@/lib/utils'

export function Card({ as: Component = 'div', className, children }) {
  return (
    <Component
      className={cn(
        className,
        'group relative flex flex-col items-start rounded-2xl box-gen p-4 shadow hover:shadow-lg'
      )}
    >
      <div className="p-2">{children}</div>
    </Component>
  )
}

Card.Link = function CardLink({ children, ...props }) {
  return (
    <>
      <Link {...props}>
        <span className="absolute z-20 block -inset-y-1 -inset-x-1" />
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
  className,
  ...props
}) {
  return (
    <Component
      className={cn(
        className,
        'text-base font-semibold tracking-tight body-primary'
      )}
      {...props}
    >
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

Card.Description = function CardDescription({ children, className, ...props }) {
  return (
    <p
      className={cn(className, 'relative z-10 mt-2 text-sm body-secondary')}
      {...props}
    >
      {children}
    </p>
  )
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
      className={cn(
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
