/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			rose: colors.rose,
			pink: colors.pink,
			fuchsia: colors.fuchsia,
			purple: colors.purple,
			violet: colors.violet,
			indigo: colors.indigo,
			blue: colors.blue,
			lightBlue: colors.lightBlue, // Only in Tailwind CSS <=v2.1
			sky: colors.sky, // As of Tailwind CSS v2.2, `lightBlue` has been renamed to `sky`  
			cyan: colors.cyan,
			teal: colors.teal,
			emerald: colors.emerald,
			green: colors.green,
			lime: colors.lime,
			yellow: colors.yellow,
			amber: colors.amber,
			orange: colors.orange,
			red: colors.red,
			slate: colors.slate,
			zinc: colors.zinc,
			gray: colors.gray,
			neutral: colors.blueGray,
			stone: colors.stone,
		},
		variants: {},
		plugins: [],
	},
	daisyui: {
		themes: [
			{
				mytheme: {


					"primary": "#b91c1c",

					"secondary": "#ef4444",

					"accent": "#f9b8c0",

					"neutral": "#e5e7eb",

					"base-100": "#f3f4f6",

					"info": "#ef4444",

					"success": "#fb923c",

					"warning": "#f97316",

					"error": "#dc2626",
				},
			},
		],
	},
	plugins: [require("daisyui")],

}
