'use client';

import { useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';


import { Button } from '@/components/Button';

function isInputNamedElement(e){
  return 'value' in e && 'name' in e
}

export default function ContactForm() {
   const [state, setState] = useState();

  async function handleSubmit(e) {
    e.preventDefault()
    const formData = {};

    Array.from(e.currentTarget.elements).filter(isInputNamedElement).forEach((field) => {
        if (!field.name) return;
        formData[field.name] = field.value;
    });

    setState('loading');

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
    <form
      onSubmit={handleSubmit}
      className="p-6 border rounded-2xl border-black/10 bg-neutral-50/70 backdrop-blur-sm dark:border-white/10 dark:bg-neutral-900/20 dark:backdrop-blur"
    >
      <h2 className="flex text-sm font-semibold text-neutral-900 dark:text-neutral-100">
        <MessageCircle className="flex-none w-6 h-6" />
        <span className="ml-3">Contactar</span>
      </h2>
      <p className="mt-2 text-sm text-neutral-900 dark:text-neutral-100">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="flex flex-col gap-4 mt-6">
        <input
          type="name"
          id="firstname"
          placeholder="Nombre"
          aria-label="Nombre"
          required=""
          className="relative w-full h-8 pl-2 text-base border rounded-md resize-none text-neutral-900 dark:text-neutral-100 bg-neutral-50/70 border-black/10 dark:border-white/10 dark:bg-neutral-900/20 placeholder-neutral-400 invalid:text-red-500 sm:text-sm dark:bg-quaternary dark:placeholder-gray-500 focus:ring-2 focus:invalid:text-white focus:invalid:border-blue-600 focus:ring-blue-100 focus:invalid: dark:focus:ring-blue-600/40"
        />
        <input
          type="email"
          id="email"
          placeholder="Email"
          aria-label="Email"
          required=""
          className="relative w-full h-8 pl-2 text-base border rounded-md resize-none text-neutral-900 dark:text-neutral-100 bg-neutral-50/70 border-black/10 dark:border-white/10 dark:bg-neutral-900/20 placeholder-neutral-400 invalid:text-red-500 sm:text-sm dark:bg-quaternary dark:placeholder-gray-500 focus:ring-2 focus:invalid:text-white focus:invalid:border-blue-600 focus:ring-blue-100 focus:invalid: dark:focus:ring-blue-600/40"
        />
        <textarea
          id="message"
          placeholder="How can I help you?"
          rows="4"
          className="relative w-full h-8 pl-2 text-base border rounded-md resize-none text-neutral-900 dark:text-neutral-100 bg-neutral-50/70 border-black/10 dark:border-white/10 dark:bg-neutral-900/20 placeholder-neutral-400 invalid:text-red-500 sm:text-sm dark:bg-quaternary dark:placeholder-gray-500 focus:ring-2 focus:invalid:text-white focus:invalid:border-blue-600 focus:ring-blue-100 focus:invalid: dark:focus:ring-blue-600/40"
          required
        />
      </div>
      <Button type="submit" variant="solid" className="w-full mt-6 group">
        <Send className="w-4 h-4 transition stroke-zinc-600 dark:stroke-zinc-400 group-active:stroke-zinc-900 group-hover:stroke-zinc-900 dark:group-hover:stroke-zinc-100 dark:group-active:stroke-zinc-50" />
        Envíar
      </Button>
    </form>
  )
}