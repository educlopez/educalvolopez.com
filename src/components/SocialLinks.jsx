import Link from 'next/link';
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon
} from '@/components/SocialIcons';

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-600 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
}

export default function SocialLinks({}) {
  return (
    <div className="mt-6 flex gap-6">
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
  );
}
