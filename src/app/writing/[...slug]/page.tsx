import { allWritings } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import { notFound } from 'next/navigation'
import Balancer from 'react-wrap-balancer'

import { Mdx } from '@shared/lib/mdx'

export const runtime = 'edge'

type Props = {
  params: {
    slug: string[]
  }
}

export default async function WritingPage({ params }: Props) {
  const post = allWritings.find(post => post.slugAsParams === params.slug.join('/'))
  if (!post) {
    notFound()
  }

  const date = parseISO(post.date)

  return (
    <div className="content-wrapper">
      <div className="content">
        <div className={'mb-6'}>
          <Balancer
            as="h1"
            className="text-2xl md:text-3xl slashed-zero tracking-tighter text-foreground font-semibold mb-4">
            {post.title}
          </Balancer>

          <time className="block text-sm text-muted-foreground">
            {format(date, 'MMMM dd, yyyy')}
          </time>
        </div>

        <Mdx code={post.body.code} />
      </div>
    </div>
  )
}
