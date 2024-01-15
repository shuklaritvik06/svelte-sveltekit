<script>
	import { page } from '$app/stores';
</script>

<div>This is error {$page.status} {$page.error?.message}</div>
