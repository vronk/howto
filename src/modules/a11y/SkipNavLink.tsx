import type { ReactNode } from 'react'

import { useI18n } from '@/modules/i18n/useI18n'

export interface SkipNavLinkProps {
  skipToId?: string
  children?: ReactNode
}

/**
 * Navigates to main page content.
 *
 * Allows navigating directly to main page content and skipping navigation menu.
 * Only visible when focused via keyboard.
 */
export function SkipNavLink(props: SkipNavLinkProps): JSX.Element {
  const { t } = useI18n()

  const skipToId = props.skipToId ?? '#main'
  const label = props.children ?? t('common.skipToMainContent')

  return (
    <div className="absolute">
      <a href={skipToId} className="sr-only focus:not-sr-only">
        {label}
      </a>
    </div>
  )
}
