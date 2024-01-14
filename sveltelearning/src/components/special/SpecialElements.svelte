<script lang="ts">
  import ComponentOne from "@/components/ComponentOne.svelte";
  let handleMouseOver = () => {
    console.log("Mouse in");
  };
  export let count: number = 0;

  const options = [{ id: 1, component: ComponentOne }];

  let selected: any;
</script>

<!-- Svelte Component Special Element -->
<select name="" id="" bind:value={selected}>
  {#each options as option}
    <option value={option}>{option.id}</option>
  {/each}
</select>

<svelte:component this={selected?.component}></svelte:component>

<!-- Svelte Element -->
<svelte:element this={"h1"}>H1</svelte:element>

<!-- Add Event Listeners to Document -->
<svelte:document />

<!-- Add Event Listeners to Windoe -->
<svelte:window />

<!-- Custom Head -->
<svelte:head>
  <meta name="description" content="Hello" />
</svelte:head>

<!-- Add Listeners to Body -->
<svelte:body on:mouseenter={handleMouseOver} />

<!-- This is for calling this same component recursively with the new value of count -->
{#if count > 0}
  <p>counting down... {count}</p>
  <svelte:self count={count - 1} />
{:else}
  <p>lift-off!</p>
{/if}
