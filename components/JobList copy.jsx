'use client'

import { useRef } from 'react'
import { resume } from '@/data/resume'

import { JobItem } from '@/components/JobItem'

export default function JobsList() {
  const containerref = useRef(null)
  return (
    <div className="relative w-full mt-2">
      <section
        className="relative overflow-scroll h-44 snap-y snap-proximity scroll-pt-2"
        ref={containerref}
      >
        {resume.map((role, roleIndex) => (
          <JobItem key={roleIndex} role={role} containerref={containerref} />
        ))}
      </section>
    </div>
  )
}
