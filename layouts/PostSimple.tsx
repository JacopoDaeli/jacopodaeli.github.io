import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import PageTitle from '@/components/PageTitle'
import PostDate from '@/components/PostDate'
import PostNav from '@/components/PostNav'
import SectionContainer from '@/components/SectionContainer'

interface LayoutProps {
  content: CoreContent<Blog>
  children: ReactNode
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
}

export default function PostSimple({ content, next, prev, children }: LayoutProps) {
  const { path, date, title } = content
  const basePath = path.split('/')[0]

  return (
    <SectionContainer>
      <article>
        <div>
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 pb-4 text-center">
              <PostDate date={date} />
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>
          <div className="pb-8">
            <div className="divide-y divide-gray-200 xl:col-span-3 xl:row-span-2 xl:pb-0 dark:divide-gray-700">
              <div className="prose dark:prose-invert max-w-none pt-4 pb-8">{children}</div>
            </div>
            <footer>
              <PostNav prev={prev} next={next} basePath={basePath} />
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
