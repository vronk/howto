import type { GetStaticPropsContext, GetStaticPropsResult } from 'next'
import { Fragment } from 'react'

import { PageContent } from '@/components/page/PageContent/PageContent'
import { Error } from '@/modules/error/Error'
import { getLocale } from '@/modules/i18n/getLocale'
import { loadDictionary } from '@/modules/i18n/loadDictionary'
import { useI18n } from '@/modules/i18n/useI18n'
import { Metadata } from '@/modules/metadata/Metadata'

export interface NotFoundPageProps {
  dictionary: { [namespace: string]: Record<string, unknown> }
}

/**
 * Loads translations.
 */
export async function getStaticProps(
  context: GetStaticPropsContext,
): Promise<GetStaticPropsResult<NotFoundPageProps>> {
  const { locale } = getLocale(context)
  const dictionary = await loadDictionary(locale, ['common', '404'])

  return {
    props: {
      dictionary,
    },
  }
}

/**
 * Not found page.
 */
export default function NotFoundPage(_props: NotFoundPageProps): JSX.Element {
  const { t } = useI18n()

  return (
    <Fragment>
      <Metadata noindex nofollow title={t('404.title')} />
      <PageContent>
        <section className="grid px-8 py-8 place-items-center">
          <Error message={t('404.message')} statusCode={404} />
        </section>
      </PageContent>
    </Fragment>
  )
}
