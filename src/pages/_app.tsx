import '@/styles/fonts.css'
import '@/styles/custom-properties.css'
import '@/styles/globals.css'
import 'tailwindcss/tailwind.css'
import '@/styles/layout.css'
import '@/styles/nprogress.css'

import ErrorBoundary from '@stefanprobst/next-error-boundary'
import type { AppProps, NextWebVitalsMetric } from 'next/app'
import Head from 'next/head'
import { Fragment } from 'react'

import { DefaultPageLayout } from '@/components/layouts/DefaultPageLayout/DefaultPageLayout'
import { useNProgress } from '@/lib/nprogress/useNProgress'
import { SkipNavLink } from '@/modules/a11y/SkipNavLink'
import { useAnalytics } from '@/modules/analytics/useAnalytics'
import { ClientError } from '@/modules/error/ClientError'
import { Favicons } from '@/modules/metadata/Favicons'
import { WebManifest } from '@/modules/metadata/WebManifest'
import { Providers } from '@/modules/providers/Providers'

/**
 * Application shell.
 */
export default function App({
  Component,
  pageProps,
  router,
}: AppProps): JSX.Element {
  useAnalytics()
  useNProgress()

  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Favicons />
      <WebManifest />
      <ErrorBoundary fallback={ClientError} resetOnChange={[router.asPath]}>
        <Providers {...pageProps}>
          <SkipNavLink />
          <DefaultPageLayout {...pageProps}>
            <Component {...pageProps} />
          </DefaultPageLayout>
        </Providers>
      </ErrorBoundary>
    </Fragment>
  )
}

/**
 * Reports web vitals.
 */
export function reportWebVitals(metric: NextWebVitalsMetric): void {
  /** Should be dispatched to an analytics service. */
  console.info(metric)
}
