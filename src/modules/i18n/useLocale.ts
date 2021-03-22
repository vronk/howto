import { useRouter } from 'next/router'
import { useMemo } from 'react'

import type { SiteLocaleConfig } from '@/modules/i18n/getLocale'
import { getLocale } from '@/modules/i18n/getLocale'
import type { SiteLocale } from '~/config/site.config'

/**
 * Returns the currently active locale settings.
 */
export function useLocale(): SiteLocaleConfig {
  const router = useRouter()

  return useMemo(() => {
    return {
      ...getLocale(router),
      setLocale(locale: SiteLocale) {
        router.push(router.asPath, undefined, { locale })
      },
    }
  }, [router])
}
