/** @type {import('tailwindcss').Config} */
export default {
  content: [
		"./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
	],
  theme: {
    extend: {
			screens: {
        'desktop-lg': { max: '1439px' },
        'desktop-sm': { max: '1279px' },
        'tablet-lg': { max: '1023px' },
        'tablet-sm': { max: '767px' },
        'mobile-lg': { max: '539px' },
        'mobile': { max: '360px' },
      },
		},
  },
  plugins: [],
}

