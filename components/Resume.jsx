import { Briefcase, Download, Scroll } from 'lucide-react'

import { Button } from '@/components/Button'
import JobsList from '@/components/ScrollList'

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']

export default function Resume() {
  return (
    <div className="p-6 shadow rounded-2xl box-gen">
      <h2 className="inline-flex items-center px-2 py-1 text-xs font-semibold body-primary box-gen rounded-2xl">
        <Briefcase className="flex-none w-4 h-4" />
        <span className="ml-1">Experiencia</span>
      </h2>
      <JobsList />

      <div className="flex gap-4">
        <Button
          href="https://read.cv/educlopez"
          variant="solid"
          className="w-full mt-6 group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Scroll className="w-4 h-4 transition stroke-zinc-600 dark:stroke-zinc-400 group-active:stroke-zinc-900 group-hover:stroke-zinc-900 dark:group-hover:stroke-zinc-100 dark:group-active:stroke-zinc-50" />
          Read.cv
        </Button>
        <Button
          href="2023_eduardo_calvo_lopez_curriculum.pdf"
          variant="solid"
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
