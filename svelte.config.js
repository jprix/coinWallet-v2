import adapter from '@sveltejs/adapter-auto';


/** @type {import('@sveltejs/kit').Config} */
 const config = {
	kit: {
		adapter: adapter(),
		vite: {
			// optimizeDeps: {
			//     exclude: ['@urql/svelte'],
			//   }
			define: {
				global: {}
			}
		}
	}
};

export default config

