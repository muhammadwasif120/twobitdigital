import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy:           '#09091a',
        navy1:          '#0d0d22',
        navy2:          '#11112b',
        navy3:          '#16163a',
        gold:           '#f5c518',
        'gold-dim':     '#c9a012',
        purple:         '#7b5ea7',
        'purple-light': '#a48bcf',
        text:           '#eceaf5',
        text2:          '#9d99b8',
        text3:          '#5e5a7a',
      },
      fontFamily: {
        syne: ['var(--font-syne)', 'sans-serif'],
        dm:   ['var(--font-dm-sans)', 'sans-serif'],
      },
      animation: {
        'scroll-left': 'scrollLeft 32s linear infinite',
      },
      keyframes: {
        scrollLeft: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
