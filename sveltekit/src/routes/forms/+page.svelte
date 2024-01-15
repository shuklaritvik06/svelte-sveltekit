<!-- <form method="POST">
	<input type="text" name="firstName" class="border outline-none p-2 rounded-md" />
	<input type="text" name="lastName" class="border outline-none p-2 rounded-md" />
	<input type="submit" value="Submit" />
</form> -->

<script>
	import { enhance } from '$app/forms';

	export let form;
	export let data;

	let creating = false;
	console.log(form);
</script>

<form
	method="POST"
	action="?/create"
	use:enhance={() => {
		creating = true;
		return async ({ update }) => {
			await update();
			creating = false;
		};
	}}
>
	<input type="text" name="firstName" class="border outline-none p-2 rounded-md" />
	<input type="text" name="lastName" class="border outline-none p-2 rounded-md" />
	<input type="submit" value="Submit" disabled={creating} />
</form>

<form
	method="POST"
	action="?/update"
	use:enhance={() => {
		creating = true;
		return async ({ update }) => {
			await update();
			creating = false;
		};
	}}
>
	<input type="text" name="firstName" class="border outline-none p-2 rounded-md" />
	<input type="text" name="lastName" class="border outline-none p-2 rounded-md" />
	<input type="submit" value="Submit" disabled={creating} />
</form>

<form
	method="POST"
	action="?/delete"
	use:enhance={() => {
		creating = true;
		return async ({ update }) => {
			await update();
			creating = false;
		};
	}}
>
	<input type="text" name="firstName" class="border outline-none p-2 rounded-md" />
	<input type="text" name="lastName" class="border outline-none p-2 rounded-md" />
	<input type="submit" value="Submit" disabled={creating} />

	{#if creating}
		<div>Saving....</div>
	{/if}
</form>
