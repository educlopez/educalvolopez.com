import { Briefcase, Download, Scroll } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/Button'
import JobsList from '@/components/JobList'
import { Card } from '@/components/cards/Card'

export default function Resume({ className }) {
  return (
    <Card className={cn(className)}>
      <Card.Pill icon={Briefcase} className="mb-3">
        Experiencia
      </Card.Pill>
      <JobsList />

      <div className="flex flex-row justify-between w-full gap-4 mt-3">
        <Button
          href="https://read.cv/educlopez"
          styleBtn="solid"
          className="w-full group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Scroll className="w-4 h-4 transition stroke-zinc-600 dark:stroke-zinc-400 group-active:stroke-zinc-900 group-hover:stroke-zinc-900 dark:group-hover:stroke-zinc-100 dark:group-active:stroke-zinc-50" />
          Read.cv
        </Button>
        <Button
          href="2023_eduardo_calvo_lopez_curriculum.pdf"
          styleBtn="solid"
          className="w-full group"
          target="_blank"
        >
          <Download className="w-4 h-4 transition stroke-zinc-600 dark:stroke-zinc-400 group-active:stroke-zinc-900 group-hover:stroke-zinc-900 dark:group-hover:stroke-zinc-100 dark:group-active:stroke-zinc-50" />
          Descargar cv
        </Button>
      </div>
    </Card>
  )
}
