import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        telexFont: 'European-Teletext'
      },
      colors: {
        telexWhite: '#fafafa',
        telexRed: '#ff0000',
        telexGreen: '#00ff06',
        telexYellow: '#fffc00',
        telexBlue: '#0023ff',
        telexLightBlue: '#00fff0',
      }
     
    },
  },
  plugins: [],
}
export default config
