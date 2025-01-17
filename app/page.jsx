import { allPosts } from '@/.contentlayer/generated';
import Balancer from 'react-wrap-balancer';

import config from '@/config/config';
import Article from '@/components/cards/ArticleCard';
import DialogContact from '@/components/cards/ContactCard';
import { SpotifyPlayer } from '@/components/cards/NowPlaying';
import Stack from '@/components/cards/StackCard';
import StackProject from '@/components/cards/project/CardHome';
import Resume from '@/components/cards/resume/ResumeCard';
import { StatusWork } from '@/components/sections/StatusWork';
import { Avatar } from '@/components/ui/Avatar';
import { Container } from '@/components/ui/Container';
import { SocialLinks } from '@/components/ui/SocialLinks'


export default function Home() {
  const isAvailable = true
  return (
    <>
      <Container className="mt-16 sm:mt-32">
        <div className="max-w-xl">
          <h1 className="sr-only">{config.name}</h1>
          <Avatar size="lg" />
          <Balancer className="mt-2 text-base text-neutral-700 dark:text-white/80">
            <span className="text-2xl font-bold text-neutral-900 dark:text-white">
              {config.name}
            </span>
            <br></br>{config.description}
          </Balancer>
          <StatusWork isAvailable={isAvailable} className="mt-4" />
          <SocialLinks />
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="grid grid-cols-6 gap-4 mb-2 text-left grid-rows-12 sm:grid-rows-7 md:grid-rows-6 lg:grid-rows-2">
          {allPosts
            .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
            .slice(0, 1)
            .map((post) => (
              <Article
                key={post.slug}
                post={post}
                home={true}
                className="overflow-hidden relative col-span-6 h-full sm:col-span-3 md:col-span-3 lg:col-span-3 md:h-80"
              />
            ))}
          <Resume className="relative col-span-6 gap-2 h-80 sm:col-span-3 md:col-span-3 lg:col-span-3" />

          <StackProject className="overflow-hidden relative col-span-6 h-80 sm:col-span-3 md:col-span-3 lg:col-span-2" />
          <div className="grid relative col-span-6 grid-rows-3 gap-4 h-80 sm:col-span-3 md:col-span-3 lg:col-span-2">
            <SpotifyPlayer />
            <DialogContact className="row-span-2" />
          </div>

          <Stack className="relative col-span-6 sm:col-span-3 md:col-span-3 lg:col-span-2" />
        </div>
      </Container>
    </>
  )
}