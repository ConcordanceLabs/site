/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme'

// Akasha's colors: Punchy Blue: #078CDA Less punchy Blue: #0680C6, Chestnut Red: #A53F2B

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white: '#ffffff',
      gray: {
        100: '#f3f4f6',
        300: '#d1d5db',
        500: '#6b7280',
        600: '#4b5563',
        800: '#1f2937',
      },
      indigo: {
        200: '#c7d2fe',
        300: '#a5b4fc',
      },
      neutral: {
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#e5e5e5',
        300: '#d4d4d4',
        350: '#bfbfbf',
        400: '#a3a3a3',
        500: '#737373',
        600: '#525252',
        700: '#404040',
        800: '#262626',
        900: '#171717',
      },
      yellow: {
        50: '#fefce8',
        100: '#fef9c3',
        200: '#fef08a',
        400: '#facc15',
        500: '#eab308',
        600: '#ca8a04',
      },
      orange: {
        100: '#ffedd5',
        200: '#fed7aa',
        300: '#fb713b',
        400: '#fa5a15',
        500: '#e14d0b',
        600: '#ea580c',
      },
      red: {
        400: '#f87171',
        500: '#ef4444',
      },
      zinc: {
        200: '#e4e4e7',
        400: '#a1a1aa',
        500: '#71717a',
        600: '#52525b',
        700: '#3f3f46',
        800: '#27272a',
        900: '#18181b',
      },
    },
    extend: {
      fontFamily: {
        paytone: ['Paytone One', ...defaultTheme.fontFamily.sans],
        bodo: ['Bodoni Moda Variable', ...defaultTheme.fontFamily.sans],
        bungee: ['Bungee', ...defaultTheme.fontFamily.sans],
        'bungee-out': ['Bungee Outline', ...defaultTheme.fontFamily.sans],
        amstelvar: ['Amstelvar', ...defaultTheme.fontFamily.sans],
        departure: ['Departure Mono', ...defaultTheme.fontFamily.mono],
      },
      typography: ({ theme }) => ({
        blog: {
          css: {
            '--tw-prose-body': theme('colors.neutral[700]'),
            '--tw-prose-headings': theme('colors.neutral[900]'),
            '--tw-prose-lead': theme('colors.neutral[700]'),
            '--tw-prose-links': theme('colors.orange[300]'),
            '--tw-prose-bold': theme('colors.neutral[900]'),
            '--tw-prose-counters': theme('colors.neutral[600]'),
            '--tw-prose-bullets': theme('colors.neutral[400]'),
            '--tw-prose-hr': theme('colors.neutral[300]'),
            '--tw-prose-quotes': theme('colors.neutral[500]'),
            '--tw-prose-quote-borders': theme('colors.neutral[300]'),
            '--tw-prose-captions': theme('colors.neutral[700]'),
            '--tw-prose-code': theme('colors.neutral[700]'),
            '--tw-prose-pre-code': theme('colors.neutral[200]'),
            '--tw-prose-pre-bg': theme('colors.neutral[900]'),
            '--tw-prose-th-borders': theme('colors.neutral[300]'),
            '--tw-prose-td-borders': theme('colors.neutral[200]'),

            '--tw-prose-invert-body': theme('colors.neutral[400]'),
            '--tw-prose-invert-headings': theme('colors.neutral[200]'),
            '--tw-prose-invert-lead': theme('colors.neutral[300]'),
            '--tw-prose-invert-links': theme('colors.neutral[300]'),
            '--tw-prose-invert-bold': theme('colors.neutral[300]'),
            '--tw-prose-invert-counters': theme('colors.neutral[400]'),
            '--tw-prose-invert-bullets': theme('colors.neutral[600]'),
            '--tw-prose-invert-hr': theme('colors.neutral[700]'),
            '--tw-prose-invert-quotes': theme('colors.neutral[500]'),
            '--tw-prose-invert-quote-borders': theme('colors.neutral[500]'),
            '--tw-prose-invert-captions': theme('colors.neutral[400]'),
            '--tw-prose-invert-code': theme('colors.neutral[300]'),
            '--tw-prose-invert-pre-code': theme('colors.neutral[300]'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.neutral[600]'),
            '--tw-prose-invert-td-borders': theme('colors.neutral[700]'),
          },
        },
        DEFAULT: {
          css: {
            blockquote: {
              fontStyle: 'normal',
              quotes: 'none',
            },
          },
        },
      }),
    },
  },
  plugins: [require('tailwindcss/nesting'), require('@tailwindcss/typography')],
}
