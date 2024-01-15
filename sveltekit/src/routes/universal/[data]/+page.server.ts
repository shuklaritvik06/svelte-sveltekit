export async function load({ fetch }) {
	const data = await fetch('/api/get');
	const response = await data.json();
	return response;
}
