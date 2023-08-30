import { MessageCircle } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Card } from '@/components/cards/Card'
import { Button } from '@/components/ui/Button'
import { Meteors } from '@/components/ui/Meteors'

export default function DialogContact({ className, ...props }) {
  return (
    <Card className={cn('overflow-hidden', className)}>
      <Meteors number={5} />
      <Card.Pill icon={MessageCircle} className="z-10 mb-3">
        Contactar
      </Card.Pill>

      <p className={cn('my-2 text-sm body-secondary')}>
        Construyendo experiencias digitales excepcionales. ¡Hablemos de tu
        proyecto!
      </p>
      <div className="flex flex-row w-full gap-2 mt-6">
        <Button
          styleBtn="boxgen"
          className="w-1/2"
          href="mailto:contacto@educalvolopez.com"
        >
          Envíame un Email
        </Button>
        <Button
          styleBtn="boxgen"
          className="w-1/2"
          href="https://x.com/messages/compose?recipient_id=296227502"
          target="_blank"
        >
          DM en Twitter
        </Button>
      </div>
    </Card>
  )
}
