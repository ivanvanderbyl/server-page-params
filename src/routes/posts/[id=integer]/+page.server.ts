import type { PageServerLoad } from './$types';
// export const prerender = true;
export const prerender = 'auto';

export const load: PageServerLoad = async ({ params }) => {
	return {
		id: params.id,
		server: true
	};
};
