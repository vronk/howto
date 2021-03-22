import { useContext } from 'react'

import { MissingProviderError } from '@/lib/error/MissingProviderError'
import { SiteMetadataContext } from '@/modules/metadata/SiteMetadataContext'
import type { SiteMetadata } from '~/config/metadata.config'

/**
 * Returns site metadata for the currently active locale.
 */
export function useSiteMetadata(): SiteMetadata {
  const metadata = useContext(SiteMetadataContext)

  if (metadata === null) {
    throw new MissingProviderError('useSiteMetadata', 'SiteMetadataProvider')
  }

  return metadata
}
