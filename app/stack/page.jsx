import { SwitchTool } from '@/components/stack/SwitchTool'
import { SimpleLayout } from '@/components/ui/SimpleLayout'

export const metadata = {
  title: 'Stack',
  description:
    'El software que uso, los dispositivos que amo y otras cosas que recomiendo.',
  keywords: [
    'software recomendado, dispositivos tecnológicos, productividad, herramientas de creación de sitios web, procrastinación',
  ],
}

export default function Uses() {
  return (
    <SimpleLayout
      title="El software que uso, los dispositivos que amo y otras cosas que recomiendo."
      intro="Las cosas que uso para crear webs, mantenerme productivo o comprar para engañarme y pensar que estoy siendo productivo cuando en realidad solo estoy procrastinando. Aquí hay una gran lista de todas mis cosas favoritas.  Algunas recomendaciones pueden contener enlaces de afilidados."
    >
      <SwitchTool />
    </SimpleLayout>
  )
}
