import { openprojects, projects } from '@/data/projects'

import Clients from '@/components/Clients'
import ProjectCard from '@/components/ProjectCard'
import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata = {
  title: 'Proyectos',
  description: 'Proyectos que he realizado durante mi carrera.',
  keywords: [
    'proyectos de carrera, colaboración con grandes marcas, ayuda a pequeños negocios, calidad en trabajo',
  ],
}

export default function Projects() {
  return (
    <>
      <SimpleLayout
        title="Proyectos que he realizado durante mi carrera."
        intro="¿No sabes por dónde empezar? He trabajado en montones de pequeños y grandes proyectos a lo largo de los años, pero estos son los que más me enorgullecen. Muchos de ellos son privados y no podré mostrarlos a continuación."
      >
        <h2 className="mb-10 text-2xl font-bold tracking-tight body-primary sm:text-2xl">
          Side Projects
        </h2>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {openprojects.map((project) => (
            <ProjectCard key={project.name} project={project} github={true} />
          ))}
        </ul>
        <h2 className="mt-16 mb-10 text-2xl font-bold tracking-tight body-primary sm:text-2xl">
          Proyectos
        </h2>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} github={false} />
          ))}
        </ul>
        <Clients />
      </SimpleLayout>
    </>
  )
}
