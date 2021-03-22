import { I18nProvider as UiI18nProvider } from '@react-aria/i18n'
import { useInteractionModality } from '@react-aria/interactions'
import { OverlayProvider } from '@react-aria/overlays'
import { SSRProvider } from '@react-aria/ssr'
import type { ReactNode } from 'react'

import { ToastProvider } from '@/elements/Toast/ToastContext'
import { I18nProvider } from '@/modules/i18n/I18nContext'
import { useLocale } from '@/modules/i18n/useLocale'
import { SiteMetadataProvider } from '@/modules/metadata/SiteMetadataContext'

export interface ProvidersProps {
  children?: ReactNode
  dictionary?: Record<string, unknown>
}

/**
 * Context providers.
 */
export function Providers(props: ProvidersProps): JSX.Element {
  const { locale } = useLocale()

  /**
   * Sets up global listeners for interaction modality tracking.
   *
   * @see https://github.com/adobe/react-spectrum/issues/1378
   */
  useInteractionModality()

  return (
    <SSRProvider>
      <SiteMetadataProvider>
        <I18nProvider locale={locale} dictionary={props.dictionary}>
          <UiI18nProvider locale={locale}>
            <ToastProvider>
              <OverlayProvider>{props.children}</OverlayProvider>
            </ToastProvider>
          </UiI18nProvider>
        </I18nProvider>
      </SiteMetadataProvider>
    </SSRProvider>
  )
}
