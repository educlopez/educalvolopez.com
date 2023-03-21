import Link from 'next/link'
import { linksSocial } from '@/data/links'
import clsx from 'clsx'
import { ArrowUpRight } from 'lucide-react'

function SocialLink({ icon: Icon, outline, ...props }) {
  return (
    <Link className="p-1 -m-1 group" {...props}>
      {outline ? (
        <Icon className="w-6 h-6 stroke-[1.5px] transition text-zinc-600 group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-outline-300 outline-zinc-600 group-hover:outline-zinc-600 dark:outline-zinc-400 dark:group-hover:text-zinc-300" />
      ) : (
        <Icon className="w-6 h-6 transition fill-zinc-600 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
      )}
    </Link>
  )
}

export function SocialLinks({}) {
  return (
    <div className="flex items-center justify-start gap-6 mt-6">
      {linksSocial.map((link, index) => (
        <div className="relative group" key={index}>
          <div className="transition-all translate-y-5 opacity-0 group-hover:translate-y-3 group-hover:opacity-100">
            <div className="relative flex items-center group">
              <ArrowUpRight className="absolute w-4 h-4 transition-all opacity-0 group-hover:translate-x-1 group-hover:opacity-100" />
            </div>
          </div>
          <SocialLink
            href={link.href}
            rel="noopener noreferrer"
            target="_blank"
            aria-label={link.label}
            className="transition-all group-hover:opacity-20 group-hover:blur-sm sm:h-7 blur-0 grayscale-0"
            icon={link.icon}
            outline={link.outline}
          />
        </div>
      ))}
    </div>
  )
}

export function LinkText({ className, href, children, icon: Icon, outline }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link href={href} rel="noopener noreferrer" target="_blank" className="">
        <div className="relative group">
          <div className="absolute z-10 flex items-center justify-center w-full h-full transition-all translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
            <p className="font-semibold cursor-pointer text-zinc-700 dark:text-white">
              {children}
            </p>
            <div className="relative flex items-center group">
              <ArrowUpRight className="absolute w-4 h-4 transition-all opacity-0 group-hover:translate-x-1 group-hover:opacity-100" />
            </div>
          </div>
          <div className="flex text-sm font-medium transition-all group text-zinc-600 dark:text-zinc-400 group-hover:opacity-20 group-hover:blur-sm sm:h-7 blur-0 grayscale-0">
            {outline ? (
              <Icon className="w-6 h-6 stroke-[1.5px] transition text-zinc-600 group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-outline-300 outline-zinc-600 group-hover:outline-zinc-600 dark:outline-zinc-400 dark:group-hover:text-zinc-300" />
            ) : (
              <Icon className="flex-none w-6 h-6 transition fill-zinc-600 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
            )}
            <span className="ml-4 group-hover:text-zinc-600 dark:group-hover:text-zinc-300">
              {children}
            </span>
          </div>
        </div>
      </Link>
    </li>
  )
}

export function SocialText({}) {
  return (
    <div className="lg:pl-28 ">
      <ul role="list" className="grid grid-cols-2">
        {linksSocial.map((link, index) => (
          <LinkText
            href={link.href}
            icon={link.icon}
            className="mt-4"
            key={index}
            outline={link.outline}
          >
            {link.label}
          </LinkText>
        ))}
      </ul>
    </div>
  )
}
