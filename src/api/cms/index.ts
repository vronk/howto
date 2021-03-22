import withShiki from '@stefanprobst/rehype-shiki'
import excerptMarkdown from '@stefanprobst/remark-excerpt'
import parseYamlFrontmatter from '@stefanprobst/remark-extract-yaml-frontmatter'
import { promises as fs } from 'fs'
import matter from 'gray-matter'
import path from 'path'
import withHeadingLinks from 'rehype-autolink-headings'
import withHeadingIds from 'rehype-slug'
import toHtml from 'rehype-stringify'
import withFootnotes from 'remark-footnotes'
import withFrontmatter from 'remark-frontmatter'
import withGfm from 'remark-gfm'
import fromMarkdown from 'remark-parse'
import toHast from 'remark-rehype'
import toMarkdown from 'remark-stringify'
import stripMarkdown from 'strip-markdown'
import unified from 'unified'
import * as YAML from 'yaml'

import type { ISODateString } from '@/lib/ts/aliases'
import type { SiteLocale } from '~/config/site.config'

const basePath = path.resolve('content')
const postBasePath = path.join(basePath, 'posts')
const personBasePath = path.join(basePath, 'persons')
const tagBasePath = path.join(basePath, 'tags')
const pageBasePath = path.join(basePath, 'pages')

const postExtension = '.md'
const personExtension = '.yml'
const tagExtension = '.yml'
const pageExtension = '.md'

// TODO:
// - module level cache, then we can use only 1 processor for everything (full, excerpt, metadata-only)

/**
 * Markdown processor.
 *
 * Supports YAML frontmatter, GitHub markdown (strikethrough etc.), and footnotes.
 * HTML in markdown is intentionally not supported.
 */
const md = unified()
  .use(fromMarkdown)
  .use(withFrontmatter)
  .use(parseYamlFrontmatter)
  .use(withGfm)
  .use(withFootnotes)
  .use(toHast)
  .use(withShiki)
  .use(
    /**
     * Adds `loading="lazy"` attribute to HTML `img` element.
     */
    function attacher() {
      /* eslint-disable */
      const visit = require('unist-util-visit')

      return transformer

      function transformer(tree: any) {
        visit(tree, 'element', visitor)

        function visitor(node: any) {
          if (node.tagName !== 'img') return

          node.properties = node.properties || {}
          node.properties.loading = 'lazy'
        }
      }
      /* eslint-enable */
    },
  )
  .use(withHeadingIds)
  .use(
    /**
     * Attaches table of contents to `vfile.data.tableOfContents`.
     */
    function attacher() {
      /* eslint-disable */
      const visit = require('unist-util-visit')
      const rank = require('hast-util-heading-rank')
      const has = require('hast-util-has-property')
      const toString = require('hast-util-to-string')

      return transformer

      function transformer(tree: any, vfile: any) {
        const headings: Array<any> = []

        visit(tree, 'element', visitor)

        vfile.data.tableOfContents = createTree(headings)

        function visitor(node: any) {
          const depth = rank(node)
          // TODO: maxDepth
          if (depth && has(node, 'id')) {
            headings.push({
              value: toString(node),
              depth,
              id: node.properties.id,
              // children: [],
            })
          }
        }

        function createTree(headings: Array<any>) {
          const tree: Record<string, any> = {}

          headings?.forEach((heading) => {
            const depth = heading.depth
            tree[depth] = tree[depth] ?? heading
            tree[depth - 1] = tree[depth - 1] ?? { children: [] }
            tree[depth - 1].children = tree[depth - 1].children ?? []
            tree[depth - 1].children.push(heading)
          })

          if (Object.values(tree).length === 0) return []

          return Object.values(tree)[0].children ?? []
        }
      }
      /* eslint-enable */
    },
  )
  .use(withHeadingLinks, {
    /**
     * Adds links to headings.
     *
     * Currently follows the pattern also used on GitHub:
     * prepend the heading-content with an aria-hidden link.
     *
     * Potentially more accecssible approaches:
     * - https://github.com/remarkjs/remark-autolink-headings/issues/49#issuecomment-553945053
     * - https://github.com/remarkjs/remark-autolink-headings/issues/49#issuecomment-553654194
     */
    /* eslint-disable */
    content(node: any) {
      node.properties = node.properties || {}
      node.properties.className = node.properties.className || []
      node.properties.className.push('relative')
      node.properties.className.push('group')

      return [
        {
          type: 'element',
          tagName: 'span',
          properties: {
            className: [
              'absolute',
              'top-0',
              'right-full',
              'pr-2',
              'text-gray-500',
              'no-underline',
              'transition',
              'opacity-0',
              'group-hover:opacity-100',
            ],
          },
          children: [{ type: 'text', value: '#' }],
        },
      ]
    },
    /* eslint-enable */
  })
  .use(toHtml)

