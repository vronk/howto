import type { AnalyticsService } from '@/modules/analytics/useAnalytics'

/**
 * Sets up analytics service.
 */
export function init(): void {
  /** Matomo is initialized in `src/pages/_document.tsx` with `<Matomo />`. */
}

/**
 * Registers page view with analytics service.
 */
export function registerPageView(url: string): void {
  /* Matomo attaches to window. */
  const w = window as typeof window & { _paq?: Array<unknown> }
  const matomo = w._paq
  if (matomo !== undefined) {
    matomo.push(['setCustomUrl', url])
    matomo.push(['setDocumentTitle', document.title])
    matomo.push(['trackPageView'])
  }
}

const service: AnalyticsService = {
  init,
  registerPageView,
}

/**
 * Provides Matomo analytics service.
 */
export function useMatomo(): AnalyticsService {
  return service
}
