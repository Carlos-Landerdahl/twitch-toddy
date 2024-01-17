import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        twitchBg: '#8234e9',
        menu: '#1a1a1a',
        divider: '#464646',
        bg: '#0e0e10',
        icons: '#adadad',

        subtext: '#b3b3b3',
        border1: '#464646',
        border2: '#222222',
        title: 'white',
        bgBlack: 'black',
        subtitle: '#adadad',
        bgButton: '#1a1a1a',
        bgStack: '#161616',
        bgCard: '#272727',
        hoverCard: '#424242',
        textHover: '#ebebeb',
        hoverButton: '#424242',
        headerLink: '#727272',
      },
    },
  },
  plugins: [nextui()],
  darkMode: 'class',
}
export default config
