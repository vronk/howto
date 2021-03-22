import type { GetStaticPropsContext, GetStaticPropsResult } from 'next'
import { Fragment } from 'react'

import { PageContent } from '@/components/page/PageContent/PageContent'
import { getLocale } from '@/modules/i18n/getLocale'
import { loadDictionary } from '@/modules/i18n/loadDictionary'
import { useI18n } from '@/modules/i18n/useI18n'
import { Metadata } from '@/modules/metadata/Metadata'
import { useAlternateUrls } from '@/modules/metadata/useAlternateUrls'
import { useCanonicalUrl } from '@/modules/metadata/useCanonicalUrl'

export interface IndexPageProps {
  dictionary: { [namespace: string]: Record<string, unknown> }
}

/**
 * Loads translations.
 */
export async function getStaticProps(
  context: GetStaticPropsContext,
): Promise<GetStaticPropsResult<IndexPageProps>> {
  const { locale } = getLocale(context)
  const dictionary = await loadDictionary(locale, ['common', 'index'])

  return {
    props: {
      dictionary,
    },
  }
}

/**
 * Index page.
 */
export default function IndexPage(_props: IndexPageProps): JSX.Element {
  const canonicalUrl = useCanonicalUrl()
  const alternateUrls = useAlternateUrls()
  const { t } = useI18n()

  return (
    <Fragment>
      <Metadata
        title={t('index.title')}
        canonicalUrl={canonicalUrl}
        languageAlternates={alternateUrls}
      />
      <PageContent>
        <section className="py-8 px-8">
          <h1>{t('index.heading')}</h1>
        </section>
      </PageContent>
    </Fragment>
  )
}
