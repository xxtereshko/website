'use client'

import * as React from 'react'

import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@shared/shadcn/ui/table'
import { cn } from '@shared/ui'

const components = {
  Image,
  a: ({ ...props }) => (
    <a
      className={cn('font-medium underline underline-offset-4', props.className)}
      {...props}
    />
  ),
  blockquote: ({ ...props }) => (
    <blockquote
      className={cn(
        'mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground',
        props.className,
      )}
      {...props}
    />
  ),
  code: ({ ...props }) => (
    <code
      className={cn(
        'relative rounded border px-[0.3rem] py-[0.2rem] font-mono text-sm max-w-full',
        props.className,
      )}
      {...props}
    />
  ),
  h1: ({ ...props }) => (
    <h1
      className={cn(
        'mt-2 scroll-m-20 text-4xl font-bold tracking-tight',
        props.className,
      )}
      {...props}
    />
  ),
  h2: ({ ...props }) => (
    <h2
      className={cn(
        'mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0',
        props.className,
      )}
      {...props}
    />
  ),
  h3: ({ ...props }) => (
    <h3
      className={cn(
        'mt-8 scroll-m-20 text-2xl font-semibold tracking-tight',
        props.className,
      )}
      {...props}
    />
  ),
  h4: ({ ...props }) => (
    <h4
      className={cn(
        'mt-8 scroll-m-20 text-xl font-semibold tracking-tight',
        props.className,
      )}
      {...props}
    />
  ),
  h5: ({ ...props }) => (
    <h5
      className={cn(
        'mt-8 scroll-m-20 text-lg font-semibold tracking-tight',
        props.className,
      )}
      {...props}
    />
  ),
  h6: ({ ...props }) => (
    <h6
      className={cn(
        'mt-8 scroll-m-20 text-base font-semibold tracking-tight',
        props.className,
      )}
      {...props}
    />
  ),
  hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
  img: ({ alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img alt={alt} className={cn('rounded-md border', props.className)} {...props} />
  ),
  li: ({ ...props }) => <li className={cn('mt-2', props.className)} {...props} />,
  ol: ({ ...props }) => (
    <ol className={cn('my-6 ml-6 list-decimal', props.className)} {...props} />
  ),
  p: ({ ...props }) => (
    <p
      className={cn('leading-7 [&:not(:first-child)]:mt-6', props.className)}
      {...props}
    />
  ),
  pre: ({ ...props }) => (
    <pre
      className={cn(
        'mb-4 mt-6 overflow-x-auto rounded bg-neutral-800  py-4',
        props.className,
      )}
      {...props}
    />
  ),
  table: ({ ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <Table className={cn('my-6', props.className)} {...props} />
  ),
  tbody: ({ ...props }) => <TableBody {...props} />,
  td: ({ ...props }) => <TableCell {...props} />,
  th: ({ ...props }) => <TableHead {...props} />,
  thead: ({ ...props }) => <TableHeader {...props} />,
  tr: ({ ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <TableRow {...props} />
  ),
  ul: ({ ...props }) => (
    <ul className={cn('my-6 ml-6 list-disc', props.className)} {...props} />
  ),
}

type Props = {
  code: string
}

export function Mdx({ code }: Props) {
  const Component = useMDXComponent(code)

  return <Component components={components} />
}
