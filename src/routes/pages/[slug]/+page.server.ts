import type { PageServerLoad } from './$types';

export const prerender = false;

export const load: PageServerLoad = async ({ params }) => {
	return {
		id: params.slug,
		server: true
	};
};
