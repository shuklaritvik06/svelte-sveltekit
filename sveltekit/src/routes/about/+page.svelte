<script>
	import { page } from '$app/stores';
	console.log($page.form);
	export let data;
	console.log(data);
</script>

<div>Hi bro This is about page</div>
<div>I am about</div>

{#each data.dynamicData as d}<div>{d.name}</div>{/each}
