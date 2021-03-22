import type { ReactNode } from 'react'

import { PageFooter } from '@/components/page/PageFooter/PageFooter'
import { PageHeader } from '@/components/page/PageHeader/PageHeader'

export interface DefaultPageLayoutProps {
  children?: ReactNode
}

/**
 * Default page layout.
 */
export function DefaultPageLayout(props: DefaultPageLayoutProps): JSX.Element {
  return (
    <div className="min-h-screen page-layout">
      <PageHeader />
      {props.children}
      <PageFooter />
    </div>
  )
}
