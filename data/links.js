import {
  BookOpen,
  Code,
  Github,
  Instagram,
  Layers,
  Linkedin,
  Mail,
  Scroll,
  ShoppingCart,
  Twitter,
  User,
} from 'lucide-react'

export const generalLinks = [
  {
    href: '/',
    label: 'Inicio',
    icon: 'Avatar',
  },
  {
    href: '/about',
    label: 'About',
    icon: User,
  },
  {
    href: '/blog',
    label: 'Blog',
    icon: BookOpen,
  },
  {
    href: '/proyectos',
    label: 'Proyectos',
    icon: Code,
  },
  {
    href: '/stack',
    label: 'Stack',
    icon: Layers,
  },
  {
    href: 'https://educalvolopez.lemonsqueezy.com/',
    label: 'Tienda',
    target: '_blank',
    icon: ShoppingCart,
  },
]

export const linksSocial = [
  {
    href: 'https://twitter.com/educalvolpz',
    icon: Twitter,
    label: 'Seguir en Twitter',
    outline: true,
  },
  {
    href: 'https://instagram.com/edui_design/',
    icon: Instagram,
    label: 'Seguir en Instagram',
    outline: true,
  },
  {
    href: 'https://github.com/educlopez',
    icon: Github,
    label: 'Seguir en GitHub',
    outline: true,
  },
  {
    href: 'https://linkedin.com/in/educlopez',
    icon: Linkedin,
    label: 'Seguir en LinkedIn',
    outline: true,
  },
  {
    href: 'https://read.cv/educlopez',
    icon: Scroll,
    label: 'Read.cv',
    outline: true,
  },
  {
    href: 'mailto:educalvolopez@gmail.com',
    icon: Mail,
    label: 'Enviar Correo',
    outline: true,
  },
]
