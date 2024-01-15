<script>
	import '../global.css';
	import { Footer, Header } from '$lib/components/index.svelte';
</script>

<svelte:head>
	<meta content="" name="" />
</svelte:head>

<Header />
<slot />
<Footer />
