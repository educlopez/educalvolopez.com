import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import bancosabadellLogo from '@/images/logos/color/bancosabadell-logo.svg'
import net2phoneLogo from '@/images/logos/color/net2phone-logo.svg'
import tantraLogo from '@/images/logos/color/tantra-logo.svg'
import uamLogo from '@/images/logos/color/uam-logo.svg'
import bancosabadellWhiteLogo from '@/images/logos/white/bancosabadell-logo.svg'
import net2phoneWhiteLogo from '@/images/logos/white/net2phone-logo.svg'
import tantraWhiteLogo from '@/images/logos/white/tantra-logo.svg'
import uamWhiteLogo from '@/images/logos/white/uam-logo.svg'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useTheme } from 'next-themes'

import { FADE_IN_ANIMATION_CARD } from '@/lib/constants'

const clients = [
  {
    name: 'Net2phone',
    imagecolor: net2phoneLogo,
    imagewhite: net2phoneWhiteLogo,
    url: 'https://www.net2phone.es/',
    urlname: 'net2phone.es',
    style: {
      width: 206,
    },
  },
  {
    name: 'Tantra Spain',
    imagecolor: tantraLogo,
    imagewhite: tantraWhiteLogo,
    url: 'https://tantraspain.com/',
    urlname: 'tantraspain.com',
    style: {
      height: 77,
    },
  },
  {
    name: 'Universidad Autonoma de Madrid',
    imagecolor: uamLogo,
    imagewhite: uamWhiteLogo,
    url: 'https://www.uam.es/',
    urlname: 'uam.es',
    style: {
      width: 288,
    },
  },
  {
    name: 'Banco Sabadell',
    imagecolor: bancosabadellLogo,
    imagewhite: bancosabadellWhiteLogo,
    url: 'https://www.bancsabadell.com/',
    urlname: 'bancsabadell.com',
    style: {
      width: 230,
    },
  },
]
const DEFAULT_SIZE = {
  width: 180,
  height: 75,
}

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
      <div className="grid items-center w-full max-w-screen-lg grid-cols-2 gap-5 px-5 mx-auto mt-20 sm:grid-cols-4 sm:px-0">
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
