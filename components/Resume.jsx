import { Briefcase, Download, Scroll } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/Button'
import JobsList from '@/components/JobList'
import { Pill } from '@/components/Pill'

export default function Resume({ className }) {
  return (
    <div
      className={cn(
        className,
        'p-6 shadow rounded-2xl box-gen flex justify-between flex-col items-start'
      )}
    >
      <Pill icon={Briefcase} className="mb-0">
        Experiencia
      </Pill>
      <JobsList />

      <div className="flex flex-row justify-between w-full gap-4">
        <Button
          href="https://read.cv/educlopez"
          styleBtn="solid"
          className="w-full mt-6 group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Scroll className="w-4 h-4 transition stroke-zinc-600 dark:stroke-zinc-400 group-active:stroke-zinc-900 group-hover:stroke-zinc-900 dark:group-hover:stroke-zinc-100 dark:group-active:stroke-zinc-50" />
          Read.cv
        </Button>
        <Button
          href="2023_eduardo_calvo_lopez_curriculum.pdf"
          styleBtn="solid"
          className="w-full mt-6 group"
          target="_blank"
        >
          <Download className="w-4 h-4 transition stroke-zinc-600 dark:stroke-zinc-400 group-active:stroke-zinc-900 group-hover:stroke-zinc-900 dark:group-hover:stroke-zinc-100 dark:group-active:stroke-zinc-50" />
          Descargar cv
        </Button>
      </div>
    </div>
  )
}
