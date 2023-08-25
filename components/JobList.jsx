'use client'

import { useEffect, useRef, useState } from 'react'
import { resume } from '@/data/resume'
import { motion, useMotionValue, useTransform } from 'framer-motion'

import { JobItem } from '@/components/JobItem'

export default function JobsList() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const handleScroll = (e) => {
    setScrollPosition(e.target.scrollTop)
  }
  const heightItem = 64

  const containerref = useRef(null)
  return (
    <motion.div className="relative w-full ">
      <section
        className="relative overflow-scroll h-[192px] snap-y snap-proximity"
        onScroll={handleScroll}
        ref={containerref}
      >
        {resume.map((role, roleIndex) => (
          <JobItem
            key={roleIndex}
            role={role}
            containerref={containerref}
            scrollPosition={scrollPosition}
            heightItem={heightItem}
          />
        ))}
      </section>
    </motion.div>
  )
}
