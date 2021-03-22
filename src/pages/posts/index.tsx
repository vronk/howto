import type { GetStaticPropsContext, GetStaticPropsResult } from 'next'
import Link from 'next/link'
import { Fragment } from 'react'

import type { CmsPostBase } from '@/api/cms'
import { getCmsPostsOverview } from '@/api/cms'
import { PageContent } from '@/components/page/PageContent/PageContent'
import { getLocale } from '@/modules/i18n/getLocale'
import { loadDictionary } from '@/modules/i18n/loadDictionary'
import { useI18n } from '@/modules/i18n/useI18n'
import { Metadata } from '@/modules/metadata/Metadata'
import { useAlternateUrls } from '@/modules/metadata/useAlternateUrls'
import { useCanonicalUrl } from '@/modules/metadata/useCanonicalUrl'

export interface PostsPageProps {
  dictionary: { [namespace: string]: Record<string, unknown> }
  posts: Array<CmsPostBase>
}

/**
 * Loads translations and post content.
 */
export async function getStaticProps(
  context: GetStaticPropsContext,
): Promise<GetStaticPropsResult<PostsPageProps>> {
  const { locale } = getLocale(context)
  const dictionary = await loadDictionary(locale, ['common', 'posts'])

  const posts = await getCmsPostsOverview(locale)

  return {
    props: {
      dictionary,
      posts,
    },
  }
}

/**
 * Posts page.
 */
export default function PostsPage(props: PostsPageProps): JSX.Element {
  const canonicalUrl = useCanonicalUrl()
  const alternateUrls = useAlternateUrls()
  const { t, formatDate } = useI18n()

  return (
    <Fragment>
      <Metadata
        title={t('posts.title')}
        canonicalUrl={canonicalUrl}
        languageAlternates={alternateUrls}
      />
      <PageContent>
        <section className="px-8 divide-y">
          <h1 className="py-8 text-6xl font-extrabold">{t('posts.heading')}</h1>
          <ul className="grid grid-cols-2 py-8 divide-y">
            {props.posts.map((post) => {
              // FIXME: heading level
              return (
                <li key={post.id}>
                  <article className="flex flex-col space-y-6">
                    <header className="flex flex-col space-y-3">
                      <dl>
                        <dt className="sr-only">{t('posts.publishedOn')}</dt>
                        <dd>
                          <time dateTime={post.metadata.date}>
                            {formatDate(
                              new Date(post.metadata.date),
                              undefined,
                              {
                                dateStyle: 'long',
                              },
                            )}
                          </time>
                        </dd>
                      </dl>
                      <h2 className="text-3xl font-extrabold leading-7 tracking-tight">
                        <Link href={{ pathname: `/posts/${post.id}` }}>
                          <a>{post.metadata.title}</a>
                        </Link>
                      </h2>
                    </header>
                    <p>{post.metadata.abstract}</p>
                    <footer>
                      <Link href={{ pathname: `/posts/${post.id}` }}>
                        <a className="font-medium text-primary-600">
                          {t('posts.readMore')} →
                        </a>
                      </Link>
                    </footer>
                  </article>
                </li>
              )
            })}
          </ul>
        </section>
      </PageContent>
    </Fragment>
  )
}
