import type { PageServerLoad } from './$types';
export const prerender = true;
export const load: PageServerLoad = async ({ params }) => {
	return {
		id: params.slug,
		server: true
	};
};
