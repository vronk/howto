import { render as defaultRender } from '@testing-library/react'
import { RouterContext } from 'next/dist/next-server/lib/router-context'
import type { NextRouter } from 'next/router'
import type { ReactNode } from 'react'

import { Providers } from '@/modules/providers/Providers'
import { mockRouter } from '~/stories/addons/nextRouter'

/* eslint-disable import/export */
export * from '@testing-library/react'

type RenderOptions = Parameters<typeof defaultRender>[1] & {
  router?: Partial<NextRouter>
  pageProps?: Record<string, unknown>
}
type RenderResult = ReturnType<typeof defaultRender>

interface AppProvidersProps {
  children?: ReactNode
}

/**
 * Renders children wrapped in Next.js router context and context providers.
 */
export function render(
  element: JSX.Element,
  options?: RenderOptions,
): RenderResult {
  function AppProviders(props: AppProvidersProps) {
    return (
      <RouterContext.Provider value={{ ...mockRouter, ...options?.router }}>
        <Providers {...options?.pageProps}>{props.children}</Providers>
      </RouterContext.Provider>
    )
  }

  return defaultRender(element, {
    wrapper: AppProviders,
    ...options,
  })
}
