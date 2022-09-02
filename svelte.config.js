import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true,
			sourceMap: true,
			preserve: ['ld+json'],
			typescript: true
		})
	],

	kit: {
		adapter: adapter(),
		inlineStyleThreshold: 15000
	}
};

export default config;
