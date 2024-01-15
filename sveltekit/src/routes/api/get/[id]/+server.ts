import { json } from '@sveltejs/kit';
import { data } from '../../../data.js';

export async function GET({ params }) {
	const { id } = params;
	return json(
		{
			data: data.filter((element) => element.id === parseInt(id))
		},
		{
			status: 200
		}
	);
}
