'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { clients, clientsBottom } from '@/data/clients'
import { useTheme } from 'next-themes'

export default function Clients() {
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
    <div className="relative flex flex-col justify-center pt-6 overflow-hidden sm:pt-12">
      <div className="relative flex gap-10 overflow-hidden">
        <div className="flex items-center justify-around min-w-full gap-10 animate-marquee shrink-0">
          {clients.map((client) => (
            <Link
              target="_blank"
              rel="noopener noreferer"
              className="relative group"
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
              />
            </Link>
          ))}
        </div>
        <div
          aria-hidden="true"
          className="flex items-center justify-around min-w-full gap-10 animate-marquee shrink-0"
        >
          {clients.map((client) => (
            <Link
              target="_blank"
              rel="noopener noreferer"
              className="relative group"
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
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="relative flex gap-10 mt-10 overflow-hidden ">
        <div className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-10 [animation-direction:reverse]">
          {clientsBottom.map((client) => (
            <Link
              target="_blank"
              rel="noopener noreferer"
              className="relative group"
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
              />
            </Link>
          ))}
        </div>
        <div className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-10 [animation-direction:reverse]">
          {clientsBottom.map((client) => (
            <Link
              target="_blank"
              rel="noopener noreferer"
              className="relative group"
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
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
