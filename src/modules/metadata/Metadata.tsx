import type { PageMetadataProps } from '@stefanprobst/next-page-metadata'
import PageMetadata from '@stefanprobst/next-page-metadata'

import { useLocale } from '@/modules/i18n/useLocale'
import { useSiteMetadata } from '@/modules/metadata/useSiteMetadata'

export type MetadataProps = PageMetadataProps

/**
 * Page metadata for SEO.
 */
export function Metadata({
  openGraph,
  twitter,
  ...props
}: MetadataProps): JSX.Element {
  const { locale } = useLocale()
  const {
    title: siteTitle,
    image: siteImage,
    description: siteDescription,
  } = useSiteMetadata()

  function defaultTitleTemplate(title?: string) {
    return [title, siteTitle].filter(Boolean).join(' | ')
  }

  return (
    <PageMetadata
      language={locale}
      titleTemplate={defaultTitleTemplate}
      description={siteDescription}
      openGraph={{
        type: 'website',
        siteName: siteTitle,
        images: [siteImage],
        ...openGraph,
      }}
      twitter={{
        cardType: 'summary',
        site: siteTitle,
        ...twitter,
      }}
      {...props}
    />
  )
}
