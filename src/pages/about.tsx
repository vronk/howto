import type { GetStaticPropsContext, GetStaticPropsResult } from 'next'
import { Fragment } from 'react'

import type { CmsPage } from '@/api/cms'
import { getCmsPageById } from '@/api/cms'
import { PageContent } from '@/components/page/PageContent/PageContent'
import { getLocale } from '@/modules/i18n/getLocale'
import { loadDictionary } from '@/modules/i18n/loadDictionary'
// import { useI18n } from '@/modules/i18n/useI18n'
import { Metadata } from '@/modules/metadata/Metadata'

export interface AboutPageProps {
  dictionary: { [namespace: string]: Record<string, unknown> }
  page: CmsPage
}

/**
 * Loads translations.
 */
export async function getStaticProps(
  context: GetStaticPropsContext,
): Promise<GetStaticPropsResult<AboutPageProps>> {
  const { locale } = getLocale(context)
  const dictionary = await loadDictionary(locale, ['common', 'about'])

  const page = await getCmsPageById('about', locale)

  return {
    props: {
      dictionary,
      page,
    },
  }
}

/**
 * About page.
 */
export default function AboutPage(props: AboutPageProps): JSX.Element {
  // const { t } = useI18n()

  const { html } = props.page
  const { title } = props.page.metadata

  return (
    <Fragment>
      <Metadata noindex nofollow title={title} />
      <PageContent style={{ '--max-content-width': 'var(--screen-md)' }}>
        <article className="py-8 px-8 prose max-w-none">
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </PageContent>
    </Fragment>
  )
}
