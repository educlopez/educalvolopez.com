import { allPosts } from '@/.contentlayer/generated'
import Balancer from 'react-wrap-balancer'

import Article from '@/components/ArticleCard'
import ContactForm from '@/components/ContactForm'
import { Container } from '@/components/Container'
import Resume from '@/components/Resume'
import { SocialLinks } from '@/components/SocialLinks'
import { StatusWork } from '@/components/StatusWork'
import Toasty from '@/components/Toast'

export default function Home() {
  const isAvailable = true
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-xl">
          <h1 className="sr-only">Edu Calvo</h1>

          <Balancer className="text-base text-neutral-700 dark:text-white/80">
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
        <div className="grid max-w-xl grid-cols-1 mx-auto gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16 pt-5">
            {allPosts
              .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
              .slice(0, 3)
              .map((post) => (
                <Article key={post.slug} post={post} home={true} />
              ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <ContactForm />
            <Resume />
          </div>
        </div>
      </Container>
      <Toasty />
    </>
  )
}
