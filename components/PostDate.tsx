import siteMetadata from '@/data/siteMetadata'

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

interface PostDateProps {
  date: string
  className?: string
}

export default function PostDate({ date, className }: PostDateProps) {
  return (
    <dl className={className}>
      <div>
        <dt className="sr-only">Published on</dt>
        <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
          <time dateTime={date}>
            {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
          </time>
        </dd>
      </div>
    </dl>
  )
}
