import type { ReactNode } from 'react'
import { createContext, useMemo } from 'react'

import type { I18n } from '@/modules/i18n/createI18n'
import { createI18n } from '@/modules/i18n/createI18n'
import type { SiteLocale } from '~/config/site.config'

export type I18nService<T> = I18n<T>

export const I18nContext = createContext<I18nService<unknown> | null>(null)

export interface I18nProviderProps {
  /** Current locale, retrieved from`useLocale`. */
  locale: SiteLocale
  /**
   * Dictionary for the current locale, should be retrieved via
   * `@/modules/i18n/loadDictionary` in `getStaticProps` or `getServerSideProps`,
   * and passed to the page on the `dictionary` prop.
   */
  dictionary: Record<string, unknown> | undefined
  children?: ReactNode
}

/**
 * Provides internationalization service for translated UI strings, as well as
 * internationalized pluralisation, date and number formats.
 */
export function I18nProvider(props: I18nProviderProps): JSX.Element {
  const { locale, dictionary } = props

  // const [service, setService] = useState(() => createI18n(locale, dictionary))

  // useEffect(() => {
  //   /**
  //    * Instead of creating a new i18n instance we could update
  //    * locale and dictionary with `service.locale()` and `service.set()`,
  //    * and then force a rerender. But `createI18n` should be cheap.
  //    */
  //   setService(createI18n(locale, dictionary))
  // }, [locale, dictionary])

  /**
   * We intentionally don't use an effect, since then the ui would only update
   * *after* the first render. We *could* try with `useLayoutEffect`.
   */
  const service = useMemo(() => {
    return createI18n(locale, dictionary)
  }, [locale, dictionary])

  return (
    <I18nContext.Provider value={service}>
      {props.children}
    </I18nContext.Provider>
  )
}
