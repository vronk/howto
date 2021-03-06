import NextError from 'next/error'
import { Fragment } from 'react'

import { PageContent } from '@/components/page/PageContent/PageContent'
import { Error } from '@/modules/error/Error'
import { Metadata } from '@/modules/metadata/Metadata'

export interface InternalErrorProps {
  statusCode?: number
}

/**
 * Internal error page.
 */
export default function InternalErrorPage({
  statusCode,
}: InternalErrorProps): JSX.Element {
  return (
    <Fragment>
      <Metadata noindex nofollow title="Unexpected error" />
      <PageContent>
        <section className="grid px-8 py-8 place-items-center">
          <Error
            message="An unexpected error has occurred."
            statusCode={statusCode}
          />
        </section>
      </PageContent>
    </Fragment>
  )
}

InternalErrorPage.getInitialProps = NextError.getInitialProps
