import { allPosts } from 'contentlayer/generated'
import { ChevronLeft } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { ThemeToggle } from '@entities/theme'
import { Mdx } from '@shared/lib/mdx'

import './styles.css'

interface PostProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: PostProps['params']) {
  const slug = params?.slug?.join('/')
  const post = allPosts.find(post => post.slugAsParams === slug)

  if (!post) {
    null
  }

  return post
}

export async function generateMetadata({ params }: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  return {
    description: post.description,
    title: post.title,
  }
}

export async function generateStaticParams(): Promise<PostProps['params'][]> {
  return allPosts.map(post => ({
    slug: post.slugAsParams.split('/'),
  }))
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params)

  if (!post) {
    notFound()
  }

  return (
    <>
      <article className="py-8 px-4 prose dark:prose-invert mx-auto">
        <Link
          className="no-underline items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 mb-8 top-14 inline-flex"
          href="/">
          <ChevronLeft className="w-4 h-4 mr-2" />
          Главная
        </Link>

        <h1 className="mb-2">{post.title}</h1>
        <Mdx code={post.body.code} />
      </article>

      <div className="flex items-center justify-center mt-36 mb-8">
        <ThemeToggle />
      </div>
    </>
  )
}
