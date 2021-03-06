import type { NextRouter } from 'next/router'
import { useRouter } from 'next/router'
import { useMemo } from 'react'

import { createUrl } from '@/lib/url/createUrl'
import { useLocale } from '@/modules/i18n/useLocale'
import { useSiteMetadata } from '@/modules/metadata/useSiteMetadata'

/**
 * Returns the canonical URL for the current route's pathname.
 *
 * @param query Optionally include specified query params. By default,
 * only the pathname is used for the canonical URL, and all query params
 * are removed.
 */
export function useCanonicalUrl(query?: NextRouter['query']): string {
  const router = useRouter()
  const { locale } = useLocale()
  const { url: siteUrl } = useSiteMetadata()

  const canonicalUrl = useMemo(() => {
    const { pathname } = createUrl({ path: router.asPath })
    const url = createUrl({
      baseUrl: siteUrl,
      locale,
      path: pathname,
      query,
    })
    return url.toString()
  }, [router, locale, siteUrl, query])

  return canonicalUrl
}
