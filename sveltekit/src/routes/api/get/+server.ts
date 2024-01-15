import { json } from '@sveltejs/kit';
import { data } from '../../data.js';

export async function GET({ request }) {
	return json(
		{
			data
		},
		{
			status: 200
		}
	);
}
