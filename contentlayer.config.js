import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    resolve: doc => `/${doc._raw.flattenedPath}`,
    type: 'string',
  },
  slugAsParams: {
    resolve: doc => doc._raw.flattenedPath.split('/').slice(1).join('/'),
    type: 'string',
  },
}

export const Writing = defineDocumentType(() => ({
  computedFields,
  contentType: 'mdx',
  fields: {
    date: {
      required: true,
      type: 'date',
    },
    description: {
      type: 'string',
    },
    title: {
      required: true,
      type: 'string',
    },
  },
  filePathPattern: `writing/**/*.mdx`,
  name: 'Writing',
}))

export default makeSource({
  contentDirPath: './src/shared/content',
  documentTypes: [Writing],
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: 'one-dark-pro',
          onVisitHighlightedLine(node) {
            node.properties.className.push('line--highlighted')
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ['word--highlighted']
          },
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }]
            }
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            ariaLabel: 'Link to section',
            className: ['subheading-anchor'],
          },
        },
      ],
    ],
    remarkPlugins: [remarkGfm],
  },
})
