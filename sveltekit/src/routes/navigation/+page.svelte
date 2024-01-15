<script>
	import { preloadData, preloadCode } from '$app/navigation';
	import { onNavigate, afterNavigate, beforeNavigate, goto } from '$app/navigation';

	onNavigate((navigation) => {
		console.log(navigation);
	});
	afterNavigate((navigation) => {
		console.log(navigation);
	});
	beforeNavigate((navigation) => {
		if (navigation.type === 'goto') {
			navigation.cancel();
		}
	});
</script>

<button on:click={() => goto('/api/get')}> GoTo API GET </button>
<a href="/headers" class="underline text-blue-700" on:focus={() => preloadData('/headers')}
	>Header Link</a
>
<a href="/headers" class="underline text-blue-700" on:focus={() => preloadCode('/headers')}
	>Preload Code</a
>
