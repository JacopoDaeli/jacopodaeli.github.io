import Link from '@/components/Link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
      <div className="space-x-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-6xl leading-9 font-extrabold tracking-tight text-gray-900 md:border-r-2 md:px-6 md:text-8xl md:leading-14 dark:text-gray-100">
          404
        </h1>
      </div>
      <div className="max-w-md">
        <p className="mb-4 text-xl leading-normal font-bold md:text-2xl">Page not found.</p>
        <p className="mb-8">Either I broke a link, or this page never existed. Head home.</p>
        <Link
          href="/"
          className="border-primary-500 text-primary-500 hover:bg-primary-500 dark:hover:bg-primary-500 inline-block rounded-full border px-3 py-1 text-sm leading-5 font-medium transition-colors hover:text-white"
        >
          Back to homepage
        </Link>
      </div>
    </div>
  )
}
