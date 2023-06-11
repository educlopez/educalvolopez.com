import SearchPost from '@/components/SearchPost'
import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata = {
  title: 'Blog',
  description:
    'Escribiendo sobre diseño de interfaces, programación y hobbies.',
  keywords: [
    'diseño de interfaces, programación, hobbies, escritura, LinkedIn',
  ],
}

export default function ArticlesIndex({}) {
  return (
    <>
      <SimpleLayout
        title="Escribiendo sobre diseño de interfaces, programación y hobbies."
        intro={`Cuando no estoy programando, puedes encontrarme escribiendo sobre diseño de interfaces, programación y hobbies. Si quieres saber más sobre mí, echa un vistazo a mi perfil de LinkedIn.`}
      >
        <div className="md:border-l md:border-black/10 md:pl-6 md:dark:border-white/10">
          <SearchPost />
        </div>
      </SimpleLayout>
    </>
  )
}
