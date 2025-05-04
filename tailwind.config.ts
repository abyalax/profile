import typography from '@tailwindcss/typography'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      typography: (theme: (key: string) => void) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),
            a: {
              color: theme('colors.blue.600'),
              fontWeight: '500',
              textDecoration: 'underline',
              '&:hover': {
                color: theme('colors.blue.700'),
              },
            },
            strong: { color: theme('colors.gray.900') },
            h1: { color: theme('colors.gray.900') },
            h2: { color: theme('colors.gray.900') },
            h3: { color: theme('colors.gray.800') },
            h4: { color: theme('colors.gray.800') },
            code: {
              color: theme('colors.pink.600'),
              backgroundColor: theme('colors.gray.100'),
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
            },
            blockquote: {
              color: theme('colors.gray.700'),
              borderLeftColor: theme('colors.gray.300'),
              fontStyle: 'italic',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.blue.400'),
              fontWeight: '500',
              textDecoration: 'underline',
              '&:hover': {
                color: theme('colors.blue.300'),
              },
            },
            strong: { color: theme('colors.gray.100') },
            h1: { color: theme('colors.gray.100') },
            h2: { color: theme('colors.gray.100') },
            h3: { color: theme('colors.gray.200') },
            h4: { color: theme('colors.gray.200') },
            code: {
              color: theme('colors.pink.400'),
              backgroundColor: theme('colors.gray.800'),
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
            },
            blockquote: {
              color: theme('colors.gray.400'),
              borderLeftColor: theme('colors.gray.600'),
              fontStyle: 'italic',
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
}

export default config
