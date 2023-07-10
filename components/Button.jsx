import Link from 'next/link'
import { cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 ',
  {
    variants: {
      styleBtn: {
        primary:
          'bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70 after:bg-gradient-to-t after:from-black/5 after:opacity-50 after:transition-opacity hover:after:opacity-100 ',
        secondary:
          'bg-white/10 dark:bg-zinc-900/20 font-medium text-neutral-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-neutral-900/60 dark:text-zinc-300 border border-zinc-400/40 dark:border-white/10 dark:hover:bg-zinc-900 dark:hover:text-neutral-50 dark:active:bg-zinc-900/50 dark:active:text-zinc-50/70',
        solid:
          'h-[30px] transform-gpu touch-none select-none border border-none border-transparent bg-white dark:bg-zinc-800 font-semibold leading-none text-neutral-700 hover:text-neutral-900 dark:text-zinc-300 dark:hover:text-zinc-100 shadow-button-light dark:shadow-button-dark after:absolute after:-inset-[1px] after:block  after:bg-gradient-to-t after:from-black/5 after:opacity-50 after:transition-opacity hover:after:opacity-100 focus-visible:border-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 disabled:cursor-not-allowed disabled:opacity-50 dark:after:from-black/[0.15] dark:focus-visible:ring-blue-600',
      },
    },
    defaultVariants: {
      styleBtn: 'solid',
    },
  }
)

export function Button({ styleBtn, className, href, ...props }) {
  className = cn(
    buttonVariants({ styleBtn, className }),
    'inline-flex items-center gap-2 justify-center overflow-hidden rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none',
    className
  )

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  )
}
