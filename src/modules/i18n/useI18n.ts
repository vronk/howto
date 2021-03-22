import { useContext } from 'react'

import { MissingProviderError } from '@/lib/error/MissingProviderError'
import type { I18nService } from '@/modules/i18n/I18nContext'
import { I18nContext } from '@/modules/i18n/I18nContext'

/**
 * Provides internationalization service for translated UI strings, as well as
 * internationalized pluralisation, date and number formats.
 */
export function useI18n(): I18nService<unknown> {
  const i18n = useContext(I18nContext)

  if (i18n === null) {
    throw new MissingProviderError('useI18n', 'I18nProvider')
  }

  return i18n
}
