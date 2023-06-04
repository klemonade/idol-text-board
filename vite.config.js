import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vitest/config';
import { SvelteKitPWA } from '@vite-pwa/sveltekit'
import { createHtmlPlugin } from 'vite-plugin-html';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
	plugins: [
		sveltekit(),
		createHtmlPlugin({
			minify: true,
		}),
		SvelteKitPWA(),
		VitePWA({
			registerType: 'autoUpdate',
			manifest: {
				name: 'Idol Board',
				short_name: 'IdolBoard',
				description: 'Name Board for Idol',
				categories: ['idol', 'fanclub', 'cgm48'],
				theme_color: '#1d618e',
				background_color: '#2e2e34',
				display: 'standalone',
				orientation: 'landscape',
				id: '/',
				scope: '/',
				start_url: '/',
			},
		}),
	],
	server: {
		port: 4127,
	},
	build: {
		target: 'esnext',
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
