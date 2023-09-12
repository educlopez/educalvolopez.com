'use client'

import Image from 'next/image'
import { clients } from '@/data/clients'
import { useTheme } from 'next-themes'

import Marquee from '@/components/ui/Marquee'

const ClientCard = ({ imageblack, imagewhite, url, index }) => {
  const { theme } = useTheme()

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="relativemin-w-[50px] border-neutral-900/[.1] hover:bg-neutral-900/[.05] dark:border-neutral-50/[.1] hover:dark:border-neutral-50/[.05] flex justify-center items-center overflow-hidden rounded-xl border dark:bg-neutral-900/50 bg-neutral-100/50 w-full py-4 px-12 transition hover:dark:bg-neutral-900/75  hover:shadow-lg group"
    >
      <div className="flex flex-row items-center justify-center w-full h-auto gap-2 text-white transition group-hover:scale-110">
        <Image
          src={theme === 'light' ? imageblack : imagewhite}
          alt={name}
          className="max-w-[clamp(10rem,28vmin,20rem)] shadow-md"
          priority={index <= 1}
        />
      </div>
    </a>
  )
}

export const Clients = () => {
  return (
    <section className="flex flex-col flex-wrap items-center justify-center">
      <div className="relative flex flex-col items-center justify-center w-full h-full gap-4 py-20 overflow-hidden rounded-lg bg-background">
        <div className="relative flex flex-col w-full overflow-hidden gap-y-4">
          <Marquee reverse pauseOnHover className="[--duration:40s]">
            {clients
              .slice()
              .reverse()
              .map((review, index) => (
                <ClientCard key={index} {...review} />
              ))}
          </Marquee>
          <Marquee pauseOnHover className="[--duration:40s]">
            {[...clients.slice(4), ...clients.slice(0, 4)].map(
              (review, index) => (
                <ClientCard key={index} {...review} />
              )
            )}
          </Marquee>
          <div className="absolute inset-y-0 left-0 w-40 pointer-events-none from-neutral-50 dark:from-neutral-900 to-transparent bg-gradient-to-r "></div>
          <div className="absolute inset-y-0 right-0 w-1/3 pointer-events-none bg-gradient-to-l from-neutral-50 dark:from-neutral-900"></div>
        </div>
      </div>
    </section>
  )
}
