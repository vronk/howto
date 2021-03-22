/**
 * **Important:** when changing locales, also update `next.config.js`.
 * The reason this is duplicated is because we want strict types, and
 * typescript currently does not allow importing json modules `as const`
 * (@see https://github.com/microsoft/TypeScript/issues/32063), and to
 * be able to import the locale config in `next.config.js`, it cannot
 * be ts-only.
 */

/**
 * Supported locales.
 */
export type SiteLocale = typeof locales[number]

/**
 * Supported locales.
 */
export const locales = ['en'] as const

/**
 * Default site locale.
 */
export const defaultLocale: SiteLocale = 'en'

/**
 * File name for webmanifest.
 */
export const webManifest = 'site.webmanifest'

/**
 * Site URL.
 */
export const url = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000'
