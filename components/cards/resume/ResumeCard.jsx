import { Briefcase, Download, Scroll } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Card } from '@/components/cards/Card'
import JobsList from '@/components/cards/resume/JobList'
import { Button } from '@/components/ui/Button'

export default function Resume({ className }) {
  return (
    <Card className={cn(className)}>
      <Card.Pill icon={Briefcase}>Experiencia</Card.Pill>
      <JobsList />

      <div className="flex flex-row justify-between w-full gap-2">
        <Button
          href="https://read.cv/educlopez"
          styleBtn="boxgen"
          className="w-1/2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Scroll className="w-4 h-4 transition stroke-zinc-600 dark:stroke-zinc-400 group-active:stroke-zinc-900 group-hover:stroke-zinc-900 dark:group-hover:stroke-zinc-100 dark:group-active:stroke-zinc-50" />
          Read.cv
        </Button>
        <Button
          href="2023_eduardo_calvo_lopez_curriculum.pdf"
          styleBtn="boxgen"
          className="w-1/2"
          target="_blank"
        >
          <Download className="w-4 h-4 transition stroke-zinc-600 dark:stroke-zinc-400 group-active:stroke-zinc-900 group-hover:stroke-zinc-900 dark:group-hover:stroke-zinc-100 dark:group-active:stroke-zinc-50" />
          Descargar cv
        </Button>
      </div>
    </Card>
  )
}
