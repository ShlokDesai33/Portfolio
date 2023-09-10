const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter Variable', ...defaultTheme.fontFamily.sans],
				serif: ['Newsreader Variable', ...defaultTheme.fontFamily.serif],
			},
		},
		colors: {
			// ---- gray ---- //
			gray1: '#181818', // dark bg
			gray2: '#1b1b1b', // light bd
			gray3: '#282828',
			gray4: '#303030',
			gray5: '#373737',
			gray6: '#3f3f3f',
			gray7: '#4a4a4a',
			gray8: '#606060',
			gray9: '#6e6e6e',
			gray10: '#818181',
			gray11: '#b1b1b1',
			gray12: '#eeeeee',
			// ---- other ---- //
			white: '#ffffff',
			black: '#000000',
			transparent: 'transparent',
		},
	},
	plugins: [],
};
