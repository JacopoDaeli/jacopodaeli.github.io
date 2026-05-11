'use client'

import { usePathname } from 'next/navigation'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import ThemeSwitch from './ThemeSwitch'

const homeAnchors = [
  { href: '#about', title: 'About' },
  { href: '#experience', title: 'Experience' },
  { href: '#education', title: 'Education' },
]

const Header = () => {
  const pathname = usePathname()
  const isHome = pathname === '/'

  let headerClass = 'flex items-center w-full bg-white dark:bg-gray-950 justify-between py-10'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <header className={headerClass}>
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        <div className="flex items-center justify-between">
          {typeof siteMetadata.headerTitle === 'string' ? (
            <div className="h-6 text-2xl font-semibold">{siteMetadata.headerTitle}</div>
          ) : (
            siteMetadata.headerTitle
          )}
        </div>
      </Link>
      <div className="flex items-center gap-4 leading-5 sm:gap-6">
        {isHome &&
          homeAnchors.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hover:text-primary-500 dark:hover:text-primary-400 hidden font-medium text-gray-900 md:block dark:text-gray-100"
            >
              {link.title}
            </Link>
          ))}
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hover:text-primary-500 dark:hover:text-primary-400 font-medium text-gray-900 dark:text-gray-100"
            >
              {link.title}
            </Link>
          ))}
        <Link
          href="https://calendly.com/jacopodaeli/quick-chat"
          className="border-primary-500 text-primary-500 hover:bg-primary-500 dark:hover:bg-primary-500 rounded-full border px-3 py-1 text-sm font-medium transition-colors hover:text-white"
        >
          Book a call
        </Link>
        <ThemeSwitch />
      </div>
    </header>
  )
}

export default Header
