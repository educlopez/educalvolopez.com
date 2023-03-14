import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="p-1 -m-1 group" {...props}>
      <Icon className="w-6 h-6 transition fill-zinc-600 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

export default function SocialLinks({}) {
  return (
    <div className="flex gap-6 mt-6 ">
      <div className="relative group">
        <div className="transition-all translate-y-5 opacity-0 group-hover:translate-y-3 group-hover:opacity-100">
          <div className="relative flex items-center group">
            <ArrowUpRight className="absolute w-4 h-4 transition-all opacity-0 group-hover:translate-x-1 group-hover:opacity-100" />
          </div>
        </div>
        <SocialLink
          href="https://twitter.com/educlopez93"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Follow on Twitter"
          className="transition-all group-hover:opacity-20 group-hover:blur-sm sm:h-7 blur-0 grayscale-0"
          icon={TwitterIcon}
        />
      </div>
      <div className="relative group">
        <div className="transition-all translate-y-5 opacity-0 group-hover:translate-y-3 group-hover:opacity-100">
          <div className="relative flex items-center group">
            <ArrowUpRight className="absolute w-4 h-4 transition-all opacity-0 group-hover:translate-x-1 group-hover:opacity-100" />
          </div>
        </div>
        <SocialLink
          href="https://instagram.com/edui_design/"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Follow on Instagram"
          className="transition-all group-hover:opacity-20 group-hover:blur-sm sm:h-7 blur-0 grayscale-0"
          icon={InstagramIcon}
        />{' '}
      </div>
      <div className="relative group">
        <div className="transition-all translate-y-5 opacity-0 group-hover:translate-y-3 group-hover:opacity-100">
          <div className="relative flex items-center group">
            <ArrowUpRight className="absolute w-4 h-4 transition-all opacity-0 group-hover:translate-x-1 group-hover:opacity-100" />
          </div>
        </div>
        <SocialLink
          href="https://github.com/educlopez"
          rel="noopener noreferrer"
          target="_blank"
          className="transition-all group-hover:opacity-20 group-hover:blur-sm sm:h-7 blur-0 grayscale-0"
          aria-label="Follow on GitHub"
          icon={GitHubIcon}
        />{' '}
      </div>
      <div className="relative group">
        <div className="transition-all translate-y-5 opacity-0 group-hover:translate-y-3 group-hover:opacity-100">
          <div className="relative flex items-center group">
            <ArrowUpRight className="absolute w-4 h-4 transition-all opacity-0 group-hover:translate-x-1 group-hover:opacity-100" />
          </div>
        </div>
        <SocialLink
          href="https://linkedin.com/in/educlopez"
          rel="noopener noreferrer"
          target="_blank"
          className="transition-all group-hover:opacity-20 group-hover:blur-sm sm:h-7 blur-0 grayscale-0"
          aria-label="Follow on LinkedIn"
          icon={LinkedInIcon}
        />{' '}
      </div>
    </div>
  )
}
