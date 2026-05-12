import Link from '@/components/Link'

interface PostNavItem {
  path: string
  title: string
}

interface PostNavProps {
  prev?: PostNavItem
  next?: PostNavItem
  basePath?: string
}

export default function PostNav({ prev, next, basePath }: PostNavProps) {
  const hasPrevNext = prev?.path || next?.path
  if (!hasPrevNext && !basePath) return null
  return (
    <>
      {hasPrevNext && (
        <div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
          {prev?.path && (
            <div className="pt-4 xl:pt-8">
              <Link
                href={`/${prev.path}`}
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label={`Previous post: ${prev.title}`}
              >
                &larr; {prev.title}
              </Link>
            </div>
          )}
          {next?.path && (
            <div className="pt-4 xl:pt-8">
              <Link
                href={`/${next.path}`}
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label={`Next post: ${next.title}`}
              >
                {next.title} &rarr;
              </Link>
            </div>
          )}
        </div>
      )}
      {basePath && (
        <div className="mt-8 border-t border-gray-200 pt-8 dark:border-gray-700">
          <Link
            href={`/${basePath}`}
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="Back to the blog"
          >
            &larr; Back to the blog
          </Link>
        </div>
      )}
    </>
  )
}