/**
 * Markdown processor for plain text excerpt.
 *
 * Supports YAML frontmatter, GitHub markdown (strikethrough etc.), and footnotes.
 */
const excerpt = unified()
  .use(fromMarkdown)
  .use(withFrontmatter)
  .use(parseYamlFrontmatter)
  .use(withGfm)
  .use(withFootnotes)
  .use(excerptMarkdown, { maxLength: 280 })
  .use(stripMarkdown)
  .use(toMarkdown)

export interface CmsPostBaseMetadata {
  title: string
  date: ISODateString
  abstract: string
}

export interface CmsPostBase {
  id: string
  metadata: CmsPostBaseMetadata
}

/**
 * Returns list of posts with abstracts.
 */
export async function getCmsPostsOverview(
  locale: SiteLocale,
): Promise<Array<CmsPostBase>> {
  const folderPath = path.join(postBasePath, locale)
  const folderContents = await fs.readdir(folderPath)

  const data: Array<CmsPostBase> = await Promise.all(
    folderContents.map(async (file) => {
      const filePath = path.join(folderPath, file)
      const fileContents = await fs.readFile(filePath, { encoding: 'utf-8' })
      const processed = await excerpt.process(fileContents)

      const abstract = processed.toString().trim()
      const { frontmatter } = processed.data as {
        frontmatter: CmsPostMetadata
      }

      const metadata = {
        title: frontmatter.shortTitle ?? frontmatter.title,
        date: frontmatter.date,
        abstract: frontmatter.abstract ?? abstract,
      }

      return { id: file.slice(0, -postExtension.length), metadata }
    }),
  )

  data.sort((a, b) => (a.metadata.date > b.metadata.date ? -1 : 1))

  return data
}

export interface CmsPostMetadata extends Omit<CmsPostBaseMetadata, 'abstract'> {
  shortTitle?: string
  // dateModified: ISODateString
  abstract?: string
  authors?: Array<CmsPerson>
  // featuredImage: string
  // contributors: Array<string>
  editors?: Array<CmsPerson>
  // categories: Array<string>
  tags?: Array<CmsTag>
  // type: 'training-module'
  // domain: 'Social Sciences and Humanities'
  // targetGroup: string
  // version?: string
  // toc?: boolean
  // lang: 'en'
  // license: string
  // pid: string
  // remotePublisher: string
  // remotePublicationDate: ISODateString
  // remoteUrl: string
}

export interface TableOfContentsLevel {
  value: string
  depth: number
  id: string
  children?: Array<TableOfContentsLevel>
}

export interface CmsPost {
  id: string
  html: string
  metadata: CmsPostMetadata
  tableOfContents: Array<TableOfContentsLevel>
}

/**
 * Returns post.
 */
export async function getCmsPostById(
  id: string,
  locale: SiteLocale,
): Promise<CmsPost> {
  const filePath = path.join(postBasePath, locale, id + postExtension)
  const fileContents = await fs.readFile(filePath, { encoding: 'utf-8' })
  const processed = await md.process(fileContents)

  const html = processed.toString()
  const { frontmatter, tableOfContents } = processed.data as {
    // FIXME: avoid type actobatics - maybe just save as authorIds in yaml
    frontmatter: Omit<CmsPostMetadata, 'authors' | 'editors' | 'tags'> & {
      authors?: Array<string>
      editors?: Array<string>
      tags?: Array<string>
    }
    tableOfContents: Array<TableOfContentsLevel>
  }

  const metadata: CmsPostMetadata = {
    ...frontmatter,
    authors: Array.isArray(frontmatter.authors)
      ? await Promise.all(
          frontmatter.authors.map((id) => {
            // FIXME: we don't need the full person object
            return getCmsPersonById(id, locale)
          }),
        )
      : undefined,
    editors: Array.isArray(frontmatter.editors)
      ? await Promise.all(
          frontmatter.editors.map((id) => {
            // FIXME: we don't need the full person object
            return getCmsPersonById(id, locale)
          }),
        )
      : undefined,
    tags: Array.isArray(frontmatter.tags)
      ? await Promise.all(
          frontmatter.tags.map((id) => {
            // FIXME: we don't need the full tag object
            return getCmsTagById(id, locale)
          }),
        )
      : undefined,
  }

  return { id, html, metadata, tableOfContents }
}

