import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess(), mdsvex()],
	kit: { 
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		alias: {
			'$components': 'src/lib/components'
		},
		paths: {
			base: process.argv.includes('/web') ? '' : process.env.BASE_PATH
		}
	},
	extensions: ['.svelte', '.svx']
};

export default config;
