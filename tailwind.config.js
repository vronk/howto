/** @ts-expect-error No module declaration for `@tailwindcss/typography`. */
const typography = require('@tailwindcss/typography')

/**
 * Converts pixel to rem.
 *
 * @param px {number}
 */
function px(px) {
  return `${px / 16}rem`
}

module.exports = {
  purge: [
    'src/**/*.@(css|html|js|jsx|ts|tsx)',
    'stories/**/*.@(css|html|js|jsx|ts|tsx)',
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        inherit: 'inherit',
        neutral: {
          50: 'var(--color-neutral-50)',
          100: 'var(--color-neutral-100)',
          200: 'var(--color-neutral-200)',
          300: 'var(--color-neutral-300)',
          400: 'var(--color-neutral-400)',
          500: 'var(--color-neutral-500)',
          600: 'var(--color-neutral-600)',
          700: 'var(--color-neutral-700)',
          800: 'var(--color-neutral-800)',
          900: 'var(--color-neutral-900)',
        },
        primary: {
          50: 'var(--color-primary-50)',
          100: 'var(--color-primary-100)',
          200: 'var(--color-primary-200)',
          300: 'var(--color-primary-300)',
          400: 'var(--color-primary-400)',
          500: 'var(--color-primary-500)',
          600: 'var(--color-primary-600)',
          700: 'var(--color-primary-700)',
          800: 'var(--color-primary-800)',
          900: 'var(--color-primary-900)',
        },
      },
      fontFamily: {
        body: ['Inter', 'Roboto', 'system-ui', 'sans-serif'],
        display: ['Inter', 'Roboto', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'ui-xs': [px(11), { lineHeight: px(14) }],
        'ui-sm': [px(13), { lineHeight: px(18) }],
        'ui-base': [px(15), { lineHeight: px(22) }],
        'ui-lg': [px(17), { lineHeight: px(26) }],
        'ui-xl': [px(19), { lineHeight: px(26) }],
      },
      maxWidth: {
        '65ch': '65ch',
        '80ch': '80ch',
      },
      zIndex: {
        '-10': -10,
      },
      typography: {
        DEFAULT: {
          css: {},
        },
      },
    },
    screens: {
      '2xs': '320px',
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1600px',
      '3xl': '1920px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [typography],
}
