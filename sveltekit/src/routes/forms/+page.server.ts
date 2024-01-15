/**
 * When we use named actions we cant use the
 * default actions for server computations
 */
// export const actions = {
// 	default: async ({ request }) => {
// 		const body = await request.formData();
// 		console.log(body.get('firstName'));
// 	},
// };

// import { fail } from '@sveltejs/kit';

export const actions = {
	create: async ({ request }) => {
		// return fail(422, {
		// 	error: 'Error haii'
		// });
		await new Promise((resolve, reject) =>
			setTimeout(() => {
				resolve('Resolved');
			}, 1000)
		);
		const body = await request.formData();
		console.log(body.get('firstName'));
		return {
			success: 'Done'
		};
	},
	delete: async ({ request }) => {
		await new Promise((resolve, reject) =>
			setTimeout(() => {
				resolve('Resolved');
			}, 1000)
		);
		const body = await request.formData();
		console.log(body.get('firstName'));
		return {
			success: 'Done'
		};
	},
	update: async ({ request }) => {
		await new Promise((resolve, reject) =>
			setTimeout(() => {
				resolve('Resolved');
			}, 1000)
		);
		const body = await request.formData();
		console.log(body.get('firstName'));
		return {
			success: 'Done'
		};
	}
};
