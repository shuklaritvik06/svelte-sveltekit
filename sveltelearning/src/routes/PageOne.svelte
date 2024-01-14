<script lang="ts">
  import { replace, params } from "svelte-spa-router";
  import { onMount } from "svelte";

  let promise: any;

  params.subscribe((val) => {
    if (val) {
      promise = GetPost(val.id);
    }
  });

  async function GetPost(id: string) {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    const res = await data.json();
    return res;
  }
</script>

<main>
  {#await promise}
    <div>Loading....</div>
  {:then data}
    <div>{data.title}</div>
  {/await}
  <button on:click={() => replace("/")}>Go Home</button>
</main>
