<script>
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	export let data;
	onMount(() => {
		const interval = setInterval(() => {
			invalidate('/api/get');
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	});
</script>

<div>
	{#each data.data as person}
		<div>{person.name}</div>
	{/each}
</div>
