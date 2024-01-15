export function load({ setHeaders, cookies }) {
	// setHeaders({
	// 	'Content-Type': 'text/plain'
	// });
	cookies.set('ramehs', 'coookie', {
		path: '',
		httpOnly: true,
		maxAge: 20000
	});
}
