import type {
  GetStaticPathsContext,
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from 'next'
import { Fragment } from 'react'

import type { CmsPost } from '@/api/cms'
import { getCmsPostById, getCmsPostIds } from '@/api/cms'
import { PageContent } from '@/components/page/PageContent/PageContent'
import { getLocale } from '@/modules/i18n/getLocale'
import { loadDictionary } from '@/modules/i18n/loadDictionary'
import { useI18n } from '@/modules/i18n/useI18n'
import { Metadata } from '@/modules/metadata/Metadata'
import { useAlternateUrls } from '@/modules/metadata/useAlternateUrls'
import { useCanonicalUrl } from '@/modules/metadata/useCanonicalUrl'
import { url as baseUrl } from '~/config/site.config'

export type PostPageParams = {
  id: string
}

export interface PostPageProps {
  dictionary: { [namespace: string]: Record<string, unknown> }
  post: CmsPost
}

/**
 * Creates post page for every post id.
 */
export async function getStaticPaths(
  context: GetStaticPathsContext,
): Promise<GetStaticPathsResult<PostPageParams>> {
  const { locales } = getLocale(context)
  const paths = (
    await Promise.all(
      locales.map(async (locale) => {
        const ids = await getCmsPostIds(locale)
        return ids.map((id) => ({ params: { id }, locale }))
      }),
    )
  ).flat()

  return {
    paths,
    fallback: false,
  }
}

/**
 * Loads translations and post content.
 */
export async function getStaticProps(
  context: GetStaticPropsContext<PostPageParams>,
): Promise<GetStaticPropsResult<PostPageProps>> {
  const { locale } = getLocale(context)
  const dictionary = await loadDictionary(locale, ['common', 'post'])

  /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
  const id = context.params!.id
  const post = await getCmsPostById(id, locale)

  return {
    props: {
      dictionary,
      post,
    },
  }
}

/**
 * Post page.
 */
export default function PostPage(props: PostPageProps): JSX.Element {
  const canonicalUrl = useCanonicalUrl()
  const alternateUrls = useAlternateUrls()
  const { t, formatDate } = useI18n()

  const { title, date, authors, tags } = props.post.metadata
  const { html, tableOfContents } = props.post
  const editUrl = new URL('admin/index.html', baseUrl)
  editUrl.hash = `/edit/posts/${props.post.id}`

  return (
    <Fragment>
      <Metadata
        title={title}
        canonicalUrl={canonicalUrl}
        languageAlternates={alternateUrls}
      />
      <PageContent style={{ '--max-content-width': 'var(--screen-md)' }}>
        <article className="px-8 divide-y">
          <header className="py-8 space-y-2 text-center">
            <dl className="font-medium text-neutral-500">
              <dt className="sr-only">{t('post.publishedOn')}</dt>
              <dd>
                <time dateTime={date}>
                  {formatDate(new Date(date), undefined, { dateStyle: 'full' })}
                </time>
              </dd>
            </dl>
            <h1 className="text-5xl font-extrabold tracking-tight leading-[1.2]">
              {title}
            </h1>
          </header>
          <dl className="flex justify-between py-8">
            <div>
              <dt className="sr-only">{t('post.authors')}</dt>
              <dd>
                <ul className="flex flex-col space-y-3">
                  {authors?.map((author) => {
                    return (
                      <li
                        key={author.id}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-8 h-8">
                          {author.image !== undefined ? (
                            <img
                              src={author.image}
                              alt=""
                              loading="lazy"
                              className="flex rounded-full"
                            />
                          ) : null}
                        </div>
                        <dl className="text-sm font-medium">
                          <dt className="sr-only">{t('post.person.name')}</dt>
                          <dd>
                            {author.firstName} {author.lastName}
                          </dd>
                          {author.email !== undefined ? (
                            <Fragment>
                              <dt className="sr-only">
                                {t('post.person.email')}
                              </dt>
                              <dd className="text-neutral-500">
                                <a href={`mailto:${author.email}`}>
                                  {author.email}
                                </a>
                              </dd>
                            </Fragment>
                          ) : null}
                        </dl>
                      </li>
                    )
                  })}
                </ul>
              </dd>
            </div>
            <div>
              <dt className="sr-only">{t('post.tags')}</dt>
              <dd>
                <ul className="flex flex-wrap">
                  {tags?.map((tag) => {
                    return (
                      <li key={tag.id} className="mb-2 ml-2">
                        <span className="px-2 py-1 text-xs font-medium text-white rounded select-none bg-primary-600">
                          {tag.title}
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </dd>
            </div>
          </dl>
          <div
            className="py-8 prose max-w-none"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <div className="flex justify-end py-8">
            <a href={editUrl.toString()} className="font-medium">
              {t('post.editPage')}
            </a>
          </div>
        </article>
        <aside>
          <TableOfContents tableOfContents={tableOfContents} />
        </aside>
      </PageContent>
    </Fragment>
  )
}

interface TableOfContentsProps {
  tableOfContents: CmsPost['tableOfContents']
}

/**
 * Table of contents.
 */
function TableOfContents(props: TableOfContentsProps): JSX.Element | null {
  const { tableOfContents } = props

  const { t } = useI18n()

  if (tableOfContents.length === 0) return null

  return (
    <nav aria-label={t('tableOfContents')} hidden>
      <TableOfContentsLevel headings={tableOfContents} />
    </nav>
  )
}

interface TableOfContentsLevelProps {
  headings: CmsPost['tableOfContents']
  depth?: number
}

/**
 * Table of contents level.
 */
function TableOfContentsLevel(props: TableOfContentsLevelProps): JSX.Element {
  return (
    <ul>
      {props.headings.map((heading) => {
        return (
          <li key={heading.id}>
            <a href={`#${heading.id}`}>{heading.value}</a>
            {heading.children !== undefined && heading.children.length > 0 ? (
              <TableOfContentsLevel
                headings={heading.children}
                depth={(props.depth ?? 0) + 1}
              />
            ) : null}
          </li>
        )
      })}
    </ul>
  )
}
