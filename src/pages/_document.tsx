import NextDocument, { Head, Html, Main, NextScript } from 'next/document'

import { Matomo } from '@/modules/analytics/Matomo'

/**
 * Document wrapper.
 */
export default class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            href="/assets/fonts/Inter-roman.var.woff2?v=3.15"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <Matomo />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
