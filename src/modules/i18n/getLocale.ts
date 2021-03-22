import type {
  GetServerSidePropsContext,
  GetStaticPathsContext,
  GetStaticPropsContext,
} from 'next'
import type { NextRouter } from 'next/router'

import type { SiteLocale } from '~/config/site.config'

export interface SiteLocaleBaseConfig {
  locales: Array<SiteLocale>
  defaultLocale: SiteLocale
}

export interface SiteLocaleConfig extends SiteLocaleBaseConfig {
  locale: SiteLocale
}

export function getLocale(
  routerOrContext:
    | NextRouter
    | GetStaticPropsContext
    | GetServerSidePropsContext,
): SiteLocaleConfig
export function getLocale(
  routerOrContext: GetStaticPathsContext,
): SiteLocaleBaseConfig

/**
 * Returns the currently active locale settings.
 */
export function getLocale(
  routerOrContext:
    | NextRouter
    | GetStaticPropsContext
    | GetServerSidePropsContext
    | GetStaticPathsContext,
): SiteLocaleBaseConfig | SiteLocaleConfig {
  if (!('locale' in routerOrContext)) {
    return {
      locales: routerOrContext.locales,
      defaultLocale: routerOrContext.defaultLocale,
    } as SiteLocaleBaseConfig
  }

  return {
    locale: routerOrContext.locale,
    locales: routerOrContext.locales,
    defaultLocale: routerOrContext.defaultLocale,
  } as SiteLocaleConfig
}
