'use client'

import { Fragment } from 'react'
import { allProjects } from '@/.contentlayer/generated'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Card } from '@/components/cards/Card'
import Media from '@/components/cards/project/Media'
import { Button } from '@/components/ui/Button'

export const TRANSITION = { type: 'spring', stiffness: 300, damping: 50 }

const parantVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const variants = {
  hidden: {
    y: 1500,
    opacity: 0,
    scale: 1.5,
    rotateY: 0,
    rotateZ: 0,
  },
  visible: () => {
    const rotate = -10 + Math.random() * 20

    return {
      y: 0,
      scale: 1,
      opacity: 1,
      rotateZ: rotate,
      rotateY: rotate / 10,
      transition: TRANSITION,
    }
  },
}

export default function StackProject({ className }) {
  const shuffled = allProjects.sort(() => 0.5 - Math.random())
  const items = shuffled.slice(1, 4)

  return (
    <Card as="div" className={cn('group gap-2', className)}>
      <Card.Pill icon={MessageCircle} className="z-10 mb-0">
        Proyectos
      </Card.Pill>
      <div className="flex items-center justify-center w-full h-[240px]">
        <Button
          href="/proyectos"
          className="absolute z-40 hidden transition -translate-y-1/2 group-hover:flex top-1/2"
        >
          Ver Proyectos
        </Button>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={parantVariants}
          className="relative flex items-center justify-center transition group-hover:blur-sm"
          style={{ width: 300, height: 200 }}
        >
          {items.map((project, i) => {
            return (
              <Fragment key={project.id}>
                <motion.div
                  variants={variants}
                  className="absolute"
                  style={{ z: i * 200 }}
                >
                  <Media key={i} index={i} length={items.length} {...project} />
                </motion.div>
              </Fragment>
            )
          })}
        </motion.div>
      </div>
    </Card>
  )
}
