/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Lato', 'sans'],
				'roboto-slab': ['Roboto Slab', 'serif'],
			},
			backgroundImage: {
				planets: "url('../public/assets/MobileWallpaper.png')",
			},
		},
		screens: {
			xs: '475px',
			...defaultTheme.screens,
		},
	},
	plugins: [],
}
