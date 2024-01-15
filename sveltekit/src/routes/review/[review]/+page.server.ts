export function load({ cookies, url, route, request, platform, locals, depends }) {
	depends('review:change');
	console.log(cookies, url, platform, request, route);
	return {};
}
