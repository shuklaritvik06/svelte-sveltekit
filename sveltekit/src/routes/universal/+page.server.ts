export async function load({ parent }) {
	const { name } = await parent();
	return {
		message: 'Hi' + ' ' + name
	};
}
