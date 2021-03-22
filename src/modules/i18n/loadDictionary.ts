// import * as path from 'path'

import type { SiteLocale } from '~/config/site.config'

/**
 * Loads dictionary with translations for the current locale.
 *
 * Must only be used in `getStaticProps` or `getServerSideProps`.
 * To load translations client-side, fetch them from `/locales/${locale}/${namespace}.json`
 * and provide them to child components via `I18nProvider`.
 */
export async function loadDictionary(
  locale: SiteLocale,
  namespaces: Array<string>,
): Promise<{ [namespace: string]: Record<string, unknown> }> {
  const translations = await Promise.all(
    namespaces.map<Promise<[string, Record<string, unknown>]>>(
      async (namespace) => {
        /**
         * The path must be provided as string literal or template string literal.
         *
         * @see https://webpack.js.org/api/module-methods/#dynamic-expressions-in-import
         */
        const dictionary = await import(
          `~/public/locales/${locale}/${namespace}.json`
        ).then((module) => module.default)

        return [namespace, dictionary]
      },
    ),
  )
  return Object.fromEntries(translations)
}
