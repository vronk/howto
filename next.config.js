/** @ts-expect-error No module declaration for `@next/bundle-analyzer`. */
const createBundleAnalyzer = require('@next/bundle-analyzer')
/** @ts-expect-error No module declaration for `@stefanprobst/next-mdx`. */
const createMdxPlugin = require('@stefanprobst/next-mdx')
/** @ts-expect-error No module declaration for `@stefanprobst/next-svg`. */
const createSvgPlugin = require('@stefanprobst/next-svg')

/**
 * Optionally produce a treemap of modules included in the bundle.
 */
const withBundleAnalyzer = createBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

/**
 * Support importing .mdx as component.
 *
 * Remark and rehype plugins passed here as `options` should also be added to
 * the mdx jest transformer in `jest.config.json`.
 *
 * Note that component overrides are provided via context.
 * @see src/modules/markdown/Mdx.tsx
 */
const withMdx = createMdxPlugin({
  exclude: /\.(stories|story)\.mdx$/,
})

/**
 * Support importing .svg as component.
 *
 * Options passed here should also be added to the svg jest transformer in
 * `jest.config.json`.
 */
const withSvg = createSvgPlugin({
  svgo: {
    plugins: [
      { prefixIds: true },
      { removeDimensions: true },
      { removeViewBox: false },
    ],
  },
  svgr: {
    titleProp: true,
  },
})

/** @type {typeof import('./config/site.config').locales} */
const locales = ['en']
/** @type {typeof import('./config/site.config').defaultLocale} */
const defaultLocale = 'en'

const config = {
  i18n: {
    locales,
    defaultLocale,
  },
  images: {},
  poweredByHeader: false,
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/assets/fonts/:font',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
  async rewrites() {
    return [
      {
        /** `source` needs to be prefixed with default locale. */
        source: '/en/admin',
        destination: '/admin/index.html',
        locale: false,
      },
    ]
  },
}

const plugins = [withBundleAnalyzer, withMdx, withSvg]

module.exports = plugins.reduce((acc, plugin) => plugin(acc), config)
