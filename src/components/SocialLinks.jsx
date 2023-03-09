import Link from 'next/link'

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
    <div className="flex gap-6 mt-6">
      <SocialLink
        href="https://twitter.com/educlopez93"
        rel="noopener noreferrer"
        target="_blank"
        aria-label="Follow on Twitter"
        icon={TwitterIcon}
      />
      <SocialLink
        href="https://instagram.com/educlopez93"
        rel="noopener noreferrer"
        target="_blank"
        aria-label="Follow on Instagram"
        icon={InstagramIcon}
      />
      <SocialLink
        href="https://github.com/educlopez"
        rel="noopener noreferrer"
        target="_blank"
        aria-label="Follow on GitHub"
        icon={GitHubIcon}
      />
      <SocialLink
        href="https://linkedin.com/in/educlopez"
        rel="noopener noreferrer"
        target="_blank"
        aria-label="Follow on LinkedIn"
        icon={LinkedInIcon}
      />
    </div>
  )
}
