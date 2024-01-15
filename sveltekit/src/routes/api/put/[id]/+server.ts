import { json } from '@sveltejs/kit';
import { data } from '../../../data.js';

export async function PUT({ params, request }) {
	const { id } = params;
	const body = await request.json();
	const index = data.findIndex((element) => element.id === parseInt(id));
	const newData = [{ ...data[index], ...body }, ...data.slice(0, index), ...data.slice(index + 1)];
	return json({
		newData
	});
}