/**
 * Returns post metadata (without parsing markdown body).
 */
export async function getCmsPostMetadataById(
  id: string,
  locale: SiteLocale,
): Promise<CmsPostMetadata> {
  const filePath = path.join(postBasePath, locale, id + postExtension)
  const fileContents = await fs.readFile(filePath, { encoding: 'utf-8' })
  const metadata = matter(fileContents).data as CmsPostMetadata
  return metadata
}

/**
 * Returns all post ids.
 */
export async function getCmsPostIds(
  locale: SiteLocale,
): Promise<Array<string>> {
  const folderPath = path.join(postBasePath, locale)
  const folderContents = await fs.readdir(folderPath)
  return folderContents.map((file) => file.slice(0, -postExtension.length))
}

export interface CmsPersonBase {
  id: string
  firstName: string
  lastName: string
}
export interface CmsPerson extends CmsPersonBase {
  title?: string
  image?: string
  description?: string
  email?: string
  twitter?: string
  website?: string
  orcid?: string
}

/**
 * Returns list of persons.
 */
export async function getCmsPersons(
  locale: SiteLocale,
): Promise<Array<CmsPersonBase>> {
  const folderPath = path.join(personBasePath, locale)
  const folderContents = await fs.readdir(folderPath)

  const data: Array<CmsPersonBase> = await Promise.all(
    folderContents.map(async (file) => {
      const filePath = path.join(folderPath, file)
      const fileContents = await fs.readFile(filePath, { encoding: 'utf-8' })
      const processed = YAML.parse(fileContents)

      return { id: file.slice(0, -personExtension.length), ...processed }
    }),
  )

  data.sort((a, b) => a.lastName.localeCompare(b.lastName, locale))

  return data
}

/**
 * Returns person.
 */
export async function getCmsPersonById(
  id: string,
  locale: SiteLocale,
): Promise<CmsPerson> {
  const filePath = path.join(personBasePath, locale, id + personExtension)
  const fileContents = await fs.readFile(filePath, { encoding: 'utf-8' })
  const processed = YAML.parse(fileContents)

  return { id, ...processed }
}

/**
 * Returns all person ids.
 */
export async function getCmsPersonIds(
  locale: SiteLocale,
): Promise<Array<string>> {
  const folderPath = path.join(personBasePath, locale)
  const folderContents = await fs.readdir(folderPath)
  return folderContents.map((file) => file.slice(0, -personExtension.length))
}

export interface CmsTagBase {
  id: string
  title: string
}
export interface CmsTag extends CmsTagBase {
  description: string
}

/**
 * Returns list of tags.
 */
export async function getCmsTags(
  locale: SiteLocale,
): Promise<Array<CmsTagBase>> {
  const folderPath = path.join(tagBasePath, locale)
  const folderContents = await fs.readdir(folderPath)

  const data: Array<CmsTagBase> = await Promise.all(
    folderContents.map(async (file) => {
      const filePath = path.join(folderPath, file)
      const fileContents = await fs.readFile(filePath, { encoding: 'utf-8' })
      const processed = YAML.parse(fileContents)

      return { id: file.slice(0, -tagExtension.length), ...processed }
    }),
  )

  data.sort((a, b) => a.title.localeCompare(b.title, locale))

  return data
}

/**
 * Returns tag.
 */
export async function getCmsTagById(
  id: string,
  locale: SiteLocale,
): Promise<CmsTag> {
  const filePath = path.join(tagBasePath, locale, id + tagExtension)
  const fileContents = await fs.readFile(filePath, { encoding: 'utf-8' })
  const processed = YAML.parse(fileContents)

  return { id, ...processed }
}

/**
 * Returns all tag ids.
 */
export async function getCmsTagIds(locale: SiteLocale): Promise<Array<string>> {
  const folderPath = path.join(tagBasePath, locale)
  const folderContents = await fs.readdir(folderPath)
  return folderContents.map((file) => file.slice(0, -tagExtension.length))
}

export interface CmsPageMetadata {
  title: string
}

export interface CmsPage {
  id: string
  html: string
  metadata: CmsPageMetadata
}

/**
 * Returns page.
 */
export async function getCmsPageById(
  id: string,
  locale: SiteLocale,
): Promise<CmsPage> {
  const filePath = path.join(pageBasePath, locale, id + pageExtension)
  const fileContents = await fs.readFile(filePath, { encoding: 'utf-8' })
  const processed = await md.process(fileContents)

  const html = processed.toString()
  const { frontmatter: metadata } = processed.data as {
    frontmatter: CmsPageMetadata
  }

  return { id, html, metadata }
}
