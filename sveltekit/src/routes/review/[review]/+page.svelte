<script>
	import { invalidate, invalidateAll } from '$app/navigation';
	import { page } from '$app/stores';
	console.log($page.params);
	export let data;
	console.log(data);
</script>

<div>Hello</div>
<button on:click={() => invalidate('review:change')}>Invalidate</button>
<button on:click={() => invalidateAll()}>Invalidate</button>
