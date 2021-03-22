import type { NextRouter } from 'next/router'
import { useRouter } from 'next/router'
import { useMemo } from 'react'

import { createUrl } from '@/lib/url/createUrl'
import { useLocale } from '@/modules/i18n/useLocale'
import { useSiteMetadata } from '@/modules/metadata/useSiteMetadata'
import type { SiteLocale } from '~/config/site.config'

/**
 * Returns URLs to be used in `hreflang` attributes.
 *
 * @param query Optionally include specified query params. By default,
 * only the pathname is used for the canonical URL, and all query params
 * are removed.
 */
export function useAlternateUrls(
  query?: NextRouter['query'],
): Array<{ hrefLang: SiteLocale; href: string }> {
  const router = useRouter()
  const { locales } = useLocale()
  const { url: siteUrl } = useSiteMetadata()

  const urls = useMemo(() => {
    return locales.map((locale) => {
      const { pathname } = createUrl({ path: router.asPath })
      const url = createUrl({
        baseUrl: siteUrl,
        locale,
        path: pathname,
        query,
      })
      return { hrefLang: locale, href: url.toString() }
    })
  }, [router, locales, siteUrl, query])

  return urls
}
