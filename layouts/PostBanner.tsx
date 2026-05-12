import { ReactNode } from 'react'
import Image from '@/components/Image'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import PageTitle from '@/components/PageTitle'
import PostDate from '@/components/PostDate'
import PostNav from '@/components/PostNav'
import SectionContainer from '@/components/SectionContainer'
import siteMetadata from '@/data/siteMetadata'

interface LayoutProps {
  content: CoreContent<Blog>
  children: ReactNode
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
}

export default function PostBanner({ content, next, prev, children }: LayoutProps) {
  const { path, date, title, images } = content
  const basePath = path.split('/')[0]
  const displayImage = images && images.length > 0 ? images[0] : siteMetadata.socialBanner

  return (
    <SectionContainer>
      <article>
        <div>
          <div className="space-y-1 pt-6 pb-6 text-center dark:border-gray-700">
            <PostDate date={date} />
            <div className="relative">
              <PageTitle>{title}</PageTitle>
            </div>
            <div className="pt-10">
              <div className="relative aspect-2/1 w-full">
                <Image src={displayImage} alt={title} fill className="object-cover" />
              </div>
            </div>
          </div>
          <div className="prose dark:prose-invert max-w-none pt-6 pb-8">{children}</div>
          <footer>
            <PostNav prev={prev} next={next} basePath={basePath} />
          </footer>
        </div>
      </article>
    </SectionContainer>
  )
}
