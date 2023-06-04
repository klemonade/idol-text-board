import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vitest/config';
import { SvelteKitPWA } from '@vite-pwa/sveltekit'
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
	plugins: [
		sveltekit(),
		createHtmlPlugin({
			minify: true,
		}),
		SvelteKitPWA({
			registerType: 'autoUpdate',
			includeAssets: ['favicon.png', 'robot.txt'],
			manifest: {
				name: 'Idol Board',
				short_name: 'IdolBoard',
				description: 'Name Board for Idol',
				categories: ['idol', 'fanclub', 'cgm48'],
				theme_color: '#1d618e',
				background_color: '#2e2e34',
				icons: [
					{
						src: 'favicon.png',
						sizes: '192x192',
						type: 'image/png'
					},
					{
						src: 'favicon.png',
						sizes: '512x512',
						type: 'image/png'
					}
				]
				display: 'standalone',
				orientation: 'landscape',
				id: '/',
				scope: '/',
				start_url: '/',
			}, workbox: {
				globPatterns: ['**/*.{js,css,html,ico,png,svg}']
			}
		}),
	],
	server: {
		port: 4127,
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
