'use client'

import { MessageCircle } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/Button'
import { Meteors } from '@/components/Meteors'
import { Card } from '@/components/cards/Card'

export default function DialogContact({ className, ...props }) {
  return (
    <Card className={cn('overflow-hidden', className)}>
      <Meteors number={5} />
      <Card.Pill icon={MessageCircle} className="z-10 mb-3">
        Contactar
      </Card.Pill>

      <p className={cn('my-2 text-sm body-secondary')}>
        Te puedo ayudar a establecer el diseño de su sitio web o UI de
        productos.
      </p>
      <div className="flex flex-row gap-2 mt-6">
        <Button href="mailto:contacto@educalvolopez.com">
          Envíame un Email
        </Button>
        <Button
          href="https://x.com/messages/compose?recipient_id=296227502"
          target="_blank"
        >
          DM en Twitter
        </Button>
      </div>
    </Card>
  )
}
