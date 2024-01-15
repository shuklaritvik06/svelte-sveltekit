import { json } from '@sveltejs/kit';
import { data } from '../../../data.js';

export async function DELETE({ params }) {
	const { id } = params;
	const index = data.findIndex((element) => element.id === parseInt(id));
	const newData = [...data.slice(0, index), ...data.slice(index + 1)];
	return json({
		newData
	});
}
