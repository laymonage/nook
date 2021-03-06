const { tailwindExtractor } = require('tailwindcss/lib/lib/purgeUnusedStyles');

module.exports = {
	purge: {
		content: ['./src/**/*.html', './src/**/*.css', './src/**/*.svelte', './src/**/*.md'],
		options: {
			defaultExtractor: (content) => [
				...tailwindExtractor(content),
				...[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(
					([_match, group, ..._rest]) => group,
				),
			],
			keyframes: true,
		},
	},
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Lato', 'sans-serif'],
				serif: ['"Noto Serif"', 'serif'],
			},
		},
	},
	variants: {
		extend: {
			margin: ['first'],
		},
	},
	plugins: [],
};
