import Head from 'next/head'

import { useLocale } from '@/modules/i18n/useLocale'

/**
 * Provides RSS feed for posts in the current locale.
 *
 * RSS feeds are generated at build-time with `scripts/rss.ts`.
 */
export function Feed(): JSX.Element {
  const { locale, defaultLocale } = useLocale()
  /* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */
  const prefix = locale === defaultLocale ? '' : `/${locale}`

  return (
    <Head>
      <link
        rel="alternate"
        type="application/rss+xml"
        title="RSS"
        href={`${prefix}/feed.xml`}
      />
    </Head>
  )
}
