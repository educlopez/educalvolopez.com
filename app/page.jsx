import { allPosts, allProjects } from '@/.contentlayer/generated'
import Balancer from 'react-wrap-balancer'

import { Avatar } from '@/components/Avatar'
import { Container } from '@/components/Container'
import { SocialLinks } from '@/components/SocialLinks'
import { StatusWork } from '@/components/StatusWork'
import ExperienceList from '@/components/Test'
import Article from '@/components/cards/ArticleCard'
import DialogContact from '@/components/cards/ContactCard'
import { SpotifyPlayer } from '@/components/cards/NowPlaying'
import { ProjectCardHome } from '@/components/cards/ProjectCard'
import Resume from '@/components/cards/ResumeCard'
import Stack from '@/components/cards/StackCard'

export default function Home() {
  const isAvailable = true
  return (
    <>
      <Container className="mt-16 sm:mt-32">
        <div className="max-w-xl">
          <h1 className="sr-only">Edu Calvo</h1>
          <Avatar size="lg" />
          <Balancer className="mt-2 text-base text-neutral-700 dark:text-white/80">
            <span className="text-2xl font-bold text-neutral-900 dark:text-white">
              Edu Calvo
            </span>
            <br></br>Soy diseñador web y frontend con sede en Madrid.
            <br></br>
            Trabajo actualmente en Cinetic Digital y como Freelance.
          </Balancer>
          <StatusWork isAvailable={isAvailable} className="mt-4" />
          <SocialLinks />
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="grid grid-cols-6 gap-4 mb-2 text-left grid-rows-12 sm:grid-rows-7 md:grid-rows-6 lg:grid-rows-2 ">
          {allPosts
            .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
            .slice(0, 1)
            .map((post) => (
              <Article
                key={post.slug}
                post={post}
                home={true}
                className="relative col-span-6 overflow-hidden sm:col-span-3 md:col-span-3 lg:col-span-3 h-80"
              />
            ))}
          <Resume className="relative col-span-6 sm:col-span-3 md:col-span-3 lg:col-span-3 h-80" />
          {allProjects
            .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
            .slice(0, 1)
            .map((project) => (
              <ProjectCardHome
                key={project.title}
                project={project}
                github={true}
                className="relative col-span-6 overflow-hidden sm:col-span-3 md:col-span-3 lg:col-span-2 h-80"
              />
            ))}
          <div className="relative grid col-span-6 grid-rows-3 gap-4 sm:col-span-3 md:col-span-3 lg:col-span-2 h-80">
            <SpotifyPlayer />
            <DialogContact className="row-span-2" />
          </div>

          <Stack className="relative col-span-6 sm:col-span-3 md:col-span-3 lg:col-span-2 " />
        </div>
      </Container>
    </>
  )
}
