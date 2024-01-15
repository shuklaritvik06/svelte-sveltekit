<script>
	// @ts-nocheck

	import { page } from '$app/stores';
	console.log($page.state);
</script>

<div>{$page.state.name}</div>
