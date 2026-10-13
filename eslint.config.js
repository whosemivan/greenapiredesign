import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig(
	{ ignores: ['dist', '.astro', 'node_modules'] },
	js.configs.recommended,
	...tseslint.configs.recommended,
	...astro.configs.recommended,
	{
		languageOptions: {
			globals: { ...globals.browser, ...globals.node },
		},
		rules: {
			'@typescript-eslint/consistent-type-definitions': ['error', 'type'],
			'@typescript-eslint/consistent-type-imports': ['error', { fixStyle: 'inline-type-imports' }],
		},
	},
	{
		files: ['**/*.tsx'],
		plugins: { 'react-hooks': reactHooks, 'jsx-a11y': jsxA11y },
		rules: {
			...reactHooks.configs.recommended.rules,
			...jsxA11y.flatConfigs.recommended.rules,
		},
	},
);
