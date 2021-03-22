import { promises as fs } from 'fs'
import * as path from 'path'
// @ts-expect-error Missing type declaration
import { rss } from 'xast-util-feed'
import toXml from 'xast-util-to-xml'

import { getCmsPostById, getCmsPostIds } from '@/api/cms'
import type { ISODateString } from '@/lib/ts/aliases'
import { log } from '@/lib/util/log'
import config from '~/config/metadata.config'
import type { SiteLocale } from '~/config/site.config'
import { defaultLocale, locales, url as baseUrl } from '~/config/site.config'

/**
 * Creates `feed.xml` for all locales.
 */
Promise.all(locales.map((locale) => generate(locale)))
  .then(() => log.success('Successfully created `feed.xml`.'))
  .catch(log.error)

interface Channel {
  title: string
  url: string
  feedUrl: string
  description: string
  lang: string
  author?: { name: string; email?: string } | string
}

interface Entry {
  title: string
  description?: string
  descriptionHtml?: string
  author?: { name: string; email?: string } | string
  url: string
  published?: Date | ISODateString
  modified?: Date | ISODateString
  tags?: Array<string>
  enclosure?: { url: string; length: number; type: string }
}

const fileName = 'feed.xml'
const publicFolder = path.resolve(process.cwd(), 'public')

async function generate(locale: SiteLocale) {
  const metadata = config[locale]

  const channel: Channel = {
    title: metadata.title,
    url: baseUrl,
    feedUrl: new URL(fileName, baseUrl).toString(),
    description: metadata.description,
    lang: locale,
    author:
      metadata.creator !== undefined
        ? {
            name: metadata.creator.name,
            email: metadata.creator.email,
          }
        : undefined,
  }

  const posts = await getCmsPostIds(locale)
  const entries: Array<Entry> = await Promise.all(
    posts.map(async (id) => {
      // FIXME: avoid parsing body
      const post = await getCmsPostById(id, locale)
      return {
        title: post.metadata.title,
        description: post.metadata.abstract,
        // descriptionHtml: '',
        author: post.metadata.authors
          ?.map((author) => `${author.firstName} ${author.lastName}`)
          .join(', '),
        url: new URL(`/posts/${locale}/${id}`, baseUrl).toString(),
        published: post.metadata.date,
        // modified: '',
        tags: post.metadata.tags?.map((tag) => tag.title),
      }
    }),
  )

  const feed = toXml(rss(channel, entries))

  const outputFolder =
    /* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */
    locale === defaultLocale ? 'public' : path.join(publicFolder, locale)

  return fs.writeFile(path.join(outputFolder, fileName), feed, {
    encoding: 'utf-8',
  })
}
