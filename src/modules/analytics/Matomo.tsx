/**
 * Initializes Matomo analytics service.
 *
 * Should be placed in `src/pages/_document.tsx`.
 */
export function Matomo(): JSX.Element | null {
  if (
    process.env.NODE_ENV !== 'production' ||
    process.env.NEXT_PUBLIC_MATOMO_BASE_URL === undefined ||
    process.env.NEXT_PUBLIC_MATOMO_SITE_ID === undefined
  ) {
    return null
  }

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
        var _paq = window._paq = window._paq || [];
        // _paq.push(['requireConsent']);
        _paq.push(['disableCookies'])
        _paq.push(['setSecureCookie', true])
        _paq.push(['enableHeartBeatTimer'])
        ;(function() {
          var u = "${process.env.NEXT_PUBLIC_MATOMO_BASE_URL}"
          _paq.push(['setTrackerUrl', u + 'matomo.php'])
          _paq.push(['setSiteId', ${process.env.NEXT_PUBLIC_MATOMO_SITE_ID}])
          var d = document,
              g = d.createElement('script'),
              s = d.getElementsByTagName('script')[0]
          g.type = 'text/javascript'
          g.async = true
          g.defer = true
          g.src = u + 'matomo.js'
          s.parentNode.insertBefore(g, s)
        })()`,
      }}
    />
  )
}
