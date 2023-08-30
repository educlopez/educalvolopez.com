'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { clients, clientsBottom } from '@/data/clients'
import { useTheme } from 'next-themes'

import { cn } from '@/lib/utils'

export default function Clients({ className }) {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  const styles = {
    ...clients.style,
  }
  let numericWidth
  let numericHeight
  if (styles.width === 'number') {
    numericWidth = styles.width
  }
  if (styles.height === 'number') {
    numericHeight = styles.height
  }
  return (
    <div
      className={cn(
        'relative flex flex-col justify-center  overflow-hidden ',
        className
      )}
    >
      <h2 className="mb-10 text-2xl font-bold tracking-tight body-primary sm:text-2xl">
        Clientes
      </h2>
      <div className="relative flex gap-10 overflow-hidden">
        <div className="flex items-center justify-around min-w-full gap-10 animate-marquee shrink-0">
          {clients.map((client, index) => (
            <Link
              target="_blank"
              rel="noopener noreferer"
              className="relative opacity-70 group"
              key={client.name}
              href={client.url}
            >
              <Image
                src={theme === 'light' ? client.imageblack : client.imagewhite}
                alt={`${client.name}'s Logo`}
                width={numericWidth}
                height={numericHeight}
                style={styles}
                className=" max-w-[clamp(10rem,28vmin,20rem)] shadow-md"
                priority={index <= 1}
              />
            </Link>
          ))}
        </div>
        <div
          aria-hidden="true"
          className="flex items-center justify-around min-w-full gap-10 animate-marquee shrink-0"
        >
          {clients.map((client, index) => (
            <Link
              target="_blank"
              rel="noopener noreferer"
              className="relative group opacity-70"
              key={client.name}
              href={client.url}
            >
              <Image
                src={theme === 'light' ? client.imageblack : client.imagewhite}
                alt={`${client.name}'s Logo`}
                width={numericWidth}
                height={numericHeight}
                style={styles}
                className=" max-w-[clamp(10rem,28vmin,20rem)] shadow-md"
                priority={index <= 1}
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="relative flex gap-10 mt-10 overflow-hidden ">
        <div className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-10 [animation-direction:reverse]">
          {clientsBottom.map((client, index) => (
            <Link
              target="_blank"
              rel="noopener noreferer"
              className="relative group opacity-70"
              key={client.name}
              href={client.url}
            >
              <Image
                src={theme === 'light' ? client.imageblack : client.imagewhite}
                alt={`${client.name}'s Logo`}
                width={numericWidth}
                height={numericHeight}
                style={styles}
                className=" max-w-[clamp(10rem,28vmin,20rem)] shadow-md"
                priority={index <= 1}
              />
            </Link>
          ))}
        </div>
        <div className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-10 [animation-direction:reverse]">
          {clientsBottom.map((client, index) => (
            <Link
              target="_blank"
              rel="noopener noreferer"
              className="relative group opacity-70"
              key={client.name}
              href={client.url}
            >
              <Image
                src={theme === 'light' ? client.imageblack : client.imagewhite}
                alt={`${client.name}'s Logo`}
                width={numericWidth}
                height={numericHeight}
                style={styles}
                className=" max-w-[clamp(10rem,28vmin,20rem)] shadow-md"
                priority={index <= 1}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
