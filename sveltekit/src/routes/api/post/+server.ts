import { json } from '@sveltejs/kit';
import { data } from '../../data.js';

export async function POST({ request }) {
	const body = await request.json();
	data.push({ id: data.length, ...body });
	return json({
		data
	});
}
