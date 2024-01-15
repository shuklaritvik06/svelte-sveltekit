import ComponentOne from './ComponentOne.svelte';
import ComponentTwo from './ComponentTwo.svelte';

export function load({ data }) {
	let got = false;

	return got
		? {
				color: 'green',
				message: data.message,
				component: ComponentOne
			}
		: {
				color: 'black',
				message: data.message,
				component: ComponentTwo
			};
}
