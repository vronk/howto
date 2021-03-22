import { makeDecorator } from '@storybook/addons'
import { Fragment } from 'react'

const PARAM_KEY = 'providers'

/**
 * Wraps story in context providers.
 */
export const withProviders = makeDecorator({
  name: 'withProviders',
  parameterName: PARAM_KEY,
  skipIfNoParametersOrOptions: true,
  wrapper: (Story, context, { parameters }) => {
    const Providers = parameters.component ?? Fragment
    const props = parameters.props ?? {}

    return (
      <Providers {...props}>
        <Story {...context} />
      </Providers>
    )
  },
})

if (module.hot?.decline !== undefined) {
  module.hot.decline()
}
