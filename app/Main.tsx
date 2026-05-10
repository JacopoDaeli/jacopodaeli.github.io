import Image from '@/components/Image'
import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import ExperienceList from '@/components/ExperienceList'
import { education, interests } from '@/data/resume'
import { formatDate } from 'pliny/utils/formatDate'
import type { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'

const MAX_POSTS = 3

export default function Home({ posts }: { posts: CoreContent<Blog>[] }) {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-800">
      <Hero />
      <About />
      <Experience />
      <Education />
      <Interests />
      <Writing posts={posts} />
      <Contact />
    </div>
  )
}

function Hero() {
  return (
    <section className="flex flex-col items-start gap-6 py-12 sm:flex-row sm:items-center sm:gap-10 md:py-16">
      <Image
        src="/static/images/profile.jpg"
        alt="Jacopo Daeli"
        width={144}
        height={144}
        priority
        className="h-28 w-28 rounded-full object-cover ring-1 ring-gray-200 sm:h-36 sm:w-36 dark:ring-gray-800"
      />
      <div className="space-y-3">
        <h1 className="text-4xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-gray-100">
          Jacopo Daeli
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Distinguished Engineer @ Palo Alto Networks · New York, NY
        </p>
        <p className="font-mono text-sm text-gray-500 dark:text-gray-400">
          Building AI-driven security platforms. 15+ years shipping enterprise software.
        </p>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="py-10">
      <SectionHeading>About</SectionHeading>
      <div className="space-y-4 text-gray-700 dark:text-gray-300">
        <p>
          I'm a software engineering leader with an entrepreneurial mindset and 15+ years of
          experience designing, developing, and delivering complex enterprise software. I work
          across Go, Python, TypeScript, and C/C++ — and I'm equally comfortable in distributed
          backend systems, frontend platforms, and the cloud infrastructure that ties them together.
        </p>
        <p>
          Currently, I'm leading the architecture and implementation of a next-generation AI-driven
          threat intelligence and incident response platform at Palo Alto Networks, mentoring a
          distributed team of 10+ engineers along the way.
        </p>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="py-10">
      <SectionHeading>Selected Experience</SectionHeading>
      <ExperienceList />
    </section>
  )
}

function Education() {
  return (
    <section className="py-10">
      <SectionHeading>Education</SectionHeading>
      <ul className="space-y-4">
        {education.map((degree) => (
          <li key={degree.school} className="flex flex-wrap items-baseline gap-x-2">
            <span className="font-semibold text-gray-900 dark:text-gray-100">{degree.school}</span>
            <span className="text-gray-500 dark:text-gray-400">
              {degree.degree}, {degree.field}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Interests() {
  return (
    <section className="py-10">
      <SectionHeading>Interests</SectionHeading>
      <div className="flex flex-wrap gap-3">
        {interests.map((interest) => (
          <span
            key={interest}
            className="rounded-full border border-gray-200 px-4 py-1.5 font-mono text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300"
          >
            {interest}
          </span>
        ))}
      </div>
    </section>
  )
}

function Writing({ posts }: { posts: CoreContent<Blog>[] }) {
  return (
    <section className="py-10">
      <div className="flex items-baseline justify-between">
        <SectionHeading className="mb-0">Writing</SectionHeading>
        {posts.length > 0 && (
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-sm font-medium"
          >
            All posts &rarr;
          </Link>
        )}
      </div>
      {posts.length === 0 ? (
        <p className="mt-6 text-gray-500 dark:text-gray-400">No posts yet.</p>
      ) : (
        <ul className="mt-6 space-y-8">
          {posts.slice(0, MAX_POSTS).map((post) => (
            <li key={post.slug}>
              <article className="space-y-1">
                <time
                  dateTime={post.date}
                  className="font-mono text-xs text-gray-500 dark:text-gray-400"
                >
                  {formatDate(post.date, siteMetadata.locale)}
                </time>
                <h3 className="text-xl font-semibold tracking-tight">
                  <Link href={`/blog/${post.slug}`} className="text-gray-900 dark:text-gray-100">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{post.summary}</p>
              </article>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

function Contact() {
  return (
    <section className="py-10">
      <SectionHeading>Contact</SectionHeading>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Always happy to talk about engineering leadership, AI security, and distributed systems.
      </p>
      <div className="flex items-center gap-4">
        <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
        <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
        <SocialIcon kind="github" href={siteMetadata.github} size={6} />
      </div>
    </section>
  )
}

function SectionHeading({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <h2
      className={`text-xs font-semibold tracking-widest text-gray-500 uppercase dark:text-gray-400 ${
        className || 'mb-6'
      }`}
    >
      {children}
    </h2>
  )
}
