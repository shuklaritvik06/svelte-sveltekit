<script>
	import { PUBLIC_Hello } from '$env/static/public';
	import { env } from '$env/dynamic/public';

	console.log(PUBLIC_Hello);
	console.log(env.PUBLIC_Hello);
</script>
