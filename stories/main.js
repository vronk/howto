/** @type {import('@storybook/react/types/index').StorybookConfig} */
const config = {
  stories: [
    '../src/**/*.stories.@(js|jsx|mdx|ts|tsx)',
    './pages/**/*.stories.@(js|jsx|mdx|ts|tsx)',
  ],
  addons: [
    '@next/plugin-storybook',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
  ],
  reactOptions: {
    fastRefresh: true,
    // strictMode: true,
  },
  /**
   * Storybook's default webpack config uses `file-loader` for all kinds of
   * static assets, including for `.svg` images.
   * To let `next-svg` (which is configured in `next.config.js`) handle svg images
   * we need to disable that default.
   *
   * @see https://storybook.js.org/docs/react/configure/webpack#import-images-and-other-static-files
   * @see https://github.com/storybookjs/storybook/blob/next/lib/core/src/server/preview/base-webpack.config.ts#L106-L113
   */
  webpackFinal(config) {
    /* @ts-expect-error config.rules is defined. */
    config.module.rules = config.module.rules.filter((rule) => {
      if (
        rule.test instanceof RegExp &&
        rule.test.test('test.svg') &&
        rule.test.test('test.ico')
      ) {
        return false
      }

      return true
    })

    return config
  },
}

module.exports = config
