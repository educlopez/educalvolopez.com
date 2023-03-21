import { Github, Instagram, Linkedin, Mail, Twitter } from 'lucide-react'

import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  ReadcvIcon,
  TwitterIcon,
} from '@/components/SocialIcons'

export const generalLinks = [
  {
    href: '/about',
    label: 'About',
  },
  {
    href: '/blog',
    label: 'Blog',
  },
  {
    href: '/proyectos',
    label: 'Proyectos',
  },
  {
    href: '/recomendaciones',
    label: 'Recomendaciones',
  },
  {
    href: 'https://shop.educalvolopez.com',
    label: 'Tienda',
    target: '_blank',
  },
  {
    href: '/rss/feed.xml',
    label: 'Rss',
  },
]

export const linksSocial = [
  {
    href: 'https://twitter.com/educlopez93',
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
    icon: ReadcvIcon,
    label: 'Read.cv',
    outline: false,
  },
  {
    href: 'mailto:educalvolopez@gmail.com',
    icon: Mail,
    label: 'Enviar Correo',
    outline: true,
  },
]
