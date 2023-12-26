import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        "inter": ['var(--font-inter)'],
        "quicksand": ['var(--font-quicksand)'],
        "librecaslontext": ['var(--font-libre_caslon_text)']
      },
    },
  },
  plugins: [],
}
export default config
