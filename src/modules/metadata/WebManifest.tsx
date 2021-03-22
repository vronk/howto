import Head from 'next/head'

import { useLocale } from '@/modules/i18n/useLocale'

/**
 * Provides web manifest for the current locale.
 *
 * The web manifests are generated at build-time with `scripts/favicons.ts`.
 */
export function WebManifest(): JSX.Element {
  const { locale, defaultLocale } = useLocale()
  /* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */
  const prefix = locale === defaultLocale ? '' : `/${locale}`

  return (
    <Head>
      <link
        rel="manifest"
        href={`${prefix}/site.webmanifest`}
        key="webmanifest"
      />
    </Head>
  )
}
