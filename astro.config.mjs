// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import svgr from 'vite-plugin-svgr';
import { fileURLToPath } from 'node:url';

// https://astro.build/config
export default defineConfig({
	site: 'https://green-api.com',
	integrations: [react()],
	i18n: {
		locales: ['ru'],
		defaultLocale: 'ru',
	},
	markdown: {
		shikiConfig: {
			theme: 'github-dark-default',
		},
	},
	vite: {
		plugins: [svgr({ include: '**/*.svg?react' })],
		resolve: {
			alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
		},
	},
});
