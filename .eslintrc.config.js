module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	env: {
		es6: true,
		browser: true,
		node: true,
	},
	plugins: ['svelte3', '@typescript-eslint'],
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
	ignorePatterns: ['*.config.js'],
	overrides: [
		{
			files: ['*.svelte'],
			processor: 'svelte3/svelte3',
		},
	],
	rules: {
		// ...
	},
	settings: {
		// ...
	},
};
