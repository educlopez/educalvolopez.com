import Link from 'next/link'
import clsx from 'clsx'

const variantStyles = {
  primary:
    'bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70',
  secondary:
    'bg-white/10 dark:bg-zinc-900/20 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:text-zinc-300 border border-zinc-900/10 dark:border-white/10 dark:hover:bg-zinc-900 dark:hover:text-zinc-50 dark:active:bg-zinc-900/50 dark:active:text-zinc-50/70',
  campsite:
    'focus-visible:ring-2 focus-visible:ring-blue-300 dark:focus-visible:ring-blue-600 h-8 font-semibold inline-flex items-center justify-center focus-visible:outline-none border initial:border-transparent focus-visible:border-blue-500 leading-none rounded-md touch-none select-none text-[13px] disabled:opacity-50 disabled:cursor-not-allowed w-auto flex-none pr-4 pl-3 border-none h-[30px] dark:[&>span]:drop-shadow-button-content bg-button text-primary shadow-button relative transform-gpu before:hidden dark:before:block before:absolute before:-inset-[1.5px] before:rounded-lg before:border-[.5px] before:border-black/80 after:block after:absolute after:-inset-[1px] after:rounded-md after:bg-gradient-to-t after:from-black/5 dark:after:from-black/[0.15] after:opacity-50 hover:after:opacity-100 after:transition-opacity',
}

export function Button({ variant = 'primary', className, href, ...props }) {
  className = clsx(
    'inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none',
    variantStyles[variant],
    className
  )

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  )
}
