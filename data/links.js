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
import config from '@/config/config';

export const generalLinks = [
  {
    href: config.links.home,
    label: 'Inicio',
    icon: 'Avatar',
  },
  {
    href: config.links.about,
    label: 'About',
    icon: User,
  },
  {
    href: config.links.blog,
    label: 'Blog',
    icon: BookOpen,
  },
  {
    href: config.links.projects,
    label: 'Proyectos',
    icon: Code,
  },
  {
    href: config.links.stack,
    label: 'Stack',
    icon: Layers,
  },
  {
    href: config.links.shop,
    label: 'Tienda',
    target: '_blank',
    icon: ShoppingCart,
  },
]

export const linksSocial = [
  {
    href: config.socialLinks.twitter,
    icon: Twitter,
    label: 'Seguir en Twitter',
    outline: true,
  },
  {
    href: config.socialLinks.instagram,
    icon: Instagram,
    label: 'Seguir en Instagram',
    outline: true,
  },
  {
    href: config.socialLinks.github,
    icon: Github,
    label: 'Seguir en GitHub',
    outline: true,
  },
  {
    href: config.socialLinks.linkedin,
    icon: Linkedin,
    label: 'Seguir en LinkedIn',
    outline: true,
  },
  {
    href: config.socialLinks.readcv,
    icon: Scroll,
    label: 'Read.cv',
    outline: true,
  },
  {
    href: config.links.email,
    icon: Mail,
    label: 'Enviar Correo',
    outline: true,
  },
]
