import type { PageServerLoad } from './$types';

export const prerender = 'auto';

export const load: PageServerLoad = async ({ params }) => {
	return {
		id: params.slug,
		server: true
	};
};
