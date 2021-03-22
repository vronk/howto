import type { ReactNode } from 'react'
import { createContext, useMemo } from 'react'

import { useLocale } from '@/modules/i18n/useLocale'
import type { SiteMetadata } from '~/config/metadata.config'
import metadata from '~/config/metadata.config'

export const SiteMetadataContext = createContext<SiteMetadata | null>(null)

export interface SiteMetadataProviderProps {
  children?: ReactNode
}

/**
 * Provides site metadata for the currently active locale.
 */
export function SiteMetadataProvider(
  props: SiteMetadataProviderProps,
): JSX.Element {
  const { locale } = useLocale()

  const siteMetadata = useMemo(() => metadata[locale], [locale])

  return (
    <SiteMetadataContext.Provider value={siteMetadata}>
      {props.children}
    </SiteMetadataContext.Provider>
  )
}
