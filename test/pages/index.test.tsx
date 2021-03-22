import IndexPage, { getStaticProps } from '@/pages/index'
import { render } from '~/test/render'

describe('IndexPage', () => {
  it('should render static content', async () => {
    const context = { locale: 'en', locales: ['en'], defaultLocale: 'en' }
    const router = { pathname: '/', asPath: '/', ...context }
    /* @ts-expect-error `getStaticProps` does not redirect or fail. */
    const { props: pageProps } = await getStaticProps(context)

    const { getByText } = render(<IndexPage {...pageProps} />, {
      router,
      pageProps,
    })

    expect(getByText('Home')).toBeInTheDocument()
  })
})
