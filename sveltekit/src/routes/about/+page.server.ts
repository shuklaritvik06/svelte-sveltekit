import { data } from '../data';
import { error } from '@sveltejs/kit';

export function load() {
	let err = false;
	if (err) {
		throw error(400);
	}
	return {
		dynamicData: [...data]
	};
}
