'use client'

import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { MessageCircle, Send, X } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Card } from '@/components/cards/Card'
import { Button } from '@/components/ui/Button'

function isInputNamedElement(e) {
  return 'value' in e && 'name' in e
}

function ContactForm() {
  const [state, setState] = useState()

  async function handleOnSubmit(e) {
    e.preventDefault()
    const formData = {}

    Array.from(e.currentTarget.elements)
      .filter(isInputNamedElement)
      .forEach((field) => {
        if (!field.name) return
        formData[field.name] = field.value
      })

    setState('loading')

    await fetch('/api/send', {
      method: 'POST',
      body: JSON.stringify({
        firstName: formData.firstName,
        email: formData.email,
        message: formData.message,
      }),
    })

    setState('ready')
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <div className="flex flex-col gap-4 mt-6">
        <input
          type="name"
          id="firstName"
          name="firstName"
          placeholder="Nombre"
          aria-label="Nombre"
          required=""
          className="relative w-full h-8 pl-2 text-base border rounded-md resize-none text-neutral-900 dark:text-neutral-100 bg-neutral-50/70 border-zinc-400/40 dark:border-white/10 dark:bg-neutral-900/20 placeholder-neutral-400 invalid:text-red-500 sm:text-sm dark:bg-quaternary dark:placeholder-neutral-400 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-600/40"
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          aria-label="Email"
          required=""
          className="relative w-full h-8 pl-2 text-base border rounded-md resize-none text-neutral-900 dark:text-neutral-100 bg-neutral-50/70 border-zinc-400/40 dark:border-white/10 dark:bg-neutral-900/20 placeholder-neutral-400 invalid:text-red-500 sm:text-sm dark:bg-quaternary dark:placeholder-neutral-400 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-600/40"
        />
        <textarea
          id="message"
          name="message"
          placeholder="Cuéntame que necesitas"
          rows="3"
          className="relative w-full pl-2 text-base border rounded-md resize-none text-neutral-900 dark:text-neutral-100 bg-neutral-50/70 border-zinc-400/40 dark:border-white/10 dark:bg-neutral-900/20 placeholder-neutral-400 invalid:text-red-500 sm:text-sm dark:bg-quaternary dark:placeholder-neutral-400 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-600/40"
          required
        />
      </div>
      <Button type="submit" styleBtn="solid" className="w-full mt-6 group">
        <Send className="w-4 h-4 transition stroke-zinc-600 dark:stroke-zinc-400 group-active:stroke-zinc-900 group-hover:stroke-zinc-900 dark:group-hover:stroke-zinc-100 dark:group-active:stroke-zinc-50" />
        Envíar
      </Button>
    </form>
  )
}

export default function DialogContact({ className, ...props }) {
  return (
    <Dialog.Root>
      <Card className={cn(className)}>
        <Card.Pill icon={MessageCircle} className="mb-3">
          Contactar
        </Card.Pill>

        <p className={cn('my-2 text-sm body-secondary')}>
          Pregúntame lo que quieras, estaré encantado de responderte.
        </p>
        <div className="flex flex-row gap-4 mt-6">
          <Dialog.Trigger asChild>
            <button
              className={cn(
                'inline-flex items-center gap-2 justify-center overflow-hidden rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none h-[30px] transform-gpu touch-none select-none border border-none border-transparent bg-white dark:bg-zinc-800 font-semibold leading-none text-neutral-700 hover:text-neutral-900 dark:text-zinc-300 dark:hover:text-zinc-100 shadow-button-light dark:shadow-button-dark after:absolute after:-inset-[1px] after:block  after:bg-gradient-to-t after:from-black/5 after:opacity-50 after:transition-opacity hover:after:opacity-100 focus-visible:border-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 disabled:cursor-not-allowed disabled:opacity-50 dark:after:from-black/[0.15] dark:focus-visible:ring-blue-600'
              )}
            >
              Enviar correo
            </button>
          </Dialog.Trigger>
          <Button href="">Dm en Twitter</Button>
        </div>
      </Card>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white dark:bg-neutral-900 p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full dark:border-neutral-800">
          <Dialog.Title>Contacto</Dialog.Title>
          <Dialog.Description>
            Make changes to your profile here. Click save when you are done.
          </Dialog.Description>

          <ContactForm />

          <Dialog.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white dark:ring-offset-neutral-900 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="w-4 h-4" />
            <span className="sr-only">Cerrar</span>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
