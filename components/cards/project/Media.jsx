import Image from 'next/image'
import { motion, useSpring, useTransform } from 'framer-motion'

import useMouse from '@/components/cards/project/UseMouse'

export function clamp(input, min, max) {
  return input < min ? min : input > max ? max : input
}

export function modulate(current, from, to) {
  const mapped =
    ((current - from[0]) * (to[1] - to[0])) / (from[1] - from[0]) + to[0]
  return clamp(mapped, to[0], to[1])
}

export default function Media({ image, title, index, length }) {
  const { mouseX, mouseY } = useMouse()
  const opacity = modulate(index, [0, length - 1], [1 - length / 10, 1])

  const min = index * 10 * -1
  const max = index * 10

  const widthContainer = 360
  const heightContainer = 320

  const transformX = useTransform(mouseX, [0, widthContainer * 6], [min, max])
  const transformY = useTransform(mouseY, [0, heightContainer * 6], [min, max])

  const x = useSpring(transformX, { stiffness: 300, damping: 50 })
  const y = useSpring(transformY, { stiffness: 300, damping: 50 })

  return (
    <motion.div
      style={{ x, y }}
      className="bg-black shadow-xl rounded-3xl will-change-transform"
    >
      <Image
        alt={title}
        width={800}
        height={600}
        draggable={false}
        style={{ opacity }}
        src={image}
        className="select-none rounded-xl"
        unoptimized={true}
      />
    </motion.div>
  )
}
