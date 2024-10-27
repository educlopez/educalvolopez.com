import Balancer from 'react-wrap-balancer';



import config from '@/config/config'
import { Phototab } from '@/components/sections/PhotoTab';
import { Reviews } from '@/components/sections/Reviews';
import { Container } from '@/components/ui/Container';
import { SocialText } from '@/components/ui/SocialLinks';


export const metadata = {
  title: 'About',
  description: 'Diseñador web y Frontend con sede en Madrid',
  keywords: [
    'Diseñador web, frontend, maquetador, creatividad, habilidades de comunicación visual, resolución de problemas, interfaces de usuario, diseños responsive, clientes , empresas',
  ],
}

export default function About() {
  return (
    <>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Phototab />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="title-primary">
              <Balancer>
                {config.abouttitle}
              </Balancer>
            </h1>
            <div className="mt-6 space-y-7 text-base body-secondary">
              <p>
                {config.aboutbody}
              </p>
            </div>
          </div>
          <SocialText />
        </div>
        <Reviews />
      </Container>
    </>
  )
}