import type { NextRouter } from 'next/router'
import { useRouter } from 'next/router'

import { sanitizeQueryParams } from '@/lib/url/sanitizeQueryParams'

type NextNavigationParams = Parameters<NextRouter['push']>
type UrlObject = Exclude<NextNavigationParams[0], string>
type TransitionOptions = NextNavigationParams[2]

interface NavigationParams extends UrlObject {
  options?: TransitionOptions
  replace?: true
}

/**
 * Wraps Next.js programmatic routing, and removes empty query params
 * to avoid empty query params like `?key=`.
 */
export function useNavigation(): (
  params: NavigationParams,
) => Promise<boolean> {
  const router = useRouter()

  function navigate({ options, replace, ...href }: NavigationParams) {
    if (href.query != null && typeof href.query !== 'string') {
      href = { ...href, query: sanitizeQueryParams(href.query) }
    }

    const action = replace === true ? 'replace' : 'push'

    return router[action](href, undefined, options)
  }

  return navigate
}
