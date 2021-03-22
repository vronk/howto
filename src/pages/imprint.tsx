import type { GetStaticPropsContext, GetStaticPropsResult } from 'next'
import { Fragment } from 'react'

import { getImprint } from '@/api/imprint'
import { PageContent } from '@/components/page/PageContent/PageContent'
import { getLocale } from '@/modules/i18n/getLocale'
import { loadDictionary } from '@/modules/i18n/loadDictionary'
import { useI18n } from '@/modules/i18n/useI18n'
import { Metadata } from '@/modules/metadata/Metadata'

export interface ImprintPageProps {
  dictionary: { [namespace: string]: Record<string, unknown> }
  page: { html: string }
}

/**
 * Loads translations.
 */
export async function getStaticProps(
  context: GetStaticPropsContext,
): Promise<GetStaticPropsResult<ImprintPageProps>> {
  const { locale } = getLocale(context)
  const dictionary = await loadDictionary(locale, ['common', 'imprint'])

  const page = await getImprint(locale)

  return {
    props: {
      dictionary,
      page,
    },
  }
}

/**
 * Imprint page.
 */
export default function ImprintPage(props: ImprintPageProps): JSX.Element {
  const { t } = useI18n()

  const { html } = props.page

  return (
    <Fragment>
      <Metadata noindex nofollow title={t('imprint.title')} />
      <PageContent style={{ '--max-content-width': 'var(--screen-md)' }}>
        <article className="py-8 px-8 prose max-w-none">
          <h1>{t('imprint.heading')}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </PageContent>
    </Fragment>
  )
}
