import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          600: '#0000FF', // Adjust if needed to match the exact blue in the image
        },
        green: {
          700: '#006400', // Adjust if needed to match the exact green in the image
        },
      },
    },
  },
  plugins: [],
}

export default config