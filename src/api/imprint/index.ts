import { imprintUrl, serviceId } from '~/config/acdh.json'
import type { SiteLocale } from '~/config/site.config'

function createImprintUrl(locale: SiteLocale) {
  const url = new URL(imprintUrl)
  url.searchParams.set('serviceID', String(serviceId))
  url.searchParams.set('outputLang', locale)
  return url
}

export async function getImprint(
  locale: SiteLocale,
): Promise<{ html: string }> {
  const response = await fetch(createImprintUrl(locale).toString())

  if (!response.ok) {
    throw new Error('Failed to fetch imprint.')
  }

  const html = await response.text()

  return { html }
}
