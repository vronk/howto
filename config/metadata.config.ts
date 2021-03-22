import type { SiteLocale } from '~/config/site.config'
import { url } from '~/config/site.config'

export interface SiteMetadata {
  url: string
  title: string
  shortTitle?: string
  description: string
  favicon: {
    src: string
  }
  image: {
    src: string
    publicPath: string
    alt: string
  }
  twitter?: string
  creator?: {
    name: string
    affiliation?: string
    website: string
    address?: {
      street: string
      zip: string
      city: string
    }
    image?: {
      src: string
      publicPath: string
      alt: string
    }
    phone?: string
    email?: string
    twitter?: string
  }
}

/**
 * Site metadata for all supported locales.
 */
const config: { [locale in SiteLocale]: SiteMetadata } = {
  en: {
    url: new URL('en', url).toString(),
    title: 'HowTo',
    shortTitle: 'HowTo',
    description: 'A blog about how to do things in Digital Humanities.',
    favicon: {
      src: 'public/assets/images/acdh-ch-logo.svg',
    },
    image: {
      src: 'public/android-chrome-512x512.png',
      publicPath: '/android-chrome-512x512.png',
      alt: '',
    },
    twitter: 'ACDH_OeAW',
    creator: {
      name: 'Austrian Centre for Digital Humanities and Cultural Heritage',
      affiliation: 'Austrian Academy of Sciences',
      address: {
        street: 'Sonnenfelsgasse 19',
        zip: '1010',
        city: 'Vienna',
      },
      website: 'https://www.oeaw.ac.at/acdh/',
      image: {
        src: 'public/assets/images/acdh-ch-logo-with-text.svg',
        publicPath: '/assets/images/acdh-ch-logo-with-text.svg',
        alt: '',
      },
      phone: '+43-1-51581-2200',
      email: 'acdh@oeaw.ac.at',
      twitter: 'ACDH_OeAW',
    },
  },
} as const

export default config
