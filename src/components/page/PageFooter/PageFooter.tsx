import Link from 'next/link'
import { Fragment } from 'react'

import { useI18n } from '@/modules/i18n/useI18n'
import { useLocale } from '@/modules/i18n/useLocale'
import { useSiteMetadata } from '@/modules/metadata/useSiteMetadata'

/**
 * Page footer.
 */
export function PageFooter(): JSX.Element {
  return (
    <footer className="px-8 py-8 bg-neutral-50 layout-grid">
      <div className="flex flex-col justify-between space-y-8 text-sm md:flex-row md:space-x-8 md:space-y-0">
        <CreatorLogo />
        <NavigationLink />
        <CreatorInfo />
      </div>
    </footer>
  )
}

/**
 * Logo.
 */
function CreatorLogo(): JSX.Element | null {
  const { creator } = useSiteMetadata()

  if (creator === undefined || creator.image === undefined) return null

  return (
    <div>
      <a href={creator.website} aria-label={creator.name}>
        <img
          src={creator.image.publicPath}
          alt=""
          loading="lazy"
          className="h-12"
          height="48"
          width="158.91"
        />
      </a>
    </div>
  )
}

/**
 * Navigation.
 */
function NavigationLink(): JSX.Element {
  const { t } = useI18n()
  const { locale } = useLocale()

  const links = [
    { label: t('common.page.index'), path: '/' },
    { label: t('common.page.posts'), path: '/posts' },
    { label: t('common.page.about'), path: '/about' },
    { label: t('common.page.imprint'), path: '/imprint' },
    { label: t('common.rssFeed'), path: `/${locale}/feed.xml` },
  ]

  return (
    <nav>
      <ul>
        {links.map((link) => {
          return (
            <li key={link.path}>
              <Link href={{ pathname: link.path }}>
                <a>{link.label}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

/**
 * Info.
 */
function CreatorInfo(): JSX.Element | null {
  const { t } = useI18n()
  const { creator } = useSiteMetadata()

  if (creator === undefined) return null

  return (
    <div>
      <p>{creator.name}</p>
      <p>{creator.affiliation}</p>
      <dl>
        {creator.address !== undefined ? (
          <Fragment>
            <dt className="sr-only">{t('common.address')}</dt>
            <dd>
              {creator.address.street}
              <br />
              {creator.address.zip} {creator.address.city}
            </dd>
          </Fragment>
        ) : null}
        {creator.phone !== undefined ? (
          <Fragment>
            <dt className="sr-only">{t('common.phone')}</dt>
            <dd>
              <a href={`tel:${creator.phone}`}>{creator.phone}</a>
            </dd>
          </Fragment>
        ) : null}
        {creator.email !== undefined ? (
          <Fragment>
            <dt className="sr-only">{t('common.email')}</dt>
            <dd>
              <a href={`mailto:${creator.email}`}>{creator.email}</a>
            </dd>
          </Fragment>
        ) : null}
      </dl>
    </div>
  )
}
