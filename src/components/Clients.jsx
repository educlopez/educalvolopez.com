import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { DEFAULT_SIZE, clients } from '@/data/clients'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useTheme } from 'next-themes'

import { FADE_IN_ANIMATION_CARD } from '@/lib/constants'

export default function Clients() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()
  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  const styles = {
    ...DEFAULT_SIZE,
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
    <motion.div {...FADE_IN_ANIMATION_CARD}>
      <div className="grid items-center w-full max-w-screen-lg min-w-full grid-cols-2 gap-5 mt-20 sm:grid-cols-4 sm:px-0">
        {clients.map((client) => (
          <Link
            target="_blank"
            rel="noopener noreferer"
            className="relative group"
            key={client.name}
            href={client.url}
          >
            <div className="absolute z-10 flex items-center justify-center w-full h-full transition-all translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="font-semibold text-zinc-700 dark:text-white">
                {client.urlname}
              </p>
              <div className="relative flex items-center group">
                <ArrowUpRight className="absolute w-4 h-4 transition-all opacity-0 group-hover:translate-x-1 group-hover:opacity-100" />
              </div>
            </div>
            <Image
              src={theme === 'light' ? client.imagecolor : client.imagewhite}
              alt={`${client.name}'s Logo`}
              width={numericWidth}
              height={numericHeight}
              style={styles}
              className="h-5 col-span-1 m-auto transition-all group-hover:opacity-20 group-hover:blur-sm sm:h-7 blur-0 grayscale-0"
            />
          </Link>
        ))}
      </div>
    </motion.div>
  )
}
